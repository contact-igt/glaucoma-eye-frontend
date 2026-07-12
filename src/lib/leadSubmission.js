import emailjs from "emailjs-com";

const DEFAULT_SERVICE = "Glaucoma";
const DEFAULT_UTM_SOURCE = "direct";
const DEFAULT_PATIENT_NAME = "User";
const PIXELEYE_LEAD_API_PATH = "/api/v1/pixeleye/website-leads/register";
const PIXELEYE_CLIENT_KEY =
  process.env.NEXT_PUBLIC_PIXELEYE_CLIENT_KEY?.trim() || "";
const POPUP_GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbz_c03f1klAKji0nhi_2uXKEW_yHRHxBqhYgW_F7COAmjhfXEhAOtWf-h5YzAbc8lXu/exec";
const STICKY_GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwx-qJUbedUAOuGydebeSK81xlnPXQgq7Kn6b7gS9N_fd_noF1agbV3vDNsSEJ7Y6Cq/exec";

function getBackendBaseUrl() {
  const backendBaseUrl =
    process.env.NEXT_PUBLIC_PIXELEYE_LEAD_API_URL?.trim() || "";

  if (!backendBaseUrl) {
    throw new Error("Backend base URL is missing.");
  }

  return backendBaseUrl.replace(/\/$/, "");
}

function getPixelEyeLeadApiUrl() {
  return `${getBackendBaseUrl()}${PIXELEYE_LEAD_API_PATH}`;
}

function getNormalizedPatientName(patientName) {
  return patientName?.trim() || DEFAULT_PATIENT_NAME;
}

function getUTMSource() {
  if (typeof window === "undefined") {
    return DEFAULT_UTM_SOURCE;
  }

  try {
    return localStorage.getItem("utm_source") || DEFAULT_UTM_SOURCE;
  } catch {
    return DEFAULT_UTM_SOURCE;
  }
}

async function getIPAddress() {
  const ipResponse = await fetch("https://api.ipify.org?format=json");

  if (!ipResponse.ok) {
    throw new Error("Unable to fetch IP address.");
  }

  const ipData = await ipResponse.json();
  return ipData.ip || "";
}

async function submitPixelEyeLead({ patientName, mobileNumber, ipAddress }) {
  const response = await fetch(getPixelEyeLeadApiUrl(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Client-Key": PIXELEYE_CLIENT_KEY,
    },
    body: JSON.stringify({
      name: patientName,
      mobile_number: mobileNumber,
      service: DEFAULT_SERVICE,
      ip_address: ipAddress,
      utm_source: getUTMSource(),
    }),
  });

  if (!response.ok) {
    throw new Error("PixelEye lead API submission failed.");
  }
}

async function submitGoogleLead({
  googleScriptUrl,
  patientName,
  mobileNumber,
  ipAddress,
}) {
  const formData = {
    PatientName: patientName,
    MobileNumber: mobileNumber,
    IP_Address: ipAddress,
    utm_source: getUTMSource(),
  };

  await fetch(googleScriptUrl, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams(formData).toString(),
  });
}

async function submitPrivyrLead({ patientName, mobileNumber }) {
  await fetch(
    "https://www.privyr.com/api/v1/incoming-leads/0vZfjMQw/xKtkqD5A",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: patientName,
        phone: `+91${mobileNumber}`,
        display_name: patientName,
        source: "Glaucoma Landing Page",
      }),
    },
  );
}

async function sendLeadEmail({ patientName, mobileNumber }) {
  await emailjs.send(
    "service_9ka2q7j",
    "template_88icron",
    {
      patient_name: patientName,
      mobile_number: mobileNumber,
      service_name: "Glaucoma Treatment",
      email_subject: "Glaucoma Eye Care",
      from_name: "Pixel Eye Hospitals",
      from_email: "info@pixeleyehospitals.com",
    },
    "CNcEBk9-YnTm2Zwor",
  );
}

export async function submitLeadForm({ patientName, mobileNumber, formType }) {
  const normalizedPatientName = getNormalizedPatientName(patientName);
  const ipAddress = await getIPAddress();
  const googleScriptUrl =
    formType === "sticky" ? STICKY_GOOGLE_SCRIPT_URL : POPUP_GOOGLE_SCRIPT_URL;

  await submitPixelEyeLead({
    patientName: normalizedPatientName,
    mobileNumber,
    ipAddress,
  });
  await submitGoogleLead({
    googleScriptUrl,
    patientName: normalizedPatientName,
    mobileNumber,
    ipAddress,
  });
  await submitPrivyrLead({
    patientName: normalizedPatientName,
    mobileNumber,
  });
  await sendLeadEmail({
    patientName: normalizedPatientName,
    mobileNumber,
  });
}
