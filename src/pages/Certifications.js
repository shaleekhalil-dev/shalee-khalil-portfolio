import React from "react";
import { 
  Box, Container, Heading, SimpleGrid, VStack, Text, 
  HStack, Button, Link, Badge, Icon, Flex,
  Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Divider
} from "@chakra-ui/react";
import { 
  FaGraduationCap, FaExternalLinkAlt, FaAward, 
  FaBrain, FaRobot, FaUserTie, FaSearch, FaUniversity,
  FaHeartbeat, FaChartPie, FaLaptopCode, FaPython, FaReact,
  FaJs, FaDatabase, FaDocker, FaCaretUp, FaGoogle, FaInfinity,
  FaTools, FaCertificate
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const Certifications = () => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  // شارات اللغات والأدوات البرمجية (بنفس تصميم GitHub Shields)
  const githubStackBadges = [
    { label: "PYTHON", bg: "#3776AB", color: "white", icon: FaPython },
    { label: "DJANGO", bg: "#092E20", color: "white", textIcon: "dj" },
    { label: "REACT", bg: "#20232A", color: "#61DAFB", icon: FaReact },
    { label: "JAVASCRIPT", bg: "#F7DF1E", color: "black", icon: FaJs },
    { label: "SQL", bg: "#4479A1", color: "white", icon: FaDatabase },
    { label: "DOCKER", bg: "#2496ED", color: "white", icon: FaDocker },
    { label: "VERCEL", bg: "#000000", color: "white", icon: FaCaretUp },
  ];

  // شارات الاعتماد الاحترافي الكبرى مربوطة بشهاداتها المباشرة
  const githubCertShields = [
    { vendor: "Google", title: "Certified", rightBg: "#4285F4", icon: FaGoogle, link: "https://www.credly.com/badges/63846824-2b10-4f7d-af5f-61f1e3729eaf/academic_transcript" },
    { vendor: "IBM", title: "Data Engineering", rightBg: "#052FAD", textIcon: "IBM", link: "https://www.credly.com/badges/3786f776-9f7d-4d73-a634-e16624276d56/academic_transcript" },
    { vendor: "Meta", title: "Full Stack", rightBg: "#0668E1", icon: FaInfinity, link: "https://www.credly.com/badges/cead1f93-d754-4abc-8be5-a1d76602a080/academic_transcript" },
  ];

  // 1. فرع التقنية، البرمجة والذكاء الاصطناعي (جميعها بروابط الشهادات والشارات الفردية المخصصة)
  const techSection = {
    title: isAr ? "التقنية، البرمجة والذكاء الاصطناعي" : "Technology, Programming & AI",
    icon: FaRobot, 
    color: "purple.500",
    linkedCerts: [
      { name: "IBM Full Stack Software Developer Professional Certificate (V5)", issuer: "IBM", link: "https://www.coursera.org/account/accomplishments/specialization/W9D3R7395EI3" },
      { name: "IBM DevOps and Software Engineering Professional Certificate", issuer: "IBM", link: "https://www.coursera.org/account/accomplishments/specialization/W1WKC25AHWRG" },
      { name: "IBM Data Engineering Professional Certificate (V3)", issuer: "IBM", link: "https://www.coursera.org/account/accomplishments/specialization/SUZKGITATZYZ" },
      { name: "IBM Data Science Professional Certificate (V3)", issuer: "IBM", link: "https://www.coursera.org/account/accomplishments/specialization/GY6EPUG345Z0" },
      { name: "Meta Full-Stack Software Engineer Certificate", issuer: "Meta", link: "https://coursera.org/verify/specialization/UGELP6MYNCJY" },
      { name: "Meta Front-End Developer Professional Certificate (v.1)", issuer: "Meta", link: "https://www.credly.com/badges/5a778aa9-8ca8-478e-8e55-71995f7a17dc/academic_transcript" },
      { name: "Meta Back-End Developer Professional Certificate (v.1)", issuer: "Meta", link: "https://www.credly.com/badges/5b044356-60f6-44c2-bb42-2073c9b62723/academic_transcript" },
      { name: "Meta Android Developer Professional Certificate (v.1)", issuer: "Meta", link: "https://www.coursera.org/account/accomplishments/specialization/2X77NJKU8C79" },
      { name: "Meta iOS Developer Professional Certificate (v.1)", issuer: "Meta", link: "https://www.credly.com/badges/9cd48729-90d2-44da-944f-9b39c093546c/academic_transcript" },
      { name: "Google Data Analysis with Python Specialization", issuer: "Google", link: "https://www.coursera.org/account/accomplishments/specialization/2IR3Z0DEDCXM", isNew: true },
      { name: "Google IT Automation with Python Professional Certificate (v.1)", issuer: "Google", link: "https://www.coursera.org/account/accomplishments/specialization/IBV4OFHF2LMW", isNew: true },
      { name: "Microsoft IT Support Specialist Professional Certificate", issuer: "Microsoft", link: "https://www.coursera.org/account/accomplishments/specialization/IIVAKGONYA9X", isNew: true },
      { name: "Generative AI for Human Resources (HR) Professionals Specialization", issuer: "IBM", link: "https://www.coursera.org/account/accomplishments/specialization/NXITBU44RT79", isNew: true },
      { name: "Google Data Analytics Professional Certificate (v.3)", issuer: "Google", link: "https://www.credly.com/badges/0216b2b6-f62a-4ad0-88ba-8c0c15b9d59a/academic_transcript" },
      { name: "Google Cybersecurity Professional Certificate (v.2)", issuer: "Google", link: "https://coursera.org/verify/professional-cert/POZZEBOLKA6J" },
      { name: "Google UX Design Professional Certificate (v.3)", issuer: "Google", link: "https://www.credly.com/badges/c7dc120a-12d4-4dd2-ac4f-9ec2f6be3e41/academic_transcript" },
      { name: "Google IT Support Professional Certificate (v.3)", issuer: "Google", link: "https://www.credly.com/badges/db9889f9-b6e1-4875-87e6-0b268a0269d8/academic_transcript" },
      { name: "Google AI Professional Certificate", issuer: "Google", link: "https://coursera.org/verify/professional-cert/45TUGH9Y16XU" },
      { name: "Google AI Essentials V1", issuer: "Google", link: "https://www.credly.com/badges/1a938be3-dc29-46b4-8216-788061cd815c/academic_transcript" },
      { name: "Google Prompting Essentials", issuer: "Google", link: "https://www.credly.com/badges/b64c9586-fc53-434c-a26e-c092213b8a7d/academic_transcript" },
      { name: "Google Digital Marketing & E-commerce Professional Certificate (v.2)", issuer: "Google", link: "https://coursera.org/verify/professional-cert/BY0X1SSEOYMJ" },
      { name: "Microsoft 365 Fundamentals Specialization (v.1)", issuer: "Microsoft", link: "https://coursera.org/verify/specialization/1212LH1EP2PV" }
    ],
    // كافة الشارات التقنية الدقيقة الموثقة بروابطها الفردية المباشرة من ملف السجل الأكاديمي
    credlyDetailedBadges: [
      { name: "Google AI Fundamentals", issuer: "Google", link: "https://www.credly.com/badges/05d6b1fa-3428-4d7f-8fec-45a29f95d51f/academic_transcript" },
      { name: "Google AI for Brainstorming and Planning", issuer: "Google", link: "https://www.credly.com/badges/a837bb74-178a-4064-bb7c-1c2144be28a0/academic_transcript" },
      { name: "Google AI for App Building", issuer: "Google", link: "https://www.credly.com/badges/465e8564-6a5d-4a6c-a904-bfb54acb5930/academic_transcript" },
      { name: "Google AI for Data Analysis", issuer: "Google", link: "https://www.credly.com/badges/9f67f050-feb1-45a1-8389-0eeb0e6cdf64/academic_transcript" },
      { name: "Google AI for Content Creation", issuer: "Google", link: "https://www.credly.com/badges/bd616a79-129c-4708-b43a-136493363858/academic_transcript" },
      { name: "Google AI for Writing and Communicating", issuer: "Google", link: "https://www.credly.com/badges/83afd724-d261-4419-b67d-7fe2b18f96fb/academic_transcript" },
      { name: "Google AI for Research and Insights", issuer: "Google", link: "https://www.credly.com/badges/24b9d534-ae30-446a-ab02-f574c9e4d55f/academic_transcript" },
      { name: "Software Engineering Essentials", issuer: "IBM", link: "https://www.credly.com/badges/dcca4eb6-18c5-438c-aae3-ee45387224b4/academic_transcript" },
      { name: "Introduction to Cloud Computing", issuer: "IBM", link: "https://www.credly.com/badges/f6923343-595b-4fee-bc04-1c9b35c6845f/academic_transcript" },
      { name: "Introduction to HTML, CSS, & JavaScript", issuer: "IBM", link: "https://www.credly.com/badges/0741afac-0983-4d03-bd93-f746092b8b10/academic_transcript" },
      { name: "Git and GitHub Essentials", issuer: "IBM", link: "https://www.credly.com/badges/d16c62bc-da07-4778-be24-8a6e072116ab/academic_transcript" },
      { name: "Front-end Development with React V2", issuer: "IBM", link: "https://www.credly.com/badges/5654cd39-cb3a-41a6-9bd6-4d6a474f3bd2/academic_transcript" },
      { name: "Node and Express Essentials", issuer: "IBM", link: "https://www.credly.com/badges/b1c42304-3753-4fcf-b3ab-9bdc1445cbf0/academic_transcript" },
      { name: "Python for Data Science and AI", issuer: "IBM", link: "https://www.credly.com/badges/c4480925-8ac9-47c2-8601-26309432649e/academic_transcript" },
      { name: "Developing Applications with SQL, Databases, and Django", issuer: "IBM", link: "https://www.credly.com/badges/8b34ba62-1bf1-478b-8081-4dc5a6a0c8f4/academic_transcript" },
      { name: "Containers & Kubernetes Essentials", issuer: "IBM", link: "https://www.credly.com/badges/33cf0188-eddf-41d4-be7a-303045900e2f/academic_transcript" },
      { name: "Application Development using Microservices and Serverless", issuer: "IBM", link: "https://www.credly.com/badges/d9c723ad-90a3-4a33-ba61-8cb9f8ebbe87/academic_transcript" },
      { name: "Full Stack Application Development Capstone Project V2", issuer: "IBM", link: "https://www.credly.com/badges/5b306741-1183-4ea8-b6cd-875ec75540b6/academic_transcript" },
      { name: "Full Stack Software Developer Assessment V2", issuer: "IBM", link: "https://www.credly.com/badges/1461d84b-a1aa-411e-b8d1-2f68bc4c277f/academic_transcript" },
      { name: "Software Developer Career Guide and Interview Preparation", issuer: "IBM", link: "https://www.credly.com/badges/3f3c2fc2-8e41-4d37-b92f-bbb56e3f1088/academic_transcript" },
      { name: "DevOps Essentials", issuer: "IBM", link: "https://www.credly.com/badges/0228b03c-c476-4b42-86f5-14a2e4479919/academic_transcript" },
      { name: "Linux Commands & Shell Scripting Essentials V2", issuer: "IBM", link: "https://www.credly.com/badges/5d1b8309-8cba-4e82-a1dc-a2e417c40f02/academic_transcript" },
      { name: "Introduction to Test Driven Development", issuer: "IBM", link: "https://www.credly.com/badges/f2dc3800-7094-44ba-a84b-f94526fc4171/academic_transcript" },
      { name: "Continuous Integration & Continuous Delivery (CI/CD)", issuer: "IBM", link: "https://www.credly.com/badges/6f04f7d1-90e0-43a7-a977-68d2f87e3126/academic_transcript" },
      { name: "Security for Professionals and DevOps Professionals", issuer: "IBM", link: "https://www.credly.com/badges/5b66fe2a-93e1-4164-b4e4-fc018c67f310/academic_transcript" },
      { name: "Monitoring and Observability for Development and DevOps", issuer: "IBM", link: "https://www.credly.com/badges/1de51db5-c673-46cf-9b1f-9bd07fddd506/academic_transcript" },
      { name: "DevOps Capstone", issuer: "IBM", link: "https://www.credly.com/badges/617e2ceb-5de4-449a-93ba-82e1dbde0c33/academic_transcript" },
      { name: "Data Science Orientation", issuer: "IBM", link: "https://www.credly.com/badges/0f5fab6e-91c8-4104-ba6a-775439b37ccd/academic_transcript" },
      { name: "Tools for Data Science V2", issuer: "IBM", link: "https://www.credly.com/badges/24d280d2-4dd2-415b-a256-4f6e28ef2173/academic_transcript" },
      { name: "Databases and SQL for Data Science", issuer: "IBM", link: "https://www.credly.com/badges/323764cd-ffb4-409e-abdb-001ba506e49b/academic_transcript" },
      { name: "Python Project for Data Science", issuer: "IBM", link: "https://www.credly.com/badges/a7ebf9b3-b421-471c-b689-5be944b58022/academic_transcript" },
      { name: "Data Analysis with Python", issuer: "IBM", link: "https://www.credly.com/badges/e89f03de-7496-4357-a4c0-501e6fbd3b42/academic_transcript" },
      { name: "Machine Learning with Python (V2)", issuer: "IBM", link: "https://www.credly.com/badges/747c199a-2d3b-4825-8ae3-3379cefc70c1/academic_transcript" },
      { name: "Data Visualization with Python", issuer: "IBM", link: "https://www.credly.com/badges/7da398aa-00d0-4a17-a87f-5f35fc56bcd8/academic_transcript" },
      { name: "Data Scientist Career Guide and Interview Preparation", issuer: "IBM", link: "https://www.credly.com/badges/c5a1e6e3-a6ca-4f8c-beb0-0bb802d6fdc7/academic_transcript" },
      { name: "Generative AI Essentials for Data Science", issuer: "IBM", link: "https://www.credly.com/badges/de248938-4049-4164-bfb1-0971c9a4438c/academic_transcript" },
      { name: "Applied Data Science Capstone", issuer: "IBM", link: "https://www.credly.com/badges/89789e22-53e8-41c1-9631-3fe338de17f7/academic_transcript" },
      { name: "Data Engineering Essentials", issuer: "IBM", link: "https://www.credly.com/badges/762eb153-dcd4-497c-88aa-1784bd5e3fd3/academic_transcript" },
      { name: "Python Project for Data Engineering", issuer: "IBM", link: "https://www.credly.com/badges/7b4b12df-5b02-4849-b185-b1cd95319742/academic_transcript" },
      { name: "Relational Databases (RDBMS) Essentials", issuer: "IBM", link: "https://www.credly.com/badges/28dd6cfc-c96e-47ee-bf66-b2e5caa32396/academic_transcript" },
      { name: "Relational Database Administration Essentials", issuer: "IBM", link: "https://www.credly.com/badges/c9946739-7f09-4c66-846d-38cd1e65e4b7/academic_transcript" },
      { name: "Data Warehouse Fundamentals", issuer: "IBM", link: "https://www.credly.com/badges/6f189b1f-ed8a-412a-b66c-cc856022f606/academic_transcript" },
      { name: "ETL and Data Pipelines with Shell, Airflow and Kafka", issuer: "IBM", link: "https://www.credly.com/badges/b187522b-7e17-447e-921a-0a11afdb2eec/academic_transcript" },
      { name: "NoSQL Databases Essentials", issuer: "IBM", link: "https://www.credly.com/badges/c7c4d099-13ff-481a-a42b-da707a858516/academic_transcript" },
      { name: "BI Dashboard Essentials with Cognos and Looker", issuer: "IBM", link: "https://www.credly.com/badges/0f96dc9c-bf62-4277-bbae-34a4f2d5fe78/academic_transcript" },
      { name: "Big Data with Spark and Hadoop Essentials", issuer: "IBM", link: "https://www.credly.com/badges/0636bf79-f352-4c7f-aab4-7351b76f4482/academic_transcript" },
      { name: "Generative AI for Data Engineering", issuer: "IBM", link: "https://www.credly.com/badges/b88d0d6a-ba7e-484e-bf3c-fc1227eed424/academic_transcript" },
      { name: "Data Engineering Career Guide and Interview Preparation", issuer: "IBM", link: "https://www.credly.com/badges/cf83f3ff-5d0d-4925-8133-8492c0bb11e8/academic_transcript" },
      { name: "Machine Learning with Apache Spark", issuer: "IBM", link: "https://www.credly.com/badges/be9e4429-25fb-4102-b606-d7307c144b6c/academic_transcript" },
      { name: "Generative AI Essentials", issuer: "IBM", link: "https://www.coursera.org/account/accomplishments/specialization/NXITBU44RT79" },
      { name: "Generative AI: Prompt Engineering", issuer: "IBM", link: "https://www.coursera.org/account/accomplishments/specialization/NXITBU44RT79" }
    ]
  };

  // 2. فرع العلوم النفسية، الطب النفسي والتدريب
  const psychSection = {
    title: isAr ? "العلوم النفسية، الطب النفسي والتدريب" : "Psychology, Psychiatry & Coaching",
    icon: FaBrain, 
    color: "green.500",
    linkedCerts: [
      { name: "The Science of Well-Being", issuer: "Yale University", link: "https://www.coursera.org/account/accomplishments/verify/WLGSSF1WUEJU", isNew: true },
      { name: "A life with ADHD", issuer: "University of Geneva", link: "https://www.coursera.org/account/accomplishments/verify/FILUWPN9G7VM", isNew: true },
      { name: "NLP Practitioner & Life Coaching Diploma", issuer: "Auspicium UK", link: "https://drive.google.com/file/d/1sPzm3dbEAUzyLefTjMWBP7ZpZxiuullT/view?usp=sharing", isNew: true },
      { name: "Life Coaching Certification (ID: 25-12617)", issuer: "Udemy / Auspicium", link: "https://drive.google.com/file/d/1VlKPUW58vB2vAz1Y9_xwMMRA8BADr4Hk/view?usp=sharing", isNew: true },
      { name: "Guidance and Counselling: Practical Skills", issuer: "Alison", link: "https://alison.com/verify/4b7ca16655", isNew: true },
      { name: "Life Coach Certification", issuer: "Packt / Coursera", link: "https://www.coursera.org/account/accomplishments/verify/OJAEGAEJY1EB", isNew: true },
      { name: "Top 20 Most Powerful Life Coaching Questions", issuer: "Packt / Coursera", link: "https://www.coursera.org/account/accomplishments/verify/GL0R8W3OUFPB", isNew: true },
      { name: "Psychology of Disorders Related to Trauma & Anxiety", issuer: "APA", link: "https://coursera.org/verify/specialization/Z6Z4S3WW7V1K" },
      { name: "Psychological First Aid", issuer: "Johns Hopkins University", link: "https://coursera.org/verify/9NAPCRKIBFB8" },
      { name: "Positive Psychiatry and Mental Health", issuer: "University of Sydney", link: "https://coursera.org/verify/UEL4DAW0DNN4" },
      { name: "Abnormal Psychology Specialization", issuer: "Wesleyan University", link: "https://www.coursera.org/account/accomplishments/specialization/TZ0E4I1PHRE6" },
      { name: "Schizophrenia", issuer: "Wesleyan University", link: "https://coursera.org/verify/BYAC43NN429C" }
    ]
  };

  // 3. فرع القيادة، الإدارة الاستراتيجية والتعليم
  const leadershipSection = {
    title: isAr ? "القيادة، الإدارة الاستراتيجية والتعليم" : "Leadership, Strategy & Education",
    icon: FaUserTie, 
    color: "orange.500",
    linkedCerts: [
      { name: "Google Project Management Professional Certificate (v.3)", issuer: "Google", link: "https://coursera.org/verify/professional-cert/A1CTHFP66S19" },
      { name: "Leading with Impact: Psychology, Diversity, and Change", issuer: "Coursera", link: "https://coursera.org/verify/specialization/UCT93G46AFBT" },
      { name: "Google People Management Essentials", issuer: "Google", link: "https://www.credly.com/badges/33b73c39-e42b-4284-b377-64065dacf660/academic_transcript" },
      { name: "People and Soft Skills Essentials", issuer: "IBM", link: "https://www.credly.com/badges/f722f7f8-bba6-4727-be03-7a154cbe65c5/academic_transcript" },
      { 
        name: isAr ? "دورة التعليم الإلكتروني والصف الافتراضي المقلوب" : "E-Learning & Flipped Virtual Classroom", 
        issuer: isAr ? "اتحاد المعلمين" : "Teachers Union", 
        link: "https://drive.google.com/file/d/14BIGDVkKX59lgqRlxSSd7rr_pMo2k9p2/view?usp=sharing",
        isNew: true
      }
    ]
  };

  // مساقات صوفيا الجامعية الاستدراكية مربوطة كل مادة برابط الشارة الخاص بها على Credly
  const sophiaCategories = [
    {
      id: "health",
      titleAr: "١. قسم العلوم الصحية، الحيوية والسلوكية (Health & Biological Sciences)",
      titleEn: "1. Health, Biological & Behavioral Sciences",
      icon: FaHeartbeat,
      color: "teal.500",
      badgeText: isAr ? "6 مساقات جامعية (16 ساعة معتمدة)" : "6 University Courses (16 Credits)",
      courses: [
        { nameAr: "علم التشريح ووظائف الأعضاء 1 (SCIE1050)", nameEn: "Anatomy & Physiology I (SCIE1050)", code: "SOPH-0073", credits: "3 Credits", date: "July 2026", link: "https://www.credly.com/badges/2204d691-c842-42b1-8cd3-14761fdbda2d/academic_transcript" },
        { nameAr: "مختبر التشريح ووظائف الأعضاء 1 (SCIE1051)", nameEn: "Anatomy & Physiology I Lab (SCIE1051)", code: "SOPH-0072", credits: "1 Credit", date: "July 2026", link: "https://www.credly.com/badges/2ee4ccc3-62d6-44a8-b7cd-d95516c66167/academic_transcript" },
        { nameAr: "علم الأحياء البشري (SCIE1020)", nameEn: "Human Biology (SCIE1020)", code: "SOPH-0002", credits: "3 Credits", date: "July 2026", link: "https://www.credly.com/badges/737cb5fe-e45c-4ab0-a89a-71aea071fc97/academic_transcript" },
        { nameAr: "مقدمة في علم التغذية (HLTH1010)", nameEn: "Introduction to Nutrition (HLTH1010)", code: "SOPH-0063", credits: "3 Credits", date: "July 2026", link: "https://www.credly.com/badges/a1b69ea4-b715-479d-ac54-67751fb458c6/academic_transcript" },
        { nameAr: "مقدمة في علم النفس (PSYC1010)", nameEn: "Introduction to Psychology (PSYC1010)", code: "SOPH-0048", credits: "3 Credits", date: "July 2026", link: "https://www.credly.com/badges/4ad2a889-3920-4585-adbf-ec30336f60fa/academic_transcript" },
        { nameAr: "مقدمة في علم الاجتماع (SOC1010)", nameEn: "Introduction to Sociology (SOC1010)", code: "SOPH-0051", credits: "3 Credits", date: "July 2026", link: "https://www.credly.com/badges/42fe2203-f28d-4240-91a4-5102835e92ec/academic_transcript" },
      ]
    },
    {
      id: "management",
      titleAr: "٢. قسم الإدارة، المحاسبة، التسويق والأساليب الكمية (Management, Accounting & Math)",
      titleEn: "2. Management, Accounting, Marketing & Quantitative Methods",
      icon: FaChartPie,
      color: "blue.600",
      badgeText: isAr ? "9 مساقات جامعية (28 ساعة معتمدة)" : "9 University Courses (28 Credits)",
      courses: [
        { nameAr: "مبادئ الإدارة (BUSI1013)", nameEn: "Principles of Management (BUSI1013)", code: "SOPH-0054", credits: "3 Credits", date: "July 2026", link: "https://www.credly.com/badges/1ba453dd-23cc-44c2-a1c6-683f61549ff5/academic_transcript" },
        { nameAr: "المحاسبة المالية (BUSI1010)", nameEn: "Financial Accounting (BUSI1010)", code: "SOPH-0010", credits: "3 Credits", date: "July 2026", link: "https://www.credly.com/badges/3317faef-4540-465d-b39a-08af32a7adba/academic_transcript" },
        { nameAr: "مبادئ التمويل والإدارة المالية (BUSI1015)", nameEn: "Principles of Finance (BUSI1015)", code: "SOPH-0033", credits: "3 Credits", date: "July 2026", link: "https://www.credly.com/badges/ee0d3d0b-d8e1-4984-ba28-9df781f8f8bf/academic_transcript" },
        { nameAr: "مبادئ التسويق الاستراتيجي (BUSI2020)", nameEn: "Principles of Marketing (BUSI2020)", code: "SOPH-0085", credits: "3 Credits", date: "July 2026", link: "https://www.credly.com/badges/130bd9c8-974c-49bd-a54a-c93f37b1b364/academic_transcript" },
        { nameAr: "الاقتصاد الكلي (ECON1001)", nameEn: "Macroeconomics (ECON1001)", code: "SOPH-0012", credits: "3 Credits", date: "July 2026", link: "https://www.credly.com/badges/62baa5be-06b2-48ca-9a92-cf6b8852a5e5/academic_transcript" },
        { nameAr: "الاقتصاد الجزئي (ECON1002)", nameEn: "Microeconomics (ECON1002)", code: "SOPH-0011", credits: "3 Credits", date: "July 2026", link: "https://www.credly.com/badges/bf846701-d92c-4919-b31c-cd8505b68373/academic_transcript" },
        { nameAr: "مقدمة في الإحصاء التطبيقي (STAT1001)", nameEn: "Introduction to Statistics (STAT1001)", code: "SOPH-0005", credits: "3 Credits", date: "July 2026", link: "https://www.credly.com/badges/537305fa-23b3-43f3-90c1-a278947b3836/academic_transcript" },
        { nameAr: "حساب التفاضل والتكامل 1 (MATH1040)", nameEn: "Calculus I (MATH1040)", code: "SOPH-0060", credits: "4 Credits", date: "July 2026", link: "https://www.credly.com/badges/ec0ebf74-2b9b-4399-b906-46f850b9ff85/academic_transcript" },
        { nameAr: "الجبر الجامعي (MATH1001)", nameEn: "College Algebra (MATH1001)", code: "SOPH-0001", credits: "3 Credits", date: "June 2026", link: "https://www.credly.com/badges/904ee937-722d-485c-beba-9918dd442add/academic_transcript" },
      ]
    },
    {
      id: "technology",
      titleAr: "٣. قسم التكنولوجيا، البرمجة والدراسات التأسيسية (Technology & Foundations)",
      titleEn: "3. Technology, Programming & Academic Foundations",
      icon: FaLaptopCode,
      color: "purple.600",
      badgeText: isAr ? "5 مساقات جامعية (15 ساعة معتمدة)" : "5 University Courses (15 Credits)",
      courses: [
        { nameAr: "مقدمة في البرمجة بلغة جافا (CS1101)", nameEn: "Introduction to Java Programming (CS1101)", code: "SOPH-0062", credits: "3 Credits", date: "June 2026", link: "https://www.credly.com/badges/0d595ad8-4131-46ee-8915-b73cb13c7917/academic_transcript" },
        { nameAr: "أسس الكتابة والإنشاء الأكاديمي (ENG0050)", nameEn: "Foundations of English Composition (ENG0050)", code: "SOPH-0019", credits: "3 Credits", date: "July 2026", link: "https://www.credly.com/badges/556c27e4-0401-4267-9ee9-e286c586aa05/academic_transcript" },
        { nameAr: "مقدمة في الأخلاقيات المهنية (PHIL1002)", nameEn: "Introduction to Ethics (PHIL1002)", code: "SOPH-0020", credits: "3 Credits", date: "July 2026", link: "https://www.credly.com/badges/6b394092-9510-4bc6-b423-3850d2a9f5d9/academic_transcript" },
        { nameAr: "تاريخ الفن العالمي 1 (ARTHIST1001)", nameEn: "Art History I (ARTHIST1001)", code: "SOPH-0006", credits: "3 Credits", date: "July 2026", link: "https://www.credly.com/badges/a3ddc104-00db-4f2b-b085-86a37fd93631/academic_transcript" },
        { nameAr: "مناهج دراسة الأديان (REL1001)", nameEn: "Approaches to Studying Religions (REL1001)", code: "SOPH-0008", credits: "3 Credits", date: "July 2026", link: "https://www.credly.com/badges/bfd10d0e-17b6-4b99-911c-eca1807a0407/academic_transcript" },
      ]
    }
  ];

  // المسار الأكاديمي
  const education = [
    { 
      year: "Future", 
      titleAr: "دكتوراه DBA", 
      titleEn: "Doctorate DBA", 
      descAr: "دمج الذكاء الاصطناعي في أنسنة بيئات العمل وتطوير رأس المال النفسي.", 
      descEn: "Integrating artificial intelligence to humanize work environments and develop psychological capital.",
      isFuture: true 
    },
    { 
      year: "2026", 
      titleAr: "ماجستير إدارة الموارد البشرية التطبيقية", 
      titleEn: "Master's in Applied HRM", 
      descAr: "دراسة عميقة في إدارة الكفاءات وتطوير الأنظمة المؤسسية الحديثة.", 
      descEn: "In-depth study of competency management and the development of modern institutional systems.",
      badge: "In Progress",
      archiveUrl: "https://academic-research-archive.vercel.app/"
    },
    { 
      year: "2023", 
      titleAr: "الدبلوم المهني العالي (معلم يصنع المعاني وطلبة ينتجون المعرفة)", 
      titleEn: "Higher Professional Diploma (Teachers Create Meaning & Students Produce Knowledge)", 
      descAr: "تطوير المهارات البيداغوجية والتعامل النفسي مع الفئات العمرية المختلفة من جامعة بيرزيت.",
      descEn: "Developing pedagogical skills and psychological engagement with various age groups, from Birzeit University."
    },
    { 
      year: "2021", 
      titleAr: "دبلوم عالي في التأهيل التربوي", 
      titleEn: "Higher Diploma in Educational Qualification", 
      descAr: "الكفايات الميدانية والتربوية المتقدمة من المعهد الوطني للتدريب التربوي.",
      descEn: "Advanced field and educational competencies from the National Institute for Educational Training."
    },
    { 
      year: "2015", 
      titleAr: "بكالوريوس التعليم الأساسي", 
      titleEn: "Bachelor's in Basic Education", 
      descAr: "القاعدة المعرفية والتربوية لبناء المسارات التعليمية من جامعة القدس المفتوحة.",
      descEn: "The cognitive and educational foundation for building educational pathways, from Al-Quds Open University."
    }
  ];

  return (
    <Box py="100px" minH="100vh">
      <Container maxW="container.xl">
        <VStack spacing={16} align="stretch">
          
          <VStack spacing={4} textAlign="center">
            <Heading size="2xl" color="brand.900" fontWeight="900">
              {isAr ? "الاعتمادات والمحراب العلمي" : "Accreditations & Sanctuary"}
            </Heading>
            <Box w="100px" h="5px" bg="brand.500" borderRadius="full" />
          </VStack>

          {/* 1. المسار الأكاديمي */}
          <Box>
            <Heading size="lg" mb={8} display="flex" alignItems="center" gap={3}>
              <Icon as={FaGraduationCap} color="brand.500" />
              <Text as="span">{isAr ? "المسار الأكاديمي" : "Academic Path"}</Text>
            </Heading>
            <VStack align="stretch" spacing={4}>
              {education.map((edu, i) => (
                <MotionBox 
                  key={i} 
                  className="glass-card" 
                  p={5} 
                  bg="whiteAlpha.300" 
                  backdropFilter="blur(10px)" 
                  borderLeft={!isAr && edu.isFuture ? "6px solid #805AD5" : "none"}
                  borderRight={isAr && edu.isFuture ? "6px solid #805AD5" : "none"}
                  whileHover={{ scale: 1.01, x: isAr ? -8 : 8 }}
                >
                  <HStack justify="space-between" align="start">
                    <VStack align="start" spacing={1}>
                      <Badge colorScheme={edu.isFuture ? "purple" : "teal"}>{edu.year}</Badge>
                      <Text fontWeight="bold" fontSize="lg">
                        {isAr ? edu.titleAr : edu.titleEn}
                      </Text>
                      <Text fontSize="xs" opacity={0.85}>
                        {isAr ? edu.descAr : edu.descEn}
                      </Text>
                      {edu.archiveUrl && (
                        <Button 
                          as={Link} 
                          href={edu.archiveUrl} 
                          isExternal 
                          size="xs" 
                          colorScheme="purple" 
                          leftIcon={<FaSearch />} 
                          mt={2}
                          _hover={{ textDecoration: "none" }}
                        >
                          {isAr ? "تصفح أرشيف البحوث العلمية" : "Browse Research Archive"}
                        </Button>
                      )}
                    </VStack>
                    {edu.badge && <Badge colorScheme="orange">{edu.badge}</Badge>}
                  </HStack>
                </MotionBox>
              ))}
            </VStack>
          </Box>

          {/* 2. المساقات الجامعية الأمريكية الاستدراكية (ACE Credit) - جميع النوافذ مغلقة افتراضياً */}
          <Box className="glass-card" p={{ base: 6, md: 8 }} bg="whiteAlpha.400" border="1px solid" borderColor="brand.200">
            <VStack align="start" spacing={4} mb={6}>
              <HStack spacing={3} flexWrap="wrap">
                <Icon as={FaUniversity} color="brand.600" boxSize={7} />
                <Heading size="lg" color="brand.900">
                  {isAr 
                    ? "الدراسات الجامعية الأمريكية الاستدراكية (ACE® Credit)" 
                    : "U.S. Accredited University Bridging Studies (ACE® Credit)"}
                </Heading>
                <Badge colorScheme="purple" variant="solid" borderRadius="full" px={3} py={1}>
                  {isAr ? "20 مساقاً جامعياً • 60 ساعة معتمدة" : "20 University Courses • 60 Credits"}
                </Badge>
              </HStack>
              <Text fontSize="sm" color="brand.800" lineHeight="tall" fontWeight="600">
                {isAr
                  ? "مساقات جامعية أمريكية معتمدة من المجلس الأمريكي للتعليم (ACE) عبر منصة Sophia Learning، تم إنجازها لتأسيس قاعدة علمية تربط بين العلوم الصحية، الإدارة والتكنولوجيا."
                  : "U.S. undergraduate-level courses evaluated by the American Council on Education (ACE) via Sophia Learning, completed to bridge Health Sciences, Business, and Technology."}
              </Text>
            </VStack>

            <Accordion allowMultiple>
              {sophiaCategories.map((cat) => (
                <AccordionItem 
                  key={cat.id} 
                  border="1px solid" 
                  borderColor="whiteAlpha.800" 
                  borderRadius="xl" 
                  mb={4} 
                  bg="whiteAlpha.600"
                  overflow="hidden"
                >
                  <h2>
                    <AccordionButton py={4} px={5} _expanded={{ bg: "brand.900", color: "white" }} _hover={{ bg: "brand.100" }}>
                      <HStack flex="1" textAlign={isAr ? "right" : "left"} spacing={3} flexWrap="wrap">
                        <Icon as={cat.icon} boxSize={5} color={cat.color} _groupExpanded={{ color: "white" }} />
                        <Text fontWeight="900" fontSize={{ base: "sm", md: "md" }}>
                          {isAr ? cat.titleAr : cat.titleEn}
                        </Text>
                        <Badge colorScheme="teal" borderRadius="full" px={2.5} fontSize="10px">
                          {cat.badgeText}
                        </Badge>
                      </HStack>
                      <AccordionIcon boxSize={6} />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={5} pt={4} bg="whiteAlpha.800">
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3}>
                      {cat.courses.map((course, idx) => (
                        <HStack 
                          key={idx} 
                          justify="space-between" 
                          p={3} 
                          bg="white" 
                          borderRadius="lg" 
                          border="1px solid" 
                          borderColor="brand.100"
                          shadow="xs"
                        >
                          <VStack align="start" spacing={0.5}>
                            <Text fontSize="xs" fontWeight="800" color="brand.900">
                              {isAr ? course.nameAr : course.nameEn}
                            </Text>
                            <HStack spacing={2}>
                              <Badge colorScheme="blue" variant="subtle" fontSize="9px">{course.code}</Badge>
                              <Badge colorScheme="green" variant="outline" fontSize="9px">{course.credits}</Badge>
                              <Text fontSize="10px" color="gray.500">{course.date}</Text>
                            </HStack>
                          </VStack>
                          <Button
                            as={Link}
                            href={course.link}
                            isExternal
                            size="2xs"
                            colorScheme="blue"
                            variant="solid"
                            rightIcon={<FaExternalLinkAlt />}
                            flexShrink={0}
                            _hover={{ textDecoration: "none" }}
                          >
                            Verify
                          </Button>
                        </HStack>
                      ))}
                    </SimpleGrid>
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </Box>

          {/* 3. مصفوفة الشهادات والاعتمادات الدولية الموثقة */}
          <Box>
            <Heading size="lg" mb={8} display="flex" alignItems="center" gap={3}>
              <Icon as={FaAward} color="brand.500" />
              <Text as="span">
                {isAr ? "الشهادات والاعتمادات الدولية الموثقة" : "Verified International Certifications"}
              </Text>
            </Heading>

            <VStack spacing={10} align="stretch">
              
              <MotionBox p={{ base: 5, md: 8 }} bg="whiteAlpha.400" backdropFilter="blur(12px)" borderRadius="2xl" border="1px solid white" shadow="xl">
                <HStack mb={6} justify="space-between" flexWrap="wrap" gap={2}>
                  <HStack spacing={3}>
                    <Icon as={techSection.icon} color={techSection.color} boxSize={7} />
                    <Heading size="md">{techSection.title}</Heading>
                  </HStack>
                  <Badge colorScheme="purple" borderRadius="full" px={3} py={1} fontSize="xs">
                    {isAr 
                      ? `${techSection.linkedCerts.length} تخصصاً احترافياً + ${techSection.credlyDetailedBadges.length} شارة دقيقة` 
                      : `${techSection.linkedCerts.length} Specializations + ${techSection.credlyDetailedBadges.length} Badges`}
                  </Badge>
                </HStack>

                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3} mb={6}>
                  {techSection.linkedCerts.map((cert, i) => (
                    <HStack key={i} justify="space-between" bg="whiteAlpha.700" p={3} borderRadius="lg" border="1px solid" borderColor="white" _hover={{ bg: "white", borderColor: "brand.400", transform: "translateY(-2px)", shadow: "sm" }} transition="all 0.2s">
                      <VStack align="start" spacing={0.5}>
                        <HStack spacing={2} flexWrap="wrap">
                          <Text fontSize="xs" fontWeight="800" color="brand.900">{cert.name}</Text>
                          {cert.isNew && <Badge colorScheme="green" fontSize="9px" borderRadius="full">{isAr ? "جديد" : "NEW"}</Badge>}
                        </HStack>
                        <Text fontSize="10px" color="brand.600" fontWeight="bold">{cert.issuer}</Text>
                      </VStack>
                      <Button as={Link} href={cert.link} isExternal size="xs" colorScheme="blue" variant="solid" rightIcon={<FaExternalLinkAlt />} flexShrink={0} _hover={{ textDecoration: "none" }}>Verify</Button>
                    </HStack>
                  ))}
                </SimpleGrid>

                {/* النافذة المنسدلة للشارات التقنية مغلقة افتراضياً وكل شارة مربوطة برابطها الفردي */}
                <Accordion allowToggle mb={8}>
                  <AccordionItem border="1px solid" borderColor="brand.200" borderRadius="xl" bg="whiteAlpha.600">
                    <h2>
                      <AccordionButton py={3} px={4} borderRadius="xl" _expanded={{ bg: "brand.800", color: "white" }}>
                        <HStack flex="1" textAlign={isAr ? "right" : "left"} spacing={2.5}>
                          <Icon as={FaCertificate} color="purple.500" _groupExpanded={{ color: "white" }} />
                          <Text fontWeight="800" fontSize="sm">
                            {isAr ? `استعراض الشارات والمساقات التقنية الدقيقة (${techSection.credlyDetailedBadges.length} شارة موثقة)` : `View Detailed Technical Badges (${techSection.credlyDetailedBadges.length} Verified Badges)`}
                          </Text>
                        </HStack>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} pt={4}>
                      <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={2.5}>
                        {techSection.credlyDetailedBadges.map((badge, idx) => (
                          <HStack key={idx} justify="space-between" bg="white" p={2.5} borderRadius="md" border="1px solid" borderColor="gray.100">
                            <VStack align="start" spacing={0}>
                              <Text fontSize="11px" fontWeight="bold" color="brand.900">{badge.name}</Text>
                              <Text fontSize="9px" color="gray.500" fontWeight="bold">{badge.issuer}</Text>
                            </VStack>
                            <Button as={Link} href={badge.link} isExternal size="2xs" colorScheme="purple" variant="solid" rightIcon={<FaExternalLinkAlt />} flexShrink={0} _hover={{ textDecoration: "none" }}>Verify</Button>
                          </HStack>
                        ))}
                      </SimpleGrid>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>

                <Divider borderColor="brand.200" mb={6} />

                <VStack align="start" spacing={5} dir="ltr">
                  <Box w="full">
                    <HStack spacing={2} mb={3} justify={isAr ? "flex-end" : "flex-start"}>
                      <Icon as={FaTools} color="gray.600" boxSize={4} />
                      <Heading size="sm" color="gray.800" fontWeight="800">Programming Stack & Tools</Heading>
                    </HStack>
                    <Flex flexWrap="wrap" gap={2} justify={isAr ? "flex-end" : "flex-start"}>
                      {githubStackBadges.map((item, idx) => (
                        <HStack key={idx} bg={item.bg} color={item.color} px={3.5} py={2} spacing={2.5} borderRadius="2px" shadow="sm" fontFamily="monospace" fontWeight="900" fontSize="xs" letterSpacing="1.5px" _hover={{ transform: "translateY(-2px)", shadow: "md" }} transition="all 0.2s">
                          {item.icon ? <Icon as={item.icon} boxSize={4} /> : <Text as="span" fontWeight="900" fontSize="sm" fontFamily="sans-serif">{item.textIcon}</Text>}
                          <Text as="span">{item.label}</Text>
                        </HStack>
                      ))}
                    </Flex>
                  </Box>

                  <Box w="full">
                    <HStack spacing={2} mb={3} justify={isAr ? "flex-end" : "flex-start"}>
                      <Icon as={FaAward} color="blue.600" boxSize={4} />
                      <Heading size="sm" color="gray.800" fontWeight="800">Professional Certifications</Heading>
                    </HStack>
                    <Flex flexWrap="wrap" gap={2} justify={isAr ? "flex-end" : "flex-start"}>
                      {githubCertShields.map((shield, idx) => (
                        <HStack key={idx} as={Link} href={shield.link} isExternal spacing={0} borderRadius="3px" overflow="hidden" shadow="sm" fontSize="xs" fontWeight="700" _hover={{ textDecoration: "none", transform: "translateY(-2px)", shadow: "md" }} transition="all 0.2s">
                          <HStack bg="#555555" color="white" px={2.5} py={1.5} spacing={1.5}>
                            {shield.icon ? <Icon as={shield.icon} boxSize={3.5} /> : <Text as="span" fontWeight="900" fontSize="10px" letterSpacing="0.5px">{shield.textIcon}</Text>}
                            <Text as="span">{shield.vendor}</Text>
                          </HStack>
                          <Box bg={shield.rightBg} color="white" px={2.5} py={1.5}>{shield.title}</Box>
                        </HStack>
                      ))}
                    </Flex>
                  </Box>
                </VStack>
              </MotionBox>

              <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8}>
                {[psychSection, leadershipSection].map((sec, idx) => (
                  <MotionBox key={idx} p={{ base: 5, md: 7 }} bg="whiteAlpha.400" backdropFilter="blur(12px)" borderRadius="2xl" border="1px solid white" shadow="lg">
                    <HStack mb={5} justify="space-between">
                      <HStack spacing={3}>
                        <Icon as={sec.icon} color={sec.color} boxSize={6} />
                        <Heading size="md">{sec.title}</Heading>
                      </HStack>
                      <Badge colorScheme="blue" borderRadius="full" px={2.5} py={0.5}>
                        {sec.linkedCerts.length}
                      </Badge>
                    </HStack>
                    <VStack align="stretch" spacing={2.5}>
                      {sec.linkedCerts.map((cert, i) => (
                        <HStack key={i} justify="space-between" bg="whiteAlpha.700" p={3} borderRadius="lg" border="1px solid" borderColor="white" _hover={{ bg: "white", borderColor: "brand.400", transform: "translateY(-1px)" }} transition="all 0.2s">
                          <VStack align="start" spacing={0.5}>
                            <HStack spacing={2} flexWrap="wrap">
                              <Text fontSize="xs" fontWeight="800" color="brand.900">{cert.name}</Text>
                              {cert.isNew && <Badge colorScheme="green" fontSize="9px" borderRadius="full">{isAr ? "جديد" : "NEW"}</Badge>}
                            </HStack>
                            <Text fontSize="10px" color="brand.600" fontWeight="bold">{cert.issuer}</Text>
                          </VStack>
                          <Button as={Link} href={cert.link} isExternal size="xs" colorScheme="blue" variant="solid" rightIcon={<FaExternalLinkAlt />} flexShrink={0} _hover={{ textDecoration: "none" }}>Verify</Button>
                        </HStack>
                      ))}
                    </VStack>
                  </MotionBox>
                ))}
              </SimpleGrid>

            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Certifications;