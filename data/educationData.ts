export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  metricLabel: string;
  metricValue: string;
  details: string[];
}

export const educationData: EducationItem[] = [
  {
    institution: "VIT Vellore (Vellore Institute of Technology)",
    degree: "Bachelor of Computer Applications (BCA)",
    period: "2024 – 2027",
    location: "Vellore, Tamil Nadu, India",
    metricLabel: "Current CGPA",
    metricValue: "9.09 / 10.0",
    details: [
      "Rigorous coursework in core computer science, data structures, algorithms, and database management systems.",
      "Hands-on full-stack software development projects utilizing modern web frameworks, relational databases, and RESTful architectures.",
      "Consistently maintained strong academic standing with a 9.09 CGPA across foundational computing modules.",
    ],
  },
  {
    institution: "CH+2 High School JMT",
    degree: "Senior Secondary (Class XII)",
    period: "2023 – 2024",
    location: "Jharkhand, India",
    metricLabel: "Aggregate Score",
    metricValue: "81.20%",
    details: [
      "Completed higher secondary education with focus on science and mathematics fundamentals.",
      "Developed foundational analytical and problem-solving skills prior to undergraduate computer science studies.",
    ],
  },
];
