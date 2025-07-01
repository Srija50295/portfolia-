// src/pages/Achievements.js
import React from "react";

export default function Achievements() {
  const achievements = [
    "Certified by Cisco Networking Academy in Networking Essentials.",
    "Certified by Cambridge Learning Management.",
    "Certified by Oracle Generative AI.",
    "Achieved silver badge in C HACKER RANKER.",
  ];

  return (
    <div
      style={{
        maxWidth: 600,
        margin: "50px auto",
        padding: 30,
        backgroundColor: "#f9fafb",
        borderRadius: 15,
        boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#222",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: 30,
          color: "#1a73e8",
          letterSpacing: "1.5px",
          fontWeight: "700",
        }}
      >
        Achievements & Certifications
      </h2>

      <ul style={{ listStyleType: "none", padding: 0 }}>
        {achievements.map((item, index) => (
          <li
            key={index}
            tabIndex={0}
            style={{
              backgroundColor: "#ffffff",
              marginBottom: 18,
              padding: "18px 25px",
              borderRadius: 12,
              boxShadow: "0 4px 12px rgba(26, 115, 232, 0.1)",
              cursor: "pointer",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              outline: "none",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow = "0 10px 25px rgba(26, 115, 232, 0.25)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(26, 115, 232, 0.1)";
            }}
            onFocus={e => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow = "0 10px 25px rgba(26, 115, 232, 0.25)";
            }}
            onBlur={e => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(26, 115, 232, 0.1)";
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
