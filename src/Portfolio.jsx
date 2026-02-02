import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaEnvelope,
  FaArrowRight,
  FaBars,
  FaXmark,
  FaPython,
  FaJava,
  FaReact,
  FaGitAlt,
} from "react-icons/fa6";
import { SiTailwindcss, SiBootstrap } from "react-icons/si";

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  const projects = [
    {
      title: "Portfolio Website",
      desc: "A premium personal portfolio built with React, Vite and Tailwind CSS.",
      tech: ["React", "Tailwind", "Vite"],
    },
    {
      title: "DSA Practice",
      desc: "Consistent problem solving using C++ and Java to strengthen fundamentals.",
      tech: ["Java", "DSA"],
    },
    {
      title: "Frontend Mini Projects",
      desc: "Small UI projects focused on layout, responsiveness and clean design.",
      tech: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Upcoming Projects",
      desc: "More real-world projects coming as I keep learning and building.",
      tech: ["In Progress"],
    },
  ];

  return (
    <div className="bg-black text-gray-100 min-h-screen font-sans">

      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <span className="text-emerald-400 font-semibold text-lg">
            Debanjan
          </span>

          <div className="hidden md:flex gap-8 text-sm">
            {["home", "about", "skills", "projects", "contact"].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className="hover:text-emerald-400 transition"
              >
                {id.toUpperCase()}
              </a>
            ))}
          </div>

          <button
            className="md:hidden text-gray-300"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaXmark size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden px-6 pb-6 flex flex-col gap-4 text-gray-300">
            {["home", "about", "skills", "projects", "contact"].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setMenuOpen(false)}
                className="hover:text-emerald-400"
              >
                {id.toUpperCase()}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* ================= HERO ================= */}
      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          Debanjan Chakraborty
        </h1>

        <p className="text-gray-400 mb-8 max-w-xl">
          Engineering student focused on frontend development and problem solving.
        </p>

        <a
          href="#projects"
          className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-black rounded-full font-medium hover:bg-emerald-400 transition"
        >
          View Work <FaArrowRight />
        </a>

        {/* SOCIAL ICONS */}
        <div className="flex gap-6 mt-10 text-gray-400">
          <a href="https://github.com/imdebanjan" target="_blank">
            <FaGithub className="text-2xl hover:text-emerald-400 transition" />
          </a>
          <a href="https://www.linkedin.com/in/debanjan11" target="_blank">
            <FaLinkedin className="text-2xl hover:text-emerald-400 transition" />
          </a>
          <a href="https://x.com/debanjantwt" target="_blank">
            <FaXTwitter className="text-2xl hover:text-emerald-400 transition" />
          </a>
          <a href="mailto:debanjanchakraborty108@gmail.com">
            <FaEnvelope className="text-2xl hover:text-emerald-400 transition" />
          </a>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="py-24 px-6 bg-zinc-950 text-center">
        <h2 className="text-3xl font-bold mb-4">About</h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          I am a 2nd-year engineering student building strong foundations in
          frontend development, data structures, and clean software practices.
        </p>
      </section>

      {/* ================= SKILLS ================= */}
      <section id="skills" className="py-28 px-6">
        <h2 className="text-3xl font-bold text-center mb-16">Skills</h2>

        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10">

          <div className="flex flex-col items-center gap-3 p-5 rounded-xl border border-zinc-800 bg-black/40 hover:border-emerald-400/40 transition">
            <FaPython className="text-5xl" style={{ color: "#3776AB" }} />
            <span className="text-sm text-gray-300">Python</span>
          </div>

          <div className="flex flex-col items-center gap-3 p-5 rounded-xl border border-zinc-800 bg-black/40 hover:border-emerald-400/40 transition">
            <FaJava className="text-5xl" style={{ color: "#ED8B00" }} />
            <span className="text-sm text-gray-300">Java</span>
          </div>

          <div className="flex flex-col items-center gap-3 p-5 rounded-xl border border-zinc-800 bg-black/40 hover:border-emerald-400/40 transition">
            <FaReact className="text-5xl" style={{ color: "#61DAFB" }} />
            <span className="text-sm text-gray-300">React</span>
          </div>

          <div className="flex flex-col items-center gap-3 p-5 rounded-xl border border-zinc-800 bg-black/40 hover:border-emerald-400/40 transition">
            <SiTailwindcss className="text-5xl" style={{ color: "#38BDF8" }} />
            <span className="text-sm text-gray-300">Tailwind</span>
          </div>

          <div className="flex flex-col items-center gap-3 p-5 rounded-xl border border-zinc-800 bg-black/40 hover:border-emerald-400/40 transition">
            <SiBootstrap className="text-5xl" style={{ color: "#7952B3" }} />
            <span className="text-sm text-gray-300">Bootstrap</span>
          </div>

          <div className="flex flex-col items-center gap-3 p-5 rounded-xl border border-zinc-800 bg-black/40 hover:border-emerald-400/40 transition">
            <FaGitAlt className="text-5xl" style={{ color: "#F05032" }} />
            <span className="text-sm text-gray-300">Git</span>
          </div>

        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="py-24 px-6 bg-zinc-950">
        <h2 className="text-3xl font-bold text-center mb-14">Projects</h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <div
              key={i}
              className="p-8 border border-zinc-800 rounded-xl bg-black/40 hover:border-emerald-400/40 transition hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-gray-400 mb-4 text-sm">{p.desc}</p>

              <div className="flex flex-wrap gap-2">
                {p.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 border border-emerald-400/30 rounded-full text-emerald-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="py-24 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>

        <p className="text-gray-400 mb-8">
          Open to internships, collaborations, and learning opportunities.
        </p>

        <a
          href="mailto:YOUR_EMAIL@gmail.com"
          className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-black rounded-full font-medium hover:bg-emerald-400 transition"
        >
          Send Email <FaEnvelope />
        </a>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="py-8 text-center text-gray-500 border-t border-zinc-800">
        © 2026 Debanjan Chakraborty
      </footer>
    </div>
  );
}
