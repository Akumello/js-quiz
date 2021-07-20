const correctAnswers = ['D','D','C','B'];
let form = document.querySelector('.form-check');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    userAnswers.forEach((ans, i) => {
        if (ans === correctAnswers[i])
            score++;
    });

    let percentCorrect = score/correctAnswers.length * 100;
    console.log(percentCorrect);
});