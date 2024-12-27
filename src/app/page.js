"use client";

import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [url, setUrl] = useState("");
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [imgError, setImgError] = useState(false);

  const BACKEND_URL =
    process.env.NEXT_PUBLIC_BACKEND_URL || "https://qr-backend-3.onrender.com";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");
    setImgError(false);

    try {
      const response = await axios.post(`${BACKEND_URL}/generate-qr/`, { url });

      if (response.data.qr_code_url) {
        setQrCodeUrl(response.data.qr_code_url);
        setMessage(response.data.message || "QR Code generated successfully!");
      } else {
        setMessage("No QR Code returned.");
      }
    } catch (err) {
      console.error("Error:", err);
      setError(
        "Failed to generate QR Code. Please check your URL or try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>QR Code Generator</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label htmlFor="url" style={styles.label}>
          Enter URL:
        </label>
        <input
          id="url"
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          
          placeholder="e.g., https://example.com"
          style={styles.input}
        />
        <button type="submit" style={styles.button} disabled={loading}>
          {loading ? "Generating..." : "Generate QR Code"}
        </button>
      </form>

      {error && <p style={styles.error}>{error}</p>}
      {message && <p style={styles.message}>{message}</p>}
      {qrCodeUrl && !imgError && (
        <img
          src={qrCodeUrl}
          alt="Generated QR Code"
          style={styles.qrCode}
          onError={() => setImgError(true)}
        />
      )}

      {imgError && <p style={styles.error}>Unable to load QR Code image.</p>}
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#121212",
    color: "#FFFFFF",
  },
  title: {
    fontSize: "3rem",
    marginBottom: "1rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  label: {
    fontSize: "1rem",
    marginBottom: "0.5rem",
  },
  input: {
    padding: "10px",
    width: "300px",
    borderRadius: "5px",
    border: "1px solid #CCCCCC",
    marginBottom: "1rem",
  },
  button: {
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#0070f3",
    color: "#FFFFFF",
    cursor: "pointer",
    fontSize: "1rem",
  },
  qrCode: {
    marginTop: "20px",
    width: "200px",
    height: "200px",
  },
  error: {
    color: "red",
    marginTop: "20px",
  },
  message: {
    color: "green",
    marginTop: "20px",
  },
};
