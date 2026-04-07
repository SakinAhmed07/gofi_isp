// মেনু খোলা বন্ধ করার মেইন ফাংশন
function toggleMenu() {
    const nav = document.getElementById('sideNav');
    const toggle = document.querySelector('.menu-toggle');
    const overlay = document.getElementById('menuOverlay');

    const isActive = nav.classList.contains('active');

    if (isActive) {
        // মেনু খোলা থাকলে বন্ধ করো
        nav.classList.remove('active');
        toggle.classList.remove('active');
        overlay.classList.remove('active');
    } else {
        // মেনু বন্ধ থাকলে খোলো
        nav.classList.add('active');
        toggle.classList.add('active');
        overlay.classList.add('active');
    }
}
// সেকশন দেখানোর পাশাপাশি মেনু বন্ধ করার ফাংশন
function showSection(sectionId) {
    // ১. আগের সব সেকশন লুকিয়ে দাও
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(section => {
        section.classList.remove('active-section');
    });

    // ২. টার্গেট সেকশনটি দেখাও
    const target = document.getElementById(sectionId);
    if (target) {
        target.classList.add('active-section');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // ৩. মেনু ও overlay বন্ধ করো
    closeMenu();
}

// মেনু বন্ধ করার আলাদা ফাংশন
function closeMenu() {
    const nav = document.getElementById('sideNav');
    const toggle = document.querySelector('.menu-toggle');
    const overlay = document.getElementById('menuOverlay');

    if (nav.classList.contains('active')) {
        nav.classList.remove('active');
        toggle.classList.remove('active');
        overlay.classList.remove('active');
    }
}

// FTP মডাল খোলার ফাংশন
function openFTPModal() {
    const modal = document.getElementById('ftpModal');
    if (modal) {
        modal.classList.add('active');
    }
    closeMenu(); // মেনু এবং overlay বন্ধ করো মডাল খোলার সময়
}

// FTP মডাল বন্ধ করার ফাংশন
function closeFTPModal() {
    const modal = document.getElementById('ftpModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

window.addEventListener('click', function(event) {
    const modal = document.getElementById('ftpModal');
    if (modal && event.target === modal) {
        closeFTPModal();
    }
});
