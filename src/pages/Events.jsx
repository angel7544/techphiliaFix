"use client"

import { useState, useEffect, useRef } from "react"
import { Calendar, Clock, MapPin, Search, X, Phone, User, Download } from "lucide-react"
import placeholderImage from "../assets/placeholder.svg"
import codeAvita from "../assets/events/codeavita.jpg"
import clashOfMinds from "../assets/events/clashofminds.jpg"
import hackathonUniver from "../assets/events/hackathon.jpg"
import hackathonSchool from "../assets/events/hackathonschool.jpg"
import amivogue from "../assets/events/amivogue.jpg"
import posterolic from "../assets/events/posterolic.jpg"
import techQuiz from "../assets/events/techquiz.jpg"
import techStory from "../assets/events/techstory.jpg"
import comedy from "../assets/events/comedy.png"
import snapShot from "../assets/events/snapshot.jpg"
import socialMedia from "../assets/events/social media.jpg"
import techshot from "../assets/events/techshot.jpg"
import trasurehuntSchool from "../assets/events/trasurehunt(school).jpg"
import trasurehuntUniver from "../assets/events/trasurehunt(universities).jpg"
import workshop from "../assets/events/workshop.jpg"
import SEO from "../components/SEO"

// Updated event data with additional information for the info modal
const eventsData = [
  // 21 April 2025 Events

  {
    id: 1,
    title: "Social Media Designing",
    description:
      "Website Designing: - Supported by Google Developer Groups Patna",
    image: socialMedia,
    date: "April 21, 2025",
    time: "2:30 PM - 5:30 PM",
    venue: "Amity University, Rupaspur Campus, Patna.",
    category: "Design",
    day: "21",
    registrationUrl: "https://www.amity.edu/nspg/Techphilia2025/",
    rules: [
      "Participants will compete individually.",
      "Participants must design a fully functional social media website where the website should have features including User Registration & Login Profile Page, Post Creation (Text/Image), Like/Comment Feature and Responsive Design.",
      "Backend Development - Participants will implement a backend with a database (e.g., MySQL, Firebase, MongoDB) for storing user data.",
      "Use of *no-code/low-code platforms* is allowed but may receive fewer points than fully coded projects.",
      "Participants must submit their project via live link before the deadline.",
      "Judging Criteria will include UI/UX Design (30%) – Clean, interactive, and user-friendly interface, Functionality (25%) – Working features like login, post creation, and engagement, Creativity & Innovation (20%) – Unique ideas and additional features, Backend Implementation (15%) – Proper database and server-side logic (bonus marks), Responsiveness & Optimization (10%) – Mobile-friendly and smooth performance.",
      "No use of pre-built website templates (Bootstrap templates or WordPress themes are not allowed) and AI-generated code is allowed but must be properly modified and implemented.",
      "Vulgar, offensive, or unethical content in any form will lead to immediate disqualification and no plagiarism – The project should be original and built by the participants.",
      "Each team will demonstrate their project and they should explain their features, tech stack, and unique aspects of their website.",
    ],
    facultyCoordinators: [
      {
        name: "Ms. Roshni Sharma",
        phone: "9905416233",
      },
      {
        name: "Dr. Ramesh Kumar",
        phone: "6203775658",
      },
    ],
    studentCoordinators: [
      {
        name: "Ashutosh Kumar",
        phone: "7004246315",
      },
      {
        name: "Angel ",
        phone: "9135893002",
      },
    ],
  },
  {
    id: 2,
    title: "Tech Story",
    description:
      "Narrate your tech journey and innovations through storytelling",
    image: techStory,
    date: "April 21, 2025",
    time: "2:30 PM - 5:30 PM",
    venue: "Amity University, Rupaspur Campus, Patna.",
    category: "Presentation",
    day: "21",
    registrationUrl: "https://www.amity.edu/nspg/Techphilia2025/",
    rules: [
      "PURPOSES:",
      "The purposes of this competition are to build the confidence for public speaking, improve the ability in telling stories in English and encourage the participants to be creative in engaging people or audiences.",
      "",
      "COMPETITION SEQUENCES:",
      "Storytelling Competition consists of 2 (two) rounds:",
      "• Preliminary Round:- 5 group participants with the highest score will go to the semi-final round.",
      "• Final Round:- The winner is directly determined from this round.",
      "",
      "GENERAL RULES:",
      "• Participants have to make group of 3-4 person.",
      "• All group will get a topic and the words related to it at the time of competition and they have to use the words to make a story and have to act according to their story.",
      "• Every participant in this competition must be a senior high school student or university student.",
      "• The committee of tech story will not provide refund for those who are disqualified or quit for any reason.",
      "The decision of the Judge shall be final & binding on all the participants.",
    ],
    facultyCoordinators: [
      {
        name: "Ms. Anu Priya",
        phone: "8271680191",
      },
    ],
    studentCoordinators: [
      {
        name: "Shivam",
        phone: "7667232275",
      },
      {
        name: "Shruti Srivastava",
        phone: "8004337335",
      },
    ],
  },
  {
    id: 3,
    title: "Workshop",
    description: "Hands-on learning experience with industry experts",
    image: workshop,
    date: "April 21, 2025",
    time: "11:00 AM - 4:00 PM",
    venue: "Amity University, Rupaspur Campus, Patna",
    category: "Learning",
    day: "21",
    registrationUrl: "https://www.amity.edu/nspg/Techphilia2025/",
    // Updated rules for the workshop
    rules: [
      "1. Generative AI",
      "Eligibility: Open to all interested students with basic programming knowledge.",
      "Laptops Required: Participants should bring their own laptops for hands-on sessions.",
      "Respect & Questions: Questions are welcome but should be asked at appropriate times.",
      "",
      "2. Cybersecurity",
      "Eligibility: Basic understanding of networking and computers preferred.",
      "Laptops & Tools: If required, participants should install necessary cybersecurity tools in advance.",
      "Ethical Conduct: Respect cybersecurity laws and ethical hacking principles.",
      "",
      "3. IOT",
      "Eligibility: Open to all students interested in the Internet of Things (IoT), regardless of experience level.",
      "Required Equipment: Participants should bring their own laptops and necessary software (if specified).",
      "Code of Conduct: Maintain discipline and professionalism throughout the workshop.",
      "Collaboration Friendly: Teamwork is encouraged for brainstorming sessions.",
    ],
    facultyCoordinators: [
      {
        name: "Mr. S.S Divedi",
        phone: "8787062033",
      },
      {
        name: "Mr. Amar Kumar",
        phone: "9579867147",
      },
    ],
    studentCoordinators: [
      {
        name: "Satyam Anand",
        phone: "7909059422",
      },
      {
        name: "Harsh Singh",
        phone: "8863035698",
      },
      {
        name: "Naincy kushwaha ",
        phone: "9279454588",
      },
    ],
  },
  {
    id: 4,
    title: "Code-A-Vita",
    description: "Debug Code: -Supported by Google Developer Groups Patna",
    image: codeAvita,
    date: "April 21, 2025",
    time: "11:00 AM - 1:30 PM",
    venue: "Amity University, Rupaspur Campus, Patna",
    category: "Debug Code",
    day: "21",
    registrationUrl: "https://www.amity.edu/nspg/Techphilia2025/",
    rules: [
      "The contestant must go through two rounds as mentioned below, this competition is entirely based on your coding skills.",
      "After completing the registration contestants should click on this link to join the telegram:",
      "About the Competition: There will be two rounds in this contest",
      "o Round 1: Error Detection (20 Minutes -20 Questions)",
      "o Round 2: Code Writing (40 Minutes - 02 Questions)",
      "This contest is for individuals only.",
      "Code directly from our platform, which supports more than 10 programming languages.",
      "Each challenge has a pre-determined score.",
      "All submissions will be checked through a plagiarism detector. Any case of code plagiarism will disqualify the participants from the contest.",
      "A participant's score depends on the number of test cases a participant's code submission successfully passes.",
      "Participants are ranked by score. If two or more participants achieve the same score, then the tie is broken by the total time taken to submit the last solution resulting in a higher score.",
      "The decision of the Judges will be final & binding on all the participants.",
    ],
    facultyCoordinators: [
      {
        name: "Dr. Naveen Kumar",
        phone: "8807123596",
      },
    ],
    studentCoordinators: [
      {
        name: "Om Prakash",
        phone: "9523173538",
      },
      {
        name: "Abhinav Raj",
        phone: "8404921703",
      },
    ],
  },
  {
    id: 5,
    title: "Clash of Minds",
    description:
      "Topic: - NEP (National Education Policy) it will be for the first round and for next round it will be given at the spot (School & University)",
    image: clashOfMinds,
    date: "April 21, 2025",
    time: "2:30 PM - 5:30 PM",
    venue: "Amity University, Rupaspur Campus, Patna",
    category: "Debate",
    day: "21",
    registrationUrl: "https://www.amity.edu/nspg/Techphilia2025/",
    rules: [
      "Each participant/team will be given maximum 10 minutes time to speak either in favour or against of the subject.",
      "Warning bell will be given after 8 minutes and a final bell after 10 minutes. If the participants exceed the allocated time then the marks will be deducted at the discretion of the judges.",
      "In the 1st round each debate will be a knockout battle so after the completion of round 1 half of the team will qualify. A spin wheel will spin and the 2-team facing each other will be decided and same which team will go for the motion and against the motion will be decided through spin wheel also.",
      "Result of 1st round will be declared by the judges as every 2 team debates and it should be the final decision.",
      "In round 2 topic will be declared on the spot and after the end of round 2, top 3 team will be the winner of CLASH OF THE MIND – DEBATE COMPETITION.",
      "The decision of the Judge shall be final & binding on all the participants.",
    ],
    facultyCoordinators: [
      {
        name: "Mr. Niraj Kumar Rai",
        phone: "7070556501",
      },
      {
        name: "Mr. Suman Kumar Mishra",
        phone: "9356804110",
      },
    ],
    studentCoordinators: [
      {
        name: "Aditya Kumar",
        phone: "9608383670",
      },
      {
        name: "Ayushi",
        phone: "8986285596",
      },
    ],
  },
  {
    id: 6,
    title: "Tech Shot",
    description:
      "Theme: - Street Vibes, Video Making Competition (Online Submission)",
    image: techshot,
    date: "April 21, 2025",
    time: "10:00 AM - 11:00 AM",
    venue: "Amity University, Rupaspur Campus, Patna",
    category: "Videography",
    day: "21",
    registrationUrl: "https://www.amity.edu/nspg/Techphilia2025/",
    rules: [
      "This event is based on Video Editing and winners will be decided on the basis of their videos.",
      "There will be no such room requirements as everything will be online.",
      "Participants will receive their theme through calls and Mail.",
      "Participants will receive their theme 1 week before the event date to prepare their videos and they must submit it on 1st day of event.",
      "Participants will submit their videos through Mp4 file format and winner's video will be played in Seminar Hall.",
      "Exciting prizes for winners and certificate will be given to every participant.",
      "",
      "Judging Criteria:",
      "o Quality",
      "o Content",
      "o Graphics",
      "o Texts",
      "o Voice overs",
      "The decision of the Judges will be final & binding on all the participants",
    ],
    facultyCoordinators: [
      {
        name: "Mr. Abhhinav Sahay",
        phone: "9117506246",
      },
    ],
    studentCoordinators: [
      {
        name: "Minshu Dubey",
        phone: "8210430216",
      },
      {
        name: "Mayank Kumar",
        phone: "6207603715",
      },
    ],
  },
  {
    id: 7,
    title: "Snap Shot",
    description: "Theme: - Unnat Bihar Viksit Bihar (Online Submission)",
    image: snapShot,
    date: "April 21, 2025",
    time: "10:00 AM - 11:00 AM",
    venue: "Amity University, Rupaspur Campus, Patna.",
    category: "Photography",
    day: "21",
    registrationUrl: "https://www.amity.edu/nspg/Techphilia2025/",
    rules: [
      'All photos must align with the theme "Unnat Bihar, Viksit Bihar" (Developed & Progressive Bihar).',
      "Photos must be original and taken by the participant. Only minimal editing (brightness, contrast, cropping) is allowed—no excessive filters or AI-generated content.",
      "Black & white or color photos are acceptable.",
      "Each participant can submit only one photograph and the submission must be in JPEG/PNG format with high resolution.",
      "A short caption (20-50 words) explaining the relevance of the photo is mandatory.",
      'Judging Criteria includes Relevance to Theme (How well it represents "Unnat Bihar, Viksit Bihar"), Creativity & Uniqueness and Photography Skills (Composition, lighting, framing).',
      "No offensive, disrespectful, or manipulated images.",
      "Plagiarism or submitting stock images will lead to disqualification.",
    ],
    facultyCoordinators: [
      {
        name: "Dr. Sushant Dubey",
        phone: "7061921682",
      },
    ],
    studentCoordinators: [
      {
        name: "Aman Kumar",
        phone: "9631730832",
      },
      {
        name: "Monika Arya",
        phone: "7870883933",
      },
    ],
  },
  {
    id: 8,
    title: "Tech Quiz",
    description: "Test your knowledge on the latest technology trends",
    image: techQuiz,
    date: "April 21, 2025",
    time: "11:00 PM - 1:30 PM",
    venue: "Amity University, Rupaspur Campus, Patna",
    category: "Quiz",
    day: "21",
    registrationUrl: "https://www.amity.edu/nspg/Techphilia2025/",
    rules: [
      "Article 1: Subject",
      "The quiz consists in a multiple-choice questionnaire based on the Information Technology. The winners will be chosen through an automatic draw from the names of the participants who have realized a perfect score.",
      "",
      "Article 2: Conditions of participation",
      "Participation is open to all students from Class 8 Standards and onwards",
      "o Team TECHPHILIA reserves the right to conduct necessary checks in order to verify the identity, e-mail address, School/College Verification etc. of the participants.",
      "o The participants who have given incomplete or inaccurate personal and contact details will be disqualified for the draw, as will be the participant who refuses that their personal details – which are necessary for the quiz – be collected, kept and used.",
      "o Participation in the quiz implies that participants accept the integrity of these rules.",
      "o The decision of the quiz-master will be final and will not be subjected to any change.",
      "o The participants shall not be allowed to use mobile or other electronic instruments.",
      "o The questions shall be in the form of multiple choice, True / False statement, Specific answer question etc.",
      "o Replacement of any participant is not allowed after registration",
      "",
      "Article 3: Terms of participation",
      "o The participant answers maximum questions and validates his or her participation by clicking on the final submit button.",
      "",
      "PRELEMINARY ROUND",
      "o Each participant will get 30 multiple choice objective type questions Time limit - 15 minutes (No negative marking)",
      "o Only 30 participants would be selected for STAGE ROUNDS",
      "o In case of tie between 2 or more participants, further 5 questions would be asked for final selection",
      "o The selected teams shall have to appear for the final round",
      "",
      "FINAL QUIZ-STAGE ROUNDS",
      "Round 1",
      "o Participants will get 25 multiple choice objective type questions Time limit - 10 minutes",
      "o Participant must have to attempt all questions.",
      "o 2 marks for correct answer and negative marks for wrong answer (0.25 marks for each wrong answer).",
      "o Only 15 participants would be selected for RAPID FIRE ROUND.",
      "",
      "Round 2- RAPID FIRE ROUND",
      "o Participants will get 20 multiple choice objective type questions Time limit - 5 minutes",
      "o Participant must have to attempt all questions.",
      "o 2 marks for correct answer and negative marks for wrong answer (0.25 marks for wrong answer).",
      "o Only 3 participants would be selected as Winners.",
      "",
      "The decision of the Judge shall be final & binding on all the participants.",
    ],
    facultyCoordinators: [
      {
        name: "Ms Khushboo",
        phone: "7739946565",
      },
    ],
    studentCoordinators: [
      {
        name: "Aditya Bansal",
        phone: "9693521347",
      },
      {
        name: "Arpita Kumari",
        phone: "6209946308",
      },
    ],
  },
  {
    id: 9,
    title: "Stand Up Comedy",
    description: "Laugh out loud with tech-themed comedy performances",
    image: comedy,
    date: "April 21, 2025",
    time: "11:00 AM - 2:00 PM",
    venue: "Amity University, Rupaspur Campus, Patna.",
    category: "Entertainment",
    day: "21",
    registrationUrl: "https://www.amity.edu/nspg/Techphilia2025/",
    rules: [
      "Each performer gets a fixed time slot of 5-7 minutes. Exceeding the time limit may result in deduction of points.",
      "The content must be original and plagiarism of jokes is strictly prohibited and reusing well-known internet jokes or memes should be avoided.",
      "Avoid offensive jokes targeting religion, caste, race, gender, or personal attacks.",
      "There should be no vulgar, obscene, or excessively adult content.",
      "Light roasting is allowed but should be in good spirit and not hurtful.",
      "The performer must engage with the audience but should not harass or make anyone uncomfortable.",
      "Mild interaction is allowed, but disrupting the audience or making personal remarks is not.",
      "Judging Criteria includes Humour & Content (Creativity, originality, and wit), Delivery & Stage Presence (Confidence, expressions, and body language), Audience Engagement (Ability to keep the crowd entertained), Timing & Flow (Smooth transitions, punchlines, and avoiding long pauses)",
      "Violation of content guidelines may lead to a warning or disqualification and if any act is deemed too offensive or inappropriate by the organizers, the performer may be asked to leave the stage.",
    ],
    facultyCoordinators: [
      {
        name: "Mr. Prasanna Kumar",
        phone: "9097621926",
      },
      {
        name: "Niraj Kumar Rai",
        phone: "7070556501",
      },
    ],
    studentCoordinators: [
      {
        name: "Sahil Raj",
        phone: "8340663823",
      },
      {
        name: "Divyanshu Kumar",
        phone: "8271506147",
      },
    ],
  },
  {
    id: 10,
    title: "Hackathon (School)",
    description: "Theme: - Innovate for Earth, Supported by Google Developer Groups Patna",
    image: hackathonSchool,
    date: "April 22, 2025",
    time: "10:00 AM - 6:00 PM",
    venue: "ShriKrishna Science Centre, Gandhi Maidan, Patna.",
    category: "Hackathon",
    day: "22",
    registrationUrl: "https://www.amity.edu/nspg/Techphilia2025/",
    rules: [
      "Date: April 22 (World Earth Day)",
      "•	Duration: 8 hours",
      "•	Target Audience: School students (middle & high school)",
      "•	Team Size: 2-4 members per team",
      "•	Mode: On the Spot",
      "•	Team Size: 2-4 members per team",
      "   Problem Statements (Example Topics)",
      "1.	Eco-friendly Transportation – Create a solution to promote cycling, carpooling, or public transport.",
      "2.	Waste Management – Build a solution to help users segregate & recycle waste effectively.",
      "3.	Water Conservation – Develop a smart system to track and reduce water usage.",
      "4.	Air Pollution Monitoring – Design an AI-based tool to analyse air quality.",
      "5.	Green Energy Awareness – Gamify learning about solar, wind, and other renewable energy sources.",
      "   Judging Criteria",
      "•	Innovation & Creativity (30%) – Uniqueness of the idea",
      "•	Technical Implementation (30%) – How well the solution is developed",
      "•	Impact on Environment (20%) – Potential real-world benefits",
      "•	Presentation & Pitch (20%) – Clarity and effectiveness of explanation",
      "   Prizes & Recognition",
      "•	Winner: Cash Prize + Certificate",
      "•	Winner: ₹1500, 1st Runner-up: ₹1000, 2nd Runner-up: ₹800",
      "•	Official Certificate from GDG Patna for all top performers",
      "•	Special Bonus: Complimentary access to the InternNexus Summer Bootcamp for the Winner, 1st Runner-up, and 2nd Runner-up!",
      "This bootcamp is specially curated to strengthen core tech skills and ignite a passion for cutting-edge technologies at an early age.",
      "Participation certificates for all",
    ],
    facultyCoordinators: [
      {
        name: "Dr Naveen Kumar",
        phone: "8807123596",
      },
      {
        name: "Mr S.S Dwivedi",
        phone: "8787062033",
      },
    ],
    studentCoordinators: [
      {
        name: "Nikhil Ranjan",
        phone: "9576427354",
      },
      {
        name: "Arrav Pulkit",
        phone: "8936040289",
      },
      {
        name: "Hariom Sharnam",
        phone: "8539826023",
      },
    ],
  },

  // 22 April 2025 Events
  {
    id: 11,
    title: "Hackathon (University)",
    description: "Theme: - Digital Earth: Smart Solutions for a Sustainable World, Supported by Google Developer Groups Patna",
    image: hackathonUniver,
    date: "April 22, 2025",
    time: "10:00 AM - 6:00 PM",
    venue: "ShriKrishna Science Centre, Gandhi Maidan, Patna",
    category: "Hackathon",
    day: "22",
    registrationUrl: "https://www.amity.edu/nspg/Techphilia2025/",
    problemStatements: [
      {
        title: "AI-Powered Plastic Waste Detection from Aerial Images",
        description: "Develop an AI/ML model that can identify and classify plastic waste in natural environments (beaches, rivers, forests) using drone or satellite imagery. The model should assist local authorities or NGOs in targeting clean-up operations.",
        technology: "Computer Vision, Satellite/Drones, CNNs, Object Detection (YOLO/Detectron2)",
        solutionRequirements: [
          "Data Collection & Annotation: Collect drone/satellite imagery datasets and annotate plastic waste",
          "Object Detection Model: Implement models like YOLOv5, Faster R-CNN, or Detectron2"
        ]
      },
      {
        title: "Smart Water Usage Monitoring and Forecasting System",
        description: "Build an IoT + ML platform that predicts household or agricultural water consumption patterns and suggests optimal usage schedules to reduce wastage and enhance water conservation.",
        technology: "Time Series Forecasting, IoT Sensors, Anomaly Detection",
        solutionRequirements: [
          "IoT Sensor Data Simulator: Simulate water flow data with anomalies",
          "Forecasting Engine: Use ML or Deep Learning for consumption prediction",
          "Anomaly Detection Module: Detect leaks and unusual usage patterns"
        ]
      },
      {
        title: "Deforestation Risk Prediction and Alert System",
        description: "Use satellite data and ML to identify areas at risk of illegal deforestation. The system should analyze land use changes over time and send early warnings to authorities.",
        technology: "Remote Sensing, Geospatial Data, LSTM/Transformer models",
        solutionRequirements: [
          "Satellite Data Acquisition: Use datasets from NASA, Sentinel, Google Earth Engine",
          "ML Model for Risk Prediction: Forecast likely deforestation zones",
          "Alert Engine: Set thresholds for vegetation loss and notify authorities"
        ]
      },
      {
        title: "Urban Heat Island Effect Visualizer and Reducer",
        description: "Create an interactive tool that uses satellite and urban data to visualize heat islands in cities and recommend green architecture interventions.",
        technology: "Geospatial ML, GIS Tools, Data Visualization, Recommender Systems",
        solutionRequirements: [
          "Urban Data Aggregation: Collect temperature and vegetation data",
          "Heat Island Detection: Classify heat-affected areas",
          "Impact Analysis: Correlate temperature with pollution and health stats",
          "Green Intervention Recommendation Engine"
        ]
      },
      {
        title: "Sustainable Living AI Assistant",
        description: "Design a personal AI assistant that guides users toward a sustainable lifestyle by tracking their carbon footprint and suggesting greener alternatives.",
        technology: "NLP, Recommendation Systems, User Behavior Modeling",
        solutionRequirements: [
          "User Activity Logging: Track electricity, travel, and shopping",
          "Carbon Footprint Estimator: Calculate emissions from activities",
          "NLP-based Chat Assistant: Build a sustainability-focused chatbot",
          "Recommender System: Suggest eco-friendly alternatives"
        ]
      },
      {
        title: "Intelligent Home Power Consumption Monitoring and Optimization System",
        description: "Develop an AI-powered system that monitors power consumption of different household appliances, identifies energy-draining devices, and recommends optimization strategies.",
        technology: "Python, TensorFlow, FastAPI, React/Streamlit",
        solutionRequirements: [
          "Real-time Power Monitoring and Visualization",
          "Appliance-Level Consumption Breakdown",
          "Usage Prediction and Anomaly Detection",
          "Optimization Suggestions for Energy Efficiency"
        ]
      },
      {
        title: "AI-Driven Eco-Friendly Gardening Assistant",
        description: "Develop an AI-powered gardening assistant that helps users create and maintain eco-friendly gardens by recommending native plants and optimizing care schedules.",
        technology: "TensorFlow/Keras, Scikit-learn, FastAPI/Flask, React.js/Streamlit",
        solutionRequirements: [
          "Personalized Plant Recommendations",
          "Watering and Care Optimization",
          "Plant Disease Detection via Image Recognition",
          "Eco-Impact Score Calculation",
          "Companion Planting Suggestions"
        ]
      },
      {
        title: "FairChain – AI-Powered Transparent Agri-Marketplace",
        description: "Design a digital platform that connects farmers, intermediaries, and consumers with transparent pricing, AI-powered forecasting, and traceability features.",
        technology: "React Native/Next.js, Django/FastAPI, Time Series models",
        solutionRequirements: [
          "Farmer Onboarding and Produce Listing",
          "AI-Powered Demand Forecasting",
          "Dynamic Pricing and Fair Profit Sharing",
          "End-to-End Traceability System",
          "Transparent Transaction Ledger"
        ]
      }
    ],
    rules: [
      "Each team will have minimum 2 and maximum 4 members.",
      "Participants must arrange their own necessary equipment, including laptops, software, and any other required resources.",
      "The problem statement will be released one week before the hackathon on the official website of Techphilia.",
      "Participants will showcase their initial solution before the hackathon day.",
      "The solution will be evaluated by the judging panel.",
      "After the evaluation, further tasks will be assigned to shortlisted teams.",
      "The hackathon will run for 8 hours and teams must complete their task within the given time.",
      "Judging Criteria includes innovation & creativity (How unique and practical is the solution?), Feasibility (Can this solution be implemented in real life?), Technical Implementation (How well is the solution built?), Presentation & Clarity (How well does the team explain their idea?) and Teamwork & Collaboration (How effectively did the team work together?)",
      "Judges will select the best team based on the criteria. Prizes and certificates will be awarded to the winners.",
      "•	Winner: Cash Prize + Certificate",
      "•	Prize pool - Winner: ₹5000, 1st Runner-up: ₹3000, 2nd Runner-up: ₹2000",
      "•	Official Certificate from GDG Patna for all top performers",
      "•	Special Bonus: Internship Opportunity:",
      "•	Winner, 1st Runner-up, and 2nd Runner-up will receive a free internship from InternNexus.",
      "This internship offers hands-on experience, expert mentorship, and upskilling opportunities aligned with the latest industry standards—empowering students for real-world success.",
      "Participation certificates for all",
    ],
    facultyCoordinators: [
      {
        name: "Dr. Naveen Kumar",
        phone: "8807123596",
      },
      {
        name: "Dr. S.S Divedi",
        phone: "8787062033",
      },
    ],
    studentCoordinators: [
      {
        name: "Rishabh Kumar",
        phone: "9508287117",
      },
      {
        name: "Md Raiyan",
        phone: "9508749104",
      },
      {
        name: "Prachi Kumari",
        phone: "9279499005",
      },
    ],
  },
  {
    id: 12,
    title: "Posterolic",
    description: "THEME: - Sustainable earth, Creative minds",
    image: posterolic,
    date: "April 22, 2025",
    time: "11:00 AM - 1:00 PM",
    venue: " ShriKrishna Science Centre, Gandhi Maidan, Patna.",
    category: "Design",
    day: "22",
    registrationUrl: "https://www.amity.edu/nspg/Techphilia2025/",
    rules: [
      "Each Participant can make only one Poster.",
      "The poster must be made on the A3 size sheet with margins (0.5 inches) drawn with black pen/marker.",
      "Poster can be made using pencil, crayon, watercolour, oil paint, etc. Photographs, wires, other 3D objects, print-outs won't be acceptable. It should be original and hand made.",
      "The Topic of poster and theme should be clearly mentioned at the Top Margin of the Poster.",
      "Poster should not contain any personal details like Name, Class, College etc. of the participants. These details should be mentioned in registration form only.",
      "Participant should explain the poster describing the topic and content of the poster.",
      "Student can explain their posters in either English, or Hindi Languages.",
      "Judgement Criteria:",
      "• Relevance to the theme.",
      "• Originality",
      "• Artistic composition.",
      "• Message conveyed by the poster.",
      "• Effectiveness in communicating the intended message.",
      "The decision of the Judge shall be final & binding on all the participants.",
    ],
    facultyCoordinators: [
      {
        name: "Mr. Amar Kumar",
        phone: "9579867147",
      },
      {
        name: "Dr. Ravi Kumar",
        phone: "7091554059",
      },
    ],
    studentCoordinators: [
      {
        name: "Siddhi Kumari",
        phone: "8340435069",
      },
      {
        name: "Anjali Singh",
        phone: "8789905928",
      },
    ],
  },
  {
    id: 13,
    title: "Treasure Hunt (University)",
    description:
      "Advanced treasure hunt for university students with technical challenges",
    image: trasurehuntUniver,
    date: "April 23, 2025",
    time: "9:00 AM - 10:00 AM",
    venue: "ShriKrishna Science Centre, Gandhi Maidan, Patna.",
    category: "Game",
    day: "23",

    registrationUrl: "https://www.amity.edu/nspg/Techphilia2025/",
    rules: [
      "Each team should consist of 3 to 5 members.",
      "All teams begin at the designated starting location. The first clue is given at the start, leading to the next location.",
      "Teams must solve each clue to move forward. Clues may involve riddles, puzzles, ciphers, or physical challenges.",
      "Teams must follow the designated paths/areas and should not enter restricted zones.",
      "No use of mobile phones, internet, or external help unless explicitly allowed.",
      "The first team to solve all clues and reach the final treasure wins. If no team finds the treasure within the time limit, the team closest to the finish wins.",
      "The team that finds the treasure first or completes the most clues in the least time wins.",
    ],
    facultyCoordinators: [
      {
        name: "Mr. Prasanna Kumar",
        phone: "9097621926",
      },
    ],
    studentCoordinators: [
      {
        name: "Vishal Prakash",
        phone: "9798751083",
      },
      {
        name: "Ravi Ranjan",
        phone: "7061231387",
      },
    ],
  },

  // 23 April 2025 Events
  {
    id: 14,
    title: "Amivogue (School)",
    description: "Theme: - Nature's Runway (Fashion Show)",
    image: amivogue,
    date: "April 23, 2025",
    time: "11:00 AM - 2:00 PM",
    venue: "ShriKrishna Science Centre, Gandhi Maidan, Patna.",
    category: "Fashion",
    day: "23",
    registrationUrl: "https://www.amity.edu/nspg/Techphilia2025/",
    rules: [
      "It is a team event. A team can have maximum of 8 members.",
      "Time limit for every team would be 6 minutes (Including setup and the performance both).",
      "Negative marking if participants exceed time limit.",
      "Team Should carry their sound tracks in pen drive and should be submitted in advance.",
      "Vulgarity is strongly prohibited. Any form of obscenity will lead to debarring the team from the contest.",
      "Team will be judged on costumes, theme, walking stance, attitude, and tag line.",
      "Each group should have one tag line representing their group and the theme (Nature's Runway).",
      "Decision of the judges will be final and binding.",
      "All costumes are permitted, which maintain decency including original costumes & fashion designs.",
      "Purchased, professionally made, or rented costumes are permitted",
    ],
    facultyCoordinators: [
      {
        name: "Mr. Suryanarayan Ojha",
        phone: "8078609002",
      },
      {
        name: "Mr. Avishek Choudhury",
        phone: "8102224919",
      },
      {
        name: "Ms. Sakshi Pandey",
        phone: "7738935977",
      },
    ],
    studentCoordinators: [
      {
        name: "Swyam Singh",
        phone: "9263833141",
      },
      {
        name: "Akansha Singh",
        phone: "6203345592",
      },
      {
        name: "Baishnavi Kumari Sharma",
        phone: "8102525658",
      },
      {
        name: "Ashwini Kumar",
        phone: "6206882275",
      },
    ],
  },
  {
    id: 15,
    title: "Amivogue (University)",
    description: "Theme: - Nature's Runway (Fashion Show)",
    image: amivogue,
    date: "April 23, 2025",
    time: "11:00 AM - 2:00 PM",
    venue: "ShriKrishna Science Centre, Gandhi Maidan, Patna.",
    category: "Fashion",
    day: "23",
    registrationUrl: "https://www.amity.edu/nspg/Techphilia2025/",
    rules: [
      "It is a team event. A team can have maximum of 8 members.",
      "Time limit for every team would be 6 minutes (Including setup and the performance both).",
      "Negative marking if participants exceed time limit.",
      "Team Should carry their sound tracks in pen drive and should be submitted in advance.",
      "Vulgarity is strongly prohibited. Any form of obscenity will lead to debarring the team from the contest.",
      "Team will be judged on costumes, theme, walking stance, attitude, and tag line.",
      "Each group should have one tag line representing their group and the theme (Nature's Runway).",
      "Decision of the judges will be final and binding.",
      "All costumes are permitted, which maintain decency including original costumes & fashion designs.",
      "Purchased, professionally made, or rented costumes are permitted",
    ],
    facultyCoordinators: [
      {
        name: "Mr. Suryanarayan Ojha",
        phone: "8078609002",
      },
      {
        name: "Mr. Avishek Choudhury",
        phone: "8102224919",
      },
      {
        name: "Ms. Sakshi Pandey",
        phone: "7738935977",
      },
    ],
    studentCoordinators: [
      {
        name: "Swyam Singh",
        phone: "9263833141",
      },
      {
        name: "Akansha Singh",
        phone: "6203345592",
      },
      {
        name: "Baishnavi Kumari Sharma",
        phone: "8102525658",
      },
      {
        name: "Ashwini Kumar",
        phone: "6206882275",
      },
    ],
  },
  {
    id: 16,
    title: "Treasure Hunt (School)",
    description: "Exciting treasure hunt for school students with tech clues",
    image: trasurehuntSchool,
    date: "April 21, 2025",
    time: "11:00 AM - 12:30 PM",
    venue: "Amity University, Rupaspur Campus, Patna.",
    category: "Game",
    day: "21",
    registrationUrl: "https://www.amity.edu/nspg/Techphilia2025/",
    rules: [
      "Each team should consist of 3 to 5 members.",
      "All teams begin at the designated starting location. The first clue is given at the start, leading to the next location.",
      "Teams must solve each clue to move forward. Clues may involve riddles, puzzles, ciphers, or physical challenges.",
      "Teams must follow the designated paths/areas and should not enter restricted zones.",
      "No use of mobile phones, internet, or external help unless explicitly allowed.",
      "The first team to solve all clues and reach the final treasure wins. If no team finds the treasure within the time limit, the team closest to the finish wins.",
      "The team that finds the treasure first or completes the most clues in the least time wins.",
    ],
    facultyCoordinators: [
      {
        name: "Mr. Prasanna Kumar",
        phone: "9097621926",
      },
    ],
    studentCoordinators: [
      {
        name: "Ankit Kumar",
        phone: "9534439001",
      },
      {
        name: "Shivendu Kumar",
        phone: "7909022881",
      },
    ],
  },
]




