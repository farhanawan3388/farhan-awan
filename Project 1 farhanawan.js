 document.addEventListener('DOMContentLoaded', function () {
        let search = document.querySelector('.search-box');
        let menu = document.querySelector('.navbar');
        let menuIcon = document.querySelector('#menu-icon'); // Corrected typo here
        let searchIcon = document.querySelector('#seacrh-icon');

        searchIcon.onclick = () => {
            search.classList.toggle('active');
            menu.classList.remove('active');
        };

        menuIcon.onclick = () => {
            menu.classList.toggle('active');
            search.classList.remove('active');
        };

        window.onscroll = () => {
            search.classList.remove('active');
            menu.classList.remove('active');
        }

        let header = document.querySelector('header');

        window.addEventListener('scroll', () => {
            header.classList.toggle('shadow', window.scrollY > 0);
        });
    });
