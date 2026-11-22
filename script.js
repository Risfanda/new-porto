const projects = {
  "tixzone-uiux": {
    "title": "TixZone – Platform Penjualan Tiket Event UI/UX",
    "tag": "Studi kasus UI/UX · 2026",
    "description": "Desain website pemesanan tiket konser dan acara. Saya merancang alur dari pencarian acara, pemilihan kategori tiket, pengisian data pemesan, hingga penerbitan e-ticket.",
    "features": [
      "Merancang katalog acara dengan filter kategori dan harga.",
      "Menampilkan pilihan kategori tiket beserta kuota yang tersedia.",
      "Menyusun formulir pemesan dan simulasi pilihan pembayaran.",
      "Merancang e-ticket dengan QR code untuk pemeriksaan di lokasi acara.",
      "Membuat prototipe interaktif untuk mencoba alur pemesanan."
    ],
    "techStack": [
      "Figma",
      "UI/UX Design",
      "Interactive Prototyping",
      "User Flow",
      "Design System",
      "Wireframing"
    ],
    "links": {
      "prototype": "https://stitch.withgoogle.com/preview/14796760051856988866?node-id=87913dd5e23847a6a0f05ed46e393085",
      "figma": "https://www.figma.com/design/bnSkj7H1eiQXJwKyIBW8Ho/Untitled?node-id=0-1&t=j4tzNuHLZTfwsXXY-1"
    }
  },
  "bp3mi-protect": {
    "title": "BP3MI Protect – Sistem Pengaduan & Pelindungan PMI",
    "tag": "Aplikasi web fullstack · 2026",
    "description": "Aplikasi pengaduan untuk Pekerja Migran Indonesia. Pengguna mengirim laporan dan bukti foto, lalu memantau statusnya. Petugas mengelola laporan melalui dashboard dengan autentikasi.",
    "features": [
      "Membangun formulir pengaduan dan unggahan bukti ke Supabase Storage.",
      "Menampilkan status laporan: diterima, diproses, dan selesai.",
      "Membatasi akses dashboard petugas dengan Supabase Auth.",
      "Mengatur akses data PostgreSQL menggunakan Row Level Security.",
      "Menyiapkan deployment di Vercel dan konfigurasi environment variables."
    ],
    "techStack": [
      "Next.js (App Router)",
      "TypeScript",
      "Tailwind CSS",
      "Supabase Auth",
      "Supabase Storage",
      "PostgreSQL (RLS)",
      "Vercel Deployment"
    ],
    "links": {
      "demo": "https://bp3mi-ticketing.vercel.app",
      "github": "https://github.com/Risfanda/bp3mi-ticketing"
    }
  },
  "kopi-senja": {
    "title": "Kopi Senja · Aplikasi toko kopi",
    "tag": "Aplikasi web fullstack · 2026",
    "description": "Aplikasi e-commerce fullstack untuk roastery kopi artisan. Dibangun menggunakan Laravel 13, MySQL, Tailwind CSS, dan Alpine.js.",
    "features": [
      "Menyimpan keranjang belanja per pengguna di database menggunakan Eloquent ORM.",
      "Membangun autentikasi, checkout, dan pembaruan jumlah barang di navigasi.",
      "Membuat panel admin untuk menambah, mengubah, dan menghapus menu serta mengatur status ketersediaan."
    ],
    "techStack": [
      "Laravel 13",
      "PHP",
      "MySQL",
      "Eloquent ORM",
      "Tailwind CSS",
      "Alpine.js",
      "Blade Templating"
    ]
  },
  "otp-research": {
    "title": "Riset Clustering Kerentanan Fraud OTP",
    "tag": "Skripsi · Analisis data & machine learning",
    "description": "Penelitian skripsi Teknik Informatika Universitas Mataram mengenai klastering tingkat kerentanan mahasiswa terhadap kejahatan OTP Fraud.",
    "features": [
      "Menganalisis kerentanan mahasiswa terhadap ancaman Fraud One-Time Password (OTP) pada transaksi digital.",
      "Mengolah data survei perilaku dan menerapkan metode Unsupervised Machine Learning (K-Means Clustering).",
      "Menghasilkan rekomendasi klaster kerentanan untuk mendukung program edukasi kesadaran keamanan digital."
    ],
    "techStack": [
      "Python",
      "K-Means Clustering",
      "Data Preprocessing",
      "Data Analytics",
      "Unsupervised ML"
    ],
    "links": {
      "journal": "https://drive.google.com/file/d/10R2OUVtSqGRoPkiPUGGZJK-hkrCEKsZ4/view?usp=sharing"
    }
  },
  "bkd-uiux": {
    "title": "Public Reward Application UI/UX",
    "tag": "Proyek magang · BKD Kota Mataram · 2025",
    "description": "Proyek perancangan UI/UX antarmuka aplikasi penghargaan publik untuk Badan Keuangan Daerah (BKD) Kota Mataram.",
    "features": [
      "Merancang alur unggahan struk belanja untuk mengikuti undian berhadiah.",
      "Menerjemahkan kebutuhan BKD menjadi alur pengguna dan wireframe interaktif.",
      "Memperhatikan aksesibilitas pada rancangan antarmuka layanan publik."
    ],
    "techStack": [
      "Figma",
      "UI/UX Design",
      "Wireframing",
      "User Flow Design",
      "Accessibility Standards"
    ],
    "links": {
      "prototype": "https://www.figma.com/proto/JBFg4R7JHN5nFrpKEmCtzy/pkl4?node-id=73-126&t=zwgvPvlN65PiOJck-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=73%3A126&show-proto-sidebar=1",
      "figma": "https://www.figma.com/design/JBFg4R7JHN5nFrpKEmCtzy/pkl4?node-id=0-1&t=YwjB3fLM3ENcTOY9-1"
    }
  }
};
const navigation = document.querySelector('#navigation');
const themeToggle = document.querySelector('.theme-toggle');
function updateThemeControl() {
 const dark = document.documentElement.dataset.theme === 'dark';
 themeToggle.setAttribute('aria-pressed', String(dark));
 themeToggle.title = dark ? 'Light mode' : 'Dark mode';
 document.querySelector('meta[name="theme-color"]').content = dark ? '#101625' : '#f5f3ed';
}
updateThemeControl();
themeToggle.addEventListener('click', () => {
 const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
 document.documentElement.dataset.theme = theme;
 try { localStorage.setItem('theme', theme); } catch {}
 updateThemeControl();
});
const navLinks = [...navigation.querySelectorAll('a')];
const navSections = [...document.querySelectorAll('main > section[id]')];
const sectionObserver = new IntersectionObserver(entries => {
 entries.forEach(entry => {
  if (!entry.isIntersecting) return;
  navLinks.forEach(link => {
   if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
   else link.removeAttribute('aria-current');
  });
 });
}, { rootMargin: '-15% 0px -65% 0px', threshold: 0 });
navSections.forEach(section => sectionObserver.observe(section));

