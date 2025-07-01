/* preloader */

window.addEventListener("load", function() {
    setTimeout(function() {
        document.getElementById("preloader").style.display = "none";
    }, 3000); // 3000ms = 3 seconds
});









// Navigation Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  hamburger.classList.toggle('active');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Close mobile menu if open
    if (navLinks.classList.contains('show')) {
      navLinks.classList.remove('show');
      hamburger.classList.remove('active');
    }
    
    const target = document.querySelector(this.getAttribute('href'));
    
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  });
});

// Active link highlighting on scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');
  
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (scrollY >= sectionTop - 100) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});






// Form submission

  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get values from form
      const name = document.getElementById("name").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const budget = document.getElementById("budget").value;
      const deadline = document.getElementById("deadline").value;
      const subject = document.getElementById("subject").value.trim();
      const message = document.getElementById("message").value.trim();

      // Check if any field is missing
      if (!name || !phone || !budget || !deadline || !subject || !message) {
        alert("Please fill out all fields.");
        return;
      }

      // WhatsApp message format
      const whatsappMessage = `Hello, my name is *${name}*.
      Phone: *${phone}*
      Budget: *${budget}*
      Deadline: *${deadline}*
      Subject/ Service: *${subject}*
      Message: ${message}`;

      const encodedMessage = encodeURIComponent(whatsappMessage);
      const whatsappNumber = "260763505811";
      
      // Open WhatsApp with pre-filled message
      window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');

      // Optional: Alert user and reset form
      alert("Your message has successfully been sent, we'll get back to you soon.");
      form.reset(); // Reset the form
    });
  });









// Portfolio Filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from all buttons
    filterBtns.forEach(btn => btn.classList.remove('active'));
    
    // Add active class to clicked button
    btn.classList.add('active');
    
    const filter = btn.dataset.filter;
    
    portfolioItems.forEach(item => {
      if (filter === 'all' || item.dataset.category === filter) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});


// Add animations on scroll
function revealOnScroll() {
  const reveals = document.querySelectorAll('section');
  
  reveals.forEach(reveal => {
    const windowHeight = window.innerHeight;
    const revealTop = reveal.getBoundingClientRect().top;
    const revealPoint = 150;
    
    if (revealTop < windowHeight - revealPoint) {
      reveal.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);












// Particle Animation
class Particle {
  constructor(canvas) {
    this.canvas = canvas;
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 5 + 1;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x > this.canvas.width) this.x = 0;
    if (this.x < 0) this.x = this.canvas.width;
    if (this.y > this.canvas.height) this.y = 0;
    if (this.y < 0) this.y = this.canvas.height;
  }

  draw(ctx) {
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

// Initialize particle animation
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
const particles = [];

function initParticles() {
  canvas.style.position = 'absolute';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.pointerEvents = 'none';
  document.querySelector('.hero').prepend(canvas);

  function resizeCanvas() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // Create particles
  for (let i = 0; i < 50; i++) {
    particles.push(new Particle(canvas));
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(particle => {
      particle.update();
      particle.draw(ctx);
    });
    requestAnimationFrame(animate);
  }
  animate();
}

document.addEventListener('DOMContentLoaded', initParticles);









