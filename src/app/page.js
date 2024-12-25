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
  const [imageLoading, setImageLoading] = useState(false);

  // Backend URL from environment variable
  const backendUrl =
    process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8000";

  const validateUrl = (url) => {
    const urlPattern =
      /^(https?:\/\/)?[\w.-]+(\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/;
    return urlPattern.test(url);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");
    setQrCodeUrl("");
    setImgError(false);

    if (!validateUrl(url)) {
      setError("Please enter a valid URL.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(`${backendUrl}/generate-qr/`, { url });

      if (response.data.message) {
        setMessage(response.data.message);
      }

      setQrCodeUrl(response.data.qr_code_url);
      setImageLoading(true);
    } catch (error) {
      console.error("Error generating QR Code:", error);
      setError("Failed to generate QR Code. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const handleImageError = () => {
    setImgError(true);
    setImageLoading(false);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>QR Code Generator</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter URL like https://example.com"
          style={styles.input}
        />
        <button type="submit" style={styles.button} disabled={loading}>
          {loading ? "Generating..." : "Generate QR Code"}
        </button>
      </form>

      {error && (
        <p style={styles.error} aria-live="assertive">
          {error}
        </p>
      )}

      {message && (
        <p style={styles.message} aria-live="polite">
          {message}
        </p>
      )}

      {qrCodeUrl && !message && (
        <div>
          {imageLoading && <p>Loading QR code...</p>}
          {!imgError ? (
            <img
              src={qrCodeUrl}
              alt="QR Code"
              style={styles.qrCode}
              onLoad={handleImageLoad}
              onError={handleImageError}
            />
          ) : (
            <p style={styles.error}>Failed to load QR code image.</p>
          )}
        </div>
      )}
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
    color: "white",
  },
  title: {
    margin: "0",
    lineHeight: "1.15",
    fontSize: "4rem",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    marginTop: "20px",
    width: "300px",
    color: "#121212",
  },
  button: {
    padding: "10px 20px",
    marginTop: "20px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#0070f3",
    color: "white",
    cursor: "pointer",
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
