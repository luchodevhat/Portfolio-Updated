import React from 'react';

export default function AdminDashboard() {
  return (
    <div className="dark bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display antialiased min-h-screen flex flex-col">
      <div className="layout-container flex h-full grow flex-col">
        {/* Main Layout Wrapper */}
        <div className="flex flex-1 w-full max-w-[1440px] mx-auto h-full min-h-screen">
          {/* Sidebar Navigation */}
          <aside className="w-64 border-r border-surface-border hidden md:flex flex-col bg-background-dark sticky top-0 h-screen overflow-y-auto">
            <div className="p-6 border-b border-surface-border">
              <div className="flex items-center gap-3">
                <div className="size-8 text-primary">
                  <svg
                    fill="none"
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z"
                      fill="currentColor"
                      fillRule="evenodd"
                    ></path>
                    <path
                      clipRule="evenodd"
                      d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z"
                      fill="currentColor"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <span className="text-lg font-bold tracking-tight">Luis.Port</span>
              </div>
            </div>
            <div className="p-4 flex flex-col gap-6 grow">
              {/* User Profile */}
              <div className="flex items-center gap-3 p-2">
                <div
                  className="bg-center bg-no-repeat bg-cover rounded-full size-10 ring-2 ring-primary/20"
                  data-alt="Profile picture of Luis Alfaro"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBv5EUYHSmmeLfBXldZ7rqZSRhO-KYgJEmjsS7SjJRjlNLRIGbxi97nb2bPkUtnyiqZD4hQ8XCUd15vEwK_Utwb4EBh3dLXX_mdUSyAcMmWE-PBOJp0ewgmL1zQfpvvbhjTnZi1PJ6PgPDqD6xKNc9RW9VHbsIe58DGBaB1VGjirIo97uCUc59lpBnBMdWDfXSKcISnab1fa74qZhs0hdUTTvgM_JYUgHkAuNCO8YZVvvoF6j0BEGSeLkmW9y5OtmG3c0OxVPhzuhs")',
                  }}
                ></div>
                <div className="flex flex-col">
                  <h1 className="text-sm font-medium leading-none mb-1">
                    Luis Alfaro
                  </h1>
                  <p className="text-slate-400 text-xs font-normal">
                    Administrator
                  </p>
                </div>
              </div>
              {/* Navigation Links */}
              <nav className="flex flex-col gap-1">
                <p className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                  Main Menu
                </p>
                <a
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary/10 text-primary transition-colors"
                  href="#"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    folder_open
                  </span>
                  <span className="text-sm font-medium">Projects</span>
                </a>
                <a
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-surface-dark transition-colors"
                  href="#"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    edit_note
                  </span>
                  <span className="text-sm font-medium">Blog Posts</span>
                </a>
                <a
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-surface-dark transition-colors"
                  href="#"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    mail
                  </span>
                  <span className="text-sm font-medium">Messages</span>
                  <span className="ml-auto bg-primary text-background-dark text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                    3
                  </span>
                </a>
                <a
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-surface-dark transition-colors"
                  href="#"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    settings
                  </span>
                  <span className="text-sm font-medium">Settings</span>
                </a>
              </nav>
            </div>
            <div className="p-4 border-t border-surface-border">
              <button className="flex w-full items-center gap-3 px-3 py-2.5 rounded-lg text-slate-400 hover:text-red-400 hover:bg-red-900/10 transition-colors">
                <span className="material-symbols-outlined text-[20px]">
                  logout
                </span>
                <span className="text-sm font-medium">Sign Out</span>
              </button>
            </div>
          </aside>
          {/* Main Content Area */}
          <main className="flex-1 flex flex-col min-w-0 overflow-x-hidden">
            {/* Mobile Header (Visible only on small screens) */}
            <header className="md:hidden flex items-center justify-between p-4 border-b border-surface-border bg-background-dark">
              <div className="flex items-center gap-3">
                <div className="size-6 text-primary">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 256 256"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"></path>
                  </svg>
                </div>
                <h2 className="text-lg font-bold">Admin</h2>
              </div>
              <button className="text-slate-100">
                <span className="material-symbols-outlined">menu</span>
              </button>
            </header>
            <div className="flex-1 p-6 lg:p-10 flex flex-col gap-8 max-w-[1200px] mx-auto w-full">
              {/* Page Header & Stats */}
              <div className="flex flex-col gap-6">
                <div className="flex flex-wrap justify-between items-end gap-4">
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-2">
                      Manage Projects
                    </h1>
                    <p className="text-slate-400">
                      View, edit, or create new projects for your portfolio.
                    </p>
                  </div>
                  <button className="bg-primary hover:bg-primary/90 text-background-dark font-bold py-2.5 px-5 rounded-lg flex items-center gap-2 transition-all shadow-lg shadow-primary/20">
                    <span className="material-symbols-outlined text-[20px]">
                      add
                    </span>
                    Add New Project
                  </button>
                </div>
                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-surface-dark border border-surface-border rounded-xl p-6 flex flex-col gap-1">
                    <p className="text-slate-400 text-sm font-medium">
                      Total Projects
                    </p>
                    <p className="text-3xl font-bold text-white">12</p>
                  </div>
                  <div className="bg-surface-dark border border-surface-border rounded-xl p-6 flex flex-col gap-1">
                    <p className="text-primary text-sm font-medium">
                      Active &amp; Published
                    </p>
                    <p className="text-3xl font-bold text-white">10</p>
                  </div>
                  <div className="bg-surface-dark border border-surface-border rounded-xl p-6 flex flex-col gap-1">
                    <p className="text-orange-400 text-sm font-medium">Drafts</p>
                    <p className="text-3xl font-bold text-white">2</p>
                  </div>
                </div>
              </div>
              {/* Split View: Project Form & Project List */}
              <div className="grid lg:grid-cols-3 gap-8 items-start">
                {/* Form Section (Create/Edit) */}
                <div className="lg:col-span-1 bg-surface-dark border border-surface-border rounded-xl p-6 sticky top-6">
                  <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">
                      edit_square
                    </span>
                    Project Details
                  </h3>
                  <form className="flex flex-col gap-5">
                    <div>
                      <label
                        className="block text-sm font-medium text-slate-300 mb-1.5"
                        htmlFor="p-name"
                      >
                        Project Name
                      </label>
                      <input
                        className="w-full bg-background-dark border border-surface-border rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-slate-600"
                        id="p-name"
                        placeholder="e.g. Fintech Dashboard"
                        type="text"
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm font-medium text-slate-300 mb-1.5"
                        htmlFor="p-desc"
                      >
                        Description
                      </label>
                      <textarea
                        className="w-full bg-background-dark border border-surface-border rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-slate-600 resize-none"
                        id="p-desc"
                        placeholder="Short summary of the project..."
                        rows={4}
                      ></textarea>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1.5">
                        Cover Image
                      </label>
                      <div className="border-2 border-dashed border-surface-border rounded-lg p-6 flex flex-col items-center justify-center text-center hover:bg-background-dark/50 hover:border-primary/50 transition-all cursor-pointer group">
                        <div className="bg-surface-border/50 p-3 rounded-full mb-3 group-hover:scale-110 transition-transform">
                          <span className="material-symbols-outlined text-slate-400 group-hover:text-primary">
                            cloud_upload
                          </span>
                        </div>
                        <p className="text-xs text-slate-400">
                          Click to upload or drag &amp; drop
                        </p>
                        <p className="text-[10px] text-slate-500 mt-1">
                          SVG, PNG, JPG (max. 800x400px)
                        </p>
                      </div>
                    </div>
                    <div>
                      <label
                        className="block text-sm font-medium text-slate-300 mb-1.5"
                        htmlFor="p-tech"
                      >
                        Technologies
                      </label>
                      <input
                        className="w-full bg-background-dark border border-surface-border rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-slate-600"
                        id="p-tech"
                        placeholder="React, Tailwind, Node.js"
                        type="text"
                      />
                      <p className="text-[10px] text-slate-500 mt-1">
                        Separate with commas
                      </p>
                    </div>
                    <div>
                      <label
                        className="block text-sm font-medium text-slate-300 mb-1.5"
                        htmlFor="p-link"
                      >
                        Project Link
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 material-symbols-outlined text-[18px]">
                          link
                        </span>
                        <input
                          className="w-full bg-background-dark border border-surface-border rounded-lg pl-10 pr-4 py-2.5 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-slate-600"
                          id="p-link"
                          placeholder="https://..."
                          type="url"
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-2 pt-2">
                      <button
                        className="flex-1 bg-primary text-background-dark font-bold py-2.5 rounded-lg hover:bg-primary/90 transition-colors"
                        type="submit"
                      >
                        Save Project
                      </button>
                      <button
                        className="px-4 py-2.5 border border-surface-border text-slate-300 font-medium rounded-lg hover:bg-surface-border/50 transition-colors"
                        type="button"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
                {/* List Section */}
                <div className="lg:col-span-2 flex flex-col gap-4">
                  {/* Filters */}
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
                    <div className="relative w-full sm:w-64">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 material-symbols-outlined text-[20px]">
                        search
                      </span>
                      <input
                        className="w-full bg-surface-dark border border-surface-border rounded-lg pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-slate-500"
                        placeholder="Search projects..."
                        type="text"
                      />
                    </div>
                    <div className="flex gap-2">
                      <button
                        className="p-2 text-slate-400 hover:text-primary transition-colors"
                        title="Filter list"
                      >
                        <span className="material-symbols-outlined">
                          filter_list
                        </span>
                      </button>
                      <button
                        className="p-2 text-slate-400 hover:text-primary transition-colors"
                        title="Sort list"
                      >
                        <span className="material-symbols-outlined">sort</span>
                      </button>
                    </div>
                  </div>
                  {/* Table Container */}
                  <div className="bg-surface-dark border border-surface-border rounded-xl overflow-hidden shadow-sm">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-surface-border/30 text-slate-400 text-xs uppercase tracking-wider">
                            <th className="px-6 py-4 font-semibold">
                              Project Name
                            </th>
                            <th className="px-6 py-4 font-semibold">Category</th>
                            <th className="px-6 py-4 font-semibold">Status</th>
                            <th className="px-6 py-4 font-semibold text-right">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-surface-border">
                          {/* Row 1 */}
                          <tr className="group hover:bg-background-dark/30 transition-colors">
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-3">
                                <div
                                  className="size-10 rounded bg-slate-700 bg-cover bg-center shrink-0"
                                  data-alt="Abstract business graph on laptop screen"
                                  style={{
                                    backgroundImage:
                                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCNPRFq99jg4xq9wslgUHTzpzPowVt_wbPHgeKx5a9AJwe1myEs45ZgWYGhRAp1yfzifK4TfAcqdmFx0pCIujX8nzpCMAy8Xk-giIsp-JmMSHrKanc0Z--FwgQVkwb7pM5C-UKbttiRIjgrPLBqYqUWMgXYsNdW-pjR4touN3Fey-OxqW-mqwC_-hoDvGeHSxShfgBtKBiwjFBwOKhxm3WNZhgq-3oTEXnyLZRBaaHE7Itu5i59BAJbqZIFTmvu8ZZsegmDDQZ-n1M')",
                                  }}
                                ></div>
                                <div>
                                  <p className="text-sm font-medium text-white">
                                    E-commerce Redesign
                                  </p>
                                  <p className="text-xs text-slate-500">
                                    Last edited: Oct 24
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-900/30 text-blue-300 border border-blue-800">
                                UX Design
                              </span>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-2">
                                <span className="size-2 rounded-full bg-emerald-500"></span>
                                <span className="text-sm text-slate-300">
                                  Published
                                </span>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-right">
                              <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button
                                  className="p-1.5 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-md transition-colors"
                                  title="Edit"
                                >
                                  <span className="material-symbols-outlined text-[18px]">
                                    edit
                                  </span>
                                </button>
                                <button
                                  className="p-1.5 text-slate-400 hover:text-red-400 hover:bg-red-900/20 rounded-md transition-colors"
                                  title="Delete"
                                >
                                  <span className="material-symbols-outlined text-[18px]">
                                    delete
                                  </span>
                                </button>
                              </div>
                            </td>
                          </tr>
                          {/* Row 2 */}
                          <tr className="group hover:bg-background-dark/30 transition-colors">
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-3">
                                <div
                                  className="size-10 rounded bg-slate-700 bg-cover bg-center shrink-0"
                                  data-alt="Data dashboard visualization"
                                  style={{
                                    backgroundImage:
                                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCn7qc-at2dgh1q2LpfRFfwD6g6KTrV_5Rp2vuHSwoiN-YMHrmpJ8s-DElqGqSBmBlIEVDacB4GXcZPF3d20zJhxo3sCsSIvs6JVuEQcrZautini72liufj-0H_T2AL0tzoCEvM1uJaIwfce6gxLE8HH8vkzYhxxUrtJD5kYBH7D4VibQSzmfCkoaXg6W3J4DOEz4tzgQVK4CJWJEMlJ7SaakemF57sIQzEg8G59nk9CMwLu9gymrDSMs-x75wp7oJr4GKmwkGPafA')",
                                  }}
                                ></div>
                                <div>
                                  <p className="text-sm font-medium text-white">
                                    Finance App
                                  </p>
                                  <p className="text-xs text-slate-500">
                                    Last edited: Sep 12
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-900/30 text-purple-300 border border-purple-800">
                                Mobile Dev
                              </span>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-2">
                                <span className="size-2 rounded-full bg-emerald-500"></span>
                                <span className="text-sm text-slate-300">
                                  Published
                                </span>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-right">
                              <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button
                                  className="p-1.5 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-md transition-colors"
                                  title="Edit"
                                >
                                  <span className="material-symbols-outlined text-[18px]">
                                    edit
                                  </span>
                                </button>
                                <button
                                  className="p-1.5 text-slate-400 hover:text-red-400 hover:bg-red-900/20 rounded-md transition-colors"
                                  title="Delete"
                                >
                                  <span className="material-symbols-outlined text-[18px]">
                                    delete
                                  </span>
                                </button>
                              </div>
                            </td>
                          </tr>
                          {/* Row 3 */}
                          <tr className="group hover:bg-background-dark/30 transition-colors">
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-3">
                                <div
                                  className="size-10 rounded bg-slate-700 bg-cover bg-center shrink-0"
                                  data-alt="Travel concept with map and compass"
                                  style={{
                                    backgroundImage:
                                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCmhs1PBHIqbSbna1PxuDV5SNNNID6Zl7uwrKtDUSXPCpEQ9bWu0zg0lOsfVI8WaRWunKrK9Ab0cGtSyx0ldjFop2LaBW_Wb3JBux9RCZ3dZ-fww0aA2evjpJVFLhStTs1WX9IX1dqXC2yT1gXRkYUPGv6q1kwL0wqDOREiLIN8sTCGfoRPYZh14N7pXqFi8iXkkIBkGuO3yQ4zipeUIEa4D5NP0SjGpjcYMCHQnEHaN751Iy4p-GXyBcV-EFoPXAc6xNL_xGQqGP4')",
                                  }}
                                ></div>
                                <div>
                                  <p className="text-sm font-medium text-white">
                                    Travel Blog
                                  </p>
                                  <p className="text-xs text-slate-500">
                                    Last edited: Aug 05
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-900/30 text-orange-300 border border-orange-800">
                                Web Dev
                              </span>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-2">
                                <span className="size-2 rounded-full bg-orange-400"></span>
                                <span className="text-sm text-slate-300">
                                  Draft
                                </span>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-right">
                              <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button
                                  className="p-1.5 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-md transition-colors"
                                  title="Edit"
                                >
                                  <span className="material-symbols-outlined text-[18px]">
                                    edit
                                  </span>
                                </button>
                                <button
                                  className="p-1.5 text-slate-400 hover:text-red-400 hover:bg-red-900/20 rounded-md transition-colors"
                                  title="Delete"
                                >
                                  <span className="material-symbols-outlined text-[18px]">
                                    delete
                                  </span>
                                </button>
                              </div>
                            </td>
                          </tr>
                          {/* Row 4 */}
                          <tr className="group hover:bg-background-dark/30 transition-colors">
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-3">
                                <div
                                  className="size-10 rounded bg-slate-700 bg-cover bg-center shrink-0"
                                  data-alt="Digital abstract cryptocurrency pattern"
                                  style={{
                                    backgroundImage:
                                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAbHxeoo_wSgKyWr7IaW8NUXdjeHZcfFxbjxKlK6SRZsxUushgi9Px4yp6G7FGVQmLnTN-2PYfb9_lHwdSIl7HTi-BHETYC9yx7pH-39vqOelKUjeBIilI8VwFVbKOLIs4gR9Z7C5Ze4fEQT7bTpAyZVebIFFHekGfRruq7t08VmJt5O4AJ15g-6V1H6gfejwgFaUC1bDWvbPHafTnHNVbt6UL3ZglBQ_GBaZQ0TkGB131zcD4dZMnc6xJUjR_zP0WpxeNblgSmFYA')",
                                  }}
                                ></div>
                                <div>
                                  <p className="text-sm font-medium text-white">
                                    Crypto Wallet
                                  </p>
                                  <p className="text-xs text-slate-500">
                                    Last edited: Jul 20
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-900/30 text-teal-300 border border-teal-800">
                                Blockchain
                              </span>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-2">
                                <span className="size-2 rounded-full bg-emerald-500"></span>
                                <span className="text-sm text-slate-300">
                                  Published
                                </span>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-right">
                              <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button
                                  className="p-1.5 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-md transition-colors"
                                  title="Edit"
                                >
                                  <span className="material-symbols-outlined text-[18px]">
                                    edit
                                  </span>
                                </button>
                                <button
                                  className="p-1.5 text-slate-400 hover:text-red-400 hover:bg-red-900/20 rounded-md transition-colors"
                                  title="Delete"
                                >
                                  <span className="material-symbols-outlined text-[18px]">
                                    delete
                                  </span>
                                </button>
                              </div>
                            </td>
                          </tr>
                          {/* Row 5 */}
                          <tr className="group hover:bg-background-dark/30 transition-colors">
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-3">
                                <div
                                  className="size-10 rounded bg-slate-700 bg-cover bg-center shrink-0"
                                  data-alt="Medical heartbeat health concept"
                                  style={{
                                    backgroundImage:
                                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDxNGw9A1m9CxAd1SPOipi3TLzeY-7wnUvEqgg9Ce-lSYMPF_QgHD_kttS8NH3DchtaGX6G2vBaUXGMwBu-oyyD832C-ukc2CyKHW_hlb6cOlCfcNzZKVXK7w1xx3aBvJeJhjvZ6iseQJc8uPdgROLKLEjCRWtrJAX45kMreXQMyB0eqetGkDz0b-Rf5dz9n7YKbzn8VS9z4ig9mpzG8Z0ywcQ2zvyOhM_WFINlot_YrV4o2rSID6ozj7kbZ5DhQHNy2R-jQtECMl8')",
                                  }}
                                ></div>
                                <div>
                                  <p className="text-sm font-medium text-white">
                                    Health Tracker
                                  </p>
                                  <p className="text-xs text-slate-500">
                                    Last edited: Jun 15
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-rose-900/30 text-rose-300 border border-rose-800">
                                UX Research
                              </span>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-2">
                                <span className="size-2 rounded-full bg-slate-500"></span>
                                <span className="text-sm text-slate-300">
                                  Archived
                                </span>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-right">
                              <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button
                                  className="p-1.5 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-md transition-colors"
                                  title="Edit"
                                >
                                  <span className="material-symbols-outlined text-[18px]">
                                    edit
                                  </span>
                                </button>
                                <button
                                  className="p-1.5 text-slate-400 hover:text-red-400 hover:bg-red-900/20 rounded-md transition-colors"
                                  title="Delete"
                                >
                                  <span className="material-symbols-outlined text-[18px]">
                                    delete
                                  </span>
                                </button>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="px-6 py-4 border-t border-surface-border flex items-center justify-between">
                      <p className="text-xs text-slate-500">
                        Showing 1 to 5 of 12 results
                      </p>
                      <div className="flex gap-2">
                        <button className="px-3 py-1 text-xs font-medium rounded bg-surface-border hover:bg-surface-border/80 text-white transition-colors">
                          Previous
                        </button>
                        <button className="px-3 py-1 text-xs font-medium rounded bg-surface-border hover:bg-surface-border/80 text-white transition-colors">
                          Next
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
