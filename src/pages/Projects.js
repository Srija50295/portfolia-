import React from "react";

export default function Projects() {
  const projects = [
{
      name: "Personalized Internship Portal Using ML",
      description:
        "Developed a web application using Machine Learning to recommend internships based on user skills extracted from resumes.",
    },
    {
      name: "Influence-Based Defense Against Data Poisoning Attacks in Online Learning",
      description:
        "Proposed a defense mechanism to minimize the degradation caused by poisoned training data on a learner's model in an online setup.",
    },

    // Add more projects here as needed
  ];

  return (
    <div style={{ maxWidth: 700, margin: "auto", padding: 20, textAlign: "center" }}>
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div
          key={index}
          style={{
            border: "2px solid #007BFF",
            borderRadius: 10,
            padding: 20,
            marginBottom: 25,
            boxShadow: "0 4px 8px rgba(0, 123, 255, 0.15)",
            backgroundColor: "#f0f8ff",
            textAlign: "left",
          }}
        >
          <h3 style={{ marginBottom: 12, color: "#0056b3" }}>{project.name}</h3>
          <p style={{ fontSize: 16, lineHeight: 1.5, color: "#333" }}>
            {project.description}
          </p>
        </div>
      ))}
    </div>
  );
}