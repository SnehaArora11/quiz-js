const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const questions = document.querySelectorAll('.question');

const correctanswers = ['B', 'A', 'C', 'D', 'A', 'B', 'B', 'D', 'C', 'B'];

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let score = 0;

    const useranswers = [
        form.q1.value,
        form.q2.value,
        form.q3.value,
        form.q4.value,
        form.q5.value,
        form.q6.value,
        form.q7.value,
        form.q8.value,
        form.q9.value,
        form.q10.value
    ];

    for (let i = 0; i < useranswers.length; i++) {
        if (useranswers[i] === correctanswers[i]) {
            score++;
            questions[i].classList.add('correct');
        } else {
            questions[i].classList.add('wrong');
        }
    }

    scrollTo(0, 0);
    result.classList.remove('hide');
    result.querySelector('p').textContent = `You scored ${score}/10`;
});

function reload(event) {
    location.reload();
}
