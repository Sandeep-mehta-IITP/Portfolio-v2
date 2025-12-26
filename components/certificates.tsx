"use client";

import { useRef, useState } from "react";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import {
  Award,
  GraduationCap,
  FileText,
  Medal,
  X,
  ChevronRight,
  ZoomIn,
} from "lucide-react";

type Certificate = {
  title: string;
  issuer: string;
  year: string;
  description: string;
  details?: string[];
  skills?: string[];
  percentage?: string;
  documentUrl: string;
};

const certificateCategories = [
  {
    title: "Academic Transcripts",
    icon: GraduationCap,
    items: [
      {
        title:
          "BSc in Computer Science & Data Analytics — Academic Transcripts",
        issuer: "Indian Institute of Technology Patna",
        year: "August 2023 – Present",
        description:
          "Official, institution-issued academic transcripts documenting semester-wise academic performance in the Bachelor of Science program in Computer Science & Data Analytics at IIT Patna.",
        percentage: "8.87 CGPA",
        details: [
          "Advanced Data Structures & Algorithms",
          "Database Management Systems (DBMS)",
          "Web & App Development",
          "Operating Systems",
          "Computer Networks",
          "Machine Learning & Applied Analytics",
        ],
        documentUrl:
          "https://res.cloudinary.com/sandeepmehta/image/upload/v1766588552/Semester-IV_Transcript_page-0001_gnwkhf.jpg",
      },
      {
        title: "Senior Secondary Examination (Class XII) — Science Stream",
        issuer: "Board of Secondary Education, Rajasthan",
        year: "2021",
        description:
          "Official Senior Secondary Examination marksheet issued by the Board of Secondary Education, Rajasthan, certifying outstanding academic performance in the Science stream. The curriculum included core subjects such as Physics, Chemistry, and Mathematics, with consistent excellence across both theoretical and practical assessments.",
        percentage: "98.80%",
        details: [
          "Physics, Chemistry & Mathematics (PCM)",
          "Strong performance in both theory and practical examinations",
          "First Division with Distinction",
          "Ranked among top academic performers",
        ],
        documentUrl:
          "https://res.cloudinary.com/sandeepmehta/image/upload/v1766586356/My_12th_marksheet_sxvhez.jpg",
      },
      {
        title: "Secondary Examination (Class X)",
        issuer: "Board of Secondary Education, Rajasthan",
        year: "2019",
        description:
          "Official Secondary Examination marksheet issued by the Board of Secondary Education, Rajasthan, reflecting strong academic foundations across core subjects. Demonstrates consistent performance in languages, mathematics, science, and social sciences, with balanced excellence in both theoretical and sessional assessments.",
        percentage: "95.00%",
        details: [
          "Strong foundation in Mathematics & Science",
          "High performance across languages and social sciences",
          "First Division academic result",
          "Consistent scores in theory and internal assessments",
        ],
        documentUrl:
          "https://res.cloudinary.com/sandeepmehta/image/upload/v1766586272/My_10th_marksheet_mzptkv.jpg",
      },
    ],
  },
  {
    title: "Technical Certifications",
    icon: Award,
    items: [
      {
        title: "React & Redux (Advanced State Management)",
        issuer: "Online Learning Platform",
        year: "January 2025",
        description:
          "An in-depth, hands-on certification focused on building scalable and maintainable frontend applications using React and Redux Toolkit. The program emphasized modern React patterns, predictable state management, performance optimization, and real-world application architecture.",
        skills: [
          "React.js",
          "Redux Toolkit",
          "Global State Management",
          "Component Architecture",
          "Async Data Handling",
          "Performance Optimization",
        ],
        details: [
          "Built modular and reusable React components",
          "Implemented centralized state management using Redux Toolkit",
          "Handled async workflows with predictable data flow",
          "Applied best practices for scalable frontend architecture",
        ],
        documentUrl:
          "https://res.cloudinary.com/sandeepmehta/image/upload/v1766589081/react-redux_certificate_gj2jxu.jpg",
      },
      {
        title: "Responsive Web Design Certification",
        issuer: "freeCodeCamp",
        year: "August 2024",
        description:
          "Globally recognized certification from freeCodeCamp focused on building fully responsive, accessible, and standards-compliant web interfaces. The program emphasizes mobile-first design principles, semantic HTML, modern CSS techniques, and real-world layout systems.",
        skills: [
          "HTML5 (Semantic Markup)",
          "CSS3",
          "Responsive Layouts",
          "Flexbox & CSS Grid",
          "Mobile-First Design",
          "Web Accessibility",
        ],
        details: [
          "Built multiple responsive web pages and layouts from scratch",
          "Implemented mobile-first and cross-device compatible designs",
          "Applied semantic HTML for better accessibility and SEO",
          "Designed flexible layouts using Flexbox and CSS Grid",
        ],
        documentUrl:
          "https://res.cloudinary.com/sandeepmehta/image/upload/v1766589473/1727261042928_ptgvdd.jpg",
      },

      {
        title: "Python Programming — Zero to Advanced",
        issuer: "Lets Upgrade",
        year: "January 2024",
        description:
          "A comprehensive, project-oriented Python certification covering core programming fundamentals through advanced concepts. The course focused on writing clean, efficient Python code while developing strong problem-solving and logical thinking skills applicable to real-world scenarios.",
        skills: [
          "Python Programming",
          "Object-Oriented Programming (OOP)",
          "Data Structures & Control Flow",
          "Problem Solving",
          "Debugging & Code Optimization",
        ],
        details: [
          "Built a strong foundation in Python syntax and core programming concepts",
          "Applied object-oriented principles to design modular and reusable code",
          "Solved practical coding problems to strengthen logical reasoning",
          "Developed clean and maintainable Python programs following best practices",
        ],
        documentUrl:
          "https://res.cloudinary.com/sandeepmehta/image/upload/v1766589082/Python_zero_to_hero_certificate_xjmpdb.jpg",
      },
      {
        title: "MATLAB Onramp Certification",
        issuer: "MathWorks",
        year: "March 2024",
        description:
          "An official foundational certification by MathWorks focused on numerical computing and technical problem-solving using MATLAB. The program emphasized matrix-based computation, data visualization, scripting fundamentals, and analytical thinking for engineering and scientific applications.",
        skills: [
          "MATLAB Programming",
          "Numerical Computing",
          "Matrix Operations",
          "Data Visualization",
          "Technical Problem Solving",
        ],
        details: [
          "Developed foundational proficiency in MATLAB syntax and workflows",
          "Performed matrix-based computations and data analysis",
          "Visualized numerical data using plots and graphs",
          "Applied analytical thinking to solve engineering-style problems",
        ],
        documentUrl:
          "https://res.cloudinary.com/sandeepmehta/image/upload/v1766589080/MATLAB_Onramp_Certificate_ruj2ty.jpg",
      },
      {
        title: "Dark Web, Anonymity & Cryptocurrency",
        issuer: "EC-Council",
        year: "March 2024",
        description:
          "A cybersecurity-focused certification by EC-Council exploring the structure of the dark web, principles of online anonymity, and the fundamentals of cryptocurrency ecosystems. The course emphasized cyber awareness, ethical considerations, and risk identification in digital environments.",
        skills: [
          "Cyber Security Awareness",
          "Dark Web Fundamentals",
          "Online Anonymity Principles",
          "Cryptocurrency Basics",
          "Digital Risk Analysis",
        ],
        details: [
          "Understood the structure and functioning of the dark web",
          "Learned core concepts of anonymity and privacy-preserving technologies",
          "Gained foundational knowledge of cryptocurrency systems and use cases",
          "Analyzed cyber risks, threats, and ethical considerations",
        ],
        documentUrl:
          "https://res.cloudinary.com/sandeepmehta/image/upload/v1766589080/Dark_web_certificate_ixylev.png",
      },
    ],
  },
  {
    title: "Achievements & Awards",
    icon: Medal,
    items: [
      {
        title: "Full Stack Developer Intern",
        issuer: "Nextute",
        year: "June 2025 – August 2025",
        description:
          "Worked as a Full Stack Developer Intern on production-grade web applications using the MERN stack. Contributed to building core features, optimizing application performance, and delivering scalable, maintainable solutions in a collaborative Agile environment.",
        details: [
          "Developed and integrated core modules using MongoDB, Express, React, and Node.js",
          "Optimized state management and API interactions to improve application performance and responsiveness",
          "Collaborated closely with UI/UX designers and backend engineers to build modular and scalable components",
          "Implemented features under tight timelines while following Agile development practices",
          "Maintained high code quality with emphasis on reusability, readability, and cross-browser compatibility",
        ],
        skills: [
          "MERN Stack",
          "React",
          "Node.js",
          "Express.js",
          "MongoDB",
          "PostgreSQL",
          "Prisma ORM",
          "REST APIs",
          "State Management",
        ],
        documentUrl:
          "https://res.cloudinary.com/sandeepmehta/image/upload/v1766586214/Nextute_intership_certificate_jcx9mv.png",
      },
      {
        title: "GDG Solution Challenge Participant",
        issuer: "Google Developer Group (GDG)",
        year: "2025",
        description:
          "Participated in the GDG Solution Challenge, a high-intensity hackathon aimed at creating impactful, real-world solutions. Collaborated with a team to ideate, develop, and present a functional web application under strict deadlines, focusing on scalability, user experience, and clean architecture.",
        details: [
          "Developed a scalable and functional web application within a limited timeframe",
          "Implemented modern full-stack development practices and efficient problem-solving techniques",
          "Worked closely with cross-functional team members during ideation, prototyping, and final presentation",
          "Gained hands-on experience in rapid prototyping, iterative development, and time-bound delivery",
        ],
        skills: [
          "Full Stack Development",
          "Problem Solving",
          "Team Collaboration",
          "Rapid Prototyping",
          "Scalable Architecture",
        ],
        documentUrl:
          "https://res.cloudinary.com/sandeepmehta/image/upload/v1766590639/Hack2skill-Certificate_oyeeyu.png",
      },
    ],
  },
];

