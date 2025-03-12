function scrollingTopPage() {
    document.addEventListener('DOMContentLoaded', function () {
        const upButton = document.querySelector('.up-btn');

        upButton.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });

            document.body.classList.add('scrolling');
        });

        window.addEventListener('scroll', function () {
            if (window.scrollY > 200) {
                upButton.classList.add('show');
            } else {
                upButton.classList.remove('show');
            }

            if (
                document.body.classList.contains('scrolling') &&
                window.scrollY === 0
            ) {
                document.body.classList.remove('scrolling');
            }
        });
    });
}

scrollingTopPage();