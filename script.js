document.addEventListener('DOMContentLoaded', () => {
    // Simulated Login
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // In a real app, we'd validate credentials here.
            // For this demo, any input redirects to the dashboard.
            window.location.href = 'dashboard.html';
        });
    }

    // Simulated Sign Up
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            window.location.href = 'dashboard.html';
        });
    }

    // Simulated Logout
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('submit', (e) => {
            e.preventDefault();
            window.location.href = 'index.html';
        });
        // Also handle click if it's a button
        logoutBtn.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }

    // Sidebar navigation active state toggle (demo purpose)
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
});
