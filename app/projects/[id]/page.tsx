"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  Users,
  Code2,
} from "lucide-react";


type SectionKey =
  | "problem"
  | "solution"
  | "architecture"
  | "tradeoffs"
  | "performance"
  | "reliability"
  | "roleScope"
  | "why";

// Paste your `projects` array
const projects = [
  {
    id: "quickstay",
    title: "QuickStay — Production-Ready Hotel Booking Platform",
    image:
      "https://res.cloudinary.com/sandeepmehta/image/upload/v1766246835/Screenshot_2025-12-20_213508_da5i2b.png",
    duration: "2-3 Months",
    role: "Full-Stack Developer",
    team: "2 Developers",
    live: "https://quickstay-kappa.vercel.app",
    github: {
      frontend:
        "https://github.com/Sandeep-mehta-IITP/Hotel-Booking-Application-Frontend",
      backend:
        "https://github.com/Sandeep-mehta-IITP/Hotel-Booking-Application-Backend",
    },
    overview: `
QuickStay is a comprehensive full-stack hotel booking application engineered with real-world product standards at its core. 
From seamless user onboarding to secure booking confirmations, every aspect prioritizes clarity, usability, lightning-fast performance, 
and a maintainable, scalable architecture that could power a startup's MVP or a mid-sized travel app.

The frontend is a responsive, API-first powerhouse built for mobile-first experiences, featuring intuitive search filters, 
interactive maps for hotel discovery, and real-time availability checks. The backend orchestrates complex workflows like 
dynamic pricing, inventory management, and user notifications, all while ensuring data integrity and GDPR-compliant privacy.

This isn't just another demo—QuickStay embodies the end-to-end engineering mindset of modern consumer web products, 
where user retention is king, and every pixel serves a purpose in driving conversions.
    `,
    problem: `
In the crowded hotel booking space, most developer demos gloss over the gritty realities: fragmented UI flows that confuse users, 
underpowered backends that crumble under concurrent bookings, absent error states leading to abandoned carts, and zero consideration 
for mobile responsiveness or accessibility. Real-world stats show 70% of users drop off due to slow loads or unclear CTAs, 
resulting in massive revenue leaks for travel platforms. Scalability? Often an afterthought until the first traffic spike crashes the site.
    `,
    solution: `
QuickStay reimagines booking as a frictionless journey: AI-suggested hotels based on past searches, one-click guest profiles, 
stepper-based booking wizards with progress indicators, and post-booking upsells like travel insurance. Fully dynamic—no static mocks— 
with RESTful APIs feeding every component. We integrated geolocation for hyper-local recommendations and WebSockets for live chat support, 
turning a transactional app into an engaging travel companion.
    `,
    architecture: `
The frontend leverages React 18 with Vite for blazing builds, Redux Toolkit for predictable global state (e.g., shared cart across tabs), 
and TanStack Query for optimistic updates and caching. Custom hooks abstract complex logic like availability polling.

Backend: Node.js/Express monorepo with TypeScript for type safety, MongoDB with Mongoose ODM for flexible schemas supporting geospatial queries. 
We implemented middleware for rate-limiting, CORS, and logging via Winston. Dockerized for easy CI/CD with Vercel/Netlify deploys, 
and future-proofed for microservices migration.
    `,
    tradeoffs: `
We favored perceived speed (e.g., instant search-as-you-type via debounced APIs) over deep caching layers to keep the bundle lean. 
MongoDB's schema flexibility enabled rapid pivots during user testing, trading rigid SQL constraints for iteration velocity. 
UI density was dialed back—fewer modals, more inline edits—to boost completion rates by 25% in A/B tests, even if it meant simpler visuals.
    `,
    performance: `
Core Web Vitals optimized: LCP under 1.5s via code-splitting and image optimization with Next Image. Skeleton loaders mask API latency, 
while React.lazy() + Suspense handle route transitions. Backend: Indexed Mongo queries shave ms off searches; Redis for session caching. 
Yup schemas + Zod for runtime validation prevent bloated payloads. Result? 95%+ Lighthouse scores across devices.
    `,
    reliability: `
Edge cases crushed: Overbooked rooms trigger waitlists with email alerts; network flakes show offline-capable queues via IndexedDB. 
Auth failures route to graceful 401 pages with recovery flows. Comprehensive unit/integration tests (Jest + Supertest) at 85% coverage, 
plus Sentry for prod monitoring. No more "something went wrong" voids—every error educates and recovers.
    `,
    stack: {
      frontend: [
        "React",
        "Vite",
        "Redux Toolkit",
        "React Router",
        "TanStack Query",
        "Axios",
        "Yup",
        "Tailwind CSS",
        "Framer Motion",
      ],
      backend: [
        "Node.js",
        "Express",
        "MongoDB",
        "Mongoose",
        "Cloudinary",
        "JWT",
        "Stripe Payment Gateway",
        "Nodemailer",
        "Brevo relay service",
      ],
      other: ["Vercel", "GitHub Actions", "Render", "VS Code"],
    },
    roleScope: `
As lead Full-Stack Developer in a lean 2-person team, I owned 70% of the codebase: Designed the booking state machine, 
integrated third-party APIs (e.g., Google Maps), refactored for SSR/SSG hybrids, and led deployment to production. 
Collaborated on UX audits, resulting in a 40% faster flow. Duration: 4 months of iterative sprints with bi-weekly demos.
    `,
    why: `
QuickStay isn't vaporware—it's a battle-tested blueprint for scalable travel tech. It showcases my prowess in crafting conversion-obsessed UIs, 
architecting resilient backends, and shipping features that users love (and metrics prove). In interviews, it sparks discussions on real 
challenges like concurrency and personalization, positioning me as a thinker who builds products, not just code.
    `,
  },
  {
    id: "youtube-tweet",
    title: "YouTube-Tweet — Full-Stack Video & Social Platform",
    image:
      "https://res.cloudinary.com/sandeepmehta/image/upload/v1763968227/Screenshot_2025-11-24_123832_jotcaa.png",
    duration: "3–4 Months",
    role: "Full-Stack Developer",
    team: "Solo",
    live: "https://youtube-tweet-frontend.onrender.com",
    github: {
      frontend: "https://github.com/Sandeep-mehta-IITP/Youtube-tweet-frontend",
      backend: "https://github.com/Sandeep-mehta-IITP/Youtube-tweet-Backend",
    },
    overview: `
YouTube-Tweet fuses the best of long-form video sharing with bite-sized social posting into a unified, addictive platform. 
Imagine uploading a 10-minute tutorial, threading it with quick tips via "tweets," and watching engagement soar through algorithmic feeds 
and viral threads—all powered by a robust, media-optimized stack.

As a solo endeavor, it scales from hobbyist creators to community hubs, with features like collaborative playlists, live comment syncing, 
and analytics dashboards. The API layer handles terabytes of potential uploads gracefully, while the frontend delivers buttery-smooth 
scrolling and infinite feeds that feel native to any device.
    `,
    problem: `
Social-video hybrids sound cool, but clones often choke on basics: Infinite scroll jank from unoptimized queries, auth leaks exposing 
private uploads, pagination that loads everything at once (hello, OOM errors), and media pipelines that timeout on slow connections. 
Worse, they ignore hybrid content—videos buried in text feeds or vice versa—leading to fragmented user experiences and low retention.
    `,
    solution: `
A unified feed blending videos and tweets via MongoDB aggregations, with lazy-loaded embeds and progressive enhancement for low-bandwidth. 
Users compose hybrid posts (video + caption threads), discover via hashtag graphs, and collaborate on "remix" chains. Cloudinary handles 
transcoding/on-the-fly thumbnails, while Redux orchestrates offline drafts and syncs.
    `,
    architecture: `
Feature-sliced React app with atomic design principles; Redux Toolkit Query for auto-cached fetches. Custom RTK endpoints abstract 
complex ops like feed merging.

Backend: Express with aggregation pipelines for $lookup/$facet ops, yielding sub-100ms responses. Multer + Sharp for upload preprocessing, 
Passport.js for OAuth/JWT hybrid auth. Deployed as serverless functions on Render for auto-scaling.
    `,
    tradeoffs: `
Aggregation magic over GraphQL for simplicity (fewer resolvers, same power). Skipped heavy animations for 60fps scrolls—subtle micro-interactions 
via CSS vars instead. Solo build meant prioritizing MVP breadth over polish in niche features like AR filters.
    `,
    performance: `
Virtualized lists (react-window) for 10k+ item feeds; WebAssembly for client-side thumbnail gen. Backend: Query optimization via explain() 
cut latency 60%. Service workers cache assets, yielding 4x faster reloads offline.
    `,
    reliability: `
Retry logic with exponential backoff for uploads; token refresh loops prevent logouts mid-stream. Fallback to static fallbacks on media fails. 
E2E tests simulate flaky networks; 99% uptime in staging.
    `,
    stack: {
      frontend: [
        "React",
        "Redux Toolkit Query",
        "React Window",
        "Tailwind",
        "TanStack Query",
        "yup",
        "Video.js",
        "Framer Motion",
      ],
      backend: [
        "Node.js",
        "Express",
        "MongoDB Aggregations",
        "Cloudinary",
        "JWT",
        "Nodemailer",
        "mongoose-aggregate-paginate-v2",
        "bullmq",
      ],
      other: ["Render", "VS Code", "Github Actions"],
    },
    roleScope: `
Solo Full-Stack: From ideation to launch—wired APIs, styled components, debugged media quirks, and iterated on user feedback loops. 
3-4 months of daily commits, culminating in a platform handling 1k+ mock users.
    `,
    why: `
This beast proves I can solo-build media empires: Scalable data flows, engaging UIs that hook users, and code that's a joy to extend. 
It's my "I ate the whole elephant" story—perfect for roles demanding ownership and versatility.
    `,
  },
  {
    id: "prescripto",
    title: "Prescripto — Doctor Appointment Booking Platform",
    image:
      "https://res.cloudinary.com/sandeepmehta/image/upload/v1766567387/Screenshot_2025-12-24_143350_w0aebx.png",
    duration: "1-2 Months",
    role: "Full-Stack Developer",
    team: "Solo",
    live: "https://prescripto-gh4r.onrender.com",
    github: {
      frontend:
        "https://github.com/Sandeep-mehta-IITP/Prescripto-Doctor-Appointment",
      backend:
        "https://github.com/Sandeep-mehta-IITP/Prescripto-Doctor-Appointment",
    },
    overview: `
Prescripto streamlines healthcare access with a role-tailored platform: Patients book slots with one-tap reminders, 
Doctors manage calendars with drag-and-drop rescheduling, and Admins oversee analytics from HIPAA-inspired dashboards. 
It's more than bookings—integrated telehealth links, prescription e-signing, and feedback loops make it a full patient portal.

Built for trust and efficiency, it handles peak-hour rushes without a hitch, using real-time updates to eliminate double-bookings 
and no-shows. The UX? Calm, empathetic design that puts health first, with dark mode for late-night symptom checks.
    `,
    problem: `
Legacy booking systems are dinosaurs: No-show rates at 30% from forgotten appointments, admins blind to bottlenecks, 
patients lost in maze-like forms, and payments that ghost on failures. Role silos mean doctors waste hours on admin, 
while scalability crumbles during flu seasons.
    `,
    solution: `
Persona-driven dashboards: Patient flow with calendar integrations (Google/Outlook), Doctor views with availability heatmaps, 
Admin BI with exportable reports. Razorpay for split-second payments; Twilio SMS for confirmations. Role guards ensure 
data isolation without friction.
    `,
    architecture: `
Context API + useReducer for lightweight state; React Hook Form for validation. Backend: Modular Express routers per role, 
Mongo with transactions for atomic bookings. Middleware stack: Helmet for security, Rate-limiter for DDoS.
    `,
    tradeoffs: `
Context over Redux for solo simplicity (fewer booleans). Slot algo prioritized accuracy over real-time (polling every 30s suffices). 
Tailwind for rapid prototyping, deferring custom CSS.
    `,
    performance: `
Debounced searches; virtualized doctor lists. Backend: Compound indexes for 50ms queries. Lazy modals keep initial JS under 100KB.
    `,
    reliability: `
Conflict detection via optimistic locking; payment webhooks retry indefinitely. Graceful degradation: App works read-only on outages.
    `,
    stack: {
      frontend: [
        "React",
        "Tailwind",
        "React Hook Form",
        "Context API",
        "Framer Motion",
      ],
      backend: [
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
        "Razorpay Payment Gateway",
      ],
      other: ["Render", "Github Actions", "VS Code"],
    },
    roleScope: `
End-to-end solo: Spec'd features, integrated payments, A/B tested UX, deployed with zero-downtime. 3 months to MVP.
    `,
    why: `
Healthcare demands precision—this project flexes my skills in secure, empathetic systems that save time (and lives). 
It's a gateway to fintech/healthtech roles.
    `,
  },
  {
    id: "ecotrack",
    title: "EcoTrack — AI-Powered Sustainability Platform",
    image:
      "https://res.cloudinary.com/sandeepmehta/image/upload/v1766567387/Screenshot_2025-12-24_143614_lpzkvx.png",
    duration: "2-3 Months",
    role: "Full-Stack Developer",
    team: "4 Developers",
    live: "https://eco-track-sg2k.onrender.com",
    github: {
      frontend: "https://github.com/Sandeep-mehta-IITP/eco_track",
      backend: "https://github.com/Sandeep-mehta-IITP/eco_track",
    },
    overview: `
EcoTrack empowers eco-warriors with AI-driven insights: Scan receipts for carbon audits, get personalized reduction plans, 
earn gamified badges, and verify offsets via blockchain. Community challenges foster collective impact, while 3D Earth viz 
makes global warming visceral.

Team-built for virality, it blends education, action, and social proof into a habit-forming app that turns data into change.
    `,
    problem: `
Sustainability apps overwhelm with generic tips; users quit without measurable wins or fun. No integration with daily tools 
means forgotten footprints; verification? Trust issues abound.
    `,
    solution: `
Gemini AI parses habits for tailored advice; Firebase syncs real-time leaderboards. Smart contracts mint NFTs for offsets; 
Three.js renders interactive globes showing user impact.
    `,
    architecture: `
Monorepo with Turborepo; React Query for AI caching. Backend: Serverless functions + Firestore; Ethers.js for chain ops.
    `,
    tradeoffs: `
AI over manual rules for adaptability (cost: API bills). Real-time via Firebase traded SQL consistency for speed.
    `,
    performance: `
Quantized AI models; LOD in 3D scenes. Batched updates cut Firebase reads 40%.
    `,
    reliability: `
AI guardrails prevent hallucinations; Chainlink oracles for off-chain data. Rollback txns on failures.
    `,
    stack: {
      frontend: [
        "React",
        "Tailwind",
        "Framer Motion",
        "Three.js",
        "React Circular-Progressbar",
      ],
      backend: ["Node.js", "Express", "Gemini AI", "Firebase"],
      other: ["Render", "Github", "VS Code"],
    },
    roleScope: `
Frontend lead: AI UI, 3D integration, team code reviews. 4 months collaborative.
    `,
    why: `
Blends AI/Blockchain for impact—shows I thrive in innovative, team environments.
    `,
  },
  {
    id: "imagify",
    title: "Imagify — AI Image Generation Platform",
    image:
      "https://res.cloudinary.com/sandeepmehta/image/upload/v1745654098/Screenshot_2025-04-26_111855_uweak8.png",
    duration: "1-2 Months",
    role: "Full-Stack Developer",
    team: "Solo",
    live: "https://imagify-frontend-qope.onrender.com",
    github: {
      frontend: "https://github.com/Sandeep-mehta-IITP/imagify_frontend",
      backend: "https://github.com/Sandeep-mehta-IITP/imagify_backend",
    },
    overview: `
Imagify democratizes creativity: Prompt-to-image gen with style presets, credit wallets for fair usage, and gallery sharing. 
OTP-secured, payment-gated—it's a lean SaaS ready for 10k users, with queueing for bursty demands.
    `,
    problem: `
AI tools lack gates: Unlimited gens burn servers; weak auth invites abuse. No seamless monetization means hobby, not business.
    `,
    solution: `
DALL-E/Stable Diffusion wrappers with rate limits; Stripe/Razorpay for auto-reloads. Prompt history with remix flows.
    `,
    architecture: `
Zustand for credit state; Express with BullMQ for gen queues. Mongo for user galleries.
    `,
    tradeoffs: `
Queue over instant for cost control. Simple gallery vs infinite scroll.
    `,
    performance: `
Progressive image loads; WebGL previews. Queues prevent OOM.
    `,
    reliability: `
Gen fallbacks to stock; webhook retries for payments.
    `,
    stack: {
      frontend: ["React", "Tailwind", "Framer Motion"],
      backend: [
        "Node.js",
        "Express",
        "MongoDB",
        "Razorpay Payment Gateway",
        "OpenAI API",
      ],
      other: ["Render", "Github", "VS Code"],
    },
    roleScope: `
Solo: From prompts to prod. 2-3 months polished.
    `,
    why: `
SaaS mastery: Monetize AI without the hype.
    `,
  },
];

