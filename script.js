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
 document.querySelector('meta[name="theme-color"]').content = dark ? '#191c19' : '#f5f3ed';
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

document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
 document.querySelectorAll('[data-filter]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
 let count = 0;
 document.querySelectorAll('.project').forEach(project => { project.hidden = button.dataset.filter !== 'all' && project.dataset.category !== button.dataset.filter; if(!project.hidden) count++; });
 document.querySelector('#filter-status').textContent = currentLanguage === 'en' ? `${count} projects displayed.` : `${count} proyek ditampilkan.`;
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
 Object.entries(project.links || {}).forEach(([key,url]) => { const a = document.createElement('a'); a.href = url; a.target = '_blank'; a.rel = 'noopener noreferrer'; a.textContent = `${translate(linkLabels[key] || key)} ↗`; links.append(a); });
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
