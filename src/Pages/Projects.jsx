import React from "react";
import "../App.css";

const Projects = () => {
  const experiences = [
    {
      title: "MS in Management Information Systems",
      subtitle: "State University of New York at Buffalo, NY",
      date: "Jul 2024 – May 2025",
      logo: "/UBFinal.png",
    },
    {
      title: "Legal AI Apprenticeship – Rupp Pfalzgraf LLP",
      subtitle: "University at Buffalo - Experiential IT Program",
      date: "Feb 2025 – May 2025",
      description: `Built a legal complaint drafting system using RAG & FLAN-T5. Processed 28K NYSCEF PDFs, created a custom legal knowledge base, and deployed a local AI-powered app.`,
      logo: "/RuppLogo.jpg",
    },
    {
      title: "NGO Apprenticeship – Feed716 Donation Platform",
      subtitle: "Volunteer work for Buffalo-based nonprofit",
      date: "Feb 2025 – May 2025",
      description: `Built a Salesforce-based Donation Management System using NPSP. Automated donor thank-you emails via Flows, configured donation records, and created reports and dashboards for donor tracking and transparency.`,
      logo: "/feed716.jpg",
    },
    {
      title: "Salesforce Administrator",
      subtitle: "Cognizant Technology Solutions",
      date: "Nov 2022 – Jul 2024",
      description: "Worked on Health Cloud, Flows, Apex customization(Triggers and Classes), Visualforce Page, LWC,validation rules, Custom objects, Record types,Page Layouts,Reports & Dashboards,Profiles, Permission Sets, SOQL, Outlook Integration, Data Loader, Change Sets, Security Model Configuration, Business Process Optimization. Experienced in Jira, Agile sprints, user stories. Collaborated cross-functionally to optimize CRM performance.",
      logo: "/Cognizant_Logo.jpg",
    },
    {
      title: "Summer Internship",
      subtitle: "Cognizant Technology Solutions",
      date: "Jan 2022 – Aug 2022",
      description: `Worked on channel preference and data handling for healthcare clients. Gained exposure to Salesforce CRM tools, including workflows, data loaders, and user access.`,
      logo: "/Cognizant_Logo.jpg",
    },
    {
      title: "Internship – Shiash Info Solutions",
      subtitle: "Chennai",
      date: "Mar 2021 – May 2021",
      description: `Hands-on web development using React.js, HTML, CSS, JavaScript, Tailwind, SQL, and MySQL. Built dynamic front-end components and integrated them with backend APIs.`,
      logo: "/Shiash.jpeg",
    },
    {
      title: "B.E. in Computer Science Engineering",
      subtitle: "Anna University, Chennai, India",
      date: "2018 – 2022",
      logo: "/Anna_Uni_Fin.png",
    },
  ];

  return (
    <section className="vertical-timeline-section">
      <h2 className="vertical-timeline-header">My Experience and Education!</h2>
      <div className="vertical-timeline">
        {experiences.map((item, index) => (
          <div className="timeline-row" key={index}>
            {index % 2 === 0 ? (
              <>
                <div className="timeline-card left">
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-subtitle">{item.subtitle}</p>
                  <p className="timeline-desc">{item.description}</p>
                </div>
                <div className="timeline-icon-wrapper">
                  {item.logo && <img src={item.logo} alt={item.title} className="timeline-logo" />}
                </div>
                <p className="timeline-date">{item.date}</p>
              </>
            ) : (
              <>
                <p className="timeline-date">{item.date}</p>
                <div className="timeline-icon-wrapper">
                  {item.logo && <img src={item.logo} alt={item.title} className="timeline-logo" />}
                </div>
                <div className="timeline-card right">
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-subtitle">{item.subtitle}</p>
                  <p className="timeline-desc">{item.description}</p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* === PROJECTS SECTION STARTS HERE === */}
      <section className="projects-section">
        <h2 className="project-header">Salesforce Projects</h2>
        <div className="project-grid">
          <div className="project-card">
            <h3>Smart Citizen Service Hub</h3>
            <p>Automated service requests with flows, approvals & Experience Cloud portal for citizens.</p>
          </div>
          <div className="project-card">
            <h3>Sustainability & Compliance Tracker</h3>
            <p>Monitored environmental KPIs. Automated compliance alerts, reduced delays.</p>
          </div>
          <div className="project-card">
            <h3>Candidate Experience Feedback System</h3>
            <p>Improved recruiter-candidate feedback loop. Automated cycles, reduced delays by 50%.</p>
          </div>
          <div className="project-card">
            <h3>Volunteer Management System</h3>
            <p>Streamlined volunteer onboarding, scheduling & event tracking. Boosted team coordination.</p>
          </div>
          <div className="project-card">
            <h3>Restaurant E-Management System</h3>
            <p>Handled orders, kitchen workflows, billing & dashboards. Enhanced operational efficiency.</p>
          </div>
        </div>

        <h2 className="project-header">Front-End Projects</h2>
        <div className="project-grid">
          <div className="project-card">
            <img src="/Weather and outfit recommender.png" alt="Weather & Outfit Recommender" className="project-image" />
            <h3>Weather & Outfit Recommender</h3>
            <p>React app with Chart.js & API. Recommends clothes based on real-time weather. <a href="https://github.com/thanis04/weather-app" target="_blank">GitHub</a></p>
          </div>

          <div className="project-card">
            <img src="/City explorer and expense tracker.png" alt="City Explorer" className="project-image" />
            <h3>City Explorer & Expense Tracker</h3>
            <p>Helps students compare US cities, expenses, rent, with map & AI summary features.</p>
          </div>

          <div className="project-card">
            <img src="/Portfolio.png" alt="Portfolio Website" className="project-image" />
            <h3>My Personal Portfolio Website</h3>
            <p>This site! Fully responsive, animated sections, built with React, Tailwind & routing.</p>
          </div>

          <div className="project-card">
            <img src="/Skill Analyzer.png" alt="Skill Analyzer" className="project-image" />
            <h3>Skill Gap Analyzer & Role Matcher</h3>
            <p>Recommends best-fit jobs based on skill input. Shows gaps & suggests free learning.</p>
          </div>

          <div className="project-card">
            <img src="/LLM.png" alt="Legal Complaint Generator" className="project-image" />
            <h3>AI Legal Complaint Generator</h3>
            <p>LLM-based complaint writer trained on 28K NYSCEF cases using RAG & FLAN-T5 model.</p>
          </div>
        </div>

        <h2 className="project-header">🎖️ Certifications & Achievements</h2>
        <div className="project-grid">
          <div className="project-card">
            <h3>Salesforce Certified Administrator</h3>
            <p><a href="/Admin.pdf" target="_blank" rel="noopener noreferrer">View Certificate</a></p>
          </div>
          <div className="project-card">
            <h3>Salesforce Advanced Administrator</h3>
            <p><a href="/Salesforce Certified AdvancedAdministrator.pdf" target="_blank" rel="noopener noreferrer">View Certificate</a></p>
          </div>
          <div className="project-card">
            <h3>Salesforce Platform Developer 1</h3>
            <p><a href="/Platform.pdf" target="_blank" rel="noopener noreferrer">View Certificate</a></p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Projects;
