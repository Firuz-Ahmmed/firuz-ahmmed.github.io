//import Swal from 'sweetalert2';
let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

//scroll section active link
let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll=()=>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top>=offset && top<offset+height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active');
            });
        };
    });
    //sticky navbar
    let header=document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);

    //remove toggle icon and navbar when click navbar links

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');

};
     //scroll reveal

     ScrollReveal({
       
        distance: '80px',
        duration: 2000,
        delay: 200,
    });

    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
    ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

    //typesjs

    const typed = new Typed('.multiple-text', {
        strings: ['Fullstack Developer', 'Backend Developer','Programmer','SQA Engineer'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
function sendMail(){
    var params={
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };
const serviceId="service_33x4atp";
const templateId="template_kw187dd";

emailjs.send(serviceId,templateId,params).then(
    res=>{
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("phone").value="";
        document.getElementById("subject").value="";
        document.getElementById("message").value="";
        console.log(res);
        Swal.fire("Message sent Successfully!")
    }).catch(err=>console.log(err));
}

window.addEventListener('load', function () {
    document.getElementById('preloader').style.display = 'none';
});

