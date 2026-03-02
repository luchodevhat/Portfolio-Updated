import React from 'react';
import imgPowerFit from '../assets/imgs/TheScentStore1.png';
import imgClinica from '../assets/imgs/Clinica1.png';
import imgTheScent from '../assets/imgs/TheScentNew.png';

export default function Portfolio() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="dark bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display min-h-screen flex flex-col overflow-x-hidden antialiased">
      <div className="layout-container flex h-full grow flex-col">
        {/* Main Content Wrapper */}
        <div className="flex flex-1 justify-center">
          <div className="layout-content-container flex flex-col w-full max-w-[1280px] flex-1">
            {/* Header */}
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-[#283539] px-6 lg:px-10 py-4 sticky top-0 z-50 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md">
              <div className="flex items-center gap-4">
                <div className="size-8 text-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl">code</span>
                </div>
                <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">
                  Luis Alfaro
                </h2>
              </div>
              <div className="flex flex-1 justify-end gap-8">
                <div className="hidden md:flex items-center gap-9">
                  <a
                    className="text-slate-700 hover:text-primary dark:text-slate-300 dark:hover:text-primary text-sm font-medium leading-normal transition-colors cursor-pointer"
                    onClick={(e) => scrollToSection(e, 'top')}
                  >
                    Home
                  </a>
                  <a
                    className="text-slate-700 hover:text-primary dark:text-slate-300 dark:hover:text-primary text-sm font-medium leading-normal transition-colors cursor-pointer"
                    onClick={(e) => scrollToSection(e, 'experience')}
                  >
                    Experience
                  </a>
                  <a
                    className="text-slate-700 hover:text-primary dark:text-slate-300 dark:hover:text-primary text-sm font-medium leading-normal transition-colors cursor-pointer"
                    onClick={(e) => scrollToSection(e, 'skills')}
                  >
                    Skills
                  </a>
                  <a
                    className="text-slate-700 hover:text-primary dark:text-slate-300 dark:hover:text-primary text-sm font-medium leading-normal transition-colors cursor-pointer"
                    onClick={(e) => scrollToSection(e, 'projects')}
                  >
                    Projects
                  </a>
                </div>
                <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-slate-900 text-sm font-bold leading-normal tracking-[0.015em] hover:brightness-110 transition-all">
                  <a href="mailto:alfaroalejandro597@gmail.com"><span className="truncate">Contact Me</span></a>
                </button>
              </div>
            </header>
            {/* Hero Section */}
            <div className="@container px-4 md:px-10 py-8">
              <div
                className="flex min-h-[560px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-8 relative overflow-hidden group"
                data-alt="Dark computer screen with code"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(16, 29, 34, 0.85), rgba(16, 29, 34, 0.7)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuB7V6cLteuX2vnOm4_0bujxKpUvzvkWCE4NMCxkH7tZaPrGhicXZZwzsCDPqRf_PCZz3JaMtpaHDiLPUy_JpoECS-2aJr79ds65hVkaZuFmlH7fIY3sGIyOOHbe7pzW1ZwK6t5PQvbK3JAZ7p-zrjl0ZsOJFXm7vk2vFdF-rPR1rijfFWKYmQgFM26fxgHJLaGtHgzrPsMbKyr8bVF07DeAe-4GQqhbo9xjYb3pi8KI8z1ISDH-KsuA5fQV7oATSH9EyRgISXZkh78")',
                }}
              >
                {/* Animated background accent */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="flex flex-col gap-4 text-center z-10 max-w-3xl">
                  <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-surface-dark border border-slate-700/50 self-center mb-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-xs font-medium text-slate-300">
                      Open to work
                    </span>
                  </div>
                  <h1 className="text-white text-5xl md:text-7xl font-black leading-tight tracking-[-0.033em]">
                    Hello, I am{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-200">
                      Luis Alfaro
                    </span>
                  </h1>
                  <h2 className="text-slate-300 text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto">
                    A passionate Junior Web Developer crafting beautiful, intuitive,
                    and performant digital experiences with modern web technologies.
                  </h2>
                </div>
                <div className="flex flex-wrap gap-4 justify-center mt-4 z-10">
                  <button className="flex min-w-[140px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-primary text-slate-900 text-base font-bold leading-normal tracking-[0.015em] hover:scale-105 transition-transform shadow-lg shadow-primary/25">
                    <span className="truncate" onClick={(e) => scrollToSection(e, 'experience')}>View My Work</span>
                  </button>
                  <button className="flex min-w-[140px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-surface-dark border border-slate-600 hover:border-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:scale-105 transition-all">
                    <span className="truncate" onClick={(e) => scrollToSection(e, 'experience')}>Skills</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 px-4 md:px-10 py-10">
              {/* Left Column: Experience */}
              <div className="lg:col-span-7 flex flex-col gap-8" id="experience">
                <div>
                  <h2 className="text-slate-900 dark:text-white text-[28px] font-bold leading-tight tracking-[-0.015em] mb-6 flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">
                      work_history
                    </span>
                    Experience
                  </h2>
                  {/* Timeline */}
                  <div className="grid grid-cols-[40px_1fr] gap-x-4">
                    {/* Item 1 */}
                    <div className="flex flex-col items-center gap-1 pt-1">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary border border-primary/20">
                        <span className="material-symbols-outlined text-[20px]">
                          briefcase_meal
                        </span>
                      </div>
                      <div className="w-[2px] bg-slate-200 dark:bg-slate-700 h-full grow my-2 rounded-full"></div>
                    </div>
                    <div className="flex flex-1 flex-col pb-8 group">
                      <div className="p-5 rounded-xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700/50 hover:border-primary/50 transition-colors shadow-sm">
                        <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
                          <h3 className="text-slate-900 dark:text-white text-lg font-bold">
                            Junior Web Developer
                          </h3>
                          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20">
                            2025 - Present
                          </span>
                        </div>
                        <p className="text-primary text-sm font-medium mb-3">
                          Freelancer
                        </p>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                          Helping startups and small businesses grow with modern, responsive websites
                          built with HTML, CSS, JavaScript, React, Next.js, WordPress, and WooCommerce.
                          Also integrating automation and CRM tools to streamline processes and boost sales.
                        </p>
                      </div>
                    </div>
                    {/* Item 2 */}
                    <div className="flex flex-col items-center gap-1">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-surface-dark border border-slate-700 text-slate-400 group-hover:text-primary group-hover:border-primary/50 transition-colors">
                        <span className="material-symbols-outlined text-[20px]">
                          code
                        </span>
                      </div>
                      <div className="w-[2px] bg-slate-200 dark:bg-slate-700 h-full grow my-2 rounded-full"></div>
                    </div>
                    <div className="flex flex-1 flex-col pb-8">
                      <div className="p-5 rounded-xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700/50 hover:border-primary/50 transition-colors shadow-sm">
                        <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
                          <h3 className="text-slate-900 dark:text-white text-lg font-bold">
                            Technical back office support specialist
                          </h3>
                          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border dark:border-slate-700">
                            2025 - Present
                          </span>
                        </div>
                        <p className="text-primary text-sm font-medium mb-3">
                          Foundever
                        </p>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                          Troubleshoot issues, determine cause, provide resolution and/or workaround, and
                          document activity. Communicate with Operation Managers, Account Specialists,
                          and Sales Reps to solve customer issues and Use WinSCP to connect to remote servers
                          and manage file transfers via SFTP
                        </p>
                      </div>
                    </div>
                    {/* Item 3 */}
                    <div className="flex flex-col items-center gap-1">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-surface-dark border border-slate-700 text-slate-400">
                        <span className="material-symbols-outlined text-[20px]">
                          terminal
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col pb-2">
                      <div className="p-5 rounded-xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700/50 hover:border-primary/50 transition-colors shadow-sm">
                        <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
                          <h3 className="text-slate-900 dark:text-white text-lg font-bold">
                            Team leader
                          </h3>
                          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border dark:border-slate-700">
                            2024 - 2025
                          </span>
                        </div>
                        <p className="text-primary text-sm font-medium mb-3">
                          Foundever
                        </p>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                          Guide and support the team to consistently meet performance
                          goals and report on metric achievements..
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right Column: Skills */}
              <div
                className="lg:col-span-5 flex flex-col gap-8 sticky top-24 self-start"
                id="skills"
              >
                <div>
                  <h2 className="text-slate-900 dark:text-white text-[28px] font-bold leading-tight tracking-[-0.015em] mb-6 flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">
                      psychology
                    </span>
                    Skills
                  </h2>
                  <div className="p-6 rounded-xl bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700/50 shadow-sm flex flex-col gap-6">
                    {/* Skill 1 */}
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between items-end">
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                          Frontend Development
                        </span>
                        <span className="text-xs font-bold text-primary">95%</span>
                      </div>
                      <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2.5 overflow-hidden">
                        <div
                          className="bg-primary h-2.5 rounded-full"
                          style={{ width: '95%' }}
                        ></div>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        React, Next.js, Tailwind, TypeScript, Javascript
                      </p>
                    </div>
                    {/* Skill 2 */}
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between items-end">
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                          Backend Integration
                        </span>
                        <span className="text-xs font-bold text-primary">80%</span>
                      </div>
                      <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2.5 overflow-hidden">
                        <div
                          className="bg-primary h-2.5 rounded-full"
                          style={{ width: '80%' }}
                        ></div>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        Node.js, Express, PostgreSQL, Firebase
                      </p>
                    </div>
                    {/* Skill 3 */}
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between items-end">
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                          UI/UX Design
                        </span>
                        <span className="text-xs font-bold text-primary">75%</span>
                      </div>
                      <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2.5 overflow-hidden">
                        <div
                          className="bg-primary h-2.5 rounded-full"
                          style={{ width: '75%' }}
                        ></div>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        Figma, Adobe XD, Design Systems
                      </p>
                    </div>
                    {/* Tags Cloud */}
                    <div className="pt-4 border-t border-slate-100 dark:border-slate-700 mt-2">
                      <h4 className="text-xs font-bold uppercase text-slate-400 mb-3 tracking-wider">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1.5 rounded-md bg-slate-100 dark:bg-slate-800 text-xs font-medium text-slate-600 dark:text-slate-300 border border-transparent hover:border-primary/30 hover:text-primary transition-colors cursor-default">
                          JavaScript
                        </span>
                        <span className="px-3 py-1.5 rounded-md bg-slate-100 dark:bg-slate-800 text-xs font-medium text-slate-600 dark:text-slate-300 border border-transparent hover:border-primary/30 hover:text-primary transition-colors cursor-default">
                          TypeScript
                        </span>
                        <span className="px-3 py-1.5 rounded-md bg-slate-100 dark:bg-slate-800 text-xs font-medium text-slate-600 dark:text-slate-300 border border-transparent hover:border-primary/30 hover:text-primary transition-colors cursor-default">
                          React
                        </span>
                        <span className="px-3 py-1.5 rounded-md bg-slate-100 dark:bg-slate-800 text-xs font-medium text-slate-600 dark:text-slate-300 border border-transparent hover:border-primary/30 hover:text-primary transition-colors cursor-default">
                          Git
                        </span>
                        <span className="px-3 py-1.5 rounded-md bg-slate-100 dark:bg-slate-800 text-xs font-medium text-slate-600 dark:text-slate-300 border border-transparent hover:border-primary/30 hover:text-primary transition-colors cursor-default">
                          Node.js
                        </span>
                        <span className="px-3 py-1.5 rounded-md bg-slate-100 dark:bg-slate-800 text-xs font-medium text-slate-600 dark:text-slate-300 border border-transparent hover:border-primary/30 hover:text-primary transition-colors cursor-default">
                          Spring Boot
                        </span>
                        <span className="px-3 py-1.5 rounded-md bg-slate-100 dark:bg-slate-800 text-xs font-medium text-slate-600 dark:text-slate-300 border border-transparent hover:border-primary/30 hover:text-primary transition-colors cursor-default">
                          Java
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Projects Section */}
            <div className="px-4 md:px-10 py-10 pb-20" id="projects">
              <h2 className="text-slate-900 dark:text-white text-[28px] font-bold leading-tight tracking-[-0.015em] mb-8 flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">
                  rocket_launch
                </span>
                Featured Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Project Card 1 */}
                <div className="group flex flex-col bg-white dark:bg-surface-dark rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/50 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5">
                  <div className="h-48 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-dark to-transparent opacity-60 z-10"></div>
                    <img
                      alt="Dashboard Analytics UI"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      data-alt="Modern analytics dashboard interface on laptop"
                      src={imgPowerFit}
                    />
                    <div className="absolute top-3 right-3 z-20">
                      <a href="https://github.com/luchodevhat/PowerFit">
                        <div className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary hover:text-black transition-colors cursor-pointer">
                          <span className="material-symbols-outlined text-lg">
                            arrow_outward
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      PorwerFit
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 flex-1 line-clamp-3">
                      This project allows users to explore products,
                      view detailed information, and simulate a seamless
                      online shopping experience.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      <span className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wide rounded">
                        Javascript
                      </span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wide rounded">
                        Node.js
                      </span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wide rounded">
                        Oracle SQL
                      </span>
                    </div>
                  </div>
                </div>
                {/* Project Card 2 */}
                <div className="group flex flex-col bg-white dark:bg-surface-dark rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/50 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5">
                  <div className="h-48 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-dark to-transparent opacity-60 z-10"></div>
                    <img
                      alt="E-commerce mobile app"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      data-alt="Data visualization on screen"
                      src={imgClinica}
                    />
                    <div className="absolute top-3 right-3 z-20">
                      <a href="https://github.com/vvegx06/awcsgrupo8">
                        <div className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary hover:text-black transition-colors cursor-pointer">
                          <span className="material-symbols-outlined text-lg">
                            arrow_outward
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      Clinica Jhon Vega
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 flex-1 line-clamp-3">
                      Responsive dental clinic website designed to
                      manage patient appointments in a clear and organized way.
                      It provides a clean user interface for scheduling, viewing,
                      and managing dental appointments, focusing on usability and simplicity.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      <span className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wide rounded">
                        Javascript
                      </span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wide rounded">
                        Oracle SQL
                      </span>
                    </div>
                  </div>
                </div>
                {/* Project Card 3 */}
                <div className="group flex flex-col bg-white dark:bg-surface-dark rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/50 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5">
                  <div className="h-48 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-dark to-transparent opacity-60 z-10"></div>
                    <img
                      alt="Abstract UI design"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      data-alt="Abstract blue digital pattern"
                      src={imgTheScent}
                    />
                    <div className="absolute top-3 right-3 z-20">
                      <a href="https://github.com/luchodevhat/TheScentClub">
                        <div className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary hover:text-black transition-colors cursor-pointer">
                          <span className="material-symbols-outlined text-lg">
                            arrow_outward
                          </span>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      The Scent Club
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 flex-1 line-clamp-3">
                      The Scent Club is an online perfume store designed with a
                      premium look and optimized user experience. Built with HTML5,
                      CSS3, JavaScript, and Bootstrap.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      <span className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wide rounded">
                        Bootstrap
                      </span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wide rounded">
                        Javascript
                      </span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wide rounded">
                        CSS3
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Footer */}
            <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c161a] py-10 px-4 md:px-10">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex flex-col gap-2">
                  <h2 className="text-slate-900 dark:text-white text-lg font-bold">
                    Luis Alfaro
                  </h2>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">
                    Building digital experiences that matter.
                  </p>
                </div>
                <div className="flex gap-4">
                  <a
                    className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-black transition-colors"
                    href="mailto:alfaroalejandro597@gmail.com"
                  >
                    <span className="material-symbols-outlined text-xl">mail</span>
                  </a>
                  <a
                    className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-black transition-colors"
                    href="https://github.com/luchodevhat"
                  >
                    <span className="material-symbols-outlined text-xl">code</span>
                  </a>
                  <a
                    className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-black transition-colors"
                    href="https://www.linkedin.com/in/alejandro-alfaro-36a245345"
                  >
                    <span className="material-symbols-outlined text-xl">
                      alternate_email
                    </span>
                  </a>
                </div>
              </div>
              <div className="mt-8 text-center text-xs text-slate-400 dark:text-slate-600">
                © 2026 Luis Alfaro. All rights reserved.
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
