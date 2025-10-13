"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import Button from "@/common/Button";
import emailjs from "emailjs-com";
import { useRouter } from "next/router";

const RightSticky = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    PatientName: "",
    MobileNumber: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.MobileNumber) {
      setError("Mobile number is required.");
      return;
    }
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(formData.MobileNumber)) {
      setError("Enter a valid 10-digit mobile number.");
      return;
    }
    try {
      setLoading(true);
      const ipResponse = await fetch("https://api.ipify.org?format=json");
      const ipData = await ipResponse.json();

      const registerFormData = {
        name: formData?.PatientName,
        mobile: formData.MobileNumber,
        ip_address: ipData.ip,
        utm_source: localStorage.getItem("utm_source"),
        page_name: "glaucoma",
      }
      const APISERVER =
        process.env.NEXT_PUBLIC_API_SERVER === "production"
          ? process.env.NEXT_PUBLIC_PRODUCTION_API_URL
          : process.env.NEXT_PUBLIC_API_SERVER === "stage"
            ? process.env.NEXT_PUBLIC_STAGE_API_URL
            : process.env.NEXT_PUBLIC_LOCALHOST_API_URL;
      const registerResponse = await fetch(
        `${APISERVER}/pixel-eye`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(registerFormData).toString(),
        }
      );

      if (!registerResponse.ok) {
        setError("Something went wrong. Please try again.");
        setLoading(false);
        return;
      }
      const newFormData = {
        PatientName: formData?.PatientName,
        MobileNumber: formData.MobileNumber,
        IP_Address: ipData.ip,
        utm_source: localStorage.getItem("utm_source"),
      }

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbz_c03f1klAKji0nhi_2uXKEW_yHRHxBqhYgW_F7COAmjhfXEhAOtWf-h5YzAbc8lXu/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(newFormData).toString(),
        }
      );

      await emailjs.send(
        "service_wy9rlgc",
        "template_gr9dlqd",
        {
          patient_name: formData.PatientName || "Guest Patient",
          mobile_number: formData.MobileNumber,
          service_name: "Glaucoma Treatment",
          email_subject: "Glaucoma Eye Care",
          from_name: "Pixel Eye Hospitals",
          from_email: "info@pixeleyehospitals.com"
        },
        "4yBxE-kzbe7EuZqFh"
      );
      setLoading(false);
      router.push("/thank-you");
    } catch (error) {
      console.error(error);
      setLoading(false);
      setError("Something went wrong. Please try again.");
    }
  };
  return (
    <div className="container-lg my-3 p-0">
      <div className={`card ${styles.card} shadow-lg border-0 p-4`}>
        <h4 className="fw-semibold mb-4" style={{ color: "#2A3B77" }}>
          Book <br className="d-none d-lg-bock" /> Consultation
        </h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              name="PatientName"
              type="text"
              onChange={handleChange}
              className="form-control rounded-3 py-3"
              placeholder="Patient Name (Optional)"
            />
          </div>

          <div className="mb-1 input-group">
            <span className="input-group-text bg-light border-end-0 rounded-start-3 py-3">
              +91
            </span>
            <input
              name="MobileNumber"
              type="tel"
              onChange={handleChange}
              className="form-control border-start-0 rounded-end-3"
              placeholder="Mobile Number"
            />
          </div>
          {error && <p className="mt-2" style={{ color: "#ff6f61" }}>{error}</p>}
          <div className="d-grid mt-4">
            <Button disabled={loading} name={loading ? "Booking..." : "Book Now"} bgcolor="#ff6f61" txtcolor="#fff" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default RightSticky;
