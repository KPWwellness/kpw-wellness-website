import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Home,
  GraduationCap,
  Handshake,
  Leaf,
  Users,
  Building2,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Menu,
  X,
  ChevronDown,
  ShieldCheck,
  CalendarDays,
  FileText,
  Sparkles,
  Stethoscope,
  Baby,
  Landmark,
} from "lucide-react";

const partnerLinks = [
  ["Sun Trust Development", "https://suntrustdevelopment.com"],
  ["Sun Trust Asset Nurture & Development", "https://suntrustassetnandd.com/"],
  ["TREC Community Investors", "https://treccommunityinvestors.org/"],
  ["The Real Estate Council", "https://recouncil.com/"],
  ["The Gentleman Builder", "https://thegentlemanbuilder.com/home"],
  ["Cadence Futbol Club", "https://www.cadencefutbolclub.org/"],
  ["C&C Homecare", "https://candchomecare.com/"],
  ["Karla Patricia Skin", "https://dallasfacialist.com/"],
];

const programs = [
  {
    icon: Heart,
    title: "Wellness & Self-Care Education",
    text: "Community-based education around wellness, skin health, confidence, personal care, and whole-person self-care in partnership with Karla Patricia Skin.",
  },
  {
    icon: Home,
    title: "Housing & Homebuyer Education",
    text: "Education that helps families understand homeownership readiness, housing stability, responsible property ownership, and sustainable living.",
  },
  {
    icon: GraduationCap,
    title: "Financial Empowerment",
    text: "Practical education around budgeting, credit, saving, financial confidence, and long-term wealth stability.",
  },
  {
    icon: Building2,
    title: "Workforce & Trade Exposure",
    text: "Exposure to construction, entrepreneurship, real estate, beauty, wellness, healthcare, and trade-based career pathways.",
  },
  {
    icon: Leaf,
    title: "Sustainable Community Impact",
    text: "Programs that connect wellness, education, sustainable housing, neighborhood beautification, anti-displacement strategies, and long-term community revitalization without forcing residents out of their neighborhoods.",
  },
  {
    icon: Users,
    title: "Youth & Family Empowerment",
    text: "Mentorship, education, athletics, and community programming designed to strengthen families, support youth, and expand opportunity.",
  },
];

const impactItems = [
  "Low-to-moderate income neighborhood support",
  "Mill City and South Dallas community impact",
  "Wellness, education, and housing stability",
  "Minority-led community development collaboration",
  "Partnerships with schools, churches, nonprofits, developers, healthcare providers, and funders",
  "Grant-ready programming and measurable community outcomes",
  "Community revitalization without displacement and responsible anti-gentrification development strategies",
];

const actionCards = [
  {
    id: "donate-now",
    title: "Donate",
    text: "Support wellness, education, housing stability, youth development, healthcare access, and community revitalization initiatives.",
  },
  {
    id: "volunteer-with-us",
    title: "Volunteer",
    text: "Join community events, mentorship opportunities, outreach initiatives, youth activities, and neighborhood engagement programs.",
  },
  {
    id: "partner-with-kpw",
    title: "Partner",
    text: "Collaborate with KPW Wellness through healthcare, education, redevelopment, nonprofit, civic, or corporate partnerships.",
  },
  {
    id: "sponsor-community-impact",
    title: "Sponsor",
    text: "Support transformational community initiatives through sponsorships, grants, program funding, and strategic giving.",
  },
];

const governanceItems = [
  {
    id: "board-of-directors",
    title: "Board of Directors",
    text: "Board structure, advisory leadership, governance roles, and nonprofit oversight information.",
    details: "KPW Wellness is building a mission-driven leadership and advisory structure focused on community accountability, ethical oversight, long-term sustainability, and strategic impact. Our governance framework is designed to support transparent decision-making, responsible stewardship, and strong nonprofit leadership as the organization continues to grow.",
  },
  {
    id: "governance-leadership",
    title: "Governance & Leadership",
    text: "Leadership standards, operating principles, conflict-of-interest controls, and strategic oversight.",
    details: "KPW Wellness operates with a commitment to integrity, collaboration, transparency, and community-centered leadership. Our leadership approach emphasizes responsible decision-making, partnership accountability, operational excellence, and mission alignment across every initiative and strategic relationship.",
  },
  {
    id: "annual-reports",
    title: "Annual Reports",
    text: "Annual community impact, program performance, organizational updates, and strategic progress reports.",
    details: "KPW Wellness is committed to sharing organizational progress, community impact milestones, partnership growth, and program development updates through future annual reporting initiatives designed to strengthen transparency and public trust.",
  },
  {
    id: "impact-reports",
    title: "Impact Reports",
    text: "Measurable outcomes, community transformation stories, program results, and initiative performance.",
    details: "KPW Wellness is focused on creating measurable and meaningful community impact through wellness initiatives, youth engagement, healthcare outreach, educational programming, revitalization partnerships, and long-term neighborhood transformation efforts.",
  },
  {
    id: "financial-transparency",
    title: "Financial Transparency",
    text: "Financial reporting, responsible stewardship, donor accountability, and funding-use transparency.",
    details: "KPW Wellness is committed to responsible stewardship, transparent operational practices, and mission-aligned community investment. Future reporting infrastructure will support accountability, donor confidence, partnership visibility, and sustainable organizational growth.",
  },
  {
    id: "accessibility-statement",
    title: "ADA Accessibility Statement",
    text: "Digital accessibility, inclusive participation, ADA-conscious website practices, and community access commitments.",
    details: "KPW Wellness is committed to inclusive community engagement, accessible communication, and equitable participation across digital platforms, educational initiatives, wellness programming, and public-facing community resources.",
  },
];

