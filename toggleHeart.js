const heartIcon = document.getElementById('heart')

heartIcon.addEventListener('click', () => {
    if (heartIcon.classList.contains('fa-regular'))  {
        heartIcon.classList.remove('fa-regular');
        heartIcon.classList.add('fa-solid');
    } else {
        heartIcon.classList.remove('fa-solid');
        heartIcon.classList.add('fa-regular');
    }
});