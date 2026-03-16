import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Calendar,
  Camera,
  CheckCircle2,
  DollarSign,
  Heart,
  Menu,
  Mic2,
  Music,
  Palette,
  Shield,
  Sparkles,
  Star,
  TrendingUp,
  Truck,
  Users,
  Video,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const SERVICES = [
  {
    id: "end-to-end",
    icon: Calendar,
    title: "End-to-End Event Management",
    description:
      "Full-cycle planning from concept to curtain call — timelines, budgets, coordination, and execution.",
    glow: "card-glow-purple",
  },
  {
    id: "logistics",
    icon: Truck,
    title: "Logistics & Operations",
    description:
      "Seamless transportation, equipment setup, venue coordination, and real-time ops management.",
    glow: "card-glow-blue",
  },
  {
    id: "decoration",
    icon: Sparkles,
    title: "Decoration & Ambience",
    description:
      "Transforming spaces with creative decor — from fairy-light canopies to grand stage setups.",
    glow: "card-glow-pink",
  },
  {
    id: "theme-design",
    icon: Palette,
    title: "Theme-Based Event Design",
    description:
      "Bespoke themes crafted for your college culture — retro, futuristic, cultural, or anything you dream.",
    glow: "card-glow-purple",
  },
  {
    id: "on-ground",
    icon: Users,
    title: "On-Ground Handling",
    description:
      "Dedicated crew for crowd management, volunteer coordination, and real-time issue resolution.",
    glow: "card-glow-amber",
  },
  {
    id: "media",
    icon: Camera,
    title: "Media Coverage",
    description:
      "Professional photography, videography, live streaming, and social media content creation.",
    glow: "card-glow-blue",
  },
  {
    id: "vendor",
    icon: DollarSign,
    title: "Vendor-Sponsored Management",
    description:
      "Securing sponsorships, managing vendors, and maximizing your event's commercial potential.",
    glow: "card-glow-amber",
  },
  {
    id: "guest",
    icon: Star,
    title: "Guest Arrangements for Inaugurals",
    description:
      "VIP logistics, protocol management, and hospitality for dignitaries and chief guests.",
    glow: "card-glow-pink",
  },
  {
    id: "artist",
    icon: Music,
    title: "Artist Bookings for Closing",
    description:
      "Booking headline performers, indie artists, and entertainers for unforgettable closing nights.",
    glow: "card-glow-purple",
  },
];

const COLLAB_FEATURES = [
  {
    id: "influencers",
    icon: Mic2,
    title: "Influencer Network",
    description:
      "50+ campus and lifestyle influencers who amplify your event across Instagram, YouTube, and beyond.",
    stat: "50+ Creators",
    glow: "card-glow-pink",
  },
  {
    id: "djs",
    icon: Music,
    title: "DJ & Electronic Artists",
    description:
      "Curated roster of DJs ranging from underground techno to Bollywood remixes — perfect for every vibe.",
    stat: "30+ DJs",
    glow: "card-glow-purple",
  },
  {
    id: "bands",
    icon: Video,
    title: "Live Bands & Performers",
    description:
      "Regional indie bands, folk fusion groups, and energetic cover bands that ignite the crowd.",
    stat: "20+ Bands",
    glow: "card-glow-blue",
  },
];

const STATS = [
  { id: "influencers", value: "50+", label: "Influencers" },
  { id: "events", value: "200+", label: "Events" },
  { id: "artists", value: "30+", label: "Artists" },
  { id: "colleges", value: "100+", label: "Colleges" },
];

const WHY_US = [
  {
    id: "campus",
    icon: Zap,
    title: "Campus Specialists",
    description:
      "We live and breathe college culture. Our team understands student energy, academic calendars, and what makes a campus event legendary.",
    glow: "card-glow-amber",
  },
  {
    id: "full-service",
    icon: Shield,
    title: "Full-Service Team",
    description:
      "One vendor, zero headaches. We handle everything end-to-end so your student committee can focus on having the time of their lives.",
    glow: "card-glow-purple",
  },
  {
    id: "budget",
    icon: Heart,
    title: "Budget-Friendly Packages",
    description:
      "Tier 2 college budgets are real — we design packages that deliver maximum impact without blowing the treasury.",
    glow: "card-glow-pink",
  },
  {
    id: "track-record",
    icon: TrendingUp,
    title: "Proven Track Record",
    description:
      "100+ events across 15 states. Our portfolio speaks louder than our pitch deck ever could.",
    glow: "card-glow-blue",
  },
];