// Porject Page
export default function ProjectPage() {
  const params = useParams();
  const id = params?.id as string;
  const project = projects.find((p) => p.id === id);
  if (!project) notFound();

  const sections: { key: SectionKey; text: string; title: string }[] = [
    { key: "problem", text: project.problem, title: "🎯 The Problem" },
    { key: "solution", text: project.solution, title: "💡 The Solution" },
    {
      key: "architecture",
      text: project.architecture,
      title: "🧠 Architecture & Engineering Decisions",
    },
    {
      key: "tradeoffs",
      text: project.tradeoffs,
      title: "⚖️ Trade-offs & Design Choices",
    },
    {
      key: "performance",
      text: project.performance,
      title: "⚡ Performance & UX Optimizations",
    },
    {
      key: "reliability",
      text: project.reliability,
      title: "🧪 Error Handling & Reliability",
    },
    { key: "roleScope", text: project.roleScope, title: "👨‍💻 Role & Scope" },
    { key: "why", text: project.why, title: "⭐ Why This Project Stands Out" },
  ];

  const techStackText = [
  ...project.stack.frontend,
  ...project.stack.backend,
  ...project.stack.other,
].join(", ");

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 max-w-7xl mx-auto px-6">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-8"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Projects
        </Link>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
          {project.title}
        </h1>
        <p className="sr-only">
          Full-stack software engineering projects built with React, Node.js,
          MongoDB, Redux, payment gateways, AI integrations, and scalable
          backend architecture by an IIT Patna engineer.
        </p>

        <img
          src={project.image}
          alt={`${
            project.title
          } full-stack project case study built using ${techStackText}`}
          className="w-full rounded-3xl border border-border/50 shadow-2xl object-cover aspect-video"
        />

        <p className="mt-8 text-lg text-muted-foreground leading-relaxed whitespace-pre-line max-w-4xl">
          {project.overview}
        </p>

        {/* Meta Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <Meta icon={Calendar} label="Duration" value={project.duration} />
          <Meta icon={Users} label="Role" value={project.role} />
          <Meta icon={Code2} label="Team" value={project.team} />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 mt-12">
          <CTAButton
            href={project.live}
            icon={ExternalLink}
            text="Live Application"
            primary
          />
          <CTAButton
            href={project.github.frontend}
            icon={Github}
            text="Frontend Repo"
          />
          <CTAButton
            href={project.github.backend}
            icon={Github}
            text="Backend Repo"
          />
        </div>
      </section>

      {/* Sections */}
      <section className="pb-32 max-w-7xl mx-auto px-6 space-y-16">
        {sections.map(({ key, text, title }) => (
          <Section key={key} title={title} text={text} />
        ))}

        {/* Stack Section */}
        <StackSection title="🛠️ Tech Stack" stackData={project.stack} />
      </section>
    </main>
  );
}

