import { useEffect } from "react";

export default function useUTMSource() {
  useEffect(() => {
    try {
      if (localStorage.getItem("utm_source")) return;

      const params = new URLSearchParams(window.location.search);
      const source = params.get("utm_source");

      if (source) {
        localStorage.setItem("utm_source", source);
      } else {
        const referrer = document.referrer;
        if (referrer) {
          const hostname = new URL(referrer).hostname;
          localStorage.setItem("utm_source", hostname);
        } else {
          localStorage.setItem("utm_source", "direct");
        }
      }
    } catch (error) {
      localStorage.setItem("utm_source", "direct");
    }
  }, []);
}