document.querySelectorAll('.about-photo, .portrait-frame').forEach(photo => {
 photo.addEventListener('pointerdown', event => {
  if (event.pointerType === 'touch' && event.isPrimary) photo.classList.add('is-touched');
 });
 photo.addEventListener('lostpointercapture', () => photo.classList.remove('is-touched'));
});

const portraitFrame = document.querySelector('.portrait-frame');
const portraitReactions = [...portraitFrame.querySelectorAll('.portrait-reaction')];
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
setupScrollReveals();

function setupScrollReveals() {
 const {gsap, ScrollTrigger} = window;
 if (!gsap || !ScrollTrigger) return;

 gsap.registerPlugin(ScrollTrigger);
 // Startup refreshes can interrupt the browser's smooth scroll to a URL fragment.
 ScrollTrigger.config({autoRefreshEvents: 'visibilitychange,resize'});
 const activeReveals = new Map();
 const finishReveals = () => activeReveals.forEach(finish => finish());
 const contentEasing = getComputedStyle(document.documentElement).getPropertyValue('--ease-out').trim();

 function revealHeading(heading) {
  const walker = document.createTreeWalker(heading, NodeFilter.SHOW_TEXT);
  const textNodes = [];
  while (walker.nextNode()) {
   const node = walker.currentNode;
   if (node.data.trim() && !node.parentElement.closest('svg, [aria-hidden="true"]')) textNodes.push(node);
  }

  const words = [];
  const runs = textNodes.map(node => {
   // Keep each text run together as one flex item in the contact link.
   const run = document.createElement('span');
   for (const part of node.data.match(/[^ \t\r\n\f]+|[ \t\r\n\f]+/g)) {
    if (!part.trim()) {
     run.append(part);
     continue;
    }
    const word = document.createElement('span');
    word.className = 'heading-word';
    word.textContent = part;
    run.append(word);
    words.push(word);
   }
   node.replaceWith(run);
   return {run, node};
  });

  const hero = heading.tagName === 'H1';
  const finishReveal = () => animation.progress(1);
  gsap.set(words, {opacity: 0, yPercent: 35});
  const animation = gsap.timeline({
   onComplete() {
    // Restore the text nodes tracked by the language picker.
    runs.forEach(({run, node}) => run.replaceWith(node));
    heading.removeEventListener('focusin', finishReveal);
    activeReveals.delete(heading);
   }
  });
  animation.to(words, {
   opacity: 1,
   yPercent: 0,
   duration: hero ? 0.65 : 0.48,
   stagger: hero ? 0.13 : 0.07,
   ease: 'power3.out'
  });
  const underline = heading.querySelector('.name-underline');
  if (underline) animation.fromTo(underline, {opacity: 0}, {opacity: 1, duration: 0.2, clearProps: 'opacity'}, 0.36);
  activeReveals.set(heading, finishReveal);
  heading.addEventListener('focusin', finishReveal);
 }

 function revealContent(target) {
  const animation = target.animate([
   {opacity: 0.25, translate: '0 16px'},
   {opacity: 1, translate: 'none'}
  ], {duration: 380, easing: contentEasing});
  const finishReveal = () => {
   activeReveals.delete(target);
   target.removeEventListener('focusin', finishReveal);
   animation.cancel();
  };
  activeReveals.set(target, finishReveal);
  target.addEventListener('focusin', finishReveal);
  animation.onfinish = finishReveal;
 }

 function watchReveal(target, play) {
  const enter = () => {
   if (reduceMotion.matches || activeReveals.has(target) || target.contains(document.activeElement) || target.hidden) return;
   play(target);
  };
  ScrollTrigger.create({
   trigger: target,
   start: () => target.getBoundingClientRect().top + window.scrollY - window.innerHeight,
   end: () => target.getBoundingClientRect().bottom + window.scrollY,
   onToggle(trigger) {
    if (trigger.isActive) enter();
    else activeReveals.get(target)?.();
   }
  });
  if (ScrollTrigger.isInViewport(target)) enter();
 }

 document.querySelectorAll('main h1, main h2').forEach(heading => watchReveal(heading, revealHeading));
 document.querySelectorAll(
  '.hero-bottom, .about-copy, .about-photo, .section-head > p, .filters, .project, .skills-list > div, ' +
  '.journey-heading > p, .journey-entries > *, .contact-top, .contact-bottom, footer'
 ).forEach(target => watchReveal(target, revealContent));

 reduceMotion.addEventListener('change', () => {
  if (reduceMotion.matches) finishReveals();
 });
 document.addEventListener('beforelanguagechange', () => {
  finishReveals();
  queueMicrotask(refreshRevealTriggers);
 });
}