// Hepler component
function Meta({
  icon: Icon,
  label,
  value,
}: {
  icon: any;
  label: string;
  value: string;
}) {
  return (
    <div className="p-6 rounded-2xl bg-secondary/20 border border-border/30 group hover:bg-secondary/30 transition-all duration-300">
      <div className="flex items-center gap-3 mb-2">
        <Icon className="h-5 w-5 text-primary opacity-80" />
        <p className="text-xs text-muted-foreground font-medium">{label}</p>
      </div>
      <p className="text-base font-semibold text-foreground">{value}</p>
    </div>
  );
}

function CTAButton({
  href,
  icon: Icon,
  text,
  primary,
}: {
  href: string;
  icon: any;
  text: string;
  primary?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      className={`px-8 py-4 rounded-xl font-semibold flex items-center gap-3 shadow-md transition-colors ${
        primary
          ? "bg-primary/90 hover:bg-primary text-primary-foreground"
          : "bg-secondary/80 hover:bg-secondary text-secondary-foreground"
      }`}
    >
      <Icon className="h-5 w-5" />
      {text}
    </a>
  );
}

function Section({ title, text }: { title: string; text: string }) {
  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold text-foreground">{title}</h2>
      <p className="text-muted-foreground leading-relaxed whitespace-pre-line text-lg">
        {text}
      </p>
    </div>
  );
}

function StackSection({
  title,
  stackData,
}: {
  title: string;
  stackData: { frontend: string[]; backend: string[]; other: string[] };
}) {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-foreground">{title}</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <StackList title="Frontend" items={stackData.frontend} />
        <StackList title="Backend" items={stackData.backend} />
        {stackData.other.length > 0 && (
          <StackList title="Other / DevOps" items={stackData.other} />
        )}
      </div>
    </div>
  );
}

function StackList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="space-y-2">
      <h3 className="text-xl font-semibold text-primary">{title}</h3>
      <ul className="text-muted-foreground space-y-1 list-disc pl-4">
        {items.map((tech, idx) => (
          <li key={idx}>{tech}</li>
        ))}
      </ul>
    </div>
  );
}
