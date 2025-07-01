// src/pages/Contact.js
import React from "react";

export default function Contact() {
  const contactDetails = [
    { label: "Email", value: "srijanaluvalasrijanaluvala@gmail.com", type: "email" },
    { label: "Phone", value: "+91 8978536608", type: "tel" },
    { label: "Location", value: "Hyderabad, Telangana, India", type: "text" },
  ];

  return (
    <div
      style={{
        maxWidth: 440,
        margin: "70px auto",
        padding: "30px 25px",
        backgroundColor: "#f0f4ff",
        borderRadius: 18,
        boxShadow: "0 14px 30px rgba(26, 115, 232, 0.2)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#222",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          color: "#1a73e8",
          fontWeight: "700",
          marginBottom: 28,
          fontSize: "2rem",
          letterSpacing: "1.5px",
        }}
      >
        Contact Me
      </h2>

      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {contactDetails.map(({ label, value, type }, idx) => (
          <li
            key={idx}
            tabIndex={0}
            style={{
              backgroundColor: "#fff",
              marginBottom: 20,
              padding: "18px 22px",
              borderRadius: 16,
              boxShadow: "0 6px 18px rgba(26, 115, 232, 0.15)",
              cursor: "pointer",
              fontSize: "1.15rem",
              fontWeight: "600",
              color: "#1a73e8",
              transition: "transform 0.25s ease, box-shadow 0.25s ease",
              outline: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(26, 115, 232, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 6px 18px rgba(26, 115, 232, 0.15)";
            }}
            onFocus={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(26, 115, 232, 0.3)";
            }}
            onBlur={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 6px 18px rgba(26, 115, 232, 0.15)";
            }}
          >
            {type === "email" ? (
              <a
                href={`mailto:${value}`}
                style={{ textDecoration: "none", color: "#1a73e8" }}
              >
                <strong>{label}:</strong> {value}
              </a>
            ) : type === "tel" ? (
              <a
                href={`tel:${value.replace(/\s+/g, "")}`}
                style={{ textDecoration: "none", color: "#1a73e8" }}
              >
                <strong>{label}:</strong> {value}
              </a>
            ) : (
              <span>
                <strong>{label}:</strong> {value}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
