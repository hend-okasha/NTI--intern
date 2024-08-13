
const games = document.querySelectorAll('.game');

games.forEach(game => {
   
    const img = game.querySelector('img');
    const overlay = game.querySelector('.overlay');

    game.addEventListener('mouseover', () => {
        overlay.style.opacity = '1'; 
        img.style.transform = 'scale(1.1)'; 
    });

    game.addEventListener('mouseout', () => {
        overlay.style.opacity = '0'; 
        img.style.transform = 'none'; 
    });
});

const questions = document.querySelectorAll('.que');

questions.forEach(question => {
    question.addEventListener('click', () => {
        const response = question.nextElementSibling;
        const icon = question.querySelector('i');
        const isActive = question.classList.toggle('active');

        response.style.display = isActive ? 'block' : 'none';
        icon.classList.toggle('fa-plus', !isActive);
        icon.classList.toggle('fa-minus', isActive);
    });
});