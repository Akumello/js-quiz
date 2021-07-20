const correctAnswers = ['D','D','C','B'];
let form = document.querySelector('#quiz-form');

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
    let scoreHeader = document.querySelector('#score-header');
    scoreTag.innerHTML = `Your score is ${percentCorrect}%`;
    scoreHeader.classList.remove('d-none');
    if(percentCorrect > 50)
    {
        scoreHeader.classList.remove('bg-danger');
        scoreHeader.classList.add('class', 'bg-success');
    }
    else 
    {
        scoreHeader.classList.remove('bg-success');
        scoreHeader.classList.add('class', 'bg-danger');
    }
});