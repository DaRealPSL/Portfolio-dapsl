import React from "react";
import { jsPDF } from "jspdf";

const ResumeDownload: React.FC = () => {
  const generatePDF = () => {
    const doc = new jsPDF();
    let y = 20; // Initial vertical position

    const addSection = (title: string) => {
      if (y > 270) {
        doc.addPage();
        y = 20; // Reset position on new page
      }
      doc.setFont("helvetica", "bold");
      doc.setFontSize(16);
      doc.text(title, 20, y);
      y += 10;
    };

    const addText = (text: string, isBold = false) => {
      if (y > 280) {
        doc.addPage();
        y = 20;
      }
      doc.setFont("helvetica", isBold ? "bold" : "normal");
      doc.setFontSize(12);
      doc.text(text, 25, y);
      y += 7;
    };

    // Title
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.text("Pepijn's Resume", 20, y);
    y += 15;

    // Contact Info
    addSection("Contact Information");
    addText("Email: pepijnl.snoeren0@gmail.com");
    addText("GitHub: https://github.com/IAmThePSL");
    addText("Website: https://dapsl.dev");

    // Programming Languages
    addSection("Programming Languages");
    addText("Proficient:", true);
    addText("• JavaScript, TypeScript, HTML, CSS, Python");
    addText("Intermediate:", true);
    addText("• C, Java");
    addText("Beginner:", true);
    addText("• C++");

    // Frameworks
    addSection("Frameworks");
    addText("Proficient:", true);
    addText("• React, Vite, NodeJS, ElectronJS");
    addText("Intermediate:", true);
    addText("• Tailwind CSS");
    addText("Beginner:", true);
    addText("• Flask");

    // Tools
    addSection("Tools");
    addText("Proficient:", true);
    addText("• Firebase, PrismaDB");
    addText("Intermediate:", true);
    addText("• SQLite");
    addText("Beginner:", true);
    addText("• AWS");

    // Specialized Skills
    addSection("Specialized Skills");
    addText("• Custom programming language development (Virex)");
    addText("• Game modding and Minecraft development");
    addText("• Cross-platform application design (macOS and Windows)");
    addText("• Linux Server Management");

    // Save the PDF
    doc.save("Pepijn_Resume.pdf");
  };

  return (
    <button className="resume-download-btn" onClick={generatePDF}>
      Download Resume
    </button>
  );
};

export default ResumeDownload;