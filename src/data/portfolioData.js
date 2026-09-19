export const skills = {
  frontend: [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 85 },
    { name: 'React.js', level: 80 },
    { name: 'Tailwind CSS', level: 75 },
  ],
  backend: [
    { name: 'Java', level: 85 },
    { name: 'Spring Boot', level: 80 },
  ],
  database: [
    { name: 'MySQL', level: 80 },
    { name: 'PostgreSQL', level: 75 },
  ],
  tools: [
    { name: 'Git', level: 80 },
    { name: 'GitHub', level: 80 },
    { name: 'VS Code', level: 90 },
  ],
};

export const projects = [
  {
    id: 1,
    title: 'SmartScan AI Evaluator',
    tagline: 'AI-powered answer sheet evaluation system',
    description:
      'A web-based system that uses OCR and Generative AI to automatically evaluate both objective and handwritten subjective exam answers with semantic understanding. It reduces manual effort, eliminates bias, and provides consistent, instant feedback to students.',
    goal:
      'Automate the evaluation of student answer sheets by combining OCR, image processing, and AI — eliminating manual grading effort and delivering instant, unbiased feedback.',
    use: 'Teachers upload student answer sheets (PDF/Image), the system extracts text via Tesseract OCR, preprocesses images with OpenCV, then uses an LLM (Ollama) and embedding similarity to score and generate detailed feedback. Results are shown on a dashboard.',
    features: [
      'Role-based access (Admin & Teacher)',
      'Upload student answer sheets (PDF/Image)',
      'OCR-based text extraction via Tesseract',
      'OpenCV image preprocessing for accuracy',
      'LLM + embedding similarity scoring',
      'Instant feedback generation',
      'Dashboard & analytics',
    ],
    tech: ['React.js', 'Java', 'Spring Boot', 'MySQL', 'Tesseract OCR', 'OpenCV', 'Ollama LLM', 'REST APIs'],
    techCategories: {
      Frontend: ['React.js', 'HTML5', 'CSS3', 'JavaScript'],
      Backend: ['Java', 'Spring Boot', 'REST APIs'],
      Database: ['MySQL'],
      'AI / Tools': ['Ollama (LLM)', 'Tesseract OCR', 'OpenCV', 'Embedding Service'],
    },
    formula: 'Final Score = (LLM Score + Similarity Score) / 2',
    image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=700&q=80',
    github: 'https://github.com/arunkumar3333/SmartScan-AI-Evaluator',
    demo: 'https://github.com/arunkumar3333/SmartScan-AI-Evaluator',
    badge: 'AI + OCR',
    badgeColor: 'from-purple-500 to-blue-500',
  },
  {
    id: 2,
    title: 'Carbon Emission Calculator',
    tagline: 'Full-stack carbon footprint tracking system',
    description:
      'A full-stack web application that calculates carbon emissions based on transportation data. Users upload Excel files and the system processes the data to compute CO₂ emissions, displaying results on an interactive dashboard with charts.',
    goal:
      'Provide individuals and organizations with a simple tool to track and visualize their carbon footprint from transportation, promoting environmental awareness and data-driven decisions.',
    use: 'Users register, log in, and upload an Excel file containing travel data (cities, vehicle type, distance). Apache POI reads the file, calculates emissions using the formula, stores results in MySQL, and renders category-wise charts on the dashboard.',
    features: [
      'User Registration & Login with session management',
      'Excel file upload (Apache POI)',
      'Automatic CO₂ emission calculation',
      'Interactive dashboard with Chart.js',
      'Category-wise emission analysis',
      'Total emission summary display',
    ],
    tech: ['Java Servlets', 'Hibernate', 'MySQL', 'AngularJS', 'Chart.js', 'Apache POI', 'Apache Tomcat'],
    techCategories: {
      Frontend: ['HTML5', 'CSS3', 'JavaScript', 'AngularJS', 'Chart.js'],
      Backend: ['Java Servlets', 'Hibernate'],
      Database: ['MySQL'],
      Tools: ['Apache POI', 'Apache Tomcat', 'Eclipse IDE'],
    },
    formula: 'Carbon Emission = Distance × Emission Factor × Number of Vehicles',
    image: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=700&q=80',
    github: 'https://github.com/arunkumar3333/java-carbon-emission-calculator',
    demo: 'https://github.com/arunkumar3333/java-carbon-emission-calculator',
    badge: 'Green Tech',
    badgeColor: 'from-green-500 to-emerald-500',
  },
  {
    id: 3,
    title: 'AI Resume Screening System',
    tagline: 'NLP-powered ATS candidate ranking platform',
    description:
      'An AI-powered resume screening system that analyzes resumes, compares them with job descriptions using TF-IDF NLP, and calculates ATS compatibility scores. Ranks candidates from high to low and provides a recruiter dashboard for efficient hiring.',
    goal:
      'Streamline the recruitment process by automating resume screening — saving recruiters hours of manual review and surfacing the most relevant candidates using NLP-based scoring.',
    use: 'Recruiters add a job description, upload multiple resumes, and the system extracts resume data, applies TF-IDF comparison against the job description, calculates an ATS score, and ranks candidates. Recruiters can then select or reject candidates from the dashboard.',
    features: [
      'User Registration & Login',
      'Add job descriptions with requirements',
      'Upload and parse multiple resumes',
      'TF-IDF NLP similarity scoring',
      'ATS score calculation & candidate ranking',
      'Top candidate highlighting',
      'Select / Reject candidates',
      'Dashboard analytics',
    ],
    tech: ['React.js', 'Java', 'Spring Boot', 'PostgreSQL', 'TF-IDF NLP', 'REST APIs'],
    techCategories: {
      Frontend: ['React.js', 'HTML5', 'CSS3', 'JavaScript'],
      Backend: ['Java', 'Spring Boot', 'REST APIs'],
      Database: ['PostgreSQL'],
      'AI / Logic': ['TF-IDF (NLP)', 'Rule-based ATS Scoring'],
    },
    formula: 'ATS Score = (0.7 × TF-IDF Score) + (0.3 × Rule-Based Score)',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=700&q=80',
    github: 'https://github.com/gndeeksha/AI-Based-Resume-Screening-System-Using-Java',
    demo: 'https://github.com/gndeeksha/AI-Based-Resume-Screening-System-Using-Java',
    badge: 'NLP + AI',
    badgeColor: 'from-orange-500 to-pink-500',
  },
];

