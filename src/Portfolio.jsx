import React, { useEffect, useRef, useState } from "react";
import {
  GithubIcon,
  LinkedinIcon,
  Mail,
  ArrowRight,
  ExternalLink,
  Menu,
  X,
} from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

/* -------------------- SCROLL REVEAL -------------------- */
function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove("opacity-0", "translate-y-10");
          el.classList.add("opacity-100", "translate-y-0");
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className="opacity-0 translate-y-10 transition-all duration-700"
    >
      {children}
    </div>
  );
}

/* -------------------- MAIN -------------------- */
export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  const skills = [
    { title: "Frontend Development", desc: "React, Vite, Tailwind CSS" },
    { title: "Problem Solving", desc: "DSA with C++ & Java" },
    { title: "Tools & Systems", desc: "Git, Linux, VS Code" },
  ];

  const projects = [
    {
      title: "Personal Portfolio",
      desc: "A premium, responsive portfolio with modern UI and animations.",
      tech: ["React", "Vite", "Tailwind"],
    },
    {
      title: "DSA Practice",
      desc: "Structured problem solving to build strong algorithmic thinking.",
      tech: ["C++", "Java"],
    },
    {
      title: "Frontend Mini Apps",
      desc: "Small projects to master JavaScript and UI fundamentals.",
      tech: ["JavaScript", "HTML", "CSS"],
    },
  ];

  return (
    <div className="bg-black text-gray-100 font-sans">
      {/* ---------------- NAVBAR ---------------- */}
      <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-lg font-semibold tracking-wide text-emerald-400">
            Debanjan
          </div>

          <div className="hidden md:flex gap-10 text-sm text-gray-300">
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-emerald-400 transition"
              >
                {item}
              </a>
            ))}
          </div>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden px-6 pb-6 flex flex-col gap-4 text-gray-300">
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* ---------------- HERO ---------------- */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-6 text-center"
      >
        <Reveal>
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight mb-6">
              <span className="text-gray-400">Hi, I’m</span>{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Debanjan Chakraborty
              </span>
            </h1>

            <p className="text-gray-400 text-lg mb-10">
              Engineering student focused on frontend development and problem
              solving.
            </p>

            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 text-black rounded-full font-medium hover:bg-emerald-400 transition"
            >
              View Work <ArrowRight size={18} />
            </a>

            {/* SOCIAL ICONS */}
            <div className="flex justify-center gap-6 mt-12 text-gray-400">
              <a
                href="https://github.com/YOUR_GITHUB_USERNAME"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 transition"
              >
                <GithubIcon size={20} />
              </a>

              <a
                href="https://linkedin.com/in/YOUR_LINKEDIN_USERNAME"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 transition"
              >
                <LinkedinIcon size={20} />
              </a>

              <a
                href="https://x.com/YOUR_X_USERNAME"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 transition"
              >
                <FaXTwitter size={18} />
              </a>

              <a
                href="mailto:YOUR_EMAIL@gmail.com"
                className="hover:text-emerald-400 transition"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ---------------- ABOUT ---------------- */}
      <section id="about" className="py-32 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <Reveal>
            <div>
              <h2 className="text-3xl font-semibold mb-6">
                <span className="text-emerald-400">About</span> Me
              </h2>
              <p className="text-gray-400 leading-relaxed">
                I’m a 2nd-year engineering student building strong fundamentals in
                software engineering. I enjoy crafting clean interfaces and
                writing efficient, readable code.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6">
            {skills.map((s, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="p-6 rounded-xl border border-zinc-800 bg-black/40 hover:border-emerald-400/40 transition">
                  <h3 className="font-medium mb-1">{s.title}</h3>
                  <p className="text-sm text-gray-400">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- PROJECTS ---------------- */}
      <section id="projects" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="text-3xl font-semibold mb-16">
              <span className="text-emerald-400">Projects</span>
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-10">
            {projects.map((p, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="p-8 rounded-2xl border border-zinc-800 bg-black/40 hover:-translate-y-1 hover:border-emerald-400/40 transition">
                  <h3 className="text-xl font-medium mb-2">{p.title}</h3>
                  <p className="text-gray-400 mb-4">{p.desc}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 rounded-full border border-emerald-400/30 text-emerald-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-2 text-sm text-emerald-400">
                    View Project <ExternalLink size={14} />
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CONTACT ---------------- */}
      <section id="contact" className="py-32 px-6 bg-zinc-950 text-center">
        <Reveal>
          <h2 className="text-3xl font-semibold mb-6">
            <span className="text-emerald-400">Contact</span>
          </h2>
          <p className="text-gray-400 mb-10">
            Open to internships, collaborations, and learning opportunities.
          </p>

          <a
            href="mailto:YOUR_EMAIL@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 text-black rounded-full font-medium hover:bg-emerald-400 transition"
          >
            Send Email <Mail size={18} />
          </a>
        </Reveal>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="py-10 text-center text-gray-500 border-t border-zinc-800">
        © 2026 Debanjan Chakraborty
      </footer>
    </div>
  );
}



