"use strict"

document.addEventListener("DOMContentLoaded", function() {

const ul = document.getElementById('ul');
const link = ul.querySelectorAll('a');


ul.addEventListener('mouseover', function(e) {
    for (let i=0; i < link.length; i++) {
        if (link[i] !== e.target) {
            link[i].style.filter = 'blur(5px)';
            e.target.style.filter = '';
        } 
    }
});

ul.addEventListener('mouseout', function(e) {
    for (let i=0; i < link.length; i++) {
        link[i].style.filter = '';
    }
});



});


const landmeetkundeInhoud = document.getElementById('landmeetkundeInhoud');
const technischeDossiersInhoud = document.getElementById('technischeDossiersInhoud');
const schattingenInhoud = document.getElementById('schattingenInhoud');
const plaatsbeschrijvingenInhoud = document.getElementById('plaatsbeschrijvingenInhoud');
const verkavelingenInhoud = document.getElementById('verkavelingenInhoud');


const landmeetkunde = document.getElementById('landmeetkunde');
const technischeDossiers = document.getElementById('technischeDossiers');
const schattingen = document.getElementById('schattingen');
const plaatsbeschrijvingen = document.getElementById('plaatsbeschrijvingen');
const verkavelingen = document.getElementById('verkavelingen');

const klikvoormeerinfo = document.getElementById('klikvoormeerinfo');


landmeetkunde.addEventListener('click', function() {
    landmeetkundeInhoud.classList.toggle("hideIt");

    klikvoormeerinfo.classList.toggle("hideIt");

    technischeDossiers.classList.toggle("hideIt");
    schattingen.classList.toggle("hideIt");
    plaatsbeschrijvingen.classList.toggle("hideIt");
    verkavelingen.classList.toggle("hideIt");
});

technischeDossiers.addEventListener('click', function() {
    technischeDossiersInhoud.classList.toggle("hideIt");

    klikvoormeerinfo.classList.toggle("hideIt");

    landmeetkunde.classList.toggle("hideIt");
    schattingen.classList.toggle("hideIt");
    plaatsbeschrijvingen.classList.toggle("hideIt");
    verkavelingen.classList.toggle("hideIt");
});

schattingen.addEventListener('click', function() {
    schattingenInhoud.classList.toggle("hideIt");

    klikvoormeerinfo.classList.toggle("hideIt");

    landmeetkunde.classList.toggle("hideIt");
    technischeDossiers.classList.toggle("hideIt");
    plaatsbeschrijvingen.classList.toggle("hideIt");
    verkavelingen.classList.toggle("hideIt");
});

plaatsbeschrijvingen.addEventListener('click', function() {
    plaatsbeschrijvingenInhoud.classList.toggle("hideIt");

    klikvoormeerinfo.classList.toggle("hideIt");

    landmeetkunde.classList.toggle("hideIt");
    technischeDossiers.classList.toggle("hideIt");
    schattingen.classList.toggle("hideIt");
    verkavelingen.classList.toggle("hideIt");
});

verkavelingen.addEventListener('click', function() {
    verkavelingenInhoud.classList.toggle("hideIt");

    klikvoormeerinfo.classList.toggle("hideIt");

    landmeetkunde.classList.toggle("hideIt");
    technischeDossiers.classList.toggle("hideIt");
    schattingen.classList.toggle("hideIt");
    plaatsbeschrijvingen.classList.toggle("hideIt");
});

var viewportHeight = $('.homePageHeight').outerHeight();
$('.homePageHeight').css({ height: viewportHeight });