const Events = () => {
  const [activeFilter, setActiveFilter] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredEvents, setFilteredEvents] = useState(eventsData)
  // New state for the info modal
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [isProblemStatementsModalOpen, setIsProblemStatementsModalOpen] = useState(false)
  const [selectedProblemStatements, setSelectedProblemStatements] = useState([])
  // Reference to the university hackathon event
  const universityHackathonRef = useRef(null)

  // Check URL hash on mount to potentially open problem statements modal
  useEffect(() => {
    // Find university hackathon event
    const universityHackathon = eventsData.find(event => event.id === 11);
    
    if (window.location.hash === '#hackathon-university' && universityHackathon) {
      // Store reference to the university hackathon
      universityHackathonRef.current = universityHackathon;
      // Open the problem statements modal
      setSelectedProblemStatements(universityHackathon.problemStatements || []);
      setIsProblemStatementsModalOpen(true);
      document.body.style.overflow = "hidden";
    }
  }, []);

  // Filter events based on both date filter and search query
  useEffect(() => {
    let result = eventsData

    // Apply date filter
    if (activeFilter !== "all") {
      result = result.filter((event) => event.day === activeFilter)
    }

    // Apply search filter if there's a search query
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase().trim()
      result = result.filter(
        (event) =>
          event.title.toLowerCase().includes(query) ||
          event.description.toLowerCase().includes(query) ||
          event.category.toLowerCase().includes(query) ||
          event.venue.toLowerCase().includes(query),
      )
    }

    setFilteredEvents(result)
  }, [activeFilter, searchQuery])

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
  }

  // Clear search
  const clearSearch = () => {
    setSearchQuery("")
  }

  // Open modal with event info
  const openInfoModal = (event) => {
    setSelectedEvent(event)
    setIsModalOpen(true)
    // Prevent scrolling when modal is open
    document.body.style.overflow = "hidden"
  }

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedEvent(null)
    // Re-enable scrolling
    document.body.style.overflow = "auto"
  }

  // Close modal when clicking outside
  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      closeModal()
    }
  }

  // Close modal with escape key
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === "Escape" && isModalOpen) {
        closeModal()
      }
    }

    window.addEventListener("keydown", handleEscKey)
    return () => {
      window.removeEventListener("keydown", handleEscKey)
      // Make sure to re-enable scrolling when component unmounts
      document.body.style.overflow = "auto"
    }
  }, [isModalOpen])

  // Open problem statements modal
  const openProblemStatementsModal = (event) => {
    setSelectedProblemStatements(event.problemStatements || [])
    setIsProblemStatementsModalOpen(true)
    document.body.style.overflow = "hidden"
  }

  // Close problem statements modal
  const closeProblemStatementsModal = () => {
    setIsProblemStatementsModalOpen(false)
    setSelectedProblemStatements([])
    document.body.style.overflow = "auto"
  }

  return (
    <>
      <SEO
        title="Events | Techphilia 8.0"
        description="Explore exciting events at Techphilia 8.0 - The Annual Technical Festival of Amity University Patna. Join workshops, hackathons, coding competitions, and more from April 21-23, 2025. Register now for a transformative tech experience."
        keywords="techphilia events, techphilia 8.0, technical fest competitions, amity university patna workshops, hackathon patna, Code-A-Vita, Clash of Minds, Social Media Designing, Treasure Hunt, TechShot, amity university events, tech workshops in patna, coding competitions, april 2025 tech events, student tech competitions, bihar tech fest"
        image="https://www.aiitpevent.in/events-og-image.png"
        url="https://www.aiitpevent.in/events"
        type="website"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "headline": "Techphilia 8.0 Events Schedule",
          "description": "Complete schedule of events for Techphilia 8.0, the Annual Technical Festival of Amity University Patna from April 21-23, 2025.",
          "mainContentOfPage": {
            "@type": "WebPageElement",
            "cssSelector": ".container"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Amity University Patna",
            "logo": {
              "@type": "ImageObject",
              "url": "https://aiitpevent.in/logo.png"
            }
          },
          "maintainer": {
            "@type": "Organization",
            "name": "Amity Institute of Information Technology"
          },
          "mainEntity": {
            "@type": "ItemList",
            "itemListElement": eventsData.map((event, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "Event",
                "name": event.title,
                "description": event.description,
                "startDate": `2025-04-${event.day}T${event.time.split(" - ")[0].replace(" ", "").replace("AM", ":00") || "09:00:00"}+05:30`,
                "endDate": `2025-04-${event.day}T${event.time.split(" - ")[1].replace(" ", "").replace("PM", ":00") || "17:00:00"}+05:30`,
                "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
                "eventStatus": "https://schema.org/EventScheduled",
                "location": {
                  "@type": "Place",
                  "name": event.venue,
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Rupaspur",
                    "addressLocality": "Patna",
                    "addressRegion": "Bihar",
                    "postalCode": "800001",
                    "addressCountry": "IN"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "25.6078",
                    "longitude": "85.1236"
                  }
                },
                "image": event.image,
                "organizer": {
                  "@type": "Organization",
                  "name": "Amity Institute of Information Technology",
                  "url": "https://amity.edu/patna/"
                },
                "offers": {
                  "@type": "Offer",
                  "url": event.registrationUrl,
                  "price": "0",
                  "priceCurrency": "INR",
                  "availability": "https://schema.org/InStock",
                  "validFrom": "2025-02-01T00:00:00+05:30"
                },
                "performer": {
                  "@type": "Organization",
                  "name": "Amity University Patna"
                },
                "keywords": ["techphilia", event.category, "technical festival", "amity patna", "tech event"]
              }
            }))
          }
        }}
      />
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-primary mb-2 text-center">Events</h1>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Explore our exciting lineup of technical competitions, workshops, and activities scheduled for TECHPHILIA
            8.0.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search events..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full px-4 py-2 pl-10 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 shadow-sm"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  aria-label="Clear search"
                >
                  <X size={18} />
                </button>
              )}
            </div>
          </div>

          {/* Date Filters */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex rounded-md shadow-sm bg-white">
              <button
                onClick={() => setActiveFilter("all")}
                className={`px-4 py-2 text-sm font-medium rounded-l-md border ${activeFilter === "all"
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
                  }`}
              >
                All Events
              </button>
              <button
                onClick={() => setActiveFilter("21")}
                className={`px-4 py-2 text-sm font-medium border-t border-b ${activeFilter === "21"
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
                  }`}
              >
                21 April
              </button>
              <button
                onClick={() => setActiveFilter("22")}
                className={`px-4 py-2 text-sm font-medium border-t border-b ${activeFilter === "22"
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
                  }`}
              >
                22 April
              </button>
              <button
                onClick={() => setActiveFilter("23")}
                className={`px-4 py-2 text-sm font-medium rounded-r-md border ${activeFilter === "23"
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
                  }`}
              >
                23 April
              </button>
            </div>
          </div>

          {/* No Results Message */}
          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search size={48} className="mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No events found</h3>
              <p className="text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="mt-4 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                >
                  Clear Search
                </button>
              )}
            </div>
          )}

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="premium-card group"
                itemScope
                itemType="https://schema.org/Event"
              >
                <meta itemProp="startDate" content={`2025-04-${event.day}T${event.time.split(" - ")[0].replace(" ", "").replace("AM", ":00") || "09:00:00"}+05:30`} />
                <meta itemProp="endDate" content={`2025-04-${event.day}T${event.time.split(" - ")[1].replace(" ", "").replace("PM", ":00") || "17:00:00"}+05:30`} />
                <meta itemProp="eventStatus" content="https://schema.org/EventScheduled" />
                <meta itemProp="eventAttendanceMode" content="https://schema.org/OfflineEventAttendanceMode" />

                <div className="relative h-100 overflow-hidden">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={`${event.title} - Techphilia 8.0 Event`}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    itemProp="image"
                  />
                  <div
                    className="absolute top-0 left-0 bg-secondary text-white font-bold py-1 px-3 rounded-md"
                    itemProp="keywords"
                  >
                    {event.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2" itemProp="name">{event.title}</h3>
                  <p className="text-gray-600 mb-4" itemProp="description">{event.description}</p>
                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2 text-secondary" />
                      <span itemProp="startDate">{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-2 text-secondary" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2 text-secondary" />
                      <span itemProp="location" itemScope itemType="https://schema.org/Place">
                        <span itemProp="name">{event.venue}</span>
                        <meta itemProp="address" content="Rupaspur, Patna, Bihar, 800001, India" />
                      </span>
                    </div>
                  </div>
                  {/* Updated buttons */}
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <button
                      onClick={() => openInfoModal(event)}
                      className="bg-white border border-primary text-primary hover:bg-primary/5 py-2 px-4 rounded-md transition-colors font-medium"
                      aria-label={`View details for ${event.title}`}
                    >
                      Info
                    </button>
                    <a
                      href={event.registrationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="premium-button hover:text-white text-center flex items-center justify-center"
                    >
                      Register
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Info Modal */}
        {isModalOpen && selectedEvent && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 modal-overlay"
            onClick={handleOutsideClick}
          >
            <div
              className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
              itemScope
              itemType="https://schema.org/Event"
            >
              <meta itemProp="startDate" content={`2025-04-${selectedEvent.day}T${selectedEvent.time.split(" - ")[0].replace(" ", "").replace("AM", ":00") || "09:00:00"}+05:30`} />
              <meta itemProp="endDate" content={`2025-04-${selectedEvent.day}T${selectedEvent.time.split(" - ")[1].replace(" ", "").replace("PM", ":00") || "17:00:00"}+05:30`} />
              <meta itemProp="eventStatus" content="https://schema.org/EventScheduled" />
              <meta itemProp="eventAttendanceMode" content="https://schema.org/OfflineEventAttendanceMode" />

              {/* Modal Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold text-primary" itemProp="name">{selectedEvent.title}</h3>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                    aria-label="Close modal"
                  >
                    <X size={24} />
                  </button>
                </div>
                <div className="mt-2 text-sm text-gray-500">
                  <span className="inline-block bg-secondary text-white px-2 py-1 rounded-md" itemProp="keywords">
                    {selectedEvent.category}
                  </span>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6">
                {/* Event Details */}
                <div className="mb-6">
                  <p className="text-gray-700 mb-4" itemProp="description">{selectedEvent.description}</p>
                  <div className="space-y-2 text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2 text-secondary" />
                      <span itemProp="startDate">{selectedEvent.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-2 text-secondary" />
                      <span>{selectedEvent.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2 text-secondary" />
                      <span itemProp="location" itemScope itemType="https://schema.org/Place">
                        <span itemProp="name">{selectedEvent.venue}</span>
                        <meta itemProp="address" content="Rupaspur, Patna, Bihar, 800001, India" />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Rules Section */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-primary mb-3">Rules & Guidelines</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    {selectedEvent.rules.map((rule, index) => (
                      <li key={index} className={`text-gray-700 ${rule === "" ? "list-none" : ""}`}>
                        {rule}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Problem Statements Button for University Hackathon */}
                {selectedEvent.id === 11 && (
                  <div className="mb-6">
                    <button
                      onClick={() => {
                        closeModal();
                        openProblemStatementsModal(selectedEvent);
                      }}
                      className="w-full bg-primary text-white py-3 px-4 rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                    >
                      <Download size={18} />
                      View Problem Statements
                    </button>
                  </div>
                )}

                {/* Coordinators Section */}
                <div className="grid md:grid-cols-2 gap-4">
                  {/* Faculty Coordinators */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-primary mb-3">Faculty Coordinators</h4>
                    {selectedEvent.facultyCoordinators ? (
                      // For events with multiple faculty coordinators
                      <div className="space-y-4">
                        {selectedEvent.facultyCoordinators.map((coordinator, index) => (
                          <div key={index} className="border-b border-gray-200 pb-2 last:border-0 last:pb-0"
                            itemProp="organizer" itemScope itemType="https://schema.org/Person">
                            <div className="flex items-center mb-1">
                              <User size={16} className="mr-2 text-secondary" />
                              <span className="text-gray-700" itemProp="name">{coordinator.name}</span>
                            </div>
                            <div className="flex items-center">
                              <Phone size={16} className="mr-2 text-secondary" />
                              <a href={`tel:${coordinator.phone}`} className="text-primary hover:underline" itemProp="telephone">
                                {coordinator.phone}
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      // For events with a single faculty coordinator
                      <div itemProp="organizer" itemScope itemType="https://schema.org/Person">
                        <div className="flex items-center mb-2">
                          <User size={16} className="mr-2 text-secondary" />
                          <span className="text-gray-700" itemProp="name">{selectedEvent.facultyCoordinator.name}</span>
                        </div>
                        <div className="flex items-center">
                          <Phone size={16} className="mr-2 text-secondary" />
                          <a
                            href={`tel:${selectedEvent.facultyCoordinator.phone}`}
                            className="text-primary hover:underline"
                            itemProp="telephone"
                          >
                            {selectedEvent.facultyCoordinator.phone}
                          </a>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Student Coordinators */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-primary mb-3">Student Coordinators</h4>
                    <div className="space-y-4">
                      {selectedEvent.studentCoordinators?.map((coordinator, index) => (
                        <div key={index} className="border-b border-gray-200 pb-2 last:border-0 last:pb-0"
                          itemProp="performer" itemScope itemType="https://schema.org/Person">
                          <div className="flex items-center mb-1">
                            <User size={16} className="mr-2 text-secondary" />
                            <span className="text-gray-700" itemProp="name">{coordinator.name}</span>
                          </div>
                          <div className="flex items-center">
                            <Phone size={16} className="mr-2 text-secondary" />
                            <a href={`tel:${coordinator.phone}`} className="text-primary hover:underline" itemProp="telephone">
                              {coordinator.phone}
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Registration Button */}
                <div className="mt-6 flex justify-center">
                  <a
                    href={selectedEvent.registrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full premium-button hover:text-white text-center flex items-center justify-center py-3"
                    itemProp="offers"
                    itemScope
                    itemType="https://schema.org/Offer"
                  >
                    <meta itemProp="price" content="0" />
                    <meta itemProp="priceCurrency" content="INR" />
                    <meta itemProp="availability" content="https://schema.org/InStock" />
                    <meta itemProp="url" content={selectedEvent.registrationUrl} />
                    Register Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Problem Statements Modal */}
        {isProblemStatementsModalOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 modal-overlay"
            onClick={closeProblemStatementsModal}
          >
            <div
              className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-fade-in"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold text-primary">Problem Statements</h3>
                  <div className="flex items-center gap-4">
                    <a
                      href="/documents/Techpilia 8.0 Hackathon Problem Statements_final-1.docx"
                      download
                      className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
                    >
                      <Download size={18} />
                      Download Problem Statements
                    </a>
                    <a
                      href="/documents/Hackathon_2025_IDEA_Presentation_Format.pptx"
                      download
                      className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
                    >
                      <Download size={18} />
                      Download PPT Sample
                    </a>
                    <button
                      onClick={closeProblemStatementsModal}
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                      aria-label="Close modal"
                    >
                      <X size={24} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 gap-6">
                  {selectedProblemStatements.map((problem, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow animate-slide-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <h4 className="text-xl font-semibold text-primary mb-3">{problem.title}</h4>
                      <p className="text-gray-700 mb-4">{problem.description}</p>
                      
                      <div className="mb-4">
                        <h5 className="text-lg font-medium text-primary mb-2">Technology Stack</h5>
                        <p className="text-gray-600">{problem.technology}</p>
                      </div>

                      <div>
                        <h5 className="text-lg font-medium text-primary mb-2">Solution Requirements</h5>
                        <ul className="list-disc pl-5 space-y-2">
                          {problem.solutionRequirements.map((requirement, reqIndex) => (
                            <li key={reqIndex} className="text-gray-600">{requirement}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Events