const legalPolicyItems = [
  {
    id: "privacy-policy",
    title: "Privacy Policy",
    text: "KPW Wellness respects the privacy of visitors, donors, volunteers, partners, and community members. Information submitted through the website is used to respond to inquiries, coordinate programs, manage partnerships, support donor engagement, and improve community services. KPW Wellness does not sell personal information.",
  },
  {
    id: "terms-conditions",
    title: "Terms & Conditions",
    text: "By using this website, visitors agree to use KPW Wellness content, forms, resources, and partner links for lawful and respectful purposes. Website information is provided for general community education and organizational engagement and may be updated as programs, partnerships, and services evolve.",
  },
  {
    id: "community-standards",
    title: "Community Standards",
    text: "KPW Wellness is committed to respectful, inclusive, family-centered, and community-first engagement. We promote collaboration, dignity, equity, anti-displacement revitalization, responsible partnerships, and transparent communication across all public-facing programs and initiatives.",
  },
  {
    id: "accessibility-policy",
    title: "Accessibility",
    text: "KPW Wellness is committed to making digital content and community resources accessible, readable, mobile-friendly, and inclusive. We continue to improve accessibility practices so visitors, partners, volunteers, donors, and community members can engage with the organization more easily.",
  },
];

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function NavLink({ href, children, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-300/40"
    >
      {children}
    </a>
  );
}

function SectionHeader({ eyebrow, title, text, light = false }) {
  return (
    <div className="mx-auto mb-14 max-w-4xl text-center">
      <p className={`text-sm font-semibold uppercase tracking-[0.3em] ${light ? "text-emerald-300" : "text-emerald-700"}`}>{eyebrow}</p>
      <h2 className={`mt-4 text-4xl font-bold leading-tight md:text-5xl ${light ? "text-white" : "text-indigo-950"}`}>{title}</h2>
      {text && <p className={`mt-6 text-lg leading-8 ${light ? "text-slate-300" : "text-slate-700"}`}>{text}</p>}
    </div>
  );
}

function IconCard({ icon: Icon, title, text }) {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-800">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="text-2xl font-bold text-indigo-950">{title}</h3>
      <p className="mt-4 leading-8 text-slate-700">{text}</p>
    </div>
  );
}

