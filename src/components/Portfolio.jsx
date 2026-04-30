import React, { useState } from 'react';
import { User, GraduationCap, Briefcase, ChevronRight, LayoutGrid } from 'lucide-react';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('profil');

  const tabs = [
    { id: 'profil', label: 'Profil', icon: User },
    { id: 'pendidikan', label: 'Pendidikan', icon: GraduationCap },
    { id: 'project', label: 'Project', icon: LayoutGrid },
  ];

  const skills = [
    { name: 'PHP & Laravel', percent: 75, color: 'bg-indigo-500' },
    { name: 'JavaScript & Node.js', percent: 80, color: 'bg-yellow-400' },
    { name: 'Go', percent: 70, color: 'bg-cyan-500' },
    { name: 'HTML/CSS & Bootstrap', percent: 90, color: 'bg-orange-500' },
  ];

  const projects = [
    {
      title: 'NutriAssistant',
      desc: 'Aplikasi kalkulator nutrisi berbasis web dengan integrasi AI.',
      tech: ['React', 'Laravel', 'AI'],
      color: 'from-emerald-400 to-green-600'
    },
    {
      title: 'FutureBank',
      desc: 'Dashboard digital banking dengan antarmuka modern.',
      tech: ['React', 'Tailwind', 'Node.js'],
      color: 'from-blue-400 to-indigo-600'
    },
    {
      title: 'Wash&Go',
      desc: 'Platform Point of Sales (POS) untuk manajemen laundry.',
      tech: ['PHP', 'Laravel', 'MySQL'],
      color: 'from-purple-400 to-pink-600'
    },
    {
      title: 'Pharmacy Management System',
      desc: 'Sistem manajemen apotek terpadu.',
      tech: ['Go', 'Vue.js', 'PostgreSQL'],
      color: 'from-red-400 to-orange-500'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans p-4 md:p-8">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <header className="mb-12 text-center md:text-left">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 mb-2">
            Portfolio
          </h1>
          <p className="text-slate-400">Selamat datang di profil profesional saya.</p>
        </header>

        {/* Tab Navigation */}
        <div className="flex space-x-2 md:space-x-4 mb-8 overflow-x-auto pb-2 scrollbar-hide">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-slate-200'
                  }`}
              >
                <Icon className="w-5 h-5 mr-2" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="bg-slate-800/50 rounded-2xl p-6 md:p-8 backdrop-blur-sm border border-slate-700/50 shadow-xl transition-all duration-500">

          {/* PROFIL TAB */}
          {activeTab === 'profil' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start mb-10">
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-slate-700 shadow-2xl shrink-0 bg-slate-700 relative flex justify-center items-center">
                  <img src="/krisna.jpeg" alt="Foto Krisna" className="w-full h-full object-cover" />
                </div>
                <div className="text-center md:text-left space-y-4 flex-1">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">Krisna Bagus Pratama</h2>
                    <p className="text-blue-400 font-medium text-lg">Mahasiswa Fullstack Developer</p>
                  </div>
                  <p className="text-slate-300 leading-relaxed max-w-2xl">
                    Saya adalah seorang yang antusias dalam membangun solusi digital. Memiliki ketertarikan kuat pada pengembangan backend dan frontend untuk menciptakan pengalaman pengguna yang mulus dan sistem yang handal.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <Briefcase className="w-5 h-5 mr-2 text-blue-400" /> Skills
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {skills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm font-medium">
                        <span className="text-slate-200">{skill.name}</span>
                        <span className="text-slate-400">{skill.percent}%</span>
                      </div>
                      <div className="h-3 w-full bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.percent}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* PENDIDIKAN TAB */}
          {activeTab === 'pendidikan' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-2xl font-bold text-white mb-8">Riwayat Pendidikan</h2>
              <div className="relative border-l-2 border-slate-700 ml-3 space-y-8">

                <div className="relative pl-8">
                  <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1 border-4 border-slate-800"></div>
                  <div className="bg-slate-800 rounded-xl p-5 border border-slate-700 shadow-md hover:border-blue-500/50 transition-colors">
                    <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 text-sm font-semibold rounded-full mb-3">
                      Saat ini
                    </span>
                    <h3 className="text-xl font-bold text-white mb-1">Mahasiswa Teknik Informatika</h3>
                    <p className="text-slate-400">Bina Nusantara University</p>
                    <p className="text-slate-300 mt-4 text-sm leading-relaxed">
                      Mendalami arsitektur perangkat lunak yang lebih kompleks, struktur data, dan pengembangan full-stack modern. Fokus pada integrasi API, manajemen basis data relasional (SQL), serta penerapan user experience (UX) dalam membangun solusi digital yang skalabel seperti proyek NutriAssistant dan FutureBank.
                    </p>
                  </div>
                </div>

                <div className="relative pl-8">
                  <div className="absolute w-4 h-4 bg-slate-600 rounded-full -left-[9px] top-1 border-4 border-slate-800"></div>
                  <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50">
                    <span className="inline-block px-3 py-1 bg-slate-700 text-slate-300 text-sm font-semibold rounded-full mb-3">
                      Sebelumnya
                    </span>
                    <h3 className="text-lg font-bold text-slate-200 mb-1">SMK TI BALI GLOBAL DENPASAR</h3>
                    <p className="text-slate-500">Rekayasa Perangkat Lunak</p>
                    <p className="text-slate-300 mt-4 text-sm leading-relaxed">
                      Mempelajari dasar-dasar pengembangan perangkat lunak, mulai dari logika algoritma, pemrograman berorientasi objek (OOP), hingga perancangan basis data. Selama masa studi, saya aktif dalam membangun proyek aplikasi desktop sederhana menggunakan Java serta memahami dasar-dasar pengembangan web menggunakan HTML, CSS, dan PHP.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* PROJECT TAB */}
          {activeTab === 'project' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-2xl font-bold text-white mb-8">Portfolio Project</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                  <div key={index} className="group relative overflow-hidden rounded-2xl bg-slate-800 border border-slate-700 hover:border-slate-500 transition-all duration-300">
                    <div className={`h-32 w-full bg-gradient-to-br ${project.color} opacity-80 group-hover:opacity-100 transition-opacity`}></div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                      <p className="text-slate-400 text-sm mb-6 h-10">{project.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t, i) => (
                          <span key={i} className="px-2 py-1 bg-slate-700 text-xs font-medium text-slate-300 rounded-md">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Portfolio;
