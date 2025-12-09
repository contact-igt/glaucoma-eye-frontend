"use client";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className={styles.preloader_container}>
      <div className={styles.loader_wrapper}>
        <div className={styles.loader_circle}></div>
        <img
          src="/assets/loader.png"
          alt="Loading..."
          className={styles.loader_logo}
        />
      </div>
    </div>
  );
}