function refreshRevealTriggers() {
 window.ScrollTrigger?.getAll().forEach(trigger => trigger.refresh());
}

portraitFrame.addEventListener('pointerenter', event => {
 if (event.pointerType === 'mouse') playPortraitReactions();
});
portraitFrame.addEventListener('pointerdown', event => {
 if (event.pointerType === 'touch' && event.isPrimary) playPortraitReactions();
});

function playPortraitReactions() {
 const easing = getComputedStyle(portraitFrame).getPropertyValue('--ease-out').trim();
 portraitReactions.forEach((reaction, index) => {
  reaction.getAnimations().forEach(animation => animation.cancel());
  const direction = index === 0 ? -1 : 1;
  const frames = [
   { opacity: 0, easing },
   { opacity: 1, offset: 0.22 },
   { opacity: 1, offset: 0.68 },
   { opacity: 0 }
  ];
  if (!reduceMotion.matches) {
   frames[0].transform = 'scale(0.9)';
   frames[1].transform = `translate(${direction * 16}px, -32px) rotate(${direction * 12}deg) scale(1.25)`;
   frames[2].transform = `translate(${direction * 30}px, -64px) rotate(${direction * 18}deg) scale(1.1)`;
   frames[3].transform = `translate(${direction * 40}px, -96px) rotate(${direction * 24}deg)`;
  }
  reaction.animate(frames, {
   duration: reduceMotion.matches ? 500 : 1500,
   delay: index * 80
  });
 });
}

