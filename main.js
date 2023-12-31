/**
* Template Name: Scaffold
* Updated: Sep 18 2023 with Bootstrap v5.3.2
* Template URL: https://bootstrapmade.com/scaffold-bootstrap-metro-style-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
    "use strict";

    console.log("Loaded main.js");
  
    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
          return [...document.querySelectorAll(el)]
        } else {
          return document.querySelector(el)
        }
      }
    
      /**
       * Easy event listener function
       */
      const on = (type, el, listener, all = false) => {
        let selectEl = select(el, all)
        if (selectEl) {
          if (all) {
            selectEl.forEach(e => e.addEventListener(type, listener))
          } else {
            selectEl.addEventListener(type, listener)
          }
        }
      }
    
      /**
       * Mobile nav toggle
       */
      on('click', '.mobile-nav-toggle', function(e) {
        console.log('Clicked');
        select('#navbar').classList.toggle('navbar-mobile')
        this.classList.toggle('bi-list')
        this.classList.toggle('bi-x')
        console.log('Done');
      })
    
      /**
       * Mobile nav dropdowns activate
       */
      on('click', '.navbar .dropdown > a', function(e) {
        if (select('#navbar').classList.contains('navbar-mobile')) {
          e.preventDefault()
          this.nextElementSibling.classList.toggle('dropdown-active')
        }
      }, true)
  
  })()