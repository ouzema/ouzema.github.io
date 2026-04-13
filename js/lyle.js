/**
 * Lyle — AI Assistant for Oussema ARIBI's Portfolio
 * Client-side knowledge-based chatbot
 */
(function () {
  "use strict";

  // ── Knowledge base ──
  var KB = {
    name: "Oussema ARIBI",
    title: "Data Scientist & AI/ML Engineer",
    location: "Paris, France",
    email: "ouzema@yahoo.com",
    phone: "+33 6 95 40 03 51",
    github: "https://github.com/ouzema",
    linkedin: "https://www.linkedin.com/in/ouzema/",
    portfolio: "https://ouzema.github.io",
    languages: "French (Bilingual, DELF B2), English (Fluent, TOEIC B2), Arabic (Native), German (Beginner)",
    seeking: "an apprenticeship (alternance) starting September 2026 in AI/ML engineering, data science, or solutions engineering",

    summary: "Oussema is a Data Scientist and AI/ML Engineer with 2+ years of hands-on experience building production-grade AI systems: multi-agent LLM orchestration, pricing engines, and NLP pipelines. He is currently pursuing an MSc Data For Business at Albert School x Mines Paris - PSL (2025-2027).",

    skills: {
      programming: ["Python", "SQL", "R", "Java", "C", "Cypher", "JavaScript"],
      frameworks: ["Django", "PyTorch", "Hugging Face", "LangChain", "NumPy", "Pandas", "FastAPI", "Selenium", "Streamlit"],
      ai_ml: ["LLM Fine-Tuning", "Multi-Agent Systems", "LLM Orchestration", "NLP", "OCR", "Computer Vision", "Graph Databases", "Real-time Streaming", "Data Enrichment"],
      tools: ["Git", "AWS (S3)", "GCP", "n8n", "PostgreSQL", "Redis", "Linux", "Docker", "OpenAI / Mistral / Claude APIs"],
    },

    experience: [
      {
        role: "AI Solutions Engineer Intern",
        company: "Tamtam",
        location: "Paris, France",
        period: "Feb 2026 - Sep 2026",
        description: "Designed and deployed client-facing AI solutions (fine-tuned agents, data enrichment pipelines, analytics dashboards) following a Forward Deployment Engineering model. Led full project lifecycle from technical scoping to production deployment. Optimized the AI/Data stack architecture and benchmarked LLM configurations.",
        skills: ["AI Agents", "Data Pipelines", "LLMs", "API Integration", "SaaS", "Client Solutions"]
      },
      {
        role: "Data Scientist",
        company: "Satoripop",
        location: "Sousse, Tunisia",
        period: "Jul 2024 - Aug 2025",
        description: "Architected and deployed a multi-agent LLM orchestration system on a Graph Database, enabling autonomous task execution. Migrated a legacy AS400 pricing engine to Python/Django, integrated Redis caching cutting response time by 610ms with 99.999% accuracy. Built AI-powered customer support agents with n8n for intent detection and personalized travel recommendations.",
        skills: ["LLM", "Multi-Agent Systems", "Graph Database", "Redis", "Django", "n8n"]
      },
      {
        role: "Technical Supervisor (Part-time)",
        company: "EasyWaysCareers",
        location: "Remote",
        period: "Feb 2025 - Jul 2025",
        description: "Supervised 5+ AI student capstone projects end-to-end, enforcing rigorous research methodology and production-quality standards. Mentored students on ML system design and software engineering best practices.",
        skills: ["Mentoring", "Project Supervision", "AI", "Web Development"]
      },
      {
        role: "Freelance Data Scientist",
        company: "Leanios",
        location: "Sousse, Tunisia",
        period: "Aug 2024 - Jul 2025",
        description: "Engineered a multi-agent BI chatbot with voice integration and dynamic plot generation, reducing average user interaction time by 85%. Implemented robust error handling and recovery mechanisms, cutting chatbot failure rates by 78%.",
        skills: ["Voice Technology", "Multi-Agent Systems", "BI", "Data Visualization"]
      },
      {
        role: "Data Science Intern",
        company: "Leanios",
        location: "Sousse, Tunisia",
        period: "Feb 2024 - Jul 2024",
        description: "Developed an AI-powered NL-to-SQL assistant with real-time streaming pipeline, improving query handling efficiency by 90%. Refined NLP algorithms for semantic understanding, boosting search accuracy by 97%.",
        skills: ["NLP", "SQL", "AI Assistants", "Streaming"]
      },
      {
        role: "Data Science Intern",
        company: "SeekMake",
        location: "Tunis, Tunisia",
        period: "Jun 2023 - Aug 2023",
        description: "Developed Selenium automation bots for data collection, reclaiming 15 hours/week. Drove 30% uplift in marketing campaign effectiveness. Automated data cleansing pipelines reducing error rates by 88%.",
        skills: ["Web Scraping", "Selenium", "Python", "Automation"]
      },
      {
        role: "Data Science Intern",
        company: "Terraform",
        location: "Tunis, Tunisia",
        period: "Jan 2023 - May 2023",
        description: "Developed an OCR solution using deep learning achieving 95% accuracy, saving 300+ hours per year. Automated accounting data extraction reducing manual entry time by 80%.",
        skills: ["OCR", "Deep Learning", "Automation", "Feature Engineering"]
      }
    ],

    education: [
      { degree: "MSc Data For Business", school: "Albert School x Mines Paris - PSL", location: "Paris, France", period: "2025 - 2027" },
      { degree: "Master's in Data Science & AI (CS Engineering)", school: "EPI - International Multidisciplinary School", location: "Sousse, Tunisia", period: "2021 - 2024" },
      { degree: "Pre-Engineering (Physics & Technology)", school: "IPEIM Monastir", location: "Monastir, Tunisia", period: "2019 - 2021" }
    ],

    certificates: [
      "Neo4j Graph Data Science Certification",
      "AWS Academy Graduate - Machine Learning Foundations",
      "Spark Fundamentals I",
      "Vertex AI Machine Learning",
      "Microsoft Certified: Azure Fundamentals"
    ],

    projects: [
      { name: "NYOS APR", description: "Pharma AI analytics platform with real-time KPI dashboard, AI-powered analysis using Gemini, and automated annual product review reports. Built with FastAPI, React, and Google Generative AI. Hackathon project.", tech: ["FastAPI", "React", "Gemini", "Tailwind"] },
      { name: "LLMOps Pipeline", description: "End-to-end MLOps pipeline for fine-tuning Microsoft Phi-3 on Vertex AI with Kubeflow, PEFT/LoRA, and automated evaluation (ROUGE/BLEU scores).", tech: ["Kubeflow", "Vertex AI", "PEFT", "LoRA", "Hugging Face"] },
      { name: "Adult Income Prediction", description: "ML classification project predicting adult income levels using various algorithms and feature engineering.", tech: ["Python", "Scikit-learn", "Pandas"] },
      { name: "Smart Expense Management", description: "Intelligent expense tracking and management system with ML-powered categorization.", tech: ["Python", "ML", "Data Analysis"] },
      { name: "Time Series Analysis", description: "Time series forecasting project with multiple models and visualization.", tech: ["Python", "Statsmodels", "Pandas"] },
      { name: "GAN Transform", description: "Generative Adversarial Network for image transformation and generation.", tech: ["PyTorch", "GANs", "Computer Vision"] },
      { name: "Sketch-AI (U2-NET)", description: "AI-powered sketch generation from photos using the U2-NET architecture.", tech: ["U2-NET", "PyTorch", "Computer Vision"] },
      { name: "Sentiment Analysis", description: "NLP sentiment analysis system for text classification.", tech: ["NLP", "Python", "Scikit-learn"] },
      { name: "Spam Detection", description: "Email spam detection using NLP and machine learning techniques.", tech: ["NLP", "ML", "Python"] },
      { name: "Biblio", description: "Interactive mobile application for library management.", tech: ["Mobile Development"] },
      { name: "Inside GPT: A Guide to Generative Pretrained Transformers", description: "Published technical deep-dive on GPT architecture on Medium.", tech: ["Research", "NLP", "Transformers"] }
    ],

    interests: "AI, LLMs, multi-agent systems, computer vision, hackathons, online courses and competitions"
  };

  // ── Response engine ──
  function findResponse(input) {
    var q = input.toLowerCase().trim();

    // Greetings
    if (/^(hi|hello|hey|bonjour|salut|yo|sup|what'?s up)/.test(q)) {
      return pick([
        "Hey there! I'm Lyle, Oussema's AI assistant. Ask me anything about his experience, skills, projects, or education!",
        "Hi! I'm Lyle. I know everything about Oussema — his work, skills, projects, you name it. What would you like to know?",
        "Hello! I'm Lyle, here to tell you all about Oussema. What are you curious about?"
      ]);
    }

    // Who is Oussema / about
    if (/who is|tell me about (oussema|him|yourself)|about oussema|introduce|summary|overview/.test(q)) {
      return KB.summary + "\n\nHe is currently seeking " + KB.seeking + ".";
    }

    // Who are you / Lyle
    if (/who are you|your name|what are you|about lyle/.test(q)) {
      return "I'm Lyle, Oussema's personal AI assistant! I live right here in his portfolio to answer any questions you might have about his background, skills, experience, and projects. Think of me as his digital spokesperson.";
    }

    // Contact info
    if (/contact|email|phone|reach|hire|connect|get in touch/.test(q)) {
      return "You can reach Oussema at:\n\n" +
        "**Email:** " + KB.email + "\n" +
        "**Phone:** " + KB.phone + "\n" +
        "**LinkedIn:** " + KB.linkedin + "\n" +
        "**GitHub:** " + KB.github + "\n\n" +
        "Or use the contact form right here on this portfolio!";
    }

    // Location
    if (/where|location|based|live|city|country/.test(q)) {
      return "Oussema is based in **" + KB.location + "**. He's currently studying at Albert School x Mines Paris - PSL.";
    }

    // Looking for / seeking / availability
    if (/looking for|seeking|available|apprentice|alternance|hire|open to|job/.test(q)) {
      return "Oussema is currently seeking **" + KB.seeking + "**. Feel free to reach out at " + KB.email + "!";
    }

    // Languages (spoken)
    if (/language|speak|french|english|arabic|german|bilingual/.test(q)) {
      return "Oussema speaks: " + KB.languages + ".";
    }

    // Skills
    if (/skill|tech|stack|tool|framework|programming|what (can|does) he (do|know|use)|proficient|expertise/.test(q)) {
      return "Here's a breakdown of Oussema's technical skills:\n\n" +
        "**Programming:** " + KB.skills.programming.join(", ") + "\n\n" +
        "**AI/ML:** " + KB.skills.ai_ml.join(", ") + "\n\n" +
        "**Frameworks:** " + KB.skills.frameworks.join(", ") + "\n\n" +
        "**Tools & Cloud:** " + KB.skills.tools.join(", ");
    }

    // Specific skill queries
    if (/python/.test(q)) return "Python is one of Oussema's core languages. He uses it extensively across all his work — from ML pipelines and LLM orchestration to web scraping with Selenium and backend APIs with Django and FastAPI.";
    if (/pytorch/.test(q)) return "Oussema uses PyTorch for deep learning projects including GANs, computer vision (U2-NET), and LLM fine-tuning with PEFT/LoRA.";
    if (/llm|large language|gpt|openai|mistral|claude/.test(q)) return "Oussema has deep experience with LLMs — he's built multi-agent LLM orchestration systems, NL-to-SQL assistants, fine-tuned Phi-3 with LoRA on Vertex AI, and works with OpenAI, Mistral, and Claude APIs daily at Tamtam.";
    if (/sql|database|postgres|redis|neo4j|graph/.test(q)) return "Oussema is proficient in SQL, PostgreSQL, Redis (caching), Neo4j (graph databases), and MongoDB. At Satoripop, he architected a multi-agent system on a Graph Database and integrated Redis caching that cut response time by 610ms.";
    if (/docker|devops|deploy|cloud|aws|gcp|azure/.test(q)) return "Oussema works with AWS (S3), GCP (Vertex AI), Azure, Docker, and Linux. His LLMOps project deploys fine-tuned models on Vertex AI with Kubeflow pipelines.";
    if (/django|fastapi|web|backend/.test(q)) return "Oussema has backend experience with Django (pricing engine migration at Satoripop) and FastAPI (NYOS APR hackathon project). He's also built Streamlit apps and worked with Express.js.";

    // Experience (general)
    if (/experience|work|career|job|position|role|where.*(work|been)/.test(q)) {
      var exp = KB.experience.map(function (e) {
        return "**" + e.role + "** at " + e.company + " (" + e.period + ")";
      }).join("\n");
      return "Oussema has " + KB.experience.length + " professional experiences:\n\n" + exp + "\n\nAsk me about any specific role for more details!";
    }

    // Specific companies
    if (/tamtam/.test(q)) { var e = KB.experience[0]; return "**" + e.role + "** at " + e.company + " (" + e.period + ")\n\n" + e.description; }
    if (/satoripop/.test(q)) { var e = KB.experience[1]; return "**" + e.role + "** at " + e.company + " (" + e.period + ")\n\n" + e.description; }
    if (/easyway|supervisor/.test(q)) { var e = KB.experience[2]; return "**" + e.role + "** at " + e.company + " (" + e.period + ")\n\n" + e.description; }
    if (/leanios/.test(q)) { var e3 = KB.experience[3]; var e4 = KB.experience[4]; return "Oussema worked at Leanios twice:\n\n**" + e3.role + "** (" + e3.period + ")\n" + e3.description + "\n\n**" + e4.role + "** (" + e4.period + ")\n" + e4.description; }
    if (/seekmake/.test(q)) { var e = KB.experience[5]; return "**" + e.role + "** at " + e.company + " (" + e.period + ")\n\n" + e.description; }
    if (/terraform/.test(q)) { var e = KB.experience[6]; return "**" + e.role + "** at " + e.company + " (" + e.period + ")\n\n" + e.description; }

    // Education
    if (/education|school|university|degree|study|studi|albert|mines|epi|ipeim|diploma|master|msc/.test(q)) {
      var edu = KB.education.map(function (e) {
        return "**" + e.degree + "** — " + e.school + " (" + e.period + ")";
      }).join("\n");
      return "Oussema's education:\n\n" + edu;
    }

    // Certificates
    if (/certif|badge|credential|aws cert|neo4j cert|azure cert/.test(q)) {
      return "Oussema holds these certifications:\n\n" + KB.certificates.map(function (c) { return "- " + c; }).join("\n");
    }

    // Projects (general)
    if (/project|portfolio|built|build|create|made|work on/.test(q)) {
      var projs = KB.projects.slice(0, 6).map(function (p) {
        return "**" + p.name + "** — " + p.description.split(".")[0] + ".";
      }).join("\n\n");
      return "Here are some of Oussema's key projects:\n\n" + projs + "\n\nAsk about any specific project for more details!";
    }

    // Specific projects
    if (/nyos|pharma|apr/.test(q)) { var p = KB.projects[0]; return "**" + p.name + "**\n\n" + p.description + "\n\n**Tech:** " + p.tech.join(", "); }
    if (/llmops|phi-3|fine.?tun|kubeflow|vertex/.test(q)) { var p = KB.projects[1]; return "**" + p.name + "**\n\n" + p.description + "\n\n**Tech:** " + p.tech.join(", "); }
    if (/gan/.test(q)) { var p = KB.projects[5]; return "**" + p.name + "**\n\n" + p.description + "\n\n**Tech:** " + p.tech.join(", "); }
    if (/sketch|u2.?net/.test(q)) { var p = KB.projects[6]; return "**" + p.name + "**\n\n" + p.description + "\n\n**Tech:** " + p.tech.join(", "); }
    if (/sentiment/.test(q)) { var p = KB.projects[7]; return "**" + p.name + "**\n\n" + p.description + "\n\n**Tech:** " + p.tech.join(", "); }
    if (/spam/.test(q)) { var p = KB.projects[8]; return "**" + p.name + "**\n\n" + p.description + "\n\n**Tech:** " + p.tech.join(", "); }
    if (/income/.test(q)) { var p = KB.projects[2]; return "**" + p.name + "**\n\n" + p.description + "\n\n**Tech:** " + p.tech.join(", "); }
    if (/expense/.test(q)) { var p = KB.projects[3]; return "**" + p.name + "**\n\n" + p.description + "\n\n**Tech:** " + p.tech.join(", "); }
    if (/time.?series/.test(q)) { var p = KB.projects[4]; return "**" + p.name + "**\n\n" + p.description + "\n\n**Tech:** " + p.tech.join(", "); }
    if (/biblio|mobile app/.test(q)) { var p = KB.projects[9]; return "**" + p.name + "**\n\n" + p.description + "\n\n**Tech:** " + p.tech.join(", "); }
    if (/medium|article|publish|inside gpt|research/.test(q)) { var p = KB.projects[10]; return "**" + p.name + "**\n\n" + p.description; }

    // Hackathon
    if (/hackathon/.test(q)) return "Oussema participated in a hackathon where he built **NYOS APR** — a pharma AI analytics platform with a real-time KPI dashboard, AI-powered analysis using Gemini, and automated report generation. Built with FastAPI, React, and Google Generative AI.";

    // Strengths / why hire
    if (/strength|why hire|why choose|what makes|stand out|unique|value/.test(q)) {
      return "What makes Oussema stand out:\n\n" +
        "- **2+ years** building production AI systems, not just prototypes\n" +
        "- End-to-end experience: from data pipelines to deployed multi-agent LLM systems\n" +
        "- Proven impact: 85% reduction in user interaction time, 610ms response improvement, 95% OCR accuracy\n" +
        "- Currently at **Mines Paris - PSL** (top French engineering school)\n" +
        "- Forward Deployment Engineering experience at Tamtam — client-facing AI delivery\n" +
        "- Multilingual: French, English, Arabic";
    }

    // Fun / hobbies
    if (/hobby|hobbies|fun|free time|interest|passion|outside work/.test(q)) {
      return "Outside of work, Oussema regularly takes part in online courses, competitions, and hackathons to keep learning and growing. He's passionate about AI, LLMs, and multi-agent systems.";
    }

    // Resume / CV
    if (/resume|cv|download/.test(q)) {
      return "You can view and download Oussema's resume by clicking the **\"View CV\"** button in the sidebar or the contact section. It opens right here in the portfolio!";
    }

    // Age / date of birth / personal
    if (/age|old|birth|born|birthday|dob|date of birth/.test(q)) {
      return "I don't have Oussema's date of birth on file — that's personal info I don't share. But I can tell you he started his pre-engineering studies in 2019 and is currently pursuing his MSc at Mines Paris - PSL (2025-2027).";
    }

    // Relationship / personal life
    if (/married|girlfriend|boyfriend|relationship|single|dating|wife|partner/.test(q)) {
      return "That's a bit personal! I only know about Oussema's professional life. I can tell you about his skills, experience, or projects instead.";
    }

    // Salary / money
    if (/salary|money|earn|pay|compensation|how much|income.*his/.test(q)) {
      return "I don't have information about compensation. If you're interested in working with Oussema, feel free to reach out to him directly at **" + KB.email + "**.";
    }

    // Nationality / origin
    if (/nationality|origin|country.*from|where.*from|citizen|tunisi|french/.test(q)) {
      return "Oussema is originally from Tunisia and is currently based in **Paris, France**, studying at Albert School x Mines Paris - PSL. He speaks Arabic (Native), French (Bilingual), and English (Fluent).";
    }

    // Number of years experience
    if (/how many years|years of experience|how long.*work/.test(q)) {
      return "Oussema has **2+ years** of hands-on professional experience in data science and AI/ML engineering, starting from his first internship in January 2023. He's worked across 5 companies spanning OCR, NLP, multi-agent systems, and LLM orchestration.";
    }

    // Current role / what does he do now
    if (/current|right now|doing now|today|at the moment|presently/.test(q)) {
      return "Right now, Oussema is an **AI Solutions Engineer Intern at Tamtam** (Feb-Sep 2026), where he builds client-facing AI solutions. He's also studying his **MSc Data For Business** at Albert School x Mines Paris - PSL. He's seeking an apprenticeship starting September 2026.";
    }

    // Can he / does he know
    if (/can he|does he know|is he (good|experienced|skilled)/.test(q)) {
      return "Could you be more specific? For example, you can ask:\n- \"Does he know PyTorch?\"\n- \"Can he build chatbots?\"\n- \"Is he experienced with LLMs?\"\n\nI'll give you a detailed answer!";
    }

    // Chatbot / agent related
    if (/chatbot|agent|multi.?agent|orchestrat/.test(q)) {
      return "Multi-agent systems are one of Oussema's specialties! At **Satoripop**, he architected a multi-agent LLM orchestration system on a Graph Database. At **Leanios**, he built a multi-agent BI chatbot with voice integration that reduced user interaction time by 85%. At **Tamtam**, he designs and deploys fine-tuned AI agents for clients.";
    }

    // NLP specific
    if (/nlp|natural language|text processing|tokeniz/.test(q)) {
      return "Oussema has strong NLP experience: he built an **NL-to-SQL assistant** at Leanios (97% search accuracy), worked on **sentiment analysis** and **spam detection** projects, refined NLP algorithms for semantic understanding, and published a technical deep-dive on GPT architecture on Medium.";
    }

    // Computer vision specific
    if (/computer vision|image|ocr|object detect/.test(q)) {
      return "In computer vision, Oussema developed an **OCR solution** with 95% accuracy at Terraform, built a **GAN** for image transformation, and created **Sketch-AI** using U2-NET for photo-to-sketch generation.";
    }

    // Thank you
    if (/thank|thanks|merci|cheers|appreciate/.test(q)) {
      return pick([
        "You're welcome! Let me know if you have any other questions about Oussema.",
        "Happy to help! Feel free to ask anything else.",
        "Anytime! Don't hesitate to reach out if you need more info."
      ]);
    }

    // Goodbye
    if (/bye|goodbye|see you|ciao|au revoir|later/.test(q)) {
      return pick([
        "Goodbye! Don't forget — you can reach Oussema at " + KB.email + " if you'd like to connect.",
        "See you! Feel free to come back anytime. Oussema's contact info is in the Contact section.",
        "Bye! Thanks for stopping by Oussema's portfolio."
      ]);
    }

    // Yes / no / ok (short responses)
    if (/^(yes|no|ok|okay|sure|yep|nope|nah|right|got it|i see)$/i.test(q)) {
      return pick([
        "Is there anything specific about Oussema you'd like to know? I can talk about his skills, experience, projects, or education.",
        "Need anything else? Ask me about Oussema's work, tech stack, or how to get in touch with him."
      ]);
    }

    // Nonsense / very short
    if (q.length < 3) {
      return "Could you tell me a bit more? I can answer questions about Oussema's **skills**, **experience**, **projects**, **education**, or **contact info**.";
    }

    // Off-topic detection (weather, sports, news, politics, etc.)
    if (/weather|sport|football|soccer|news|politic|movie|music|game|food|recipe|joke|funny/.test(q)) {
      return "Ha, I appreciate the curiosity, but I only know about Oussema's professional world! Try asking about his experience, skills, or projects.";
    }

    // Smart fallback — try to suggest related topics
    var suggestions = [];
    if (/data|analy|science/.test(q)) suggestions.push("his data science experience");
    if (/ai|artificial|intellig|machine|learn|deep/.test(q)) suggestions.push("his AI/ML skills");
    if (/code|program|develop|software|engineer/.test(q)) suggestions.push("his technical stack");
    if (/intern|job|company|work/.test(q)) suggestions.push("his work experience");
    if (/school|univ|study|learn|course/.test(q)) suggestions.push("his education");

    if (suggestions.length > 0) {
      return "I'm not sure I understood that exactly, but it sounds like you might be interested in **" + suggestions.join("** or **") + "**. Could you rephrase your question?";
    }

    // Final fallback
    return pick([
      "I don't have info on that specifically. I know about Oussema's **experience**, **skills**, **projects**, **education**, and **contact info** — what would you like to explore?",
      "That's outside what I know! I'm here to talk about Oussema's professional background. Try asking about his work at Tamtam, his AI projects, or his tech stack.",
      "I'm not sure about that one. Here's what I can help with:\n\n- **\"What are his skills?\"**\n- **\"Tell me about his experience\"**\n- **\"What projects has he built?\"**\n- **\"How can I contact him?\"**"
    ]);
  }

  function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

  // ── Simple markdown to HTML ──
  function md(text) {
    return text
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n\n/g, '<br><br>')
      .replace(/\n- /g, '<br>&bull; ')
      .replace(/\n/g, '<br>');
  }

  // ── Build widget DOM ──
  function init() {
    // Remove Chatbase if present
    var cbScript = document.getElementById('Y2jfURMsKvbsvuuwdlek7');
    if (cbScript) cbScript.remove();

    var widget = document.createElement('div');
    widget.id = 'lyle-widget';
    widget.innerHTML =
      '<button id="lyle-toggle" aria-label="Chat with Lyle">' +
        '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
          '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>' +
        '</svg>' +
      '</button>' +
      '<div id="lyle-chat">' +
        '<div id="lyle-header">' +
          '<div id="lyle-header-info">' +
            '<div id="lyle-avatar">L</div>' +
            '<div><strong>Lyle</strong><span>Oussema\'s AI Assistant</span></div>' +
          '</div>' +
          '<button id="lyle-close" aria-label="Close chat">' +
            '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>' +
          '</button>' +
        '</div>' +
        '<div id="lyle-messages"></div>' +
        '<div id="lyle-suggestions">' +
          '<button class="lyle-suggestion" data-q="Who is Oussema?">Who is Oussema?</button>' +
          '<button class="lyle-suggestion" data-q="What are his skills?">Skills</button>' +
          '<button class="lyle-suggestion" data-q="Tell me about his experience">Experience</button>' +
          '<button class="lyle-suggestion" data-q="What projects has he built?">Projects</button>' +
        '</div>' +
        '<form id="lyle-input-form">' +
          '<input type="text" id="lyle-input" placeholder="Ask about Oussema..." autocomplete="off">' +
          '<button type="submit" id="lyle-send" aria-label="Send">' +
            '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>' +
          '</button>' +
        '</form>' +
      '</div>';
    document.body.appendChild(widget);

    // ── State ──
    var isOpen = false;
    var messages = document.getElementById('lyle-messages');
    var input = document.getElementById('lyle-input');
    var toggle = document.getElementById('lyle-toggle');
    var chat = document.getElementById('lyle-chat');
    var close = document.getElementById('lyle-close');
    var form = document.getElementById('lyle-input-form');
    var suggestions = document.getElementById('lyle-suggestions');

    // Welcome message
    addMessage("bot", "Hey! I'm **Lyle**, Oussema's AI assistant. Ask me anything about his experience, skills, or projects!");

    // ── Events ──
    toggle.addEventListener('click', function () {
      isOpen = !isOpen;
      chat.classList.toggle('open', isOpen);
      toggle.classList.toggle('open', isOpen);
      if (isOpen) input.focus();
    });

    close.addEventListener('click', function () {
      isOpen = false;
      chat.classList.remove('open');
      toggle.classList.remove('open');
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      sendMessage();
    });

    document.querySelectorAll('.lyle-suggestion').forEach(function (btn) {
      btn.addEventListener('click', function () {
        input.value = btn.getAttribute('data-q');
        sendMessage();
        suggestions.style.display = 'none';
      });
    });

    function sendMessage() {
      var text = input.value.trim();
      if (!text) return;
      addMessage("user", text);
      input.value = '';
      suggestions.style.display = 'none';

      // Typing indicator
      var typing = document.createElement('div');
      typing.className = 'lyle-msg lyle-bot lyle-typing-msg';
      typing.innerHTML = '<div class="lyle-typing"><span></span><span></span><span></span></div>';
      messages.appendChild(typing);
      messages.scrollTop = messages.scrollHeight;

      var delay = 400 + Math.random() * 800;
      setTimeout(function () {
        typing.remove();
        var response = findResponse(text);
        addMessage("bot", response);
      }, delay);
    }

    function addMessage(role, text) {
      var div = document.createElement('div');
      div.className = 'lyle-msg lyle-' + role;
      div.innerHTML = '<div class="lyle-bubble">' + md(text) + '</div>';
      messages.appendChild(div);
      requestAnimationFrame(function () {
        div.classList.add('visible');
        messages.scrollTop = messages.scrollHeight;
      });
    }
  }

  // Launch
  if (document.readyState === 'complete') { init(); }
  else { window.addEventListener('load', init); }
})();
