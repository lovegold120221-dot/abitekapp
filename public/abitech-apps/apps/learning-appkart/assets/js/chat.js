/*===============
1. Chat working Js
==============*/
document.addEventListener('DOMContentLoaded', () => {
    const sendBtns = document.querySelectorAll('.send-btn');
    const chatInputs = document.querySelectorAll('.chat-input');
    const chatBoxes = document.querySelectorAll('.chat-message-box');

    const getReply = (msg) => {
        msg = msg.toLowerCase();
        if (msg === 'hello') return 'how are you';
        if (msg === 'where are you') return "I'm here";
        if (msg === 'thank you') return 'Welcome :)';
        if (msg === 'what is your name') return 'My name is shraddha';
        return "Let’s go on a vacation, i have exciting vacation plans ! 😎";
    };

    const detectChatVersion = (chatBox) => {
        const hasMessageBox = chatBox.querySelector('.message-box');
        return hasMessageBox ? 'type1' : 'type2';
    };

    const renderMessage = (text, side, chatBox, version) => {
        const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const li = document.createElement('li');
        li.className = `${side}-chat-box`;

        if (version === 'type1') {
            li.innerHTML = side === 'left' ? `
                <div class="message-box">
                    <img src="../assets/images/chatting/profile/13.png" class="img-fluid person-img" alt="profile">
                    <div class="message-details-box">
                        <h5>${text}</h5>
                        <div class="timing">
                            <img src="../assets/images/svg/star.svg" class="img-fluid" alt="star">
                            <h6>${time}</h6>
                        </div>
                    </div>
                </div>` : `
                <div class="message-box">
                    <div class="message-details-box">
                        <h5>${text}</h5>
                        <div class="timing">
                            <h6>${time}</h6>
                            <img src="../assets/images/svg/1.svg" class="img-fluid" alt="star">
                        </div>
                    </div>
                </div>`;
        } else {
            li.innerHTML = side === 'left' ? `
                <div class="left-chat-contant">
                    <span>${text}</span>
                </div>
                <h5 class="chat-time">${time}</h5>` : `
                <div class="right-chat-body">
                    <div class="right-chat-contant">
                        <span>${text}</span>
                    </div>
                    <h5 class="chat-time">${time}</h5>
                </div>`;
        }

        chatBox.appendChild(li);

        const scrollWrapper = (() => {
            let el = chatBox.parentElement;
            while (el) {
                const overflowY = window.getComputedStyle(el).overflowY;
                if (overflowY === 'auto' || overflowY === 'scroll') return el;
                el = el.parentElement;
            }
            return null;
        })();

        if (scrollWrapper) {
            scrollWrapper.scrollTop = scrollWrapper.scrollHeight;
        }
    };

    const setupChat = (sendBtn, chatInput, chatBox) => {
        const version = detectChatVersion(chatBox);

        const sendMessage = () => {
            const messageText = chatInput.value.trim();
            if (!messageText) return;

            renderMessage(messageText, 'right', chatBox, version);
            chatInput.value = '';

            setTimeout(() => {
                const reply = getReply(messageText);
                renderMessage(reply, 'left', chatBox, version);
            }, 1000);
        };

        sendBtn.addEventListener('click', (e) => {
            e.preventDefault();
            sendMessage();
        });

        chatInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                sendMessage();
            }
        });
    };

    for (let i = 0; i < sendBtns.length; i++) {
        setupChat(sendBtns[i], chatInputs[i], chatBoxes[i]);
    }
});
