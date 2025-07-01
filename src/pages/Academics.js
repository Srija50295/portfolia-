// src/pages/Academics.js
import React from "react";

export default function Academics() {
  const academicsData = [
    {
      degree: "B.Tech in CSE (Data Science)",
      institute: "MRECW",
      year: "2022–2026",
      cgpa: "8.9",
    },
    {
      degree: "Senior Secondary",
      institute: "Alphores Junior College",
      year: "",
      cgpa: "98.3%",
    },
    {
      degree: "Secondary",
      institute: "The Laurel High School",
      year: "",
      cgpa: "CGPA: 10",
    },
  ];

  return (
    <div
      style={{
        maxWidth: 480,
        margin: "70px auto",
        padding: "30px 25px",
        backgroundColor: "#f0f4ff",
        borderRadius: 18,
        boxShadow: "0 12px 28px rgba(26, 115, 232, 0.2)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#222",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          marginBottom: 30,
          color: "#1a73e8",
          fontWeight: "700",
          letterSpacing: "1.6px",
          fontSize: "1.9rem",
        }}
      >
        Academics
      </h2>

      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {academicsData.map(({ degree, institute, year, cgpa }, index) => (
          <li
            key={index}
            tabIndex={0}
            style={{
              backgroundColor: "#ffffff",
              marginBottom: 18,
              padding: "20px 22px",
              borderRadius: 14,
              boxShadow: "0 4px 15px rgba(26, 115, 232, 0.1)",
              cursor: "pointer",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              outline: "none",
              fontSize: "1.1rem",
              textAlign: "left",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.03)";
              e.currentTarget.style.boxShadow =
                "0 10px 30px rgba(26, 115, 232, 0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow =
                "0 4px 15px rgba(26, 115, 232, 0.1)";
            }}
            onFocus={(e) => {
              e.currentTarget.style.transform = "scale(1.03)";
              e.currentTarget.style.boxShadow =
                "0 10px 30px rgba(26, 115, 232, 0.25)";
            }}
            onBlur={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow =
                "0 4px 15px rgba(26, 115, 232, 0.1)";
            }}
          >
            <p style={{ fontWeight: "700", marginBottom: 8, fontSize: "1.2rem", color: "#1a73e8" }}>
              {degree}
            </p>
            <p style={{ margin: "4px 0", fontWeight: "600" }}>
              {institute} {year && `– ${year}`}
            </p>
            <p style={{ marginTop: 6, color: "#555" }}>CGPA/Score: {cgpa}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