export function Certificates() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  const [activeCategory, setActiveCategory] = useState(0);
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [showDocument, setShowDocument] = useState(false);

  return (
    <section
      ref={sectionRef}
      id="certificates"
      className="py-12 md:py-16 bg-secondary/30"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div
          className={cn(
            "max-w-2xl mb-14 transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <h2 className="text-4xl font-bold mb-4">
            Certificates & Achievements
          </h2>
          <p className="text-muted-foreground text-lg">
            Academic transcripts, certifications, and professional milestones.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 mb-12">
          {certificateCategories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.title}
                onClick={() => setActiveCategory(index)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition",
                  activeCategory === index
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border hover:border-primary"
                )}
              >
                <Icon className="h-4 w-4" />
                {cat.title}
              </button>
            );
          })}
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificateCategories[activeCategory].items.map((cert) => (
            <div
              key={cert.title}
              onClick={() => setSelectedCert(cert)}
              className="relative cursor-pointer p-6 rounded-2xl bg-card border transition hover:border-primary/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <span className="text-xs text-muted-foreground">
                  {cert.year}
                </span>
              </div>

              <h3 className="text-lg font-semibold mb-1">{cert.title}</h3>
              <p className="text-primary text-sm mb-2">{cert.issuer}</p>

              <p className="text-sm text-muted-foreground line-clamp-3">
                {cert.description}
              </p>

              {cert.percentage && (
                <div className="mt-3 text-sm font-semibold text-green-600">
                  Score: {cert.percentage}
                </div>
              )}

              <ChevronRight className="absolute bottom-5 right-5 text-primary" />
            </div>
          ))}
        </div>
      </div>

      {/* DETAILS MODAL */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-card max-w-xl w-full rounded-2xl p-6 relative"
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-1 right-1 cursor-pointer text-blue-500"
            >
              <X />
            </button>

            <h3 className="text-xl font-bold mb-1">{selectedCert.title}</h3>
            <p className="text-primary mb-3">{selectedCert.issuer}</p>

            <p className="text-muted-foreground mb-4">
              {selectedCert.description}
            </p>

            {selectedCert.details && (
              <ul className="mb-4 space-y-1 text-sm text-muted-foreground">
                {selectedCert.details.map((d) => (
                  <li key={d}>
                    <span className="text-blue-600">•</span> {d}
                  </li>
                ))}
              </ul>
            )}

            {selectedCert.skills && (
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedCert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs rounded-full bg-secondary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}

            {selectedCert.percentage && (
              <p className="font-semibold text-green-600 mb-4">
                Score: {selectedCert.percentage}
              </p>
            )}

            <button
              onClick={() => setShowDocument(true)}
              className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 cursor-pointer"
            >
              <ZoomIn className="h-4 w-4" />
              View Document
            </button>
          </div>
        </div>
      )}

      {/* DOCUMENT VIEWER */}
      {showDocument && selectedCert && (
        <div
          className="fixed inset-0 z-50 bg-background/90 flex items-center justify-center p-4"
          onClick={() => setShowDocument(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl bg-card rounded-2xl overflow-hidden"
          >
            <button
              className="absolute top-4 right-4 bg-secondary p-2 rounded-lg z-10 text-blue-500 cursor-pointer"
              onClick={() => setShowDocument(false)}
            >
              <X />
            </button>

            {/* IMPORTANT FIX FOR 10th / 12th MARKSHEET */}
            <div className="max-h-[85vh] overflow-auto flex justify-center p-4">
              <img
                src={selectedCert.documentUrl}
                alt={selectedCert.title}
                className="w-full max-w-3xl object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
