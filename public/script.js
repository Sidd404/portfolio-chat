/* ─── script.js ─── */

// ═══════════════════════════════════════
// 1. Mouse-following radial gradient
// ═══════════════════════════════════════
const overlay = document.getElementById('gradient-overlay');

document.addEventListener('mousemove', (e) => {
    overlay.style.setProperty('--mx', e.clientX + 'px');
    overlay.style.setProperty('--my', e.clientY + 'px');
});

// ═══════════════════════════════════════
// 2. Scroll-reveal (Intersection Observer)
// ═══════════════════════════════════════
const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach((el, i) => {
    el.style.transitionDelay = `${(i % 4) * 0.05}s`;
    revealObserver.observe(el);
});

// ═══════════════════════════════════════
// 3. Active nav highlight on scroll
// ═══════════════════════════════════════
const sections   = document.querySelectorAll('main .section');
const navLinks   = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => link.classList.remove('active'));
            const id = entry.target.getAttribute('id');
            const active = document.querySelector(`.nav-link[data-section="${id}"]`);
            if (active) active.classList.add('active');
        }
    });
}, { threshold: 0.3 });

sections.forEach(s => sectionObserver.observe(s));

// ═══════════════════════════════════════
// 4. Chatbot widget
// ═══════════════════════════════════════
const chatToggle  = document.getElementById('chat-toggle');
const chatWindow  = document.getElementById('chat-window');
const chatClose   = document.getElementById('chat-close');
const chatForm    = document.getElementById('chat-form');
const chatInput   = document.getElementById('chat-input');
const chatMessages = document.getElementById('chat-messages');
const bubble      = document.getElementById('hero-chat-bubble');
const suggestedQ  = document.getElementById('suggested-questions');
const openChatBtn = document.getElementById('open-chat-btn');

let chatOpen = false;
let conversationHistory = [];

function openChat() {
    chatOpen = true;
    chatToggle.classList.add('open');
    chatWindow.classList.add('open');
    bubble.classList.add('hidden');
}

function closeChat() {
    chatOpen = false;
    chatToggle.classList.remove('open');
    chatWindow.classList.remove('open');
}

chatToggle.addEventListener('click', () => chatOpen ? closeChat() : openChat());
chatClose.addEventListener('click', closeChat);
bubble.addEventListener('click', openChat);
if (openChatBtn) openChatBtn.addEventListener('click', openChat);

// Auto-dismiss bubble after 6s
setTimeout(() => bubble.classList.add('hidden'), 6000);

// Suggestion chips
document.querySelectorAll('.suggestion-chip').forEach(chip => {
    chip.addEventListener('click', () => {
        const q = chip.dataset.question;
        sendMessage(q);
        if (suggestedQ) suggestedQ.style.display = 'none';
    });
});

// Form submit
chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const txt = chatInput.value.trim();
    if (!txt) return;
    sendMessage(txt);
    chatInput.value = '';
});

function addMessage(text, type) {
    const div = document.createElement('div');
    div.classList.add('message', type === 'user' ? 'user-message' : 'bot-message');
    div.textContent = text;
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return div;
}

function addLoadingMessage() {
    const div = document.createElement('div');
    div.classList.add('message', 'bot-message', 'loading');
    div.innerHTML = `<div class="dot-flashing"><span></span><span></span><span></span></div>`;
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return div;
}

async function sendMessage(text) {
    // Hide suggestions on first user message
    if (suggestedQ) suggestedQ.style.display = 'none';

    addMessage(text, 'user');
    
    const payloadHistory = conversationHistory.slice(-10);
    
    // Store history in the format the API expects: { role, content }
    // We add the user message to history AFTER creating the payload history
    // so it doesn't get sent twice (once in history, once as message).
    conversationHistory.push({ role: 'user', content: text });

    const loadingDiv = addLoadingMessage();

    try {
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                message: text,
                history: payloadHistory
            })
        });

        if (!response.ok) {
            const errData = await response.json().catch(() => ({}));
            throw new Error(errData.error || `HTTP ${response.status}`);
        }

        const data = await response.json();
        const reply = data.reply || data.message || 'Sorry, I could not generate a response.';

        loadingDiv.remove();
        addMessage(reply, 'bot');
        conversationHistory.push({ role: 'model', content: reply });
    } catch (err) {
        loadingDiv.remove();
        addMessage(`Sorry, something went wrong: ${err.message}`, 'bot');
    }
}

// ═══════════════════════════════════════
// 5. Smooth scroll for sidebar nav links
// ═══════════════════════════════════════
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
        const target = document.querySelector(a.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
