async function shakeBall() {
    const question = document.getElementById('question').value.trim();
    const answerDiv = document.getElementById('answer');

    if (!question) {
        answerDiv.textContent = "Please ask a question.";
        return;
    }

    answerDiv.textContent = "Thinking...";

    try {
        const res = await fetch('/ask', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ question })
        });

        const data = await res.json();
        answerDiv.textContent = data.answer;
    } catch (err) {
        answerDiv.textContent = "Something went wrong with the spirits.";
        console.error(err);
    }
}
