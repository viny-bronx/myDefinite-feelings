window.onload = function() {
    const emojis = ["🌸", "💖", "😊", "🌼", "🌺", "😘", "🌷", "💐"];
    const numberOfEmojis = 50; // Número de emojis a cair

    for (let i = 0; i < numberOfEmojis; i++) {
        let emojiElement = document.createElement('div');
        emojiElement.classList.add('emoji');
        emojiElement.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        
        // Define posição inicial aleatória
        emojiElement.style.left = `${Math.random() * 100}vw`;
        emojiElement.style.animationDuration = `${Math.random() * 5 + 5}s`; // Velocidade de queda aleatória

        document.body.appendChild(emojiElement);
    }
};
