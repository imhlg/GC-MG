// This file manages the chat feature, including sending and receiving messages in real-time.

const chatForm = document.getElementById('chat-form');
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');

// Function to send a message
function sendMessage(event) {
    event.preventDefault();
    const message = chatInput.value;
    if (message.trim() === '') return;

    // Append message to chat
    appendMessage('You', message);
    chatInput.value = '';

    // Send message to server (replace with your server endpoint)
    fetch('/api/chat/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.reply) {
            appendMessage('Support', data.reply);
        }
    })
    .catch(error => console.error('Error:', error));
}

// Function to append messages to the chat
function appendMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message');
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to the bottom
}

// Event listener for chat form submission
chatForm.addEventListener('submit', sendMessage);