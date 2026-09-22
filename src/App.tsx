import { useEffect, useState } from 'react';
import {
  ChevronDown,
  Target,
  Mail,
  Phone,
  Menu,
  Linkedin,
  Lightbulb,
  Rocket,
  X,
  BarChart3,
  Cloud,
  Database,
  Workflow,
  Layers,
  Server,
  Brain,
  Wrench,
  GraduationCap,
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const sections = ['hero', 'summary', 'experience', 'skills', 'education', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const summary = "Business Intelligence Engineer and Data Engineer with 6+ years of experience building scalable Power BI, Microsoft Fabric, SQL, and cloud data solutions across healthcare, financial services, and staffing. Engineered ETL/ELT pipelines processing 500K+ records daily and optimized analytics across 1M+ records using Python, PySpark, dimensional modeling, AWS, and Azure. Delivered enterprise BI solutions that reduced manual reporting by 60% while strengthening data accessibility, governance, and business insight.";

  const experience = [
    {
      company: "Catena Solutions",
      role: "BI Engineer",
      location: "Dallas, TX",
      dates: "May 2026 - Present",
      highlights: [
        "Engineer production Microsoft Fabric pipelines using Data Factory, Dataflow Gen2, Copy Activity, scheduling, dependency chaining, and automated failure alerts for unattended nightly processing.",
        "Architect Bronze, Silver, and Gold data layers in OneLake using Delta Lake and Parquet, enabling incremental ingestion, schema evolution, historical processing, and scalable analytics.",
        "Build BI-ready fact and dimension models using PySpark and T-SQL, applying CTEs, window functions, joins, aggregations, and set-based transformations across enterprise datasets.",
        "Integrate ATS, CRM, ERP, finance, HR, SQL Server, SharePoint, and REST API data using pagination, token-based authentication, parameterized pipelines, and watermark-driven incremental extraction.",
        "Develop star-schema semantic models and reusable DAX measures for revenue, gross profit, margin, YTD performance, target attainment, variance, forecasting, and trend analysis.",
        "Configure Row-Level Security, workspace permissions, Power BI app audiences, service principals, and guest-user access to strengthen data governance and secure enterprise reporting.",
        "Manage Dev, UAT, and Production releases across Microsoft Fabric and Power BI, validating 30+ tables and resolving data quality, schema, credential, refresh, and reporting issues before deployment.",
        "Leveraged Generative AI and AI-assisted workflows to accelerate SQL and DAX development, troubleshoot pipeline and reporting issues, generate technical documentation, and automate data validation checks across BI datasets."
      ]
    },
    {
      company: "Cigna Healthcare",
      role: "BI Engineer / Data Analyst",
      location: "Remote, USA",
      dates: "Aug. 2023 - Apr. 2026",
      highlights: [
        "Delivered 10+ enterprise Power BI dashboards tracking operational KPIs, patient outcomes, utilization, and business performance across 3 departments.",
        "Developed 30+ reusable DAX measures and Power Query transformations supporting KPI calculation, drill-down analysis, trend reporting, variance analysis, and self-service analytics for 50+ users.",
        "Designed dimensional data models, semantic layers, and star/snowflake schemas across SQL Server, SSAS, and SharePoint, reducing manual reporting effort by 60% and improving data consistency.",
        "Optimized SQL queries across 1M+ healthcare records and tuned Power BI Import and DirectQuery models, maintaining 99.9% refresh availability while improving reporting performance.",
        "Automated AWS Glue ETL workflows handling 500K+ records daily, transforming and loading BI-ready datasets for downstream reporting and data analysis.",
        "Partnered with product managers and business stakeholders to define 12+ KPIs, analyze product performance, and surface insights that contributed to an 18% increase in user engagement."
      ]
    },
    {
      company: "Zensar Technologies",
      role: "Data Analyst",
      location: "Hyderabad, India",
      dates: "Jul. 2019 - Jul. 2022",
      highlights: [
        "Analyzed $100M+ in financial and reinsurance data using SQL and Excel, identifying trends, anomalies, and data inconsistencies that improved risk assessment accuracy by 15%.",
        "Integrated, cleaned, and transformed data from 10+ sources using MySQL, SQL, ETL workflows, and dimensional modeling, reducing data evaluation time by 35%.",
        "Processed large-scale datasets using AWS EMR, Hadoop, and Apache Spark, improving batch-processing performance by 50% and accelerating delivery of reporting-ready data for BI and analytics."
      ]
    }
  ];

  const skillCategories = [
    {
      icon: BarChart3,
      title: 'Business Intelligence & Power BI',
      skills: ['Power BI Desktop', 'Power BI Service', 'DAX', 'Power Query', 'Semantic Models', 'DirectQuery', 'Import Mode', 'Row-Level Security (RLS)', 'Tableau', 'SSRS', 'Paginated Reports', 'Excel', 'KPI Reporting', 'Dashboard Development', 'Self-Service Analytics']
    },
    {
      icon: Cloud,
      title: 'Microsoft Fabric',
      skills: ['OneLake', 'Lakehouse', 'Warehouse', 'Data Factory', 'Dataflow Gen2', 'Direct Lake', 'Delta Lake', 'Spark Notebooks', 'Fabric Pipelines']
    },
    {
      icon: Database,
      title: 'SQL, Programming & Databases',
      skills: ['SQL', 'T-SQL', 'Python', 'PySpark', 'SQL Server', 'PostgreSQL', 'MySQL', 'Oracle', 'Amazon Redshift']
    },
    {
      icon: Workflow,
      title: 'Data Engineering',
      skills: ['ETL/ELT', 'Data Pipelines', 'Medallion Architecture', 'Incremental Loading', 'CDC', 'Data Integration', 'Azure Data Factory', 'Azure Synapse', 'AWS Glue', 'REST APIs']
    },
    {
      icon: Layers,
      title: 'Data Modeling & Analytics',
      skills: ['Dimensional Modeling', 'Star Schema', 'Snowflake Schema', 'Kimball Modeling', 'Fact & Dimension Tables', 'Data Warehousing', 'SCD', 'Data Quality', 'Data Transformation', 'Data Validation']
    },
    {
      icon: Server,
      title: 'Cloud',
      skills: ['Microsoft Azure', 'AWS', 'ADLS Gen2', 'Amazon S3', 'AWS EMR']
    },
    {
      icon: Brain,
      title: 'AI & Automation',
      skills: ['Generative AI', 'Large Language Models (LLMs)', 'AI-Assisted Analytics', 'Prompt Engineering', 'Python Automation']
    },
    {
      icon: Wrench,
      title: 'Tools',
      skills: ['Git', 'GitHub', 'Jira', 'ServiceNow']
    }
  ];

  const education = [
    {
      school: "University of North Texas",
      degree: "Master of Science, Information Systems",
      location: "Texas, USA",
      dates: ""
    },
    {
      school: "Jawaharlal Nehru Technological University",
      degree: "Bachelor of Science, Computer Science",
      location: "India",
      dates: ""
    }
  ];

  const certifications = [
    {
      title: "AWS Certified Data Engineer - Associate",
      platform: "Certification",
      description: "Validates expertise in designing, building, and maintaining data pipelines and analytics solutions on AWS."
    },
    {
      title: "AWS Certified Cloud Practitioner",
      platform: "Certification",
      description: "Foundational certification covering AWS Cloud concepts, services, security, and billing practices."
    },
    {
      title: "GenAI-Powered Data Analytics Job Simulation",
      platform: "Tata | Forage",
      description: "Completed a job simulation applying generative AI to data analytics workflows, including data exploration and AI-assisted insight generation."
    }
  ];

  return (
    <div className="min-h-screen bg-cream overflow-x-auto">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md border-b border-brown/20">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl md:text-2xl font-display text-black tracking-wide">
              NAVED JIWANI
            </div>

            <div className="hidden md:flex space-x-8">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'summary', label: 'Summary' },
                { id: 'experience', label: 'Experience' },
                { id: 'skills', label: 'Skills' },
                { id: 'education', label: 'Education' },
                { id: 'certifications', label: 'Certifications' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-light tracking-wide transition-colors duration-300 ${activeSection === item.id
                    ? "text-black font-medium"
                    : "text-brown hover:text-black"
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <button
              className="md:hidden text-black"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 flex flex-col space-y-4 border-t border-brown/20 pt-4">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'summary', label: 'Summary' },
                { id: 'experience', label: 'Experience' },
                { id: 'skills', label: 'Skills' },
                { id: 'education', label: 'Education' },
                { id: 'certifications', label: 'Certifications' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id)
                    setMobileMenuOpen(false)
                  }}
                  className="text-left text-brown hover:text-black transition"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="mb-12">
              <img
                src="images/image.png"
                alt="Naved Jiwani"
                className="w-36 h-36 rounded-full mx-auto mb-6 object-cover border-4 border-brown/30 shadow-lg"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-display text-black mb-6 tracking-wide">
              NAVED JIWANI
            </h1>
            <div className="text-lg text-brown mb-2 font-light tracking-widest">
              Business Intelligence Engineer | Data Engineer | Power BI - Microsoft Fabric - SQL - AWS - Azure
            </div>
            <div className="text-sm uppercase tracking-[0.3em] text-brown/80 mb-1">
              DALLAS, TX, USA
            </div>
            <div className="w-24 h-0.5 bg-brown mx-auto mb-10"></div>
            <p className="text-lg text-brown mb-10 max-w-4xl mx-auto leading-relaxed font-light">
              {summary}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => scrollToSection('experience')}
                className="bg-black text-white px-10 py-4 font-light tracking-wide hover:bg-brown transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                VIEW EXPERIENCE
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border border-black text-black px-10 py-4 font-light tracking-wide hover:bg-black hover:text-white transition-all duration-300"
              >
                CONTACT
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16 text-center">
            {[
              { label: 'YEARS OF EXPERIENCE', value: '6+', detail: 'Business Intelligence & Data Engineering' },
              { label: 'RECORDS PROCESSED DAILY', value: '500K+', detail: 'ETL/ELT Pipelines' },
              { label: 'MANUAL REPORTING REDUCED', value: '60%', detail: 'Enterprise BI Solutions' }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-sm shadow-sm border border-brown/10">
                <div className="text-xs tracking-widest text-brown/70 mb-2">{stat.label}</div>
                <div className="text-3xl font-display text-black mb-1">{stat.value}</div>
                <div className="text-sm text-brown font-light">{stat.detail}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <ChevronDown
              className="w-6 h-6 text-brown/60 mx-auto animate-bounce cursor-pointer hover:text-black transition-colors"
              onClick={() => scrollToSection('summary')}
            />
          </div>
        </div>
      </section>

      <section id="summary" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">SUMMARY</h2>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              Business Intelligence Engineer specializing in Power BI, Microsoft Fabric, SQL, and cloud-native data engineering.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: Target,
                title: 'Enterprise BI Delivery',
                detail: 'Builds Power BI dashboards, semantic models, and reusable DAX measures that surface KPIs and drive self-service analytics for hundreds of users.'
              },
              {
                icon: Rocket,
                title: 'Data Engineering',
                detail: 'Engineers Microsoft Fabric and AWS Glue pipelines with medallion architecture, incremental loading, and CDC, processing 500K+ records daily.'
              },
              {
                icon: Lightbulb,
                title: 'Governance & Automation',
                detail: 'Configures Row-Level Security, workspace governance, and AI-assisted workflows to accelerate development and strengthen data reliability.'
              }
            ].map((card, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10 text-center">
                <div className="w-14 h-14 bg-black mx-auto mb-6 flex items-center justify-center">
                  <card.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-display text-black mb-4 tracking-wide">{card.title.toUpperCase()}</h3>
                <p className="text-brown leading-relaxed font-light">{card.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">WORK EXPERIENCE</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              Business intelligence and data engineering experience across staffing, healthcare, and financial services environments.
            </p>
          </div>
          <div className="space-y-10">
            {experience.map((role, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{role.role}</h3>
                    <p className="text-brown font-medium">{role.company}</p>
                  </div>
                  <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                    {role.location} - {role.dates}
                  </div>
                </div>
                <ul className="space-y-3">
                  {role.highlights.map((highlight, i) => (
                    <li key={i} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">-</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">SKILLS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Business intelligence, Microsoft Fabric, data engineering, modeling, cloud, and AI-assisted analytics.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

            {skillCategories.map((category, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-black mx-auto mb-8 flex items-center justify-center">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-display text-black mb-6 tracking-wide">{category.title.toUpperCase()}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-sm text-brown font-light">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display text-black mb-6 tracking-wide">EDUCATION</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
          </div>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex items-start">
                  <GraduationCap className="w-6 h-6 text-brown mr-3 flex-shrink-0 mt-1" />
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full">
                    <div>
                      <h3 className="text-2xl font-display text-black tracking-wide">{edu.school}</h3>
                      <p className="text-brown font-medium">{edu.degree}</p>
                    </div>
                    <div className="text-sm text-brown/80 font-light mt-2 md:mt-0 md:ml-4 whitespace-nowrap">
                      {edu.location}{edu.dates ? ` - ${edu.dates}` : ''}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="certifications" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display text-black mb-6 tracking-wide">CERTIFICATIONS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
          </div>
          <div className="space-y-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10">
                <h3 className="text-2xl font-display text-black tracking-wide">{cert.title}</h3>
                <p className="text-brown font-medium">{cert.platform}</p>
                <p className="text-brown leading-relaxed font-light">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display mb-8 tracking-wide">CONTACT</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-light">
              Let's discuss Power BI, Microsoft Fabric, SQL, or data engineering opportunities.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-8 max-w-md mx-auto">
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-brown mr-6" />
              <a
                href="tel:+16829994846"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                +1 (682) 999-4846
              </a>
            </div>
            <div className="flex items-center">
              <Linkedin className="w-6 h-6 text-brown mr-6" />
              <a
                href="https://www.linkedin.com/in/naved-jiwani-55nj/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-brown mr-6" />
              <a
                href="mailto:navedjiwani12@gmail.com"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                navedjiwani12@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-brown text-white/80 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="font-light tracking-wide">
            (c) 2026 Naved Jiwani - Business Intelligence & Data Engineering.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
