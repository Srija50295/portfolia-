// src/pages/Home.js
import React from "react";

export default function Home() {
  return (
    <div
      style={{
        maxWidth: 700,
        margin: "80px auto",
        padding: "30px 25px",
        textAlign: "center",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#1a73e8",
        backgroundColor: "#f0f4ff",
        borderRadius: 20,
        boxShadow: "0 14px 40px rgba(26, 115, 232, 0.15)",
        animation: "fadeInUp 1.2s ease forwards",
      }}
    >
      <h1
        style={{
          fontSize: "2.8rem",
          marginBottom: 10,
          fontWeight: "700",
          letterSpacing: "2px",
          animation: "slideInDown 1s ease forwards",
        }}
      >
        Welcome to My Portfolio
      </h1>
      <p
        style={{
          fontSize: "1.25rem",
          marginBottom: 30,
          fontWeight: "500",
          color: "#334e7c",
          animation: "fadeIn 2s ease forwards",
        }}
      >
        This is the home page for <strong>Naluvala Srija's</strong> portfolio.
      </p>

      <div
        style={{
          backgroundColor: "white",
          borderRadius: 16,
          padding: "20px 30px",
          boxShadow: "0 10px 28px rgba(26, 115, 232, 0.2)",
          fontSize: "1.5rem",
          fontWeight: "600",
          color: "#1a73e8",
          animation: "zoomIn 1.2s ease forwards",
        }}
        tabIndex={0}
      >
        <p style={{ margin: "0 0 10px 0" }}>Hi, I'm <span style={{ fontWeight: "800" }}>Naluvala Srija</span></p>
        <p style={{ margin: 0, fontSize: "1.1rem", fontWeight: "400", color: "#2d3a6b" }}>
          I am a student at Malla Reddy Engineering College for Women.
        </p>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px);}
          to { opacity: 1; transform: translateY(0);}
        }
        @keyframes slideInDown {
          from { opacity: 0; transform: translateY(-30px);}
          to { opacity: 1; transform: translateY(0);}
        }
        @keyframes fadeIn {
          from {opacity: 0;}
          to {opacity: 1;}
        }
        @keyframes zoomIn {
          from {opacity: 0; transform: scale(0.8);}
          to {opacity: 1; transform: scale(1);}
        }
      `}</style>
    </div>
  );
}
