/**
 * Jabutas Website - Shared JavaScript
 * Mengelola navigasi mobile, dropdown, filter produk, dan form kontak
 */

// ==================== INISIALISASI IKON LUCIDE ====================
document.addEventListener('DOMContentLoaded', () => {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    initMobileMenu();
    initMobileSubmenus();
    initProductFilter();
    initContactForm();
    initScrollSpy();
});

// ==================== 1. MOBILE HAMBURGER MENU & BOTTOM TAB HIGHLIGHT ====================
function initMobileMenu() {
    // ... existing code ...
    // Tambahkan highlight tab aktif
    highlightActiveTab();
}

function highlightActiveTab() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const tabs = document.querySelectorAll('.bottom-tab-bar .tab-item');
    
    tabs.forEach(tab => {
        const href = tab.getAttribute('href');
        if (href === currentPage) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const menuIconOpen = document.getElementById('menu-icon-open');
    const menuIconClose = document.getElementById('menu-icon-close');

    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
        menuIconOpen?.classList.remove('hidden');
        menuIconClose?.classList.add('hidden');
        mobileMenuBtn?.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
        closeAllMobileSubmenus();
    }
}

function closeAllMobileSubmenus() {
    document.querySelectorAll('[id^="sub-"]').forEach(submenu => {
        submenu.classList.add('hidden');
    });
    document.querySelectorAll('[id^="icon-"]').forEach(icon => {
        icon.classList.remove('rotate-180');
    });
}

// ==================== 2. MOBILE SUB MENU ACCORDION ====================
function initMobileSubmenus() {
    // Delegasi event untuk tombol sub menu mobile
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('[onclick^="toggleMobileSubmenu"]');
        if (btn) {
            const onclickAttr = btn.getAttribute('onclick');
            const match = onclickAttr.match(/toggleMobileSubmenu\('([^']+)',\s*'([^']+)'\)/);
            if (match) {
                toggleMobileSubmenu(match[1], match[2]);
            }
        }
    });
}

function toggleMobileSubmenu(submenuId, iconId) {
    const submenu = document.getElementById(submenuId);
    const icon = document.getElementById(iconId);
    if (submenu && icon) {
        submenu.classList.toggle('hidden');
        icon.classList.toggle('rotate-180');
    }
}

// ==================== 3. FILTER PRODUK ====================
function initProductFilter() {
    // Cek apakah ada elemen filter di halaman ini
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.produk-card');

    if (filterButtons.length === 0 || productCards.length === 0) return;

    // Ambil kategori dari URL hash jika ada
    const hash = window.location.hash.slice(1);
    const validCategories = ['semua', 'handbag', 'slingbag', 'aksesoris'];
    if (validCategories.includes(hash)) {
        filterProduk(hash);
    }

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const kategori = btn.getAttribute('data-filter');
            filterProduk(kategori);
            // Update URL tanpa reload
            history.replaceState(null, '', `#${kategori}`);
        });
    });
}

function filterProduk(kategori) {
    const cards = document.querySelectorAll('.produk-card');
    const buttons = document.querySelectorAll('.filter-btn');

    // Perbarui tampilan tombol filter aktif
    buttons.forEach(btn => {
        if (btn.getAttribute('data-filter') === kategori) {
            btn.classList.remove('bg-white', 'text-stone-700', 'border', 'border-stone-200');
            btn.classList.add('bg-wastra-700', 'text-white');
        } else {
            btn.classList.add('bg-white', 'text-stone-700', 'border', 'border-stone-200');
            btn.classList.remove('bg-wastra-700', 'text-white');
        }
    });

    // Tampilkan / sembunyikan kartu produk sesuai kategori dengan animasi
    cards.forEach((card, index) => {
        const shouldShow = kategori === 'semua' || card.getAttribute('data-category') === kategori;
        if (shouldShow) {
            card.classList.remove('hidden');
            card.style.animationDelay = `${index * 50}ms`;
            card.classList.add('animate-fade-in-up');
        } else {
            card.classList.add('hidden');
            card.classList.remove('animate-fade-in-up');
        }
    });
}

// ==================== 4. AUTO-FILL FORM PRODUK ====================
function pilihProdukForm(namaProduk) {
    const pesanInput = document.getElementById('pesan');
    if (pesanInput) {
        pesanInput.value = `Halo admin Jabutas, saya tertarik dengan produk ${namaProduk}. Mohon informasi ketersediaan motif dan cara pemesanannya.`;
        pesanInput.focus();
        // Scroll ke form jika di halaman kontak
        const formSection = document.getElementById('kontak');
        if (formSection) {
            formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
}

// ==================== 5. FORM KONTAK ====================
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    const formFeedback = document.getElementById('form-feedback');
    const formFeedbackDetail = document.getElementById('form-feedback-detail');

    if (!contactForm) return;

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const nama = document.getElementById('nama')?.value.trim() || '';
        const email = document.getElementById('email')?.value.trim() || '';

        if (!nama || !email) {
            showFormError('Nama dan email wajib diisi.');
            return;
        }

        // Simulasi pengiriman (tanpa alert)
        formFeedbackDetail.textContent = `Halo ${nama}, simulasi pengiriman pesan dari (${email}) berhasil ditampilkan. Tim Jabutas siap membantu Anda!`;
        formFeedback.classList.remove('hidden');
        formFeedback.classList.add('animate-fade-in-up');
        contactForm.reset();

        // Scroll ke feedback
        formFeedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
}

function showFormError(message) {
    const formFeedback = document.getElementById('form-feedback');
    const formFeedbackDetail = document.getElementById('form-feedback-detail');
    if (formFeedback && formFeedbackDetail) {
        formFeedback.classList.remove('bg-emerald-50', 'border-emerald-200', 'text-emerald-800');
        formFeedback.classList.add('bg-red-50', 'border-red-200', 'text-red-800');
        formFeedbackDetail.textContent = message;
        formFeedback.classList.remove('hidden');
        formFeedback.classList.add('animate-fade-in-up');
    }
}

// ==================== 6. SCROLL SPY UNTUK ACTIVE NAV ====================
function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('header nav a[href^="#"], #mobile-menu a[href^="#"]');

    if (sections.length === 0) return;

    const observerOptions = {
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                updateActiveNav(id);
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));

    function updateActiveNav(activeId) {
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${activeId}`) {
                link.classList.add('text-wastra-700', 'bg-wastra-50');
                link.classList.remove('text-stone-700');
            } else {
                link.classList.remove('text-wastra-700', 'bg-wastra-50');
                link.classList.add('text-stone-700');
            }
        });
    }
}

// ==================== UTILITAS ====================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Handle resize untuk menutup mobile menu
window.addEventListener('resize', debounce(() => {
    if (window.innerWidth >= 768) {
        closeMobileMenu();
    }
}, 250));