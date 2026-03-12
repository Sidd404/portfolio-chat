// ===================================
// Theme Toggle
// ===================================
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

// Check for saved theme preference or default to dark
const savedTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// ===================================
// Mobile Menu Toggle
// ===================================
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navMenu = document.getElementById('nav-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===================================
// Active Navigation Link on Scroll
// ===================================
const sections = document.querySelectorAll('section[id]');

function highlightNavLink() {
    const scrollY = window.scrollY;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add('active');
            } else {
                navLink.classList.remove('active');
            }
        }
    });
}

window.addEventListener('scroll', highlightNavLink);
highlightNavLink(); // Call on load

// ===================================
// Scroll Reveal Animation
// ===================================
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;

    reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

// Add reveal class to elements
document.addEventListener('DOMContentLoaded', () => {
    const elementsToReveal = document.querySelectorAll(
        '.about-content, .skills-category, .timeline-item, .project-card, .education-card, .contact-method'
    );

    elementsToReveal.forEach(element => {
        element.classList.add('reveal');
    });

    // Initial check
    revealOnScroll();
});

window.addEventListener('scroll', revealOnScroll);

// ===================================
// Navbar Background on Scroll
// ===================================
const navbar = document.getElementById('navbar');

function handleNavbarScroll() {
    if (window.scrollY > 50) {
        navbar.style.padding = '12px 0';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.padding = '16px 0';
        navbar.style.boxShadow = 'none';
    }
}

window.addEventListener('scroll', handleNavbarScroll);

// ===================================
// Smooth Scroll for Safari
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const navHeight = navbar.offsetHeight;
            const targetPosition = targetElement.offsetTop - navHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Typing Effect for Hero Subtitle
// ===================================
const typingText = document.querySelector('.typing-text');
const roles = [
    'Senior Backend Developer',
    'Node.js Expert',
    'API Architect',
    'AWS Serverless Specialist'
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeEffect() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
        typingText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typingText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentRole.length) {
        // Pause at end of word
        typingSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 500;
    }

    setTimeout(typeEffect, typingSpeed);
}

// Start typing effect after page load
setTimeout(typeEffect, 1500);

// ===================================
// Stats Counter Animation
// ===================================
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const duration = 2000;
    const stepTime = duration / 50;

    const counter = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(current) + '+';
        }
    }, stepTime);
}

// Intersection Observer for stats
const statsSection = document.querySelector('.about-stats');
let statsAnimated = false;

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !statsAnimated) {
            const statNumbers = document.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const target = parseInt(stat.textContent);
                if (!isNaN(target)) {
                    animateCounter(stat, target);
                }
            });
            statsAnimated = true;
        }
    });
}, { threshold: 0.5 });

if (statsSection) {
    statsObserver.observe(statsSection);
}

// ===================================
// Parallax Effect for Hero
// ===================================
const hero = document.querySelector('.hero');
const codeBlock = document.querySelector('.code-block');

window.addEventListener('scroll', () => {
    if (window.innerWidth > 768) {
        const scrolled = window.scrollY;
        if (codeBlock && scrolled < window.innerHeight) {
            codeBlock.style.transform = `translateY(${scrolled * 0.1}px)`;
        }
    }
});

// ===================================
// Console Easter Egg
// ===================================
console.log(
    '%c👋 Hey there, fellow developer!',
    'font-size: 20px; font-weight: bold; color: #3B82F6;'
);
console.log(
    '%cThanks for checking out my portfolio. Feel free to connect!',
    'font-size: 14px; color: #8B5CF6;'
);
console.log(
    '%c📧 siddharthaswal54@gmail.com',
    'font-size: 12px; color: #22C55E;'
);

// ===================================
// Chatbot Widget Logic
// ===================================
const chatToggle = document.getElementById('chat-toggle');
const chatWindow = document.getElementById('chat-window');
const chatClose = document.getElementById('chat-close');
const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');
const chatMessages = document.getElementById('chat-messages');
const suggestedQuestions = document.getElementById('suggested-questions');
const heroBubble = document.getElementById('hero-chat-bubble');

// Hero Bubble Logic
if (heroBubble) {
    // Show bubble after 2 seconds
    setTimeout(() => {
        heroBubble.style.display = 'block';
    }, 2000);

    // Open chat when bubble is clicked
    heroBubble.addEventListener('click', () => {
        toggleChat();
        heroBubble.style.display = 'none'; // Hide bubble once clicked
    });
}

// Conversation history for context
let conversationHistory = [];

// Toggle Chat Window
function toggleChat() {
    chatWindow.classList.toggle('active');
    chatToggle.classList.toggle('active');
    if (chatWindow.classList.contains('active')) {
        chatInput.focus();
    }
}

chatToggle.addEventListener('click', toggleChat);
chatClose.addEventListener('click', toggleChat);

// Handle Suggested Question Clicks
document.querySelectorAll('.suggestion-chip').forEach(chip => {
    chip.addEventListener('click', () => {
        const question = chip.getAttribute('data-question');
        if (question) {
            sendMessage(question);
        }
    });
});

// Hide suggested questions after first message
function hideSuggestions() {
    if (suggestedQuestions) {
        suggestedQuestions.classList.add('hidden');
    }
}

// Send message function
function sendMessage(message) {
    if (!message.trim()) return;

    // Hide suggestions after first message
    hideSuggestions();

    // Add User Message
    addMessage(message, 'user');
    chatInput.value = '';

    // Add to conversation history
    conversationHistory.push({ role: 'user', content: message });

    // Show Typing Indicator
    showTypingIndicator();

    // Call the API
    fetchBotResponse(message);
}

// Handle form submission
chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = chatInput.value.trim();
    if (message) {
        sendMessage(message);
    }
});

// Fetch Bot Response
async function fetchBotResponse(userMessage) {
    try {
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: userMessage,
                history: conversationHistory.slice(-10) // Send last 10 messages for context
            })
        });

        removeTypingIndicator();

        if (response.ok) {
            const data = await response.json();
            const reply = data.reply;

            // Add to conversation history
            conversationHistory.push({ role: 'assistant', content: reply });

            // Format and display the response
            addMessage(formatBotMessage(reply), 'bot');
        } else {
            const errorData = await response.json().catch(() => ({}));
            const errorMsg = errorData.error || "Sorry, I'm having trouble connecting right now. Please try again.";
            addMessage(errorMsg, 'bot', true);
        }
    } catch (error) {
        removeTypingIndicator();
        console.error('Error:', error);
        addMessage("Sorry, something went wrong. Please check your internet connection.", 'bot', true);
    }
}

// Format bot message (basic markdown-like formatting)
function formatBotMessage(text) {
    // Convert **bold** to strong
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    // Convert bullet points
    text = text.replace(/^[•\-\*]\s+(.+)$/gm, '<li>$1</li>');
    text = text.replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>');

    return text;
}

function addMessage(text, sender, isError = false) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', `${sender}-message`);
    if (isError) {
        messageDiv.classList.add('error-message');
    }

    // Use innerHTML for bot messages (formatted), textContent for user messages (plain)
    if (sender === 'bot') {
        messageDiv.innerHTML = text;
    } else {
        messageDiv.textContent = text;
    }

    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function showTypingIndicator() {
    const typingDiv = document.createElement('div');
    typingDiv.classList.add('typing-indicator');
    typingDiv.id = 'typing-indicator';
    typingDiv.innerHTML = `
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
    `;

    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function removeTypingIndicator() {
    const typingDiv = document.getElementById('typing-indicator');
    if (typingDiv) {
        typingDiv.remove();
    }
}