const NAV_LINKS = [
  { id: "home", label: "Home", href: "#home" },
  { id: "services", label: "Services", href: "#services" },
  { id: "collaborations", label: "Collaborations", href: "#collaborations" },
  { id: "about", label: "About", href: "#about" },
  { id: "contact", label: "Contact", href: "#contact" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0, 0, 0.2, 1] as [number, number, number, number],
    },
  },
};

function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
}

function Navbar({ isScrolled }: { isScrolled: boolean }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    scrollTo(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            type="button"
            onClick={() => handleNavClick("#home")}
            className="flex items-center gap-2 cursor-pointer"
          >
            <span className="text-2xl font-black gradient-text tracking-tight">
              FestForge
            </span>
            <span
              className="hidden sm:block text-xs font-medium px-2 py-0.5 rounded-full"
              style={{
                background: "oklch(0.55 0.22 296 / 0.2)",
                border: "1px solid oklch(0.55 0.22 296 / 0.4)",
                color: "oklch(0.75 0.18 296)",
              }}
            >
              Crafting College Legends
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                type="button"
                key={link.id}
                data-ocid={`nav.${link.id}.link`}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/30"
              >
                {link.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => handleNavClick("#contact")}
              className="ml-4 px-5 py-2 text-sm font-semibold text-white rounded-full btn-gradient"
            >
              Get Started
            </button>
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-background/98 backdrop-blur-xl border-b border-border px-4 pb-4"
          >
            {NAV_LINKS.map((link) => (
              <button
                type="button"
                key={link.id}
                data-ocid={`nav.${link.id}.link`}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left py-3 text-base font-medium text-muted-foreground hover:text-foreground border-b border-border/30 last:border-0"
              >
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/generated/hero-bg.dim_1600x900.jpg')",
        }}
      />
      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.06 0.05 296 / 0.92) 0%, oklch(0.06 0.04 285 / 0.88) 50%, oklch(0.06 0.04 230 / 0.92) 100%)",
        }}
      />
      {/* Ambient light blobs */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 20% 40%, oklch(0.55 0.22 296 / 0.25) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 60%, oklch(0.65 0.24 340 / 0.2) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span
            className="inline-block text-xs sm:text-sm font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6"
            style={{
              background: "oklch(0.55 0.22 296 / 0.2)",
              border: "1px solid oklch(0.55 0.22 296 / 0.5)",
              color: "oklch(0.8 0.15 296)",
            }}
          >
            India's #1 Campus Event Company
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
            Where Campus Dreams
            <br />
            <span className="gradient-text">Become Epic Fests</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            From small-town colleges to prestigious institutions — we forge
            unforgettable college fests, culturals, technicals, and inaugurals
            that students talk about for years.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              data-ocid="hero.primary_button"
              onClick={() => scrollTo("#contact")}
              className="px-8 py-3.5 text-base font-bold text-white rounded-full btn-gradient shadow-lg"
            >
              Plan Your Event
            </button>
            <button
              type="button"
              data-ocid="hero.secondary_button"
              onClick={() => scrollTo("#services")}
              className="px-8 py-3.5 text-base font-bold rounded-full btn-outline-glow bg-transparent"
            >
              Our Services
            </button>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 2,
            ease: "easeInOut",
          }}
        >
          <div
            className="w-6 h-10 rounded-full border-2 flex items-start justify-center pt-2"
            style={{ borderColor: "oklch(0.55 0.22 296 / 0.5)" }}
          >
            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "oklch(0.55 0.22 296)" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-28 gradient-bg-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="text-xs font-bold uppercase tracking-widest"
            style={{ color: "oklch(0.7 0.22 296)" }}
          >
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mt-2 mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Everything your college fest needs — under one roof, handled by one
            passionate team.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className={`group relative p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${service.glow}`}
                style={{ background: "oklch(0.12 0.02 285)" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "oklch(0.16 0.03 285)" }}
                >
                  <Icon size={22} style={{ color: "oklch(0.7 0.20 296)" }} />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function CollaborationsSection() {
  return (
    <section id="collaborations" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="text-xs font-bold uppercase tracking-widest"
            style={{ color: "oklch(0.7 0.24 340)" }}
          >
            Our Network
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mt-2 mb-4">
            Powered by <span className="gradient-text">Collaborations</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We've built relationships with creators, performers, and artists who
            know how to make college events unforgettable.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {COLLAB_FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.id}
                variants={itemVariants}
                className={`relative p-8 rounded-2xl border text-center transition-all duration-300 hover:-translate-y-1 ${feature.glow}`}
                style={{ background: "oklch(0.12 0.02 285)" }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
                  style={{ background: "oklch(0.16 0.03 285)" }}
                >
                  <Icon size={28} style={{ color: "oklch(0.7 0.20 340)" }} />
                </div>
                <div className="text-3xl font-black mb-2 gradient-text-amber">
                  {feature.stat}
                </div>
                <h3 className="font-bold text-lg text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats strip */}
        <motion.div
          className="rounded-2xl p-6 sm:p-8 grid grid-cols-2 sm:grid-cols-4 gap-6"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.12 0.03 296 / 0.6), oklch(0.12 0.03 340 / 0.6))",
            border: "1px solid oklch(0.55 0.22 296 / 0.3)",
          }}
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {STATS.map((stat) => (
            <div key={stat.id} className="text-center">
              <div className="text-3xl sm:text-4xl font-black gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function GallerySection() {
  return (
    <section className="relative h-72 sm:h-96 lg:h-[500px] overflow-hidden">
      <img
        src="/assets/generated/gallery-collage.dim_1200x800.jpg"
        alt="Gallery of college events"
        className="w-full h-full object-cover"
      />
      <div
        className="absolute inset-0 flex flex-col items-center justify-center"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.06 0.05 296 / 0.7) 0%, oklch(0.06 0.04 285 / 0.6) 50%, oklch(0.06 0.04 230 / 0.7) 100%)",
        }}
      >
        <motion.div
          className="text-center px-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white">
            Events That <span className="gradient-text">Live Forever</span>
          </h2>
          <p className="text-white/70 mt-4 text-base sm:text-lg max-w-md mx-auto">
            Thousands of memories crafted. Every frame tells a story of
            belonging, energy, and pure college magic.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 gradient-bg-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="text-xs font-bold uppercase tracking-widest"
            style={{ color: "oklch(0.75 0.18 65)" }}
          >
            Why FestForge
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mt-2 mb-4">
            Why <span className="gradient-text">Choose Us</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We're not just vendors — we're partners who share your vision of
            making every college event legendary.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {WHY_US.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className={`p-6 rounded-2xl border text-center transition-all duration-300 hover:-translate-y-1 ${item.glow}`}
                style={{ background: "oklch(0.12 0.02 285)" }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: "oklch(0.16 0.04 285)" }}
                >
                  <Icon size={24} style={{ color: "oklch(0.75 0.18 65)" }} />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [form, setForm] = useState({
    collegeName: "",
    personName: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const resetForm = () => {
    setSubmitted(false);
    setForm({
      collegeName: "",
      personName: "",
      email: "",
      phone: "",
      eventType: "",
      eventDate: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="text-xs font-bold uppercase tracking-widest"
            style={{ color: "oklch(0.7 0.22 296)" }}
          >
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mt-2 mb-4">
            Let's Forge Your <span className="gradient-text">Next Event</span>
          </h2>
          <p className="text-muted-foreground">
            Fill in your details and our team will reach out within 24 hours.
          </p>
        </motion.div>

        <motion.div
          className="rounded-2xl border p-6 sm:p-8 card-glow-purple"
          style={{ background: "oklch(0.12 0.02 285)" }}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                data-ocid="contact.success_state"
                className="flex flex-col items-center justify-center py-16 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                  style={{ background: "oklch(0.55 0.22 296 / 0.15)" }}
                >
                  <CheckCircle2
                    size={40}
                    style={{ color: "oklch(0.7 0.22 296)" }}
                  />
                </div>
                <h3 className="text-2xl font-black text-foreground mb-3">
                  Inquiry Sent! 🎉
                </h3>
                <p className="text-muted-foreground max-w-sm">
                  We've received your message and our team will get back to you
                  within 24 hours. Let's forge something legendary together!
                </p>
                <button
                  type="button"
                  onClick={resetForm}
                  className="mt-8 px-6 py-2.5 text-sm font-semibold text-white rounded-full btn-gradient"
                >
                  Send Another Inquiry
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="space-y-5"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="collegeName"
                      className="text-sm font-medium"
                    >
                      College / School Name *
                    </Label>
                    <Input
                      id="collegeName"
                      data-ocid="contact.college_name.input"
                      placeholder="St. Xavier's College, Ranchi"
                      required
                      value={form.collegeName}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, collegeName: e.target.value }))
                      }
                      className="bg-muted/50 border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="personName" className="text-sm font-medium">
                      Contact Person Name *
                    </Label>
                    <Input
                      id="personName"
                      data-ocid="contact.person_name.input"
                      placeholder="Priya Sharma"
                      required
                      value={form.personName}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, personName: e.target.value }))
                      }
                      className="bg-muted/50 border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <Label htmlFor="email" className="text-sm font-medium">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      data-ocid="contact.email.input"
                      placeholder="events@college.edu"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, email: e.target.value }))
                      }
                      className="bg-muted/50 border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="phone" className="text-sm font-medium">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      data-ocid="contact.phone.input"
                      placeholder="+91 98765 43210"
                      required
                      value={form.phone}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, phone: e.target.value }))
                      }
                      className="bg-muted/50 border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <Label className="text-sm font-medium">Event Type *</Label>
                    <Select
                      value={form.eventType}
                      onValueChange={(v) =>
                        setForm((p) => ({ ...p, eventType: v }))
                      }
                    >
                      <SelectTrigger
                        data-ocid="contact.event_type.select"
                        className="bg-muted/50 border-border"
                      >
                        <SelectValue placeholder="Select event type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cultural">Cultural Fest</SelectItem>
                        <SelectItem value="technical">
                          Technical Fest
                        </SelectItem>
                        <SelectItem value="sports">Sports Day</SelectItem>
                        <SelectItem value="inaugural">
                          Inaugural Ceremony
                        </SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="eventDate" className="text-sm font-medium">
                      Tentative Event Date
                    </Label>
                    <Input
                      id="eventDate"
                      type="date"
                      data-ocid="contact.event_date.input"
                      value={form.eventDate}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, eventDate: e.target.value }))
                      }
                      className="bg-muted/50 border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="message" className="text-sm font-medium">
                    Tell us about your event
                  </Label>
                  <Textarea
                    id="message"
                    data-ocid="contact.message.textarea"
                    placeholder="Expected attendance, special requirements, your vision..."
                    rows={4}
                    value={form.message}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, message: e.target.value }))
                    }
                    className="bg-muted/50 border-border focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  data-ocid="contact.submit_button"
                  disabled={loading}
                  className="w-full py-3 text-base font-bold text-white btn-gradient border-0 rounded-full h-auto"
                >
                  {loading ? "Sending..." : "Send Inquiry"}
                </Button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  const utmLink = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`;

  return (
    <footer
      className="py-10 border-t border-border"
      style={{ background: "oklch(0.07 0.015 285)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xl font-black gradient-text">FestForge</span>
            <p
              className="text-xs mt-1"
              style={{ color: "oklch(0.55 0.05 285)" }}
            >
              Crafting College Legends
            </p>
          </div>

          <nav className="flex flex-wrap gap-4 justify-center">
            {NAV_LINKS.map((link) => (
              <button
                type="button"
                key={link.id}
                onClick={() => scrollTo(link.href)}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <p
            className="text-xs text-center"
            style={{ color: "oklch(0.45 0.05 285)" }}
          >
            © {year}. Built with{" "}
            <Heart
              size={10}
              className="inline"
              style={{ color: "oklch(0.65 0.24 340)" }}
            />{" "}
            using{" "}
            <a
              href={utmLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
              style={{ color: "oklch(0.6 0.15 285)" }}
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar isScrolled={isScrolled} />
      <main>
        <HeroSection />
        <ServicesSection />
        <CollaborationsSection />
        <GallerySection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
