const navbarMenu = document.getElementById("menu");
const burgerMenu = document.getElementById("burger");
const headerMenu = document.getElementById("header");

// Open Close Navbar Menu on Click Burger
if (burgerMenu && navbarMenu) {
   burgerMenu.addEventListener("click", () => {
      burgerMenu.classList.toggle("is-active");
      navbarMenu.classList.toggle("is-active");
   });
}

// Close Navbar Menu on Click Menu Links
document.querySelectorAll(".menu-link").forEach((link) => {
   link.addEventListener("click", () => {
      burgerMenu.classList.remove("is-active");
      navbarMenu.classList.remove("is-active");
   });
});

// Change Header Background on Scrolling
window.addEventListener("scroll", () => {
   if (this.scrollY >= 85) {
      headerMenu.classList.add("on-scroll");
   } else {
      headerMenu.classList.remove("on-scroll");
   }
});

// Fixed Navbar Menu on Window Resize
window.addEventListener("resize", () => {
   if (window.innerWidth > 768) {
      if (navbarMenu.classList.contains("is-active")) {
         navbarMenu.classList.remove("is-active");
      }
   }
});

document.addEventListener("DOMContentLoaded", function (event) {
   // Hide all sections except the home section initially
   const sections = document.querySelectorAll('.section');
   sections.forEach(section => {
      if (section.id !== 'home') {
         section.style.display = 'none';
      }
   });

   brand.onclick = function () {
      document.querySelectorAll('.menu-link').forEach(link => {
         console.log(link.innerText)
         if (link.innerText != 'Home') {
            link.classList.remove('active');
         } else {
            link.classList.add('active');
         }
      });
      sections.forEach(section => {
         if (section.id != 'home') {
            section.style.display = 'none';
         } else {
            section.style.display = 'block';
         }
      });
   }

   explore_btn.onclick = function () {
      sections.forEach(section => {
         if (section.id != 'explore') {
            section.style.display = 'none';
         } else {
            section.style.display = 'block';
         }
      });
      document.querySelectorAll('.menu-link').forEach(link => link.classList.remove('active'));
      window.history.replaceState(null, null, "#explore");
   }

   if(window.location.hash) {
      const frag = ['events', 'home', 'about', 'tools', 'explore'];
      const _h = window.location.hash.substring(1);
      if (frag.includes(_h)) {
         sections.forEach(section => {
            if (section.id != _h) {
               section.style.display = 'none';
            } else {
               section.style.display = 'block';
            }
         });
         document.querySelectorAll('.menu-link').forEach(link => {
            if (link.innerText.toLowerCase() != _h) {
               link.classList.remove('active');
            } else {
               link.classList.add('active');
            }
         });
      }
   } 

   // Add click event listeners to navbar links
   const navLinks = document.querySelectorAll('.menu-link');
   navLinks.forEach(link => {
      link.addEventListener('click', function (event) {
         event.preventDefault();
         const targetId = this.getAttribute('href').substring(1);
         // Hide all sections
         sections.forEach(section => {
            section.style.display = 'none';
         });
         // Show the target section
         document.getElementById(targetId).style.display = 'block';

         // Remove active class from all links
         navLinks.forEach(link => {
            link.classList.remove('active');
         });

         // Add active class to the clicked link
         this.classList.add('active');
         window.history.replaceState(null, null, "#" + targetId);
      });
   });
});