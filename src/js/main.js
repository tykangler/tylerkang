let currentSection = '';

function getObserverHandle(navElement) {
   return (entries) => {
      entries.forEach(entry => {
         let documentSection = entry.target.id;
         let sectionNavLink = navElement.querySelector(`a[href='${'#' + documentSection}']`);
         if (entry.isIntersecting) {
            sectionNavLink.classList.add('show');
            currentSection = documentSection;
         } else {
            sectionNavLink.classList.remove('show');
         }
      });
   };
}

function observeDocumentSections() {
   let observerTargets = ['home', 'about', 'projects', 'contact']
                         .map(id => document.getElementById(id));
   let observer = new IntersectionObserver(
      getObserverHandle(document.querySelector('.scrollspy')),
      { rootMargin: "-60% 0% -40%" });
   observerTargets.forEach(element => observer.observe(element));
}

function animateNavigationLinks() {
   let navLinks = document.getElementsByClassName('nav-dot');
   for (link of navLinks) {
      link.addEventListener('mouseenter', 
         function() { 
            this.classList.add('show');
            this.previousElementSibling.classList.add('show'); 
         }   
      );   
      link.addEventListener('mouseleave', 
         function() {
            if (currentSection != this.getAttribute('href').slice(1)) {
               this.classList.remove('show');
            }
            this.previousElementSibling.classList.remove('show'); 
         }   
      );   
   }   
}   

observeDocumentSections();
animateNavigationLinks();