// src/pages/About.js
import React from "react";

export default function About() {
  return (
    <div
      style={{
        maxWidth: 600,
        margin: "40px auto",
        padding: 30,
        backgroundColor: "#f0f8ff",
        borderRadius: 12,
        boxShadow: "0 6px 15px rgba(0, 123, 255, 0.2)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#333",
        lineHeight: 1.6,
      }}
    >
      <h2 style={{ textAlign: "center", color: "#007bff", marginBottom: 30 }}>
        About Me
      </h2>

      <section style={{ marginBottom: 20 }}>
        <h3 style={{ color: "#0056b3", marginBottom: 10 }}>Profile</h3>
        <p>
          <strong>Full Name:</strong> Naluvala Srija
        </p>
        <p>
          <strong>Short Bio:</strong> I am a student at Malla Reddy Engineering College for Women, specializing in Computer Science and Engineering (Data Science).
        </p>
      </section>

      <section style={{ marginBottom: 20 }}>
        <h3 style={{ color: "#0056b3", marginBottom: 10 }}>Contact</h3>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:srijanaluvalasrijanaluvala@gmail.com" style={{ color: "#007bff", textDecoration: "none" }}>
            srijanaluvalasrijanaluvala@gmail.com
          </a>
        </p>
        <p>
          <strong>Phone:</strong> +91 8978536608
        </p>
        <p>
          <strong>Location:</strong> Hyderabad, Telangana, India
        </p>
      </section>
    </div>
  );
}
