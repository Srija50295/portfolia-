// src/pages/Personal.js
import React from "react";

export default function Personal() {
  const personalDetails = [
    { label: "Date of Birth", value: "24/10/2003" },
    { label: "Languages", value: "English, Telugu, Hindi" },
    { label: "Hobbies", value: "Watching Movies, Drawing" },
    {
      label: "LinkedIn",
      value: (
        <a
          href="https://linkedin.com/in/naluvala-srija"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#1a73e8", textDecoration: "none" }}
        >
          linkedin.com/in/naluvala-srija
        </a>
      ),
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
        Personal Details
      </h2>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
        }}
      >
        {personalDetails.map(({ label, value }, index) => (
          <li
            key={index}
            tabIndex={0}
            style={{
              backgroundColor: "#ffffff",
              marginBottom: 18,
              padding: "16px 22px",
              borderRadius: 14,
              boxShadow: "0 4px 15px rgba(26, 115, 232, 0.1)",
              cursor: "pointer",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              outline: "none",
              fontSize: "1.1rem",
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
            <strong>{label}: </strong>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}
