 // Preloader
        window.addEventListener('load', function() {
            const loader = document.querySelector('.loader-wrapper');
            gsap.to(loader, {
                opacity: 0,
                duration: 0.5,
                onComplete: () => {
                    loader.style.display = 'none';
                }
            });
            
            // Initialize animations after page load
            initAnimations();
            setupEventListeners();
        });
        
        // Initialize GSAP animations
        function initAnimations() {
            // Header scroll effect
            const header = document.getElementById('header');
            window.addEventListener('scroll', function() {
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });
            
            // Animate timeline items
            gsap.utils.toArray('.timeline-item').forEach((item, i) => {
                ScrollTrigger.create({
                    trigger: item,
                    start: "top 80%",
                    onEnter: () => {
                        gsap.to(item, {
                            opacity: 1,
                            y: 0,
                            duration: 0.8,
                            ease: "back.out(1.7)"
                        });
                    }
                });
            });
            
            // Animate education cards
            gsap.utils.toArray('.education-card').forEach((card, i) => {
                ScrollTrigger.create({
                    trigger: card,
                    start: "top 80%",
                    onEnter: () => {
                        gsap.to(card, {
                            opacity: 1,
                            y: 0,
                            duration: 0.6,
                            delay: i * 0.1,
                            ease: "back.out(1.7)"
                        });
                    }
                });
            });
            
            // Animate project cards
            gsap.utils.toArray('.project-card').forEach((card, i) => {
                ScrollTrigger.create({
                    trigger: card,
                    start: "top 80%",
                    onEnter: () => {
                        gsap.to(card, {
                            opacity: 1,
                            y: 0,
                            duration: 0.6,
                            delay: i * 0.1,
                            ease: "back.out(1.7)"
                        });
                    }
                });
            });
            
            // Hero text animation
            gsap.from('.hero-text h1', {
                y: 50,
                opacity: 0,
                duration: 1,
                delay: 0.5,
                ease: "power3.out"
            });
            
            gsap.from('.hero-text p', {
                y: 50,
                opacity: 0,
                duration: 1,
                delay: 0.8,
                ease: "power3.out"
            });
            
            gsap.from('.btn-container', {
                y: 50,
                opacity: 0,
                duration: 1,
                delay: 1.1,
                ease: "power3.out"
            });
            
            gsap.from('.profile-image', {
                x: 50,
                opacity: 0,
                duration: 1,
                delay: 0.8,
                ease: "power3.out"
            });
            
            // Section title animations
            gsap.utils.toArray('.section-title h2').forEach(title => {
                ScrollTrigger.create({
                    trigger: title,
                    start: "top 90%",
                    onEnter: () => {
                        gsap.from(title, {
                            y: 50,
                            opacity: 0,
                            duration: 0.8,
                            ease: "back.out(1.7)"
                        });
                        
                        gsap.from(title.querySelector('::after'), {
                            scaleX: 0,
                            duration: 1,
                            ease: "power3.out"
                        });
                    }
                });
            });
            
            // Skill items animation
            gsap.utils.toArray('.skill-item').forEach((skill, i) => {
                ScrollTrigger.create({
                    trigger: '.skills',
                    start: "top 80%",
                    onEnter: () => {
                        gsap.to(skill, {
                            opacity: 1,
                            y: 0,
                            duration: 0.5,
                            delay: i * 0.05,
                            ease: "back.out(1.7)"
                        });
                    }
                });
            });
        }
        
        // Setup event listeners
        function setupEventListeners() {
            // Mobile menu toggle
            const hamburger = document.querySelector('.hamburger');
            const navLinks = document.querySelector('.nav-links');
            
            hamburger.addEventListener('click', function() {
                navLinks.classList.toggle('active');
                hamburger.innerHTML = navLinks.classList.contains('active') ? 
                    '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
            });
            
            // Close mobile menu when clicking a link
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.addEventListener('click', function() {
                    navLinks.classList.remove('active');
                    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
                });
            });
            
            // Back to top button
            const backToTopBtn = document.getElementById('backToTop');
            
            window.addEventListener('scroll', function() {
                if (window.scrollY > 300) {
                    backToTopBtn.style.opacity = '1';
                    backToTopBtn.style.visibility = 'visible';
                } else {
                    backToTopBtn.style.opacity = '0';
                    backToTopBtn.style.visibility = 'hidden';
                }
            });
            
            backToTopBtn.addEventListener('click', function(e) {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
            
            // Smooth scrolling for all links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        // Update active nav link
                        document.querySelectorAll('.nav-links a').forEach(link => {
                            link.classList.remove('active');
                        });
                        
                        if (targetId !== '#contact') {
                            this.classList.add('active');
                        }
                        
                        // Scroll to target
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });
            
            // Form submission
        /*    const contactForm = document.getElementById('contactForm');
            if (contactForm) {
                contactForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    
                    // Get form values
                    const name = document.getElementById('name').value;
                    const email = document.getElementById('email').value;
                    const subject = document.getElementById('subject').value;
                    const message = document.getElementById('message').value;
                    
                    // Here you would typically send the form data to a server
                    // For demonstration, we'll just show an alert
                    alert(`Thank you, ${name}! Your message has been sent. I'll get back to you soon at ${email}.`);
                    
                    // Reset form
                    contactForm.reset();
                });
            }
        */
            
            // Generate bubbles for hero section
            const bubblesContainer = document.querySelector('.bubbles');
            
            function createBubble() {
                const bubble = document.createElement('div');
                bubble.classList.add('bubble');
                
                // Random size
                const size = Math.random() * 30 + 20;
                
                // Random position
                const posX = Math.random() * 100;
                
                // Random animation duration
                const duration = Math.random() * 15 + 10;
                
                // Random delay
                const delay = Math.random() * 5;
                
                bubble.style.width = `${size}px`;
                bubble.style.height = `${size}px`;
                bubble.style.left = `${posX}%`;
                bubble.style.animationDuration = `${duration}s`;
                bubble.style.animationDelay = `${delay}s`;
                
                bubblesContainer.appendChild(bubble);
                
                // Remove bubble after animation completes
                setTimeout(() => {
                    bubble.remove();
                }, duration * 1000);
            }
            
            // Create initial bubbles
            for (let i = 0; i < 8; i++) {
                createBubble();
            }
            
            // Continue creating bubbles periodically
            setInterval(createBubble, 3000);
        }
        
        // Typewriter effect for hero subtitle
        function initTypewriter() {
            const heroSubtitle = document.querySelector('.hero-text h2');
            if (heroSubtitle) {
                const text = heroSubtitle.textContent;
                heroSubtitle.textContent = '';
                heroSubtitle.classList.add('typewriter');
                heroSubtitle.style.width = '0';
                
                setTimeout(() => {
                    heroSubtitle.textContent = text;
                    heroSubtitle.style.width = heroSubtitle.scrollWidth + 'px';
                }, 500);
            }
        }
        
       /* emailjs.init("shAGyNDg51Gt7MYt4");
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        console.log("Form submitted!");
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        const templateParams = {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message,
            email: email,
        };
        
        console.log("Sending with templateParams:", templateParams);


         emailjs.send("service_72vlywj", "template_g049r6i", templateParams, "shAGyNDg51Gt7MYt4")
      .then(function(response) {
        alert(`✅ Thank you, ${name}! Your message has been sent.`);
        console.log("SUCCESS:", response);
        contactForm.reset();
      }, function(error) {
        alert("❌ Failed to send message.");
        console.error("ERROR:", error);
      });
  });
} else {
  console.error("🚨 Could not find form with ID 'contact-form'");
}
*/