document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
 document.querySelectorAll('[data-filter]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
 let count = 0;
 document.querySelectorAll('.project').forEach(project => { project.hidden = button.dataset.filter !== 'all' && project.dataset.category !== button.dataset.filter; if(!project.hidden) count++; });
 document.querySelector('#filter-status').textContent = currentLanguage === 'en' ? `${count} projects displayed.` : `${count} proyek ditampilkan.`;
 refreshRevealTriggers();
}));
const dialog = document.querySelector('#project-dialog');
let projectTrigger;
const linkLabels = { demo: 'Buka aplikasi', github: 'Kode sumber', prototype: 'Lihat prototipe', figma: 'Buka Figma', journal: 'Baca penelitian' };
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => {
 const project = projects[button.dataset.project]; if(!project) return;
 projectTrigger = button;
 document.querySelector('#dialog-title').textContent = translate(project.title);
 document.querySelector('#dialog-tag').textContent = translate(project.tag);
 document.querySelector('#dialog-description').textContent = translate(project.description);
 const features = document.querySelector('#dialog-features'); features.replaceChildren();
 project.features.forEach(feature => { const li = document.createElement('li'); li.textContent = translate(feature); features.append(li); });
 const stack = document.querySelector('#dialog-stack'); stack.replaceChildren();
 project.techStack.forEach(tech => { const span = document.createElement('span'); span.textContent = tech; stack.append(span); });
 const links = document.querySelector('#dialog-links'); links.replaceChildren();
 Object.entries(project.links || {}).forEach(([key,url]) => { const a = document.createElement('a'); a.href = url; a.target = '_blank'; a.rel = 'noopener noreferrer'; a.append(translate(linkLabels[key] || key) + ' ', document.querySelector('#project-link-arrow').content.cloneNode(true)); links.append(a); });
 dialog.showModal(); dialog.scrollTop = 0; dialog.querySelector('.dialog-close').focus();
}));
dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', e => { const rect = dialog.getBoundingClientRect(); if(e.target === dialog && (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom)) dialog.close(); });
dialog.addEventListener('close', () => projectTrigger?.focus());
document.querySelector('#copy-email').addEventListener('click', async () => {
 const status = document.querySelector('#copy-status');
 try { await navigator.clipboard.writeText('ifanrisfanda26@gmail.com'); status.textContent = translate('Alamat email berhasil disalin.'); }
 catch { status.textContent = translate('Belum bisa menyalin. Gunakan tautan email di atas atau salin alamatnya secara manual.'); }
});
document.querySelector('#year').textContent = new Date().getFullYear();
