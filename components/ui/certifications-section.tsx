"use client";
import { motion } from "framer-motion";
import { SiDatabricks, SiBasecamp } from "react-icons/si";
import { IconType } from "react-icons";
import { cn } from "@/lib/utils";

interface Certification {
  title: string;
  organization: string;
  date: string;
  link?: string;
  status?: 'ongoing';
}

const certifications: Certification[] = [
  {
    title: "Software Engineer",
    organization: "HackerRank",
    date: "Jul 2024",
    link: "https://www.hackerrank.com/certificates/1b64720fdb63"
  },
  {
    title: "Problem Solving (Intermediate)",
    organization: "HackerRank",
    date: "Jan 2024",
    link: "https://www.hackerrank.com/certificates/e306f66d509e"
  },
  {
    title: "AWS Developer Associate",
    organization: "Amazon Web Services",
    date: "In Progress",
    status: "ongoing"
  },
  {
    title: "System Design Masterclass",
    organization: "Udemy",
    date: "2024",
    link: "https://www.udemy.com/course/system-design-masterclass/"
  },
  {
    title: "Problem Solving (Basic) Certificate",
    organization: "HackerRank",
    date: "2023",
    link: "https://www.hackerrank.com/certificates/1b64720fdb63"
  },

  {
    title: "Git Learning",
    organization: "Git",
    date: "2022",
    link: "https://drive.google.com/drive/u/1/folders/1QDu57sCSOtemuSSFX4Qq0UYhDjq2GzGP"
  },
  {
    title: "Programming for Everybody (Getting Started with Python)",
    organization: "Coursera",
    date: "2021",
    link: "https://www.coursera.org/account/accomplishments/certificate/WPK5DN4KYV24"
  },
  {
    title: "Certificate of Training - Machine Learning",
    organization: "Internshala",
    date: "2021",
    link: "https://trainings.internshala.com/view_certificate/B6094642-8EF2-C098-A164-871739E20112/1EA6EDAD-8A81-CD53-E21A-490E74B3DE7A/"
  },

  {
    title: "Python Project: Pillow, Tesseract, and OpenCV",
    organization: "University of Michigan",
    date: "2021",
    link: "https://www.coursera.org/account/accomplishments/verify/533HZNUYR6MW"
  },

  {
    title: "KPMG Virtual Internship",
    organization: "KPMG",
    date: "2020",
    link: "https://drive.google.com/drive/u/1/folders/1QDu57sCSOtemuSSFX4Qq0UYhDjq2GzGP"
  }
];

export default function CertificationsSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center p-10">
      <h2 className="text-4xl font-bold text-center mb-12">Certifications</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl w-full">
        {certifications.map((cert, index) => (
          <CertificationCard
            key={index}
            title={cert.title}
            organization={cert.organization}
            date={cert.date}
            link={cert.link}
            status={cert.status}
          />
        ))}
      </div>
    </section>
  );
}

interface CertificationCardProps {
  title: string;
  organization: string;
  date: string;
  link?: string;
  status?: 'ongoing';
}

const CertificationCard: React.FC<CertificationCardProps> = ({ title, organization, date, link, status }) => {
  return (
    <div className="bg-[#0A0A0A] rounded-lg p-5 hover:bg-[#111111] transition-all duration-300 relative group">
      {/* Gradient border effect - removed opacity-0 and hover classes */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#4B15A9] via-[#B53FE8] to-[#EB3FA9] transition-opacity duration-300" style={{ padding: '1px' }}>
        <div className="h-full w-full bg-[#0A0A0A] rounded-lg" />
      </div>
      
      {/* Content */}
      <div className="relative">
        <h3 className="text-purple-400 text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-300 mb-2">{organization}</p>
        <div className="flex justify-between items-center">
          <span className="text-gray-400">{date}</span>
          {status === 'ongoing' ? (
            <span className="inline-flex items-center px-4 py-2 rounded-md bg-yellow-500/10 text-yellow-400">
              In Progress
            </span>
          ) : (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-2 rounded-md bg-purple-500/10 text-purple-400 hover:bg-purple-500/20 transition-colors duration-200"
            >
              View Credentials
              <svg className="w-3 h-2 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