export default function KPWWellnessWebsite() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeGovernance, setActiveGovernance] = useState(governanceItems[0]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    inquiryType: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState("");

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  const handleAnchor = (id) => (event) => {
    event.preventDefault();
    setMobileOpen(false);
    scrollToId(id);
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleInquirySubmit = async (event) => {
    event.preventDefault();

    setSubmitStatus("Submitting your inquiry...");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xnjrbnlb", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitStatus("Thank you. Your inquiry has been successfully submitted to KPW Wellness. A team member will respond soon.");
        setFormData({
          name: "",
          email: "",
          organization: "",
          inquiryType: "",
          message: "",
        });
        form.reset();
      } else {
        setSubmitStatus("There was an issue submitting your inquiry. Please email info@kpwwellness.org directly.");
      }
    } catch (error) {
      setSubmitStatus("There was a connection issue. Please email info@kpwwellness.org directly.");
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" onClick={handleAnchor("home")} className="flex items-center gap-3 focus:outline-none focus:ring-4 focus:ring-emerald-300/40 rounded-2xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-emerald-700 to-indigo-950 text-lg font-bold text-white shadow-sm">KPW</div>
            <div>
              <p className="text-lg font-bold tracking-wide text-indigo-950">KPW Wellness</p>
              <p className="text-xs uppercase tracking-[0.25em] text-emerald-700">Educate • Empower • Elevate</p>
            </div>
          </a>

          <nav className="hidden items-center gap-2 md:flex" aria-label="Primary navigation">
            <NavLink href="#home" onClick={handleAnchor("home")}>Home</NavLink>
            <NavLink href="#about" onClick={handleAnchor("about")}>About</NavLink>
            <div className="group relative py-2">
              <button className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-300/40" aria-haspopup="true">
                Initiatives <ChevronDown className="h-4 w-4" />
              </button>
              <div className="invisible absolute left-0 top-full z-50 w-72 translate-y-2 rounded-2xl border border-slate-200 bg-white p-3 opacity-0 shadow-2xl transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <a href="#mill-city" onClick={handleAnchor("mill-city")} className="block rounded-xl px-4 py-3 font-semibold text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-700">Mill City Initiative</a>
                <a href="#healthcare-veterans" onClick={handleAnchor("healthcare-veterans")} className="block rounded-xl px-4 py-3 font-semibold text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-700">Healthcare & Veterans</a>
                <a href="#karla-patricia-skin" onClick={handleAnchor("karla-patricia-skin")} className="block rounded-xl px-4 py-3 font-semibold text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-700">Karla Patricia Skin</a>
                <a href="#anti-displacement" onClick={handleAnchor("anti-displacement")} className="block rounded-xl px-4 py-3 font-semibold text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-700">Anti-Displacement Revitalization</a>
              </div>
            </div>
            <NavLink href="#programs" onClick={handleAnchor("programs")}>Programs</NavLink>
            <NavLink href="#ecosystem" onClick={handleAnchor("ecosystem")}>Ecosystem</NavLink>
            <NavLink href="#impact-dashboard" onClick={handleAnchor("impact-dashboard")}>Impact</NavLink>
            <NavLink href="#grants" onClick={handleAnchor("grants")}>Support</NavLink>
            <NavLink href="#contact" onClick={handleAnchor("contact")}>Contact</NavLink>
          </nav>

          <div className="hidden md:block">
            <a
              href="#partnership"
              onClick={handleAnchor("partnership")}
              className="inline-flex items-center justify-center rounded-2xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-emerald-700 hover:shadow-emerald-500/30 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-400/40"
            >
              Partner With Us
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-xl p-3 text-slate-700 transition hover:bg-slate-100 focus:outline-none focus:ring-4 focus:ring-emerald-300/40 md:hidden"
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-slate-200 bg-white px-6 py-4 md:hidden">
            <div className="flex flex-col gap-2">
              {["home", "about", "mill-city", "healthcare-veterans", "karla-patricia-skin", "anti-displacement", "programs", "ecosystem", "impact-dashboard", "grants", "partnership", "contact"].map((id) => (
                <a key={id} href={`#${id}`} onClick={handleAnchor(id)} className="rounded-xl px-4 py-3 font-semibold text-slate-700 hover:bg-emerald-50 hover:text-emerald-700">
                  {id.split("-").map((w) => w[0].toUpperCase() + w.slice(1)).join(" ")}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-slate-900 to-emerald-900 text-white">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 opacity-10">
            <div className="absolute left-20 top-20 h-64 w-64 rounded-full bg-white blur-3xl" />
            <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-emerald-300 blur-3xl" />
          </div>

          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">Nonprofit Community Impact</p>
              <h1 className="text-4xl font-bold leading-tight md:text-6xl">Building wellness, education, and sustainable community impact.</h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">KPW Wellness supports individuals, families, veterans, youth, and neighborhoods through wellness education, financial empowerment, housing education, workforce exposure, healthcare partnerships, and community-based revitalization initiatives.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#grants" onClick={handleAnchor("grants")} className="inline-flex items-center justify-center rounded-2xl bg-emerald-600 px-7 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-emerald-700">Support the Mission</a>
                <a href="#programs" onClick={handleAnchor("programs")} className="inline-flex items-center justify-center rounded-2xl border border-white/40 bg-white/10 px-7 py-4 text-base font-semibold text-white transition hover:bg-white/20">Explore Programs</a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="rounded-[2rem] bg-white p-6 text-slate-900 shadow-2xl">
              <div className="rounded-[1.5rem] border border-slate-100 bg-slate-50 p-8 text-center">
                <div className="mx-auto mb-5 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-indigo-950 via-emerald-700 to-purple-900 text-3xl font-bold text-white shadow-lg">KPW</div>
                <h2 className="text-3xl font-bold text-indigo-950">KPW Wellness</h2>
                <p className="mt-2 text-sm uppercase tracking-[0.35em] text-emerald-700">Educate • Empower • Elevate</p>
                <div className="mx-auto my-6 h-px w-3/4 bg-slate-200" />
                <p className="text-base leading-7 text-slate-600">A community wellness platform connecting self-care, education, housing stability, healthcare access, financial empowerment, and sustainable neighborhood transformation.</p>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="impact-ecosystem" className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-emerald-950 py-28 text-white">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-emerald-400 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-indigo-500 blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-7xl px-6">
            <SectionHeader light eyebrow="Our Impact Ecosystem" title="Where community meets opportunity." text="KPW Wellness brings together wellness, healthcare, housing, education, youth empowerment, mentorship, workforce exposure, and sustainable revitalization to help strengthen individuals, families, and communities." />
            <div className="grid gap-6 md:grid-cols-3">
              {[
                ["Wellness & Healthcare", "Supporting compassionate healthcare access, self-care education, senior wellness, veteran support, and whole-person wellness initiatives."],
                ["Housing & Revitalization", "Promoting sustainable housing stability, neighborhood investment, responsible development, and community revitalization throughout South Dallas and beyond."],
                ["Youth & Education", "Creating pathways for mentorship, leadership development, workforce exposure, entrepreneurship, sports, and future opportunity."],
                ["How We Transform Communities", "We educate, empower, revitalize, heal, build, and sustain communities through collaborative ecosystem partnerships and measurable impact."],
                ["Community Impact", "Supporting low-to-moderate income neighborhoods through wellness programming, education initiatives, outreach efforts, and long-term community engagement."],
                ["Strategic Partnerships", "Connecting nonprofits, healthcare organizations, developers, schools, churches, businesses, civic leaders, and community stakeholders together."],
              ].map(([title, text]) => (
                <div key={title} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/10">
                  <h3 className="text-2xl font-bold text-white">{title}</h3>
                  <p className="mt-5 leading-8 text-slate-300">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-6 md:grid-cols-4">
              {[["Emerging", "Families Impacted"], ["12+", "Community Initiatives"], ["Growing", "Strategic Partnerships"], ["100%", "Community Focused"]].map(([number, label]) => (
                <div key={label} className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center shadow-sm">
                  <p className="text-5xl font-bold text-emerald-700">{number}</p>
                  <p className="mt-3 font-semibold text-slate-700">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-20 scroll-mt-28">
          <div className="grid gap-10 md:grid-cols-[1fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">About KPW Wellness</p>
              <h2 className="mt-3 text-3xl font-bold text-indigo-950 md:text-4xl">A nonprofit platform for whole-person and whole-community wellness.</h2>
            </div>
            <div className="space-y-5 text-lg leading-8 text-slate-700">
              <p>KPW Wellness exists to strengthen communities through education, wellness programming, housing awareness, workforce exposure, healthcare access, and neighborhood-based impact initiatives.</p>
              <p>Our mission is to help individuals and families build healthier, more informed, and more sustainable lives while supporting community revitalization in low-to-moderate-income neighborhoods.</p>
            </div>
          </div>
        </section>

        <section id="programs" className="bg-slate-50 py-20 scroll-mt-28">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeader eyebrow="Programs" title="Grant-ready programs with measurable community value." text="KPW Wellness aligns wellness, education, housing stability, workforce development, and community engagement into practical programming that partners can understand and support." />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {programs.map((item) => <IconCard key={item.title} {...item} />)}
            </div>
          </div>
        </section>

        <section className="bg-slate-950 py-24 text-white">
          <div className="mx-auto max-w-7xl px-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">Future Vision</p>
            <h2 className="mt-4 text-4xl font-bold md:text-6xl">Building the future of community development.</h2>
            <p className="mx-auto mt-8 max-w-4xl text-xl leading-9 text-slate-300">KPW Wellness is creating a collaborative community infrastructure model where wellness, housing, education, mentorship, sustainability, healthcare, and economic empowerment work together to create long-term generational transformation.</p>
          </div>
        </section>

        <section id="mill-city" className="mx-auto max-w-7xl px-6 py-20 scroll-mt-28">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="rounded-[2rem] bg-gradient-to-br from-emerald-700 to-indigo-950 p-8 text-white shadow-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-200">Mill City Initiative</p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">Supporting sustainable revitalization in Mill City and South Dallas.</h2>
              <p className="mt-5 leading-8 text-slate-100">KPW Wellness supports community-centered revitalization through education, partnerships, wellness programming, housing stability, anti-displacement advocacy, and neighborhood impact initiatives designed to strengthen communities without forcing out long-term residents.</p>
              <a href="https://treccommunityinvestors.org/dallas-catalyst-project-mill-city/" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex w-fit items-center justify-center rounded-2xl bg-emerald-500 px-5 py-3 font-semibold text-white transition hover:bg-emerald-600">Visit Mill City Initiative <ExternalLink className="ml-2 h-4 w-4" /></a>
            </div>
            <div className="grid gap-4">
              {impactItems.map((item) => (
                <div key={item} className="flex items-start gap-4 rounded-2xl border bg-white p-5 shadow-sm">
                  <Handshake className="mt-1 h-5 w-5 shrink-0 text-emerald-700" />
                  <p className="font-medium text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="anti-displacement" className="bg-white py-24 scroll-mt-28">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeader
              eyebrow="Community Revitalization Without Displacement"
              title="Investing in neighborhoods while protecting the people who built them."
              text="KPW Wellness supports responsible redevelopment strategies that strengthen communities, improve neighborhood conditions, increase opportunity, and encourage investment without forcing out long-term residents, families, seniors, or local culture."
            />

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                ["Housing Stability", "Supporting long-term residents through housing education, resource awareness, stability initiatives, and community-centered planning."],
                ["Responsible Redevelopment", "Encouraging revitalization strategies that improve neighborhoods while respecting existing residents, businesses, and community identity."],
                ["Community Ownership", "Promoting education around ownership, economic participation, entrepreneurship, and sustainable community investment."],
                ["Neighborhood Preservation", "Supporting beautification, safety, wellness, and infrastructure improvements without encouraging harmful displacement practices."],
                ["Equitable Community Growth", "Connecting developers, nonprofits, civic leaders, healthcare organizations, and residents together for balanced community transformation."],
                ["Long-Term Impact", "Creating sustainable ecosystems focused on generational stability, wellness access, education, and economic opportunity."],
              ].map(([title, text]) => (
                <div key={title} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <h3 className="text-2xl font-bold text-indigo-950">{title}</h3>
                  <p className="mt-5 leading-8 text-slate-700">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="healthcare-veterans" className="bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-950 py-24 text-white scroll-mt-28">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">Healthcare & Veterans Initiative</p>
              <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">Compassionate healthcare, veteran support, and family-centered wellness infrastructure.</h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">In partnership with C&C Homecare, KPW Wellness supports aging in place, compassionate care, veteran wellness, senior support systems, healthcare accessibility, and long-term family wellness.</p>
              <a href="https://candchomecare.com/" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex w-fit items-center justify-center rounded-2xl bg-emerald-600 px-5 py-3 font-semibold text-white transition hover:bg-emerald-700">Visit C&C Homecare <ExternalLink className="ml-2 h-4 w-4" /></a>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              {[
                [Stethoscope, "Community healthcare access"],
                [ShieldCheck, "Veteran wellness initiatives"],
                [Home, "Senior care and aging-in-place support"],
                [Heart, "Compassionate family-centered healthcare"],
                [Users, "Healthcare education and outreach"],
              ].map(([Icon, title]) => (
                <div key={title} className="mb-4 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 text-lg font-medium text-slate-100">
                  <Icon className="h-5 w-5 text-emerald-300" /> {title}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="karla-patricia-skin" className="bg-indigo-950 py-20 text-white scroll-mt-28">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">Wellness Partner</p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">Karla Patricia Skin</h2>
              <p className="mt-5 leading-8 text-slate-200">KPW Wellness connects with Karla Patricia Skin to expand education around skin health, self-care, beauty entrepreneurship, confidence, and whole-person wellness.</p>
            </div>
            <div className="rounded-3xl bg-white/10 p-8">
              <h3 className="text-2xl font-bold">Beauty, Wellness & Self-Care Education</h3>
              <p className="mt-4 leading-8 text-slate-200">Through strategic wellness partnerships, KPW Wellness supports programming that teaches personal care, confidence, wellness routines, and entrepreneurship pathways connected to the beauty and wellness industry.</p>
              <a href="https://dallasfacialist.com/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex w-fit items-center justify-center rounded-2xl bg-emerald-600 px-5 py-3 font-semibold text-white transition hover:bg-emerald-700">Visit Karla Patricia Skin <ExternalLink className="ml-2 h-4 w-4" /></a>
            </div>
          </div>
        </section>

        <section id="ecosystem" className="relative overflow-hidden bg-white py-24 scroll-mt-28">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeader eyebrow="Collaborative Ecosystem" title="How our strategic partners work together." text="KPW Wellness operates as part of a collaborative ecosystem designed to connect community wellness, education, housing, sports, mentorship, healthcare, and sustainable neighborhood revitalization." />
            <div className="relative mb-20 overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-indigo-950 via-slate-900 to-emerald-950 p-8 text-white shadow-2xl md:p-10">
              <div className="mx-auto flex max-w-5xl flex-col items-center">
                <div className="rounded-full border border-white/20 bg-white/10 px-8 py-5 text-center backdrop-blur-sm">
                  <h3 className="text-2xl font-bold">KPW Wellness</h3>
                  <p className="mt-2 text-sm text-slate-300">Central nonprofit ecosystem platform</p>
                </div>
                <div className="mt-10 grid w-full gap-6 md:grid-cols-3">
                  {[
                    ["Community Development", ["Sun Trust Development", "STAND Development", "TREC Community Investors", "The Real Estate Council"]],
                    ["Wellness & Healthcare", ["Karla Patricia Skin", "C&C Homecare", "Veteran Support", "Wellness Education"]],
                    ["Youth & Education", ["Cadence Futbol Club", "The Gentleman Builder", "Mentorship Programs", "Workforce Exposure"]],
                  ].map(([title, list]) => (
                    <div key={title} className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                      <h4 className="text-xl font-bold text-emerald-300">{title}</h4>
                      <ul className="mt-4 space-y-3 text-slate-200">
                        {list.map((item) => <li key={item}>• {item}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="mt-10 rounded-[2rem] border border-emerald-400/20 bg-emerald-500/10 px-8 py-6 text-center backdrop-blur-sm">
                  <p className="text-lg font-semibold text-white">Together these organizations create a connected ecosystem focused on wellness, housing stability, healthcare access, education, mentorship, responsible redevelopment, anti-displacement community investment, and sustainable neighborhood transformation.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="impact-dashboard" className="bg-slate-950 py-24 text-white scroll-mt-28">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeader light eyebrow="Impact Dashboard" title="Measurable community transformation." text="A transparent view into the ecosystem impact KPW Wellness is building across wellness, housing, healthcare, mentorship, youth development, and community revitalization. Metrics should be verified before public grant submissions." />
            <div className="grid gap-6 md:grid-cols-4">
              {[["Emerging", "Families Supported"], ["Growing", "Youth Initiatives"], ["Developing", "Healthcare Outreach"], ["Active", "Community Mission"], ["Planned", "Wellness Sessions"], ["Expanding", "Community Reach"], ["Growing", "Strategic Partnerships"], ["100%", "Community Focused"]].map(([number, label]) => (
                <div key={label} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm">
                  <p className="text-4xl font-bold text-emerald-300">{number}</p>
                  <p className="mt-4 text-lg font-semibold text-slate-100">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="grants" className="bg-white py-24 scroll-mt-28">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeader eyebrow="Grants, Donations & Sponsorships" title="Built for institutional partnerships and transformational impact." text="KPW Wellness is structured to support grant collaboration, sponsorship opportunities, donor engagement, community initiatives, and long-term ecosystem expansion." />
            <div className="grid gap-8 md:grid-cols-3">
              <IconCard icon={Landmark} title="Grant Partnerships" text="Collaborative initiatives focused on redevelopment, healthcare, wellness, housing education, and community transformation." />
              <IconCard icon={Sparkles} title="Corporate Sponsorships" text="Strategic sponsorship opportunities supporting measurable community outcomes and ecosystem initiatives." />
              <IconCard icon={FileText} title="Community Investment" text="Support the future infrastructure of sustainable community transformation through partnership and philanthropy." />
            </div>
          </div>
        </section>

        <section id="governance-transparency" className="bg-white py-24 scroll-mt-28">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeader eyebrow="Governance & Transparency" title="Institutional trust, accountability, and operational readiness." text="KPW Wellness is building the legal, governance, accessibility, reporting, and financial transparency infrastructure needed for long-term grant readiness, donor confidence, and institutional partnerships. Click any item below to view more detail." />
            <div className="grid gap-6 md:grid-cols-3">
              {governanceItems.map((item) => (
                <button
                  id={item.id}
                  key={item.id}
                  type="button"
                  onClick={() => setActiveGovernance(item)}
                  className={`scroll-mt-28 rounded-[2rem] border p-8 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-emerald-300/40 ${activeGovernance.id === item.id ? "border-emerald-500 bg-emerald-50" : "border-slate-200 bg-slate-50"}`}
                >
                  <h3 className="text-2xl font-bold text-indigo-950">{item.title}</h3>
                  <p className="mt-4 leading-8 text-slate-700">{item.text}</p>
                  <p className="mt-6 font-semibold text-emerald-700">View Details →</p>
                </button>
              ))}
            </div>

            <div className="mt-10 rounded-[2rem] border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">Selected Governance Area</p>
              <h3 className="mt-3 text-3xl font-bold text-indigo-950">{activeGovernance.title}</h3>
              <p className="mt-5 text-lg leading-8 text-slate-700">{activeGovernance.details}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact-intake"
                  onClick={handleAnchor("contact-intake")}
                  className="rounded-2xl bg-emerald-600 px-5 py-3 font-semibold text-white transition hover:bg-emerald-700"
                >
                  Request Information
                </a>
                
              </div>
            </div>
          </div>
        </section>

        <section id="community-action" className="bg-gradient-to-br from-emerald-50 to-indigo-50 py-24 scroll-mt-28">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeader eyebrow="Get Involved" title="Take action and help strengthen communities." text="KPW Wellness is building a collaborative ecosystem where donors, volunteers, healthcare partners, educators, developers, sponsors, and community leaders can work together to create measurable long-term impact." />
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {actionCards.map((card) => (
                <a key={card.id} href={`#${card.id}`} onClick={handleAnchor(card.id)} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-emerald-300/40">
                  <h3 className="text-2xl font-bold text-indigo-950">{card.title}</h3>
                  <p className="mt-4 leading-8 text-slate-700">{card.text}</p>
                  <p className="mt-6 font-semibold text-emerald-700">Learn More →</p>
                </a>
              ))}
            </div>
            <div className="mt-20 grid gap-8 md:grid-cols-2">
              {[
                ["donate-now", "Donate & Community Investment", "Support programming focused on wellness access, youth empowerment, healthcare initiatives, education, housing stability, and sustainable community transformation.", "Contact to Donate", "#contact", "View Sponsorships", "#grants"],
                ["volunteer-with-us", "Volunteer & Community Engagement", "Participate in wellness initiatives, mentorship programs, youth activities, educational workshops, revitalization projects, and community outreach opportunities.", "Become a Volunteer", "#contact", "Explore Programs", "#programs"],
                ["partner-with-kpw", "Partnership Opportunities", "We collaborate with nonprofits, healthcare organizations, schools, developers, churches, municipalities, sponsors, and strategic ecosystem partners.", "Partner With Us", "#partnership", "View Ecosystem", "#ecosystem"],
                ["sponsor-community-impact", "Sponsors & Grant Collaboration", "KPW Wellness is structured for sponsorship alignment, donor engagement, healthcare collaboration, redevelopment partnerships, and measurable impact initiatives.", "Grant Opportunities", "#grants", "Schedule a Meeting", "#contact"],
              ].map(([id, title, text, primary, primaryHref, secondary, secondaryHref]) => (
                <div id={id} key={id} className="scroll-mt-28 rounded-[2rem] bg-white p-8 shadow-sm">
                  <h3 className="text-3xl font-bold text-indigo-950">{title}</h3>
                  <p className="mt-5 leading-8 text-slate-700">{text}</p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <a href={primaryHref} onClick={handleAnchor(primaryHref.replace("#", ""))} className="rounded-2xl bg-emerald-600 px-5 py-3 font-semibold text-white transition hover:bg-emerald-700">{primary}</a>
                    <a href={secondaryHref} onClick={handleAnchor(secondaryHref.replace("#", ""))} className="rounded-2xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-100">{secondary}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="partnership" className="mx-auto max-w-7xl px-6 py-20 scroll-mt-28">
          <div className="rounded-[2rem] bg-slate-50 p-8 md:p-12">
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">Partner With Us</p>
                <h2 className="mt-3 text-3xl font-bold text-indigo-950 md:text-4xl">Built for grants, partnerships, and community collaboration.</h2>
                <p className="mt-5 leading-8 text-slate-700">KPW Wellness welcomes collaboration with community organizations, schools, churches, developers, funders, civic partners, healthcare providers, and wellness professionals who share our commitment to sustainable neighborhood transformation.</p>
              </div>
              <div className="grid gap-4">
                {["Grant collaboration", "Community education workshops", "Mill City programming", "Housing and homebuyer education", "Wellness and self-care events", "Workforce and entrepreneurship exposure"].map((item) => (
                  <div key={item} className="rounded-2xl bg-white p-5 font-semibold text-slate-700 shadow-sm">{item}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="legal-policies" className="bg-slate-50 py-24 scroll-mt-28">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeader
              eyebrow="Legal, Privacy & Community Standards"
              title="Clear public policies for trust, transparency, and responsible engagement."
              text="These public-facing policy sections help visitors, donors, sponsors, partners, and community members understand how KPW Wellness handles privacy, terms of use, accessibility, and community standards."
            />
            <div className="grid gap-6 md:grid-cols-2">
              {legalPolicyItems.map((item) => (
                <div id={item.id} key={item.id} className="scroll-mt-28 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
                  <h3 className="text-2xl font-bold text-indigo-950">{item.title}</h3>
                  <p className="mt-5 leading-8 text-slate-700">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact-intake" className="bg-white py-20 scroll-mt-28">
          <div className="mx-auto max-w-5xl px-6">
            <form action="https://formspree.io/f/xnjrbnlb" method="POST" onSubmit={handleInquirySubmit} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-3xl font-bold text-indigo-950">Partnership & Contact Intake</h3>
              <p className="mt-4 leading-8 text-slate-700">Start here to donate, volunteer, partner, sponsor, schedule a meeting, or request grant collaboration information. This form now submits directly to KPW Wellness through the secure Formspree connection.</p>
              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  aria-label="Full name"
                  placeholder="Full Name"
                  required
                  className="rounded-2xl border border-slate-300 px-5 py-4 outline-none focus:border-emerald-600 focus:ring-4 focus:ring-emerald-200"
                />
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  aria-label="Email address"
                  placeholder="Email Address"
                  required
                  className="rounded-2xl border border-slate-300 px-5 py-4 outline-none focus:border-emerald-600 focus:ring-4 focus:ring-emerald-200"
                />
                <input
                  name="organization"
                  value={formData.organization}
                  onChange={handleFormChange}
                  aria-label="Organization"
                  placeholder="Organization / Company"
                  className="rounded-2xl border border-slate-300 px-5 py-4 outline-none focus:border-emerald-600 focus:ring-4 focus:ring-emerald-200"
                />
                <select
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleFormChange}
                  aria-label="Inquiry type"
                  required
                  className="rounded-2xl border border-slate-300 px-5 py-4 outline-none focus:border-emerald-600 focus:ring-4 focus:ring-emerald-200"
                >
                  <option value="">Choose Inquiry Type</option>
                  <option>Donate</option>
                  <option>Volunteer</option>
                  <option>Partner</option>
                  <option>Sponsor</option>
                  <option>Grant Collaboration</option>
                  <option>Healthcare Initiative</option>
                  <option>Media Inquiry</option>
                  <option>Board of Directors Information</option>
                  <option>Governance & Leadership Information</option>
                  <option>Annual Reports Request</option>
                  <option>Impact Reports Request</option>
                  <option>Financial Transparency Request</option>
                  <option>ADA Accessibility Request</option>
                </select>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  aria-label="Message"
                  placeholder="Tell us how you would like to connect with KPW Wellness"
                  required
                  className="min-h-[140px] rounded-2xl border border-slate-300 px-5 py-4 outline-none focus:border-emerald-600 focus:ring-4 focus:ring-emerald-200 md:col-span-2"
                />
              </div>
              <button type="submit" className="mt-8 inline-flex rounded-2xl bg-emerald-600 px-6 py-4 font-semibold text-white transition hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-300/40">
                Submit Inquiry
              </button>
              {submitStatus && (
                <div className="mt-4 rounded-2xl bg-emerald-50 p-5 text-sm text-emerald-900">
                  <p className="font-semibold">{submitStatus}</p>
                </div>
              )}
            </form>
          </div>
        </section>
      </main>

      <footer id="contact" className="bg-slate-950 px-6 py-14 text-white scroll-mt-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-4">
            <div>
              <h3 className="text-2xl font-bold">KPW Wellness</h3>
              <p className="mt-3 leading-7 text-slate-300">Building wellness, education, healthcare access, housing stability, and sustainable community transformation.</p>
              <div className="mt-6 space-y-3 text-sm text-slate-400">
                <p>IRS Recognized 501(c)(3) Nonprofit Organization</p>
                <p>Federal Tax ID (EIN): Available Upon Request</p>
                <p>Dallas, Texas • Community Wellness & Revitalization Organization</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Contact</h4>
              <div className="mt-5 space-y-4 text-slate-300">
                <p className="flex items-center gap-3"><Mail className="h-4 w-4 text-emerald-400" /> info@kpwwellness.org</p>
                
                <p className="flex items-center gap-3"><MapPin className="h-4 w-4 text-emerald-400" /> Dallas, Texas</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Governance & Transparency</h4>
              <div className="mt-5 flex flex-col gap-3 text-slate-300">
                <a href="#board-of-directors" onClick={handleAnchor("board-of-directors")} className="transition hover:text-emerald-300">Board of Directors</a>
                <a href="#governance-leadership" onClick={handleAnchor("governance-leadership")} className="transition hover:text-emerald-300">Governance & Leadership</a>
                <a href="#annual-reports" onClick={handleAnchor("annual-reports")} className="transition hover:text-emerald-300">Annual Reports</a>
                <a href="#impact-reports" onClick={handleAnchor("impact-reports")} className="transition hover:text-emerald-300">Impact Reports</a>
                <a href="#financial-transparency" onClick={handleAnchor("financial-transparency")} className="transition hover:text-emerald-300">Financial Transparency</a>
                <a href="#accessibility-statement" onClick={handleAnchor("accessibility-statement")} className="transition hover:text-emerald-300">ADA Accessibility Statement</a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Strategic Partners</h4>
              <div className="mt-5 flex flex-col gap-3 text-slate-300">
                {partnerLinks.map(([name, url]) => (
                  <a key={name} href={url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-emerald-300">{name} <ExternalLink className="h-4 w-4" /></a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-8 text-sm text-slate-400 md:flex-row">
            <p>© 2026 KPW Wellness. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-5">
              <a href="#privacy-policy" onClick={handleAnchor("privacy-policy")} className="transition hover:text-emerald-300">Privacy Policy</a>
              <a href="#terms-conditions" onClick={handleAnchor("terms-conditions")} className="transition hover:text-emerald-300">Terms & Conditions</a>
              <a href="#community-standards" onClick={handleAnchor("community-standards")} className="transition hover:text-emerald-300">Community Standards</a>
              <a href="#accessibility-policy" onClick={handleAnchor("accessibility-policy")} className="transition hover:text-emerald-300">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
