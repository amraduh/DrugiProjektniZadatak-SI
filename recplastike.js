document.getElementById("quiz-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const correctAnswers = [
        1, // Pitanje 1
        1, // Pitanje 2
        1, // Pitanje 3
        1, // Pitanje 4
        1, // Pitanje 5
        1, // Pitanje 6
        1, // Pitanje 7
        1  // Pitanje 8
    ];

    let score = 0;

    for (let i = 1; i <= correctAnswers.length; i++) {
        const selectedAnswer = document.querySelector(`input[name="q${i}"]:checked`);
        if (selectedAnswer) {
            // Komparira odgovore
            if (parseInt(selectedAnswer.value) === correctAnswers[i - 1]) {
                score++;
            }
        }
    }

    // Displej rezultata
    document.getElementById("quiz-form").style.display = "none"; 
    const resultsSection = document.getElementById("results");
    resultsSection.style.display = "block";

    // Set score
    const scoreElement = document.getElementById("score");
    scoreElement.textContent = `Vaš rezultat: ${score} od ${correctAnswers.length}`;

    const messageElement = document.getElementById("message");
    if (score === correctAnswers.length) {
        messageElement.textContent = "Odlično! Savršen rezultat!";
    } else if (score >= correctAnswers.length / 2) {
        messageElement.textContent = "Dobar rad! Možete učiti još!";
    } else {
        messageElement.textContent = "Niste prošli, pokušajte ponovo.";
    }
});


