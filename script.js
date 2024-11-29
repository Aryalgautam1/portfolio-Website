document.getElementById('chat-button').addEventListener('click', () => {
    const chatPopup = document.getElementById('chat-popup');
    chatPopup.style.display = chatPopup.style.display === 'none' || chatPopup.style.display === '' ? 'block' : 'none';
});

document.getElementById('send-button').addEventListener('click', () => {
    const chatInput = document.getElementById('chat-input');
    const chatContent = document.getElementById('chat-content');
    const message = chatInput.value;

    if (message.trim()) {
        const userMessage = document.createElement('div');
        userMessage.textContent = message;
        userMessage.style.textAlign = 'right';
        chatContent.appendChild(userMessage);

        // AI response simulation
        const aiMessage = document.createElement('div');
        aiMessage.textContent = 'Ai response coming soon!!';
        aiMessage.style.textAlign = 'left';
        chatContent.appendChild(aiMessage);

        chatInput.value = '';
        chatContent.scrollTop = chatContent.scrollHeight;
    }

    document.addEventListener('DOMContentLoaded', function() {
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            card.addEventListener('click', function() {
                alert('Project clicked: ' + this.querySelector('h2').innerText);
            });
        });
    });
    
    // JavaScript can be used to add dynamic loading of blog posts or other interactive features.

// Example: Alert on clicking a blog card
document.addEventListener('DOMContentLoaded', function() {
    const blogCards = document.querySelectorAll('.blog-card');
    blogCards.forEach(card => {
        card.addEventListener('click', function() {
            alert('Blog post clicked: ' + this.querySelector('h2').innerText);
        });
    });
});

});
