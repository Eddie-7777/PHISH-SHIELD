function submitQuiz() {
    let score = 0;

    const answers = {
        q1: "b",
        q2: "b",
        q3: "b",
        q4: "b",
        q5: "c",
        q6: "b",
        q7: "a",
        q8: "c",
        q9: "b",
        q10: "c"
    };

    for (let question in answers) {
        const selected = document.querySelector(`input[name="${question}"]:checked`);
        if (selected && selected.value === answers[question]) {
            score++;
        }
    }

    const total = Object.keys(answers).length;
    const result = document.getElementById("quiz-result");

    result.textContent = `You answered ${score} out of ${total} questions correctly.`;

    if (score === total) {
        result.textContent += " Excellent work. You have a strong understanding of phishing prevention.";
    } else if (score >= 7) {
        result.textContent += " Good job. You are aware of most threats but review some topics.";
    } else {
        result.textContent += " Consider reviewing phishing risks and best practices to stay safe online.";
    }
}
