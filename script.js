function getDecision() {
    const result = document.getElementById('result');
    const options = ['✅ YES!', '❌ NO!'];
    const random = Math.floor(Math.random() * options.length);
    result.textContent = options[random];

    // Add a little flair
    result.style.color = random === 0 ? '#00ff99' : '#ff5555';
}
