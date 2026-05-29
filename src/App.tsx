// Hook React untuk menyimpan posisi cursor dan data galeri yang sedang dibuka
import { useState } from "react";

// Library animasi untuk transisi komponen dan modal
import { motion, AnimatePresence } from "framer-motion";

// Icon dari lucide-react
import {
  ArrowDown,
  ExternalLink,
  Mail,
  MapPin,
  Code2,
  Database,
  Server,
  Layers,
  Images,
  X,
} from "lucide-react";

// Custom icon Github agar tidak bergantung pada export lucide-react
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

// Custom icon LinkedIn agar tidak bergantung pada export lucide-react
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

// Data project ditaruh di array agar mudah ditambah/edit
const projects = [
  {
    title: "App Kasir Coffee & Eatery",
    description:
      "Aplikasi kasir berbasis web untuk mengelola transaksi, produk, total pembayaran, dan riwayat penjualan secara efisien.",
    image: "/projects/app-kasir/cashier-app.png",

    // Gambar-gambar yang tampil saat tombol Galeri diklik
    galleryImages: [
      "/projects/app-kasir/cashier-app.png",
      "/projects/app-kasir/simrs.png",
      "/projects/app-kasir/dokter.png",
      "/projects/app-kasir/pasien.png",
      "/projects/app-kasir/antrean.png",
    ],

    stacks: ["React", "TypeScript", "Node.js", "MySQL"],
    demoUrl: "https://kasir-coffee-shop-ts.vercel.app/",
    repoUrl: "https://github.com/Stussyz/KasirCoffeeShopTS.git",
  },
  {
    title: "S.I Manajemen Rumah Sakit",
    description:
      "Sistem pencatatan riwayat transaksi dengan fitur filter, pencarian data, dan tampilan laporan yang mudah dibaca.",

    // Path dari folder public tidak perlu diawali ./public
    image: "/projects/simrs/simrs.png",

    // Silakan sesuaikan nama file screenshot SIMRS sesuai folder public kamu
    galleryImages: [
      "/projects/simrs/simrs.png",
      "/projects/simrs/dokter.png",
      "/projects/simrs/pasien.png",
      "/projects/simrs/antrean.png",
    ],

    stacks: ["React", "Express", "REST API", "MySQL"],
    demoUrl: "https://simrs-compact-version-frontend.vercel.app/",
    repoUrl: "https://github.com/Stussyz/SIMRS-compactVersionFrontend.git",
  },
  {
    title: "Inventory Management",
    description:
      "Aplikasi manajemen stok barang untuk membantu proses pencatatan produk masuk, produk keluar, dan monitoring persediaan.",
    image: "/projects/inventory-system.png",

    // Untuk sementara dibuat dari gambar yang sama agar tombol Galeri tetap aman
    // Nanti bisa kamu ganti dengan screenshot inventory yang asli
    galleryImages: [
      "/projects/inventory-system.png",
      "/projects/inventory-system.png",
      "/projects/inventory-system.png",
    ],

    stacks: ["Next.js", "MongoDB", "Node.js"],
    demoUrl: "#",
    repoUrl: "#",
  },
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

// Data pengalaman magang ditaruh dalam array agar mudah ditambah/edit
const experiences = [
  {
    role: "Fullstack Web Developer Intern",
    company: "Telkom Witel Malang",
    period: "Maret 2022 - April 2022",
    location: "Malang, Indonesia",
    description:
      "Terlibat dalam proses pengembangan aplikasi web, mulai dari pembuatan antarmuka, pengelolaan data, hingga penerapan konsep frontend dan backend dalam lingkungan kerja.",
    responsibilities: [
      "Membantu pengembangan fitur aplikasi web menggunakan teknologi frontend dan backend.",
      "Memahami alur kerja pembuatan aplikasi berbasis web secara end-to-end.",
      "Mempelajari penerapan REST API untuk komunikasi antara frontend dan backend.",
      "Beradaptasi dengan proses kerja tim dalam pengembangan perangkat lunak.",
    ],
    stacks: ["Web Development", "Frontend", "Backend", "REST API"],
  },
  {
    role: "Computer & Network Technician Intern",
    company: "Hartono 2 Komputer Malang",
    period: "Januari 2017 - Juli 2017",
    location: "Malang, Indonesia",
    description:
      "Mendapatkan pengalaman dasar dalam instalasi, perawatan, dan troubleshooting perangkat komputer serta jaringan, sebagai fondasi awal dalam memahami teknologi informasi.",
    responsibilities: [
      "Melakukan instalasi dan konfigurasi perangkat komputer.",
      "Membantu proses perawatan dan pengecekan perangkat keras maupun perangkat lunak.",
      "Mempelajari dasar troubleshooting jaringan dan perangkat komputer.",
      "Memberikan bantuan teknis sesuai kebutuhan operasional.",
    ],
    stacks: ["Hardware", "Networking", "Troubleshooting", "Technical Support"],
  },
];

// Variasi animasi reusable untuk efek fade up
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function App() {
  // State untuk menyimpan posisi mouse pada efek spotlight cursor
  const [spotlightPosition, setSpotlightPosition] = useState({
    x: 0,
    y: 0,
  });

  // State untuk menyimpan project yang galerinya sedang dibuka
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[number] | null
  >(null);

  // State untuk menyimpan index gambar yang sedang aktif di galeri
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Function untuk membuka modal galeri
  const openGallery = (project: (typeof projects)[number]) => {
    setSelectedProject(project);
    setActiveImageIndex(0);
  };

  // Function untuk menutup modal galeri
  const closeGallery = () => {
    setSelectedProject(null);
    setActiveImageIndex(0);
  };

  // Function untuk pindah ke gambar berikutnya
  const nextImage = () => {
    if (!selectedProject) return;

    setActiveImageIndex((previousIndex) =>
      previousIndex === selectedProject.galleryImages.length - 1
        ? 0
        : previousIndex + 1
    );
  };

  // Function untuk pindah ke gambar sebelumnya
  const previousImage = () => {
    if (!selectedProject) return;

    setActiveImageIndex((previousIndex) =>
      previousIndex === 0
        ? selectedProject.galleryImages.length - 1
        : previousIndex - 1
    );
  };

  return (
    <main
      // Mengambil posisi cursor untuk efek spotlight
      onMouseMove={(event) => {
        setSpotlightPosition({
          x: event.clientX,
          y: event.clientY,
        });
      }}
      className="relative isolate h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory bg-[#06172f] text-white"
    >
      {/* Background dasar navy */}
      <div className="pointer-events-none fixed inset-0 -z-30 bg-[#06172f]" />

      {/* Efek spotlight yang mengikuti cursor */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-20 transition duration-300"
        style={{
          background: `radial-gradient(
            650px circle at ${spotlightPosition.x}px ${spotlightPosition.y}px,
            rgba(34, 211, 238, 0.18),
            rgba(59, 130, 246, 0.08),
            transparent 45%
          )`,
        }}
      />

      {/* Grid halus agar background terasa seperti tech/developer */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px] opacity-30" />

      {/* SECTION 1: Hero / Tentang Saya */}
      <section className="relative flex min-h-screen snap-start items-center overflow-hidden px-6 py-20 md:px-12 lg:px-24">
        {/* Efek radial ringan khusus hero section */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.14),transparent_40%)]" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* BAGIAN KIRI: Deskripsi profil */}
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
              Profil Saya
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              Saya memiliki ketertarikan besar pada bidang pengembangan web,
              khususnya dalam membangun aplikasi yang responsif, terstruktur,
              dan mudah digunakan. Saya senang mempelajari teknologi frontend
              maupun backend untuk menciptakan solusi digital yang fungsional
              dan relevan dengan kebutuhan pengguna.
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
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: Project */}
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
              <h2 className="text-4xl font-bold md:text-5xl">
                Project Terbaru
              </h2>
            </div>
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
                {/* Gambar utama card project */}
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
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>

                  <p className="mt-3 min-h-20 text-sm leading-7 text-slate-300">
                    {project.description}
                  </p>

                  {/* Badge tech stack */}
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

                  {/* Tombol aksi project */}
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
                    >
                      Demo
                      <ExternalLink className="h-4 w-4" />
                    </a>

                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-300/50 hover:bg-white/10"
                    >
                      Repo
                      <GithubIcon className="h-4 w-4" />
                    </a>

                    <button
                      type="button"
                      onClick={() => openGallery(project)}
                      className="inline-flex items-center gap-2 rounded-xl border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyan-300/70 hover:bg-cyan-300/20"
                    >
                      Galeri
                      <Images className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Pengalaman Magang */}
      <section className="flex min-h-screen snap-start items-center px-6 py-20 md:px-12 lg:px-24">
        <div className="mx-auto w-full max-w-7xl">
          {/* Header section pengalaman */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="mb-12 max-w-3xl"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Work Experience
            </p>

            <h2 className="text-4xl font-bold md:text-5xl">
              Pengalaman Magang
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              Beberapa pengalaman kerja praktik yang membantu saya memahami proses
              kerja di bidang teknologi informasi, baik dari sisi pengembangan web
              maupun dukungan teknis perangkat komputer dan jaringan.
            </p>
          </motion.div>

          {/* Timeline pengalaman */}
          <div className="relative">
            {/* Garis vertikal timeline di desktop */}
            <div className="absolute left-4 top-0 hidden h-full w-px bg-cyan-300/25 md:block" />

            <div className="space-y-8">
              {experiences.map((experience, index) => (
                <motion.article
                  key={`${experience.company}-${experience.role}`}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative grid gap-5 md:grid-cols-[3rem_1fr]"
                >
                  {/* Titik timeline */}
                  <div className="hidden md:flex">
                    <span className="relative z-10 mt-6 flex h-8 w-8 items-center justify-center rounded-full border border-cyan-300/40 bg-[#06172f] shadow-lg shadow-cyan-500/20">
                      <span className="h-3 w-3 rounded-full bg-cyan-300" />
                    </span>
                  </div>

                  {/* Card pengalaman */}
                  <div className="group rounded-3xl border border-white/10 bg-white/[0.07] p-6 shadow-xl shadow-blue-950/20 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.1] md:p-8">
                    <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-start">
                      <div>
                        <p className="text-sm font-medium text-cyan-300">
                          {experience.period}
                        </p>

                        <h3 className="mt-2 text-2xl font-bold text-white">
                          {experience.role}
                        </h3>

                        <p className="mt-2 text-base font-semibold text-slate-200">
                          {experience.company}
                        </p>

                        <p className="mt-1 text-sm text-slate-400">
                          {experience.location}
                        </p>
                      </div>

                      {/* Badge urutan pengalaman */}
                      <div className="inline-flex w-fit rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100">
                        Experience {index + 1}
                      </div>
                    </div>

                    <p className="mt-5 leading-8 text-slate-300">
                      {experience.description}
                    </p>

                    {/* Daftar tanggung jawab */}
                    <div className="mt-6 grid gap-3 md:grid-cols-2">
                      {experience.responsibilities.map((item) => (
                        <div
                          key={item}
                          className="rounded-2xl border border-white/10 bg-slate-950/30 p-4 text-sm leading-7 text-slate-300"
                        >
                          <span className="mr-2 text-cyan-300">✓</span>
                          {item}
                        </div>
                      ))}
                    </div>

                    {/* Badge skill/area yang dipakai */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {experience.stacks.map((stack) => (
                        <span
                          key={stack}
                          className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-100"
                        >
                          {stack}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: About & Contact */}
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

            <h2 className="text-4xl font-bold md:text-5xl">
              Siap Berkolaborasi?
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              Saya memiliki ketertarikan pada pengembangan aplikasi web
              end-to-end, mulai dari perancangan antarmuka, pembuatan REST API,
              pengelolaan database, hingga deployment aplikasi.
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

          {/* Card skill */}
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

      {/* MODAL GALERI PROJECT */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 px-4 py-8 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 30 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#071b35]/95 shadow-2xl shadow-cyan-950/40"
            >
              {/* Header modal */}
              <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4 md:px-7">
                <div>
                  <p className="text-sm font-medium text-cyan-300">
                    Project Gallery
                  </p>

                  <h3 className="text-xl font-bold text-white md:text-2xl">
                    {selectedProject.title}
                  </h3>
                </div>

                {/* Tombol tutup modal */}
                <button
                  type="button"
                  onClick={closeGallery}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Area gambar utama */}
              <div className="relative bg-slate-950/60 p-4 md:p-7">
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
                  <img
                    src={selectedProject.galleryImages[activeImageIndex]}
                    alt={`${selectedProject.title} screenshot ${
                      activeImageIndex + 1
                    }`}
                    className="max-h-[68vh] w-full object-contain"
                    onError={(event) => {
                      event.currentTarget.src =
                        "https://placehold.co/1400x900/0f274a/67e8f9?text=Project+Screenshot";
                    }}
                  />

                  {/* Tombol gambar sebelumnya */}
                  <button
                    type="button"
                    onClick={previousImage}
                    className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-slate-950/70 text-3xl text-white backdrop-blur transition hover:bg-cyan-300 hover:text-slate-950"
                  >
                    ‹
                  </button>

                  {/* Tombol gambar berikutnya */}
                  <button
                    type="button"
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-slate-950/70 text-3xl text-white backdrop-blur transition hover:bg-cyan-300 hover:text-slate-950"
                  >
                    ›
                  </button>

                  {/* Counter gambar */}
                  <div className="absolute bottom-4 right-4 rounded-full border border-white/10 bg-slate-950/75 px-4 py-2 text-sm font-medium text-white backdrop-blur">
                    {activeImageIndex + 1} /{" "}
                    {selectedProject.galleryImages.length}
                  </div>
                </div>

                {/* Thumbnail gambar bawah */}
                <div className="mt-5 flex gap-3 overflow-x-auto pb-2">
                  {selectedProject.galleryImages.map((image, index) => (
                    <button
                      key={`${image}-${index}`}
                      type="button"
                      onClick={() => setActiveImageIndex(index)}
                      className={`h-20 min-w-32 overflow-hidden rounded-xl border transition ${
                        activeImageIndex === index
                          ? "border-cyan-300 opacity-100"
                          : "border-white/10 opacity-55 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${selectedProject.title} thumbnail ${index + 1}`}
                        className="h-full w-full object-cover"
                        onError={(event) => {
                          event.currentTarget.src =
                            "https://placehold.co/400x250/0f274a/67e8f9?text=Screenshot";
                        }}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}