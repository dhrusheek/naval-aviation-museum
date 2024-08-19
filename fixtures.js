document.addEventListener('scroll', () => {
    const header = document.querySelector('.headerr');
    if(window.scrollY>100 ){
        header.classList.add('scrolled');
    }
    else{
        header.classList.remove('scrolled');

    }
});