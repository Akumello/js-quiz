const correctAnswers = ['D','D','C','B'];
let form = document.querySelector('.form-check');

form.addEventListener('submit', e => 
{
    e.preventDefault();

    // Calculate the score
    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    userAnswers.forEach((ans, i) => {
        if (ans === correctAnswers[i])
            score++;
    });
    let percentCorrect = score/correctAnswers.length * 100;

    // Present the score to the user and scroll up to it
    window.scrollTo(0,0);
    let scoreTag = document.querySelector('#score-tag');
    scoreTag.innerHTML = `Your score is ${percentCorrect}%`;
    if(percentCorrect > 50) 
        scoreTag.setAttribute('style', 'color: green');
    else 
        scoreTag.setAttribute('style', 'color: red');
});