export const internships = [
  {
    id: 1,
    company: 'Techspiration India Pvt Ltd',
    role: 'Full Stack Developer Intern',
    duration: 'February 2026',
    location: 'Bangalore, Karnataka',
    responsibilities: [
      'Developed an AI-powered system to evaluate answer sheets using OCR (Tesseract) for text extraction and OpenCV for image preprocessing.',
      'Implemented LLM (Ollama) and cosine similarity techniques to automatically generate scores and feedback based on student answers.',
      'Built a full-stack application using Java Spring Boot, React.js, and PostgreSQL, enabling efficient and automated answer evaluation.',
    ],
    technologies: ['Java', 'Spring Boot', 'React.js', 'PostgreSQL', 'Tesseract OCR', 'OpenCV', 'Ollama LLM', 'REST APIs'],
  },
];

export const certifications = [
  {
    id: 1,
    title: 'Java Foundation Certificate',
    organization: 'Oracle / Java Certification',
    date: '2026',
    link: '/certificates/java-foundation-certificate.jpg',
  },
  {
    id: 2,
    title: 'Full Stack Web Development Workshop',
    organization: 'Workshop (1-week intensive program)',
    date: '2025',
    link: '/certificates/fullstack-workshop.jpg',
  },
  {
    id: 3,
    title: 'Innovating with IoT – Process Design & Development',
    organization: 'IobiT Solutions, Bengaluru',
    date: '3-day program',
    link: '/certificates/iobit-iot.jpg',
  },
];
