// ============= side bar start ============= // 
function openNav() {
    "use strict";
    const sidepanel = document.getElementById("mySidepanel");
    if (sidepanel) {
        sidepanel.style.left = "0";
    } else {
        console.error("Error: Side panel element not found!");
    }
}

function closeNav() {
    "use strict";
    const sidepanel = document.getElementById("mySidepanel");
    if (sidepanel) {
        sidepanel.style.left = "-320px";
    } else {
        console.error("Error: Side panel element not found!");
    }
}
// ============= side bar end ============= //

$('.slide_img').slick({
    dots: true,
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

// footer validation start
const fom = document.getElementById('footer-form');
const successMessag = document.getElementById('footer-message');

fom.addEventListener('submit', (event) => {
    event.preventDefault();
    successMessag.innerHTML = 'Form submitted successfully!';
    successMessag.style.display = 'block';
    fom.reset();
    setTimeout(() => {
        successMessag.style.display = 'none';
    }, 3000);
});
// footer validation end

// button back to top 
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("backToTopBtn").style.display = "block";
    } else {
        document.getElementById("backToTopBtn").style.display = "none";
    }
}

function scrollToTop() {
    const scrollToTopBtn = document.documentElement || document.body;
    scrollToTopBtn.scrollIntoView({
        behavior: "smooth"
    });
}