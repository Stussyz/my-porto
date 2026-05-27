import { motion } from "framer-motion";
import {
  ArrowDown,
  ExternalLink,
  Mail,
  MapPin,
  Code2,
  Database,
  Server,
  Layers,
} from "lucide-react";

function GithubIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.071 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.091-.646.35-1.087.636-1.337-2.221-.253-4.555-1.111-4.555-4.944 0-1.092.39-1.985 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.833a9.56 9.56 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.377.203 2.394.1 2.647.64.698 1.028 1.591 1.028 2.683 0 3.842-2.337 4.688-4.566 4.936.359.309.678.919.678 1.852 0 1.337-.012 2.419-.012 2.748 0 .267.18.579.688.481C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10Z" />
    </svg>
  );
}

function LinkedinIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.85-3.037-1.853 0-2.136 1.447-2.136 2.941v5.665H9.354V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.602 0 4.267 2.371 4.267 5.455v6.286h-.007ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.114 20.452H3.556V9h3.558v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0Z" />
    </svg>
  );
}

const projects = [
  {
    title: "App Kasir Coffee & Eatery",
    description:
      "Aplikasi kasir berbasis web untuk mengelola transaksi, produk, total pembayaran, dan riwayat penjualan secara efisien.",
    image: "/projects/cashier-app.png",
    stacks: ["React", "TypeScript", "Node.js", "MySQL"],
    demoUrl: "https://kasir-coffee-shop-ts.vercel.app/",
    repoUrl: "https://github.com/Stussyz/KasirCoffeeShopTS.git",
  },
  {
    title: "S.I Manajemen Rumah Sakit",
    description:
      "Sistem pencatatan riwayat transaksi dengan fitur filter, pencarian data, dan tampilan laporan yang mudah dibaca.",
    image: "/projects/transaction-history.png",
    stacks: ["React", "Express", "REST API", "MySQL"],
    demoUrl: "https://simrs-compact-version-frontend.vercel.app/",
    repoUrl: "https://github.com/Stussyz/SIMRS-compactVersionFrontend.git",
  },
  {
    title: "Inventory Management",
    description:
      "Aplikasi manajemen stok barang untuk membantu proses pencatatan produk masuk, produk keluar, dan monitoring persediaan.",
    image: "/projects/inventory-system.png",
    stacks: ["Next.js", "MongoDB", "Node.js"],
    demoUrl: "#",
    repoUrl: "#",
  },
  // {
  //   title: "Company Profile Website",
  //   description:
  //     "Website company profile modern, responsif, dan SEO-friendly untuk memperkenalkan layanan, portofolio, dan kontak bisnis.",
  //   image: "/projects/company-profile.png",
  //   stacks: ["React", "Tailwind CSS", "Framer Motion"],
  //   demoUrl: "#",
  //   repoUrl: "#",
  // },
  // {
  //   title: "Personal Portfolio",
  //   description:
  //     "Website portofolio personal dengan tampilan interaktif, animasi transisi, dan section yang tersusun secara profesional.",
  //   image: "/projects/portfolio-website.png",
  //   stacks: ["Vite", "React", "Tailwind CSS"],
  //   demoUrl: "#",
  //   repoUrl: "#",
  // },
  // {
  //   title: "REST API Service",
  //   description:
  //     "Backend service untuk autentikasi, pengelolaan data, dan integrasi aplikasi menggunakan arsitektur REST API.",
  //   image: "/projects/rest-api-service.png",
  //   stacks: ["Node.js", "Express", "MongoDB", "JWT"],
  //   demoUrl: "#",
  //   repoUrl: "#",
  // },
];

