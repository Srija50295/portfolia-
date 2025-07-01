// src/pages/Skills.js
import React from "react";

export default function Skills() {
  const skills = [
    "Python",
    "C",
    "Java",
    "HTML",
    "CSS",
    "JavaScript",
    "MySQL",
    "DBMS",
    "Data Structures",
    "Communication",
  ];

  return (
    <div
      style={{
        maxWidth: 400,
        margin: "40px auto",
        padding: 30,
        backgroundColor: "#e6f0ff",
        borderRadius: 12,
        boxShadow: "0 5px 15px rgba(0, 102, 204, 0.2)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#003366",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: 25, color: "#0059b3" }}>
        Skills
      </h2>

      <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
        {skills.map((skill, idx) => (
          <li
            key={idx}
            style={{
              padding: "10px 15px",
              marginBottom: 12,
              backgroundColor: "#ffffff",
              borderRadius: 8,
              boxShadow: "0 2px 8px rgba(0, 102, 204, 0.1)",
              transition: "background-color 0.3s ease",
              cursor: "default",
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#cce0ff")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#ffffff")}
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
