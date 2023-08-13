//change navbar styles on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
})

//show/hide faq 

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        //change icon
        const icon = faq.querySelector('i');
        if (icon.classList.contains('fa-circle-question')) {
            icon.classList.remove('fa-circle-question');
            icon.classList.add('fa-minus');
        } else {
            icon.classList.remove('fa-minus');
            icon.classList.add('fa-circle-question');
        }
    })
})

//  show nav menu for small screens

const menu = document.querySelector('.nav_menu');
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');


menuBtn.addEventListener('click', () => {
    menu.style.display = 'flex';
    closeBtn.style.display = 'inline-block';
    menuBtn.style.display = 'none';
})

//close nav mwnu

const closeNav = () =>{
    menu.style.display = 'none';
    closeBtn.style.display = 'none';
    menuBtn.style.display = 'inline-block';
}

closeBtn.addEventListener('click', closeNav)



// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  