const skills = [
  {
    icon: <Code2 className="h-6 w-6" />,
    title: "Frontend Development",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    icon: <Server className="h-6 w-6" />,
    title: "Backend Development",
    items: ["Node.js", "Express.js", "REST API", "JWT Auth"],
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "Database",
    items: ["MySQL", "MongoDB", "Database Design"],
  },
  {
    icon: <Layers className="h-6 w-6" />,
    title: "Deployment & Methodology",
    items: ["Vercel", "Azure VM", "cPanel", "SDLC"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function App() {
  return (
    <main className="relative isolate h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory bg-[#06172f] text-white">
      <section className="relative flex min-h-screen snap-start items-center overflow-hidden px-6 py-20 md:px-12 lg:px-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.25),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.18),transparent_40%)]" />
        {/* Background bergerak utama agar halaman tidak terlihat terlalu statis */}
          <motion.div
            aria-hidden="true"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "linear",
            }}
            className="pointer-events-none fixed inset-0 -z-20 bg-[linear-gradient(120deg,#06172f,#082f49,#0f172a,#0e7490,#06172f)] bg-[length:300%_300%]"
          />

          {/* Layer gelap transparan agar teks tetap mudah dibaca */}
          <div className="pointer-events-none fixed inset-0 -z-10 bg-[#06172f]/55" />

          {/* Blob cahaya bergerak halus di background */}
          <motion.div
            aria-hidden="true"
            animate={{
              x: [0, 80, -40, 0],
              y: [0, -60, 50, 0],
              opacity: [0.25, 0.45, 0.3, 0.25],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none fixed left-[-120px] top-[-120px] -z-10 h-96 w-96 rounded-full bg-cyan-400/25 blur-3xl"
          />

          {/* Blob kedua agar efek geraknya terasa lebih hidup */}
          <motion.div
            aria-hidden="true"
            animate={{
              x: [0, -90, 50, 0],
              y: [0, 70, -40, 0],
              opacity: [0.2, 0.4, 0.28, 0.2],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none fixed bottom-[-140px] right-[-120px] -z-10 h-[28rem] w-[28rem] rounded-full bg-blue-500/25 blur-3xl"
          />
                  
        <motion.div
          animate={{ y: [0, -16, 0], opacity: [0.35, 0.65, 0.35] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-10 top-24 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 18, 0], opacity: [0.25, 0.55, 0.25] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-8 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl"
        />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="mb-4 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-200 backdrop-blur">
              Fresh Graduate | Junior Fullstack Web Developer
            </p>
            <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              Tentang Saya
              {/* <span className="text-cyan-300">M.Fadhol</span> */}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              Saya memiliki ketertarikan besar pada bidang pengembangan web, khususnya dalam membangun aplikasi yang responsif, terstruktur, dan mudah digunakan. Saya senang mempelajari teknologi frontend maupun backend untuk menciptakan solusi digital yang fungsional dan relevan dengan kebutuhan pengguna.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-2xl bg-cyan-300 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition duration-300 hover:-translate-y-1 hover:bg-cyan-200"
              >
                Lihat Project
                <ArrowDown className="h-4 w-4 transition group-hover:translate-y-1" />
              </a>
              <a
                href="mailto:mfadhol07@gmail.com"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-white/10"
              >
                Hubungi Saya
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          {/* BAGIAN KANAN: Foto profil */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-sm"
          >
            {/* Efek cahaya di belakang foto */}
            <div className="absolute -inset-4 rounded-[2.5rem] bg-cyan-300/20 blur-2xl" />

            {/* Box/card pembungkus foto */}
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-2xl shadow-blue-950/40 backdrop-blur-xl">
              <div className="relative overflow-hidden rounded-[1.5rem] bg-slate-950/80">
                
                {/* Foto profil kamu */}
                <img
                  src="/profile/profile-photo.png"
                  alt="Foto profil"
                  className="h-[370px] w-full object-cover object-center transition duration-700 hover:scale-105"
                  onError={(event) => {
                    event.currentTarget.src =
                      "https://placehold.co/800x1000/0f274a/67e8f9?text=Profile+Photo";
                  }}
                />

                {/* Gradasi gelap di bawah foto */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#06172f] via-transparent to-transparent" />

                {/* Teks di atas foto bagian bawah */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h2 className="mt-1 text-2xl font-bold text-white">
                    Mohammad Fadhol
                  </h2>

                  <p className="text-sm font-medium text-cyan-200">
                    Junior Fullstack Web Developer
                  </p>

                  {/* <p className="mt-2 text-sm leading-6 text-slate-300">
                    React • Node.js • MySQL • MongoDB
                  </p> */}
                </div>
              </div>
            </div>
          </motion.div>

          {/* <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-5 shadow-2xl shadow-blue-950/40 backdrop-blur-xl">
              <div className="rounded-[1.5rem] bg-slate-950/80 p-5">
                <div className="mb-5 flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <pre className="overflow-hidden text-sm leading-7 text-slate-300">
                  <code>{`const developer = {
                    name: "Mohammad Fadhol",
                    role: "Fullstack Developer",
                    focus: "Web Application",
                    stack: ["JS", "TS", "React", "Express"],
                  };`}
                  </code>
                </pre>
              </div>
            </div>
          </motion.div> */}
        </div>
      </section>

      <section
        id="projects"
        className="flex min-h-screen snap-start items-center px-6 py-20 md:px-12 lg:px-24"
      >
        <div className="mx-auto w-full max-w-7xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end"
          >
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                Selected Works
              </p>
              <h2 className="text-4xl font-bold md:text-5xl">Project Terbaru</h2>
            </div>
            <p className="max-w-xl text-slate-300">
              Beberapa project yang dapat kamu ganti sesuai portofolio pribadi. Setiap card mendukung gambar screenshot, deskripsi, tech stack, link demo, dan repository.
            </p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                whileHover={{ y: -8 }}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.07] shadow-xl shadow-blue-950/20 backdrop-blur transition duration-300 hover:border-cyan-300/40 hover:bg-white/[0.1]"
              >
                <div className="relative h-44 overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover opacity-90 transition duration-700 group-hover:scale-110 group-hover:opacity-100"
                    onError={(event) => {
                      event.currentTarget.src =
                        "https://placehold.co/800x500/0f274a/67e8f9?text=Project+Screenshot";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06172f] via-transparent to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <p className="mt-3 min-h-20 text-sm leading-7 text-slate-300">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stacks.map((stack) => (
                      <span
                        key={stack}
                        className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-100"
                      >
                        {stack}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex gap-3">
                    <a
                      href={project.demoUrl}
                      className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
                    >
                      Demo
                      <ExternalLink className="h-4 w-4" />
                    </a>
                    <a
                      href={project.repoUrl}
                      className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-300/50 hover:bg-white/10"
                    >
                      Repo
                      <GithubIcon className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="flex min-h-screen snap-start items-center px-6 py-20 md:px-12 lg:px-24">
        <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              About & Contact
            </p>
            <h2 className="text-4xl font-bold md:text-5xl">Siap Berkolaborasi?</h2>
            <p className="mt-5 leading-8 text-slate-300">
              Saya memiliki ketertarikan pada pengembangan aplikasi web end-to-end, mulai dari perancangan antarmuka, pembuatan REST API, pengelolaan database, hingga deployment aplikasi.
            </p>

            <div className="mt-8 space-y-4 text-slate-300">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-cyan-300" />
                <span>mfadhol07@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-cyan-300" />
                <span>Kota Malang, Indonesia</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-cyan-300">
                  <LinkedinIcon className="h-5 w-5" />
                </span>
                <span>linkedin.com/in/mfadhol87</span>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ scale: 1.03 }}
                className="rounded-3xl border border-white/10 bg-white/[0.07] p-6 shadow-xl shadow-blue-950/20 backdrop-blur transition duration-300 hover:border-cyan-300/40 hover:bg-white/[0.1]"
              >
                <div className="mb-5 inline-flex rounded-2xl bg-cyan-300/10 p-3 text-cyan-300">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold">{skill.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {skill.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
