const answers = [
    "It is certain.",
    "Without a doubt.",
    "You may rely on it.",
    "Yes – definitely.",
    "It is decidedly so.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "Outlook not so good.",
    "Very doubtful.",
    "No way.",
    "Absolutely not."
];

function shakeBall() {
    const question = document.getElementById('question').value.trim();
    const answerDiv = document.getElementById('answer');

    if (question === '') {
        answerDiv.textContent = "Please ask a question first.";
        answerDiv.style.color = '#ff6666';
        return;
    }

    const random = Math.floor(Math.random() * answers.length);
    answerDiv.textContent = answers[random];
    answerDiv.style.color = '#0ff';
}
