const btn = document.querySelector('#showEight');
btn.onclick = showPrediction;
function showPrediction() {
    setTimeout(function(){
        for (i = 0; i < answers.length; i++){
            let randomValue = (Math.floor(Math.random()*answers.length));
            let randomPrediction = answers[randomValue];
            console.log(randomPrediction);
            document.querySelector('.answer-block').style.display = 'block';
            document.querySelector('.answer-block').innerHTML = randomPrediction;
        };
    }, 1500);
}
const answers = [
    'It is certain (Бесспорно)',
    'It is decidedly so (Предрешено)',
    'Without a doubt (Никаких сомнений)',
    'Yes — definitely (Определённо да)',
    'You may rely on it (Можешь быть уверен в этом)',
    'As I see it, yes (Мне кажется — «да»)',
    'Most likely (Вероятнее всего)',
    'Outlook good (Хорошие перспективы)',
    'Signs point to yes (Знаки говорят — «да»)',
    'Yes (Да)',
    'Reply hazy, try again (Пока не ясно, попробуй снова)',
    'Ask again later (Спроси позже)',
    'Better not tell you now (Лучше не рассказывать)',
    'Cannot predict now (Сейчас нельзя предсказать)',
    'Concentrate and ask again (Сконцентрируйся и спроси опять)',
    'Don’t count on it (Даже не думай)',
    'My reply is no (Мой ответ — «нет»)',
    'My sources say no (По моим данным — «нет»)',
    'Outlook not so good (Перспективы не очень хорошие)',
    'Very doubtful (Весьма сомнительно)'
];

document.querySelector('.magic').onmouseenter = showCall;
function showCall() {
    document.querySelector('.show-eight').innerHTML = '<b>Show </br>prediction</b>';
    document.querySelector('.show-eight').style.fontSize = '16px';

};

document.querySelector('.magic').onmouseleave = hideCall;
function hideCall() {
    document.querySelector('.show-eight').style.fontSize = '130px';
    document.querySelector('.show-eight').innerHTML = '<b>8</b>';
};
