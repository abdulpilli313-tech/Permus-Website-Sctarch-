export interface ProductFeature {
  title: string
  description: string
  icon: string
}

export interface ProductStep {
  step: number
  title: string
  description: string
}

export interface ProductUseCase {
  industry: string
  application: string
  impact: string
}

export interface Product {
  slug: string
  name: string
  tagline: string
  description: string
  color: string
  accentColor: string
  heroDescription: string
  whatItDoes: {
    purpose: string
    problem: string
    audience: string
  }
  howItWorks: ProductStep[]
  features: ProductFeature[]
  useCases: ProductUseCase[]
  techStack: {
    ai: string[]
    backend: string[]
    frontend: string[]
    cloud: string[]
  }
}

export const products: Product[] = [
  {
    slug: "myndlab",
    name: "MyndLab",
    tagline: "AI-Powered Decision Intelligence",
    description: "Transform enterprise decision-making with predictive analytics and machine learning insights.",
    color: "#5B21FF",
    accentColor: "#86E9FF",
    heroDescription: "MyndLab harnesses the power of advanced AI to transform how enterprises make critical decisions. From predictive analytics to real-time insights, empower your organization with intelligence that drives results.",
    whatItDoes: {
      purpose: "MyndLab is an enterprise AI platform that transforms raw data into actionable intelligence, enabling organizations to make faster, more accurate decisions across all business functions.",
      problem: "Organizations struggle with data silos, slow decision cycles, and the inability to leverage their data assets effectively. Traditional analytics tools lack the predictive capabilities needed in today's fast-paced business environment.",
      audience: "Enterprise leaders, data teams, operations managers, and C-suite executives who need to transform their organization's decision-making capabilities at scale."
    },
    howItWorks: [
      {
        step: 1,
        title: "Data Integration",
        description: "Connect your existing data sources through secure APIs and automated pipelines. MyndLab ingests structured and unstructured data from across your enterprise."
      },
      {
        step: 2,
        title: "AI Processing",
        description: "Our proprietary ML models analyze patterns, detect anomalies, and generate predictive insights tailored to your business context."
      },
      {
        step: 3,
        title: "Insight Delivery",
        description: "Receive actionable recommendations through intuitive dashboards, automated reports, and real-time alerts integrated with your workflow."
      },
      {
        step: 4,
        title: "Continuous Learning",
        description: "The platform continuously learns from outcomes, improving prediction accuracy and adapting to changing business conditions."
      }
    ],
    features: [
      {
        title: "Predictive Analytics",
        description: "Forecast trends, demand patterns, and business outcomes with enterprise-grade ML models.",
        icon: "chart"
      },
      {
        title: "Natural Language Queries",
        description: "Ask questions in plain English and receive instant insights without technical expertise.",
        icon: "message"
      },
      {
        title: "Automated Anomaly Detection",
        description: "Identify risks and opportunities before they impact your business with real-time monitoring.",
        icon: "alert"
      },
      {
        title: "Enterprise Security",
        description: "SOC 2 Type II compliant with end-to-end encryption and role-based access controls.",
        icon: "shield"
      },
      {
        title: "Seamless Integrations",
        description: "Connect with 200+ enterprise tools including Salesforce, SAP, and Microsoft 365.",
        icon: "link"
      },
      {
        title: "Custom Model Training",
        description: "Build and deploy custom ML models specific to your industry and use cases.",
        icon: "cpu"
      }
    ],
    useCases: [
      {
        industry: "Financial Services",
        application: "Risk Assessment & Fraud Detection",
        impact: "60% faster fraud detection with 99.2% accuracy"
      },
      {
        industry: "Healthcare",
        application: "Patient Outcome Prediction",
        impact: "35% improvement in treatment planning efficiency"
      },
      {
        industry: "Manufacturing",
        application: "Predictive Maintenance",
        impact: "45% reduction in unplanned downtime"
      },
      {
        industry: "Retail",
        application: "Demand Forecasting",
        impact: "28% improvement in inventory optimization"
      }
    ],
    techStack: {
      ai: ["TensorFlow", "PyTorch", "OpenAI GPT", "Custom ML Models"],
      backend: ["Python", "Node.js", "PostgreSQL", "Redis"],
      frontend: ["React", "Next.js", "TypeScript", "D3.js"],
      cloud: ["AWS", "Kubernetes", "Docker", "Terraform"]
    }
  },
  {
    slug: "assetgo",
    name: "AssetGo",
    tagline: "Intelligent Asset Management",
    description: "Complete visibility and control over your enterprise assets with AI-driven optimization.",
    color: "#86E9FF",
    accentColor: "#5B21FF",
    heroDescription: "AssetGo delivers comprehensive asset lifecycle management powered by intelligent automation. From acquisition to disposal, maintain complete visibility and maximize the value of every asset in your organization.",
    whatItDoes: {
      purpose: "AssetGo is an enterprise asset management platform that provides real-time visibility, predictive maintenance, and intelligent optimization across your entire asset portfolio.",
      problem: "Organizations lose millions annually due to poor asset visibility, reactive maintenance approaches, and inefficient resource allocation. Legacy systems can't provide the real-time insights needed for modern operations.",
      audience: "Operations teams, facility managers, IT departments, and finance leaders responsible for maximizing asset utilization and minimizing total cost of ownership."
    },
    howItWorks: [
      {
        step: 1,
        title: "Asset Discovery",
        description: "Automatically discover and catalog all assets through IoT sensors, network scanning, and manual import capabilities."
      },
      {
        step: 2,
        title: "Real-Time Monitoring",
        description: "Track asset health, utilization, and location in real-time with intelligent alerting for critical thresholds."
      },
      {
        step: 3,
        title: "Predictive Analysis",
        description: "AI algorithms analyze usage patterns and sensor data to predict maintenance needs and optimize schedules."
      },
      {
        step: 4,
        title: "Lifecycle Optimization",
        description: "Make data-driven decisions on repairs, replacements, and disposals to maximize asset ROI."
      }
    ],
    features: [
      {
        title: "IoT Integration",
        description: "Connect thousands of sensors and devices for comprehensive real-time asset monitoring.",
        icon: "wifi"
      },
      {
        title: "Predictive Maintenance",
        description: "Reduce downtime by predicting failures before they occur with ML-powered analytics.",
        icon: "tool"
      },
      {
        title: "Asset Tracking",
        description: "Know the location and status of every asset with GPS, RFID, and barcode support.",
        icon: "map"
      },
      {
        title: "Compliance Management",
        description: "Automate compliance tracking and generate audit-ready reports for regulatory requirements.",
        icon: "check"
      },
      {
        title: "Mobile Workforce",
        description: "Empower field teams with native mobile apps for inspections, work orders, and updates.",
        icon: "smartphone"
      },
      {
        title: "Financial Analytics",
        description: "Track depreciation, maintenance costs, and calculate true total cost of ownership.",
        icon: "dollar"
      }
    ],
    useCases: [
      {
        industry: "Real Estate",
        application: "Building Management Systems",
        impact: "40% reduction in energy costs through smart optimization"
      },
      {
        industry: "Logistics",
        application: "Fleet Management",
        impact: "25% improvement in vehicle utilization rates"
      },
      {
        industry: "Energy",
        application: "Infrastructure Monitoring",
        impact: "50% reduction in unplanned outages"
      },
      {
        industry: "Healthcare",
        application: "Medical Equipment Tracking",
        impact: "30% faster equipment location and availability"
      }
    ],
    techStack: {
      ai: ["TensorFlow", "Scikit-learn", "Time Series Analysis", "Computer Vision"],
      backend: ["Go", "Python", "TimescaleDB", "Apache Kafka"],
      frontend: ["React", "React Native", "TypeScript", "Mapbox"],
      cloud: ["Azure", "Kubernetes", "IoT Hub", "Event Grid"]
    }
  },
  {
    slug: "equidesk",
    name: "EquiDesk",
    tagline: "Unified Operations Platform",
    description: "Streamline enterprise operations with intelligent workflow automation and collaboration.",
    color: "#FF31B0",
    accentColor: "#A7A1FF",
    heroDescription: "EquiDesk unifies your enterprise operations into a single, intelligent platform. From workflow automation to team collaboration, create operational excellence that scales with your business.",
    whatItDoes: {
      purpose: "EquiDesk is a comprehensive operations platform that unifies workflows, automates processes, and enables seamless collaboration across departments and teams.",
      problem: "Enterprises struggle with fragmented tools, manual handoffs, and siloed information that create operational inefficiencies. Teams spend more time on coordination than execution.",
      audience: "Operations leaders, department heads, project managers, and teams who need to streamline complex workflows and improve cross-functional collaboration."
    },
    howItWorks: [
      {
        step: 1,
        title: "Process Mapping",
        description: "Map your existing workflows with our visual designer or use AI to automatically discover and document processes."
      },
      {
        step: 2,
        title: "Automation Rules",
        description: "Define triggers, conditions, and actions to automate repetitive tasks and route work intelligently."
      },
      {
        step: 3,
        title: "Team Execution",
        description: "Teams work within unified workspaces with real-time updates, notifications, and collaboration tools."
      },
      {
        step: 4,
        title: "Performance Insights",
        description: "Monitor KPIs, identify bottlenecks, and continuously optimize operations with actionable analytics."
      }
    ],
    features: [
      {
        title: "Visual Workflow Builder",
        description: "Design complex workflows with drag-and-drop simplicity and conditional logic.",
        icon: "workflow"
      },
      {
        title: "AI Process Mining",
        description: "Automatically discover inefficiencies and optimization opportunities in your operations.",
        icon: "search"
      },
      {
        title: "Unified Inbox",
        description: "Manage all tasks, approvals, and communications from a single intelligent inbox.",
        icon: "inbox"
      },
      {
        title: "Document Management",
        description: "Centralize documents with version control, e-signatures, and intelligent search.",
        icon: "file"
      },
      {
        title: "Team Collaboration",
        description: "Built-in chat, video calls, and shared workspaces for seamless team coordination.",
        icon: "users"
      },
      {
        title: "Custom Dashboards",
        description: "Build personalized dashboards with real-time metrics and automated reporting.",
        icon: "layout"
      }
    ],
    useCases: [
      {
        industry: "Professional Services",
        application: "Client Onboarding Automation",
        impact: "70% faster client activation time"
      },
      {
        industry: "Government",
        application: "Permit & License Processing",
        impact: "55% reduction in processing time"
      },
      {
        industry: "Finance",
        application: "Loan Origination Workflows",
        impact: "40% improvement in application throughput"
      },
      {
        industry: "HR",
        application: "Employee Lifecycle Management",
        impact: "60% reduction in administrative overhead"
      }
    ],
    techStack: {
      ai: ["OpenAI GPT", "Process Mining AI", "NLP Models", "Decision Trees"],
      backend: ["Node.js", "Python", "MongoDB", "Elasticsearch"],
      frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      cloud: ["GCP", "Kubernetes", "Cloud Run", "Pub/Sub"]
    }
  }
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}
