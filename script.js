// Mobile menu toggle
document.querySelector('.menu-btn').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Close mobile menu if open
        document.querySelector('.nav-links').classList.remove('active');
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Form submission (demo - would connect to backend in real site)
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // In a real site, you would send this to a server
    console.log('Form submitted:', data);
    
    // Show success message
    alert('Thank you! Your message has been sent. I\'ll get back to you within 24 hours.');
    this.reset();
});

// Add hover effect to case studies
document.querySelectorAll('.case-study').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Update copyright year automatically
document.addEventListener('DOMContentLoaded', function() {
    const year = new Date().getFullYear();
    const copyrightElement = document.querySelector('footer p:first-child');
    if(copyrightElement) {
        copyrightElement.innerHTML = `&copy; ${year} Alex Morgan. All rights reserved.`;
    }
});
