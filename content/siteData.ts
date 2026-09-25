export interface NavLink {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  iconName: string;
}

export interface FeaturedItem {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  highlights: string[];
  ctaLabel: string;
  ctaHref: string;
  imageSrc: string;
  imageAlt: string;
  reverseLayout: boolean;
}

export interface StatItem {
  value: string;
  label: string;
  subtext: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  avatarSrc: string;
}

export const siteData = {
  brand: {
    name: "AURA ENTERPRISE",
    shortName: "Aura",
    domain: "aura-enterprise.com",
    tagline: "High-velocity infrastructure & digital execution for market leaders.",
    description: "Built with the visual Polish, fluid layouts, and clarity of global fintech and enterprise standards.",
  },
  navigation: [
    { label: "Solutions", href: "#solutions" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Credibility", href: "#credibility" },
    { label: "Reviews", href: "#testimonials" },
  ] as NavLink[],
  hero: {
    badge: "Enterprise Standard 2026",
    headline: "Transform your business with unmatched visual precision & speed.",
    subheadline: "A unified enterprise platform engineered to elevate customer engagement, eliminate operational friction, and deliver fluid, high-converting digital experiences.",
    primaryCta: {
      label: "Start Execution",
      href: "#contact",
    },
    secondaryCta: {
      label: "Explore Solutions",
      href: "#solutions",
    },
    imageSrc: "/images/hero-architecture.jpg",
    metrics: [
      { label: "Availability", value: "99.99%" },
      { label: "Latency", value: "< 45ms" },
      { label: "Conversion Lift", value: "+34%" },
    ],
  },
  valueProp: {
    eyebrow: "The Architecture of Clarity",
    headline: "Engineered for distinction, built for sustained performance.",
    statement: "We eliminate friction at every stage of business operations—giving high-growth enterprises the velocity to lead and innovate without compromise.",
    points: [
      {
        title: "Fluid Design Systems",
        description: "Adaptive typography and mathematical spacing engineered for high-resolution displays.",
      },
      {
        title: "Sub-Second Latency",
        description: "Optimized asset pipelines and zero-bloat runtime code for instant page loads.",
      },
      {
        title: "Enterprise Grade Security",
        description: "Strict isolation, end-to-end data hygiene, and compliant compliance foundations.",
      },
    ],
  },
  services: [
    {
      id: "01",
      category: "Digital Architecture",
      title: "Strategic Platform Design",
      description: "End-to-end digital infrastructure and web properties tailored to your specific brand, services, and visual identity.",
      features: [
        "Fluid typography & custom spacing",
        "Hardware-accelerated animations",
        "Multi-device responsive fidelity",
      ],
      ctaLabel: "Learn More",
      ctaHref: "#contact",
      iconName: "Layout",
    },
    {
      id: "02",
      category: "High-Performance Engineering",
      title: "Custom Web Applications",
      description: "Sub-second load times and SEO-first server-rendered architectures that turn high-volume traffic into loyal clients.",
      features: [
        "Next.js SSR / SSG pipeline",
        "Edge-cached content distribution",
        "Lighthouse 98+ Core Web Vitals",
      ],
      ctaLabel: "View Tech Specs",
      ctaHref: "#contact",
      iconName: "Zap",
    },
    {
      id: "03",
      category: "Growth & Automation",
      title: "Enterprise Systems Integration",
      description: "Automated business workflows bridging modern headless CMS platforms, customer CRM pipelines, and analytics.",
      features: [
        "Headless CMS integration (Sanity/Strapi)",
        "Zero-friction client authoring",
        "Real-time event tracking & telemetry",
      ],
      ctaLabel: "Explore Systems",
      ctaHref: "#contact",
      iconName: "Layers",
    },
  ] as ServiceItem[],
  brandStatement: {
    headline: "Great design is not decoration. It is your most decisive competitive advantage.",
    subtext: "When clarity of purpose meets uncompromising visual execution, customer trust becomes effortless.",
    highlightWord: "decisive",
  },
  featuredSolutions: [
    {
      id: "feat-1",
      eyebrow: "Seamless Execution",
      title: "Engineered with the flow of global industry leaders.",
      description: "Taking inspiration from world-class benchmarks like PayPal Australia, our layouts prioritize user journey, natural eye flow, and purposeful whitespace.",
      highlights: [
        "Uncluttered hierarchy that drives focus to primary conversion points.",
        "Smooth scroll transitions and responsive adaptations across all screen sizes.",
        "Interactive cards that reveal deeper context on user demand.",
      ],
      ctaLabel: "Explore Features",
      ctaHref: "#contact",
      imageSrc: "/images/featured-analytics.jpg",
      imageAlt: "Executive analyzing digital platform analytics and execution flow",
      reverseLayout: false,
    },
    {
      id: "feat-2",
      eyebrow: "Scalable Content Layer",
      title: "Empower your team to update content effortlessly.",
      description: "Decouple your creative presentation from code. Manage case studies, service descriptions, team bios, and announcements without breaking the custom design.",
      highlights: [
        "Modular block components with strict design guardrails.",
        "Live staging environments for instant multi-device review.",
        "Zero dependency on technical teams for daily copy updates.",
      ],
      ctaLabel: "See CMS Capabilities",
      ctaHref: "#contact",
      imageSrc: "/images/featured-team.jpg",
      imageAlt: "Enterprise strategy team collaborating on modern technology platforms",
      reverseLayout: true,
    },
  ] as FeaturedItem[],
  credibility: {
    eyebrow: "Verified Results",
    headline: "A proven track record of institutional excellence.",
    description: "Every metric represents measurable revenue, retention, and performance delivered to our partners.",
    stats: [
      {
        value: "99.99%",
        label: "Uptime Reliability",
        subtext: "Enterprise SLA guaranteed",
      },
      {
        value: "$3.2B+",
        label: "Annual Volume Processed",
        subtext: "Across active client platforms",
      },
      {
        value: "<40ms",
        label: "Global Edge Latency",
        subtext: "Worldwide CDN distribution",
      },
      {
        value: "4.9/5",
        label: "Client Satisfaction Score",
        subtext: "Over 120+ verified audits",
      },
    ] as StatItem[],
  },
  testimonials: [
    {
      id: "test-1",
      quote: "The visual polish and smooth flow transformed how our enterprise clients perceive our platform. Conversion increased by 42% in the first quarter post-launch.",
      author: "Eleanor Vance",
      role: "Managing Director",
      company: "Vanguard Global Capital",
      rating: 5,
      avatarSrc: "/images/testimonial-1.jpg",
    },
    {
      id: "test-2",
      quote: "Execution of this quality is rare. The typography, responsive whitespace, and lightning-fast transitions match the caliber of tier-1 global fintechs.",
      author: "Marcus Sterling",
      role: "Chief Technology Officer",
      company: "Aetherial Labs",
      rating: 5,
      avatarSrc: "/images/testimonial-2.jpg",
    },
    {
      id: "test-3",
      quote: "From initial scaffold to final launch, the process was seamless. The headless setup makes our marketing updates completely frictionless.",
      author: "Sophia Chen",
      role: "VP of Product",
      company: "Nexus Commerce",
      rating: 5,
      avatarSrc: "/images/testimonial-3.jpg",
    },
  ] as TestimonialItem[],
  finalCta: {
    eyebrow: "Ready to Move Forward?",
    headline: "Let's build a website that sets the standard in your industry.",
    description: "Get in touch today to review your project brief, examine our live staging environments, and begin execution.",
    primaryButton: {
      label: "Schedule Consultation",
      href: "#contact",
    },
    secondaryButton: {
      label: "Download Capabilities Deck",
      href: "#docs",
    },
    guaranteeText: "Complimentary architecture review • 100% custom-built • No bloated templates",
  },
  footer: {
    columns: [
      {
        title: "Solutions",
        links: [
          { label: "Strategic Advisory", href: "#services" },
          { label: "Digital Platforms", href: "#services" },
          { label: "Enterprise Automation", href: "#services" },
          { label: "Headless CMS", href: "#solutions" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About Us", href: "#about" },
          { label: "Case Studies", href: "#testimonials" },
          { label: "Careers", href: "#careers" },
          { label: "News & Insights", href: "#insights" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Documentation", href: "#docs" },
          { label: "Design System", href: "#tokens" },
          { label: "Security & Trust", href: "#security" },
          { label: "System Status", href: "#status" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Privacy Policy", href: "#privacy" },
          { label: "Terms of Service", href: "#terms" },
          { label: "Cookie Preferences", href: "#cookies" },
          { label: "Accessibility (WCAG 2.1)", href: "#a11y" },
        ],
      },
    ],
    copyright: `© ${new Date().getFullYear()} Aura Enterprise Pty Ltd. All rights reserved.`,
    complianceNote: "Designed and engineered to enterprise accessibility and security compliance standards.",
  },
};
