import { FaReact, FaNodeJs, FaPython, FaAndroid, FaJava } from 'react-icons/fa';
import { SiTypescript, SiSpringboot, SiMysql, SiTailwindcss, SiMongodb, SiFirebase, SiTensorflow, SiKeras, SiJavascript, SiOpencv, SiPostgresql, SiAngular, SiMaterialdesign, SiHtml5, SiCss3, SiSharp, SiCplusplus, SiSpring, SiDotnet, SiDjango, SiFlask, SiApachekafka, SiApachehadoop, SiApachespark, SiElasticsearch, SiAmazondynamodb, SiSnowflake, SiAmazon, SiDocker, SiKubernetes, SiTerraform, SiDatabricks } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

export const projects = [
  {
    id: 1,
    title: "Jobstat - Job Analytics Platform",
    des: "A comprehensive job analytics platform built with MERN stack. Features include job tracking, analytics dashboard, and real-time statistics. Implements JWT authentication and RESTful API architecture.",
    img: "/Jobstat.jpeg",
    link: "https://github.com/neeeraj1999/Jobstat",
    icons: [
      { icon: FaReact, color: "#61DAFB" },
      { icon: FaNodeJs, color: "#339933" },
      { icon: SiMongodb, color: "#47A248" },
      { icon: SiJavascript, color: "#F7DF1E" }
    ]
  },
  {
    id: 2,
    title: "Used Books Exchange Platform",
    des: "A platform for college students to buy and sell used books. Features include real-time chat, book listings, and user authentication. Built with MERN stack and integrates Firebase for real-time functionality.",
    img: "/Used_books.jpeg",
    link: "https://github.com/neeeraj1999/UsedBooks",
    icons: [
      { icon: FaJava, color: "#007396" },
      {icon: SiMysql, color: "#4479A1" },
      {icon: SiSpringboot, color: "#6DB33F"},
      { icon: SiFirebase, color: "#FFCA28" }
    ]
  },
  {
    id: 3,
    title: "Violence Detection System",
    des: "Deep learning-based violence detection system using CNN and LSTM networks. Processes video streams in real-time to detect violent activities. Achieves high accuracy using transfer learning and custom model architecture.",
    img: "/Violence_Detection.jpeg",
    link: "https://github.com/neeeraj1999/Data-Projects/tree/main/Violence%20Detection%20Using%20Deep%20Learning",
    icons: [
      { icon: FaPython, color: "#3776AB" },
      { icon: SiTensorflow, color: "#FF6F00" },
      { icon: SiKeras, color: "#D00000" }
    ]
  },
  {
    id: 4,
    title: "Advance Cafe Booking System",
    des: "Android application for advance cafe booking and management. Features include table reservation, menu ordering, and payment integration. Implements real-time booking status and notification system.",
    img: "/Cafe_Booking_App_1.jpeg",
    link: "https://github.com/neeeraj1999/Advance-Cafebooking-Android-Application",
    icons: [
      { icon: FaAndroid, color: "#3DDC84" },
      { icon: FaJava, color: "#007396" },
      { icon: SiFirebase, color: "#FFCA28" }
    ]
  },
  {
    id: 5,
    title: "AirTouch - Hand Gesture Control System",
    des: "An innovative gesture control system that enables computer interaction through hand gestures. Built with Python, OpenCV, and MediaPipe for real-time hand tracking, allowing cursor control and web navigation through intuitive gestures.",
    img: "/Airtouch.jpg", // You'll need to add an actual demo image
    link: "https://github.com/neeeraj1999/AirTouch-Hand-Control-Gesture",
    icons: [
      { icon: FaPython, color: "#3776AB" },
      { icon: SiOpencv, color: "#5C3EE8" }, // You'll need to import this
    ]
  },
  {
    id: 6,
    title: "University Database Management System",
    des: "Comprehensive database system for university operations featuring stored procedures, functions, and views. Implements advanced SQL features for complex data operations, student management, and employee benefits tracking.",
    img: "/DBMS.jpg", // You'll need to add an actual schema image
    link: "https://github.com/neeeraj1999/CIS581-University-Database-Design",
    icons: [ // You'll need to import this
      {icon: SiMysql, color: "#4479A1" } // You'll need to import this
    ]
  }
];

export const skillsData = [
  // Frontend (add if not already present)
  { name: "Angular", icon: SiAngular },
  { name: "Material Design", icon: SiMaterialdesign },
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },

  // Backend/Programming Languages (add if not already present)
  { name: "C#", icon: SiSharp },
  { name: "C++", icon: SiCplusplus },
  { name: "Spring Boot", icon: SiSpring },
  { name: ".NET", icon: SiDotnet },
  { name: "Django", icon: SiDjango },
  { name: "Flask", icon: SiFlask },
  { name: "Apache Kafka", icon: SiApachekafka },
  { name: "Hadoop", icon: SiApachehadoop },
  { name: "Apache Spark", icon: SiApachespark },

  // Databases (add if not already present)
  { name: "Elasticsearch", icon: SiElasticsearch },
  { name: "DynamoDB", icon: SiAmazondynamodb },
  { name: "Snowflake", icon: SiSnowflake },

  // Cloud/DevOps (add if not already present)
  { name: "AWS", icon: SiAmazon },
  { name: "Docker", icon: SiDocker },
  { name: "Kubernetes", icon: SiKubernetes },
  { name: "Terraform", icon: SiTerraform },
  { name: "Databricks", icon: SiDatabricks }
]
