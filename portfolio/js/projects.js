// projects.js — All portfolio project data

const projects = [
  {
    id: 0,
    title: "AFM-Driver App",
    tag: "Logistics · Mobile Apps · Kotlin/Swift",
    category: "mobile",
    description: "Curated for the drivers to manage their trips and data on the go. Empowers drivers with real-time updates, trip tracking, and seamless communication for efficient and hassle-free operations.",
    images: [
      "../portfolio/project-images/AFMDriver-1.png",
      "../portfolio/project-images/AFMDriver-2.png",
      "../portfolio/project-images/AFMDriver-3.png"
    ],
    links: [
      { label: "View Project", icon: "fas fa-external-link-alt", type: "primary", url: "#" },
      { label: "Download Case Study", icon: "fas fa-file-pdf", type: "secondary", url: "#" }
    ],
    features: [
      { icon: "fas fa-chart-line", text: "KPI tracking across 12 regions with drill-down capabilities" },
      { icon: "fas fa-clock", text: "Automated daily data refresh reducing manual effort by 70%" },
      { icon: "fas fa-users", text: "Stakeholder workshops to define 25+ business metrics" },
      { icon: "fas fa-filter", text: "Dynamic filters for time period, product category & region" },
      { icon: "fas fa-bell", text: "Alert system for KPI threshold breaches" },
      { icon: "fas fa-mobile-alt", text: "Mobile-responsive design for field managers" }
    ]
  },
  {
    id: 1,
    title: "AFM-Ai",
    tag: "Logistics · ERP Multiplatform · React Native",
    category: "web",
    description: "An AI native web applications automating logistical operations with smart decision making. Leverages predictive analytics and automation to optimize workflows, reduce manual effort, and improve operational accuracy.",
    images: [
      "../portfolio/project-images/AFMAi-1.png",
      "../portfolio/project-images/AFMAi-2.png",
      "../portfolio/project-images/AFMAi-3.png"
    ],
    links: [
      { label: "View BRD Sample", icon: "fas fa-file-alt", type: "primary", url: "#" },
      { label: "Process Diagrams", icon: "fas fa-project-diagram", type: "secondary", url: "#" }
    ],
    features: [
      { icon: "fas fa-sitemap", text: "AS-IS / TO-BE BPMN process maps for 18 business processes" },
      { icon: "fas fa-file-alt", text: "BRD & FRS documentation for all modules" },
      { icon: "fas fa-check-circle", text: "UAT coordination across 6 departments, 200+ test cases" },
      { icon: "fas fa-exchange-alt", text: "Data migration strategy for 5 years of legacy data" },
      { icon: "fas fa-graduation-cap", text: "Training material & change management plan" },
      { icon: "fas fa-shield-alt", text: "Risk register with mitigation strategies" }
    ]
  },
  {
    id: 2,
    title: "Avaal Vehicle Tracking",
    tag: "GPS Tracking · ERP Multiplatform · .Net",
    category: "web",
    description: "Cutting edge GPS solution providing advanced monitoring and real time GPS tracking. Delivers actionable insights on vehicle performance, route history, and driver behavior to enhance fleet control and safety.",
    images: [
        "../portfolio/project-images/AVT-1.png",
        "../portfolio/project-images/AVT-2.png",
        "../portfolio/project-images/AVT-3.png",
        "../portfolio/project-images/AVT-4.png"
    ],
    links: [
      { label: "Strategy Deck", icon: "fas fa-presentation", type: "primary", url: "#" },
      { label: "Market Report PDF", icon: "fas fa-file-pdf", type: "secondary", url: "#" }
    ],
    features: [
      { icon: "fas fa-map-marker-alt", text: "Analysis of 40+ tier-2/3 cities by demand potential" },
      { icon: "fas fa-users", text: "Consumer segmentation across 5 demographic clusters" },
      { icon: "fas fa-tag", text: "Competitive pricing framework vs 8 regional competitors" },
      { icon: "fas fa-road", text: "3-phase go-to-market roadmap with milestones" },
      { icon: "fas fa-chart-bar", text: "Revenue projections and market share targets" },
      { icon: "fas fa-handshake", text: "Channel partnership recommendations for local distribution" }
    ]
  },
  {
    id: 3,
    title: "Doc Ok!",
    tag: "Utility · Mobile App · iOS(Swift)",
    category: "mobile",
    description: "A smart document organizer that helps you store, manage, and access all your important files. Offers secure cloud storage, intelligent categorization, and quick retrieval for a seamless document management experience..",
    images: [
        "../portfolio/project-images/Docok-1.png",
        "../portfolio/project-images/Docok-2.png"
    ],
    links: [
      { label: "Model Report", icon: "fas fa-brain", type: "primary", url: "#" },
      { label: "Presentation", icon: "fas fa-file-powerpoint", type: "secondary", url: "#" }
    ],
    features: [
      { icon: "fas fa-list-check", text: "Defined 35 feature requirements from 3 data sources" },
      { icon: "fas fa-percentage", text: "87% model accuracy — 23% churn reduction in 6 months" },
      { icon: "fas fa-funnel-dollar", text: "Segmented at-risk customers into 4 intervention tiers" },
      { icon: "fas fa-envelope-open-text", text: "Designed 4 targeted retention campaign playbooks" },
      { icon: "fas fa-tachometer-alt", text: "Real-time scoring dashboard for CRM integration" },
      { icon: "fas fa-sync", text: "Monthly model retraining pipeline specification" }
    ]
  },
  {
    id: 4,
    title: "ATH Broker",
    tag: "Logistics · CRM · .Net",
    category: "web",
    description: "Specialize in connecting shippers with reliable carriers, providing efficient logistics solutions. Streamlines communication, pricing, and load matching to ensure timely and cost-effective transportation services.",
    images: [
      "../portfolio/project-images/ATH-1.png",
      "../portfolio/project-images/ATH-2.png"
    ],
    links: [
      { label: "Agile Playbook", icon: "fas fa-book", type: "primary", url: "#" },
      { label: "User Story Templates", icon: "fas fa-file-alt", type: "secondary", url: "#" }
    ],
    features: [
      { icon: "fas fa-users-cog", text: "Onboarded 4 scrum teams (30 members) to Agile practices" },
      { icon: "fas fa-book-open", text: "Authored internal Agile playbook and user story guide" },
      { icon: "fas fa-calendar-alt", text: "Defined sprint structure: 2-week cadence with retrospectives" },
      { icon: "fas fa-tasks", text: "Jira board setup and backlog grooming process design" },
      { icon: "fas fa-chart-line", text: "Velocity tracking — 40% productivity improvement in 3 months" },
      { icon: "fas fa-chalkboard-teacher", text: "6 Agile training workshops for PMs and developers" }
    ]
  },
  {
    id: 5,
    title: "AFM Dispatch",
    tag: "Logistics · Mobile Apps · Kotlin/Swift",
    category: "mobile",
    description: "Allows an optimal dispatch and fleet management process and save substantial costs. Enhances route planning, load optimization, and real-time tracking to ensure faster deliveries and improved resource utilization.",
    images: [
      "../portfolio/project-images/AFMD-1.png",
      "../portfolio/project-images/AFMD-2.png"
    ],
    links: [
      { label: "View Roadmap", icon: "fas fa-road", type: "primary", url: "#" },
      { label: "ROI Analysis", icon: "fas fa-file-invoice", type: "secondary", url: "#" }
    ],
    features: [
      { icon: "fas fa-robot", text: "15 automation opportunities mapped to business processes" },
      { icon: "fas fa-rupee-sign", text: "Projected ₹2Cr annual savings from identified initiatives" },
      { icon: "fas fa-route", text: "AI-assisted route optimisation specification (15% fuel savings)" },
      { icon: "fas fa-laptop", text: "Customer self-service portal requirement specification" },
      { icon: "fas fa-stream", text: "RPA use cases for invoice processing and tracking updates" },
      { icon: "fas fa-timeline", text: "Phased 3-year roadmap with quick wins in Year 1" }
    ]
  },
  {
    id: 6,
    title: "Avaal Travel Hub",
    tag: "Marketplace · Website · HTML",
    category: "web",
    description: "Avaal Travel Hub is a comprehensive platform that simplifies trip planning, bookings, and travel management in one place. Enables seamless itinerary creation, vendor integration, and end-to-end travel coordination for individuals and businesses.",
    images: [
        "../portfolio/project-images/ATHW-1.png",
        "../portfolio/project-images/ATHW-2.png",
        "../portfolio/project-images/ATHW-3.png",
        "../portfolio/project-images/ATHW-4.png"
    ],
    links: [
      { label: "Agile Playbook", icon: "fas fa-book", type: "primary", url: "#" },
      { label: "User Story Templates", icon: "fas fa-file-alt", type: "secondary", url: "#" }
    ],
    features: [
      { icon: "fas fa-users-cog", text: "Onboarded 4 scrum teams (30 members) to Agile practices" },
      { icon: "fas fa-book-open", text: "Authored internal Agile playbook and user story guide" },
      { icon: "fas fa-calendar-alt", text: "Defined sprint structure: 2-week cadence with retrospectives" },
      { icon: "fas fa-tasks", text: "Jira board setup and backlog grooming process design" },
      { icon: "fas fa-chart-line", text: "Velocity tracking — 40% productivity improvement in 3 months" },
      { icon: "fas fa-chalkboard-teacher", text: "6 Agile training workshops for PMs and developers" }
    ]
  },
  {
    id: 7,
    title: "Avaal Blue",
    tag: "Finance · Mobile Apps · React Native",
    category: "mobile",
    description: "A smart fuel management solution that helps fleet operators track expenses, control usage, and optimize fuel costs. Provides real-time insights, fraud detection, and analytics to improve operational efficiency and reduce fuel wastage.",
    images: [
        "../portfolio/project-images/AB-1.png",
        "../portfolio/project-images/AB-2.png",
        "../portfolio/project-images/AB-3.png"
    ],
    links: [
      { label: "View Roadmap", icon: "fas fa-road", type: "primary", url: "#" },
      { label: "ROI Analysis", icon: "fas fa-file-invoice", type: "secondary", url: "#" }
    ],
    features: [
      { icon: "fas fa-robot", text: "15 automation opportunities mapped to business processes" },
      { icon: "fas fa-rupee-sign", text: "Projected ₹2Cr annual savings from identified initiatives" },
      { icon: "fas fa-route", text: "AI-assisted route optimisation specification (15% fuel savings)" },
      { icon: "fas fa-laptop", text: "Customer self-service portal requirement specification" },
      { icon: "fas fa-stream", text: "RPA use cases for invoice processing and tracking updates" },
      { icon: "fas fa-timeline", text: "Phased 3-year roadmap with quick wins in Year 1" }
    ]
  },
  {
    id: 8,
    title: "Skillbowl",
    tag: "EdTech · Marketplace · Python",
    category: "web",
    description: "An engaging platform where children participate in contests and learn through healthy competition. Encourages creativity, critical thinking, and confidence through interactive challenges and gamified learning experiences.",
    images: [
      "https://images.unsplash.com/photo-1573164713712-03790a178651?w=840&q=80",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=840&q=80",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=840&q=80"
    ],
    links: [
      { label: "View Roadmap", icon: "fas fa-road", type: "primary", url: "#" },
      { label: "ROI Analysis", icon: "fas fa-file-invoice", type: "secondary", url: "#" }
    ],
    features: [
      { icon: "fas fa-robot", text: "15 automation opportunities mapped to business processes" },
      { icon: "fas fa-rupee-sign", text: "Projected ₹2Cr annual savings from identified initiatives" },
      { icon: "fas fa-route", text: "AI-assisted route optimisation specification (15% fuel savings)" },
      { icon: "fas fa-laptop", text: "Customer self-service portal requirement specification" },
      { icon: "fas fa-stream", text: "RPA use cases for invoice processing and tracking updates" },
      { icon: "fas fa-timeline", text: "Phased 3-year roadmap with quick wins in Year 1" }
    ]
  },
  {
    id: 9,
    title: "Secondbuy",
    tag: "eCommerce · Marketplace · Python",
    category: "web",
    description: "A centralized platform that streamlines equipment discovery, comparison, and procurement across industries. Enables sellers to reach a wider network of verified buyers, increasing visibility and faster deal closures. Offers detailed listings, transparent pricing, and condition insights to support confident decision-making.",
    images: [
      "https://images.unsplash.com/photo-1573164713712-03790a178651?w=840&q=80",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=840&q=80",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=840&q=80"
    ],
    links: [
      { label: "View Roadmap", icon: "fas fa-road", type: "primary", url: "#" },
      { label: "ROI Analysis", icon: "fas fa-file-invoice", type: "secondary", url: "#" }
    ],
    features: [
      { icon: "fas fa-robot", text: "15 automation opportunities mapped to business processes" },
      { icon: "fas fa-rupee-sign", text: "Projected ₹2Cr annual savings from identified initiatives" },
      { icon: "fas fa-route", text: "AI-assisted route optimisation specification (15% fuel savings)" },
      { icon: "fas fa-laptop", text: "Customer self-service portal requirement specification" },
      { icon: "fas fa-stream", text: "RPA use cases for invoice processing and tracking updates" },
      { icon: "fas fa-timeline", text: "Phased 3-year roadmap with quick wins in Year 1" }
    ]
  }
];
