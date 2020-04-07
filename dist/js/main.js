// Select DOM Items
// Init
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
    const txtElement = document.querySelector('.text-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    new TypeWriter(txtElement, words, wait);
}

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');

const navItems = document.querySelectorAll('.nav-item');

// Set Initial State Of Menu

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    
    if (!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));
        
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));
        
        showMenu = false;
    }
    
}


// TypeWriter
class TypeWriter {
    constructor(txtElement, words, wait=3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }
    type() {
        const current = this.wordIndex % this.words.length;
    
        const fullText = this.words[current];
        
        if (this.isDeleting) {
            this.txt = fullText.substring(0, this.txt.length - 1);
        }
        else {
            this.txt = fullText.substring(0, this.txt.length + 1);
        }
        this.txtElement.innerHTML = `<span class="txt-cursor">${this.txt}</span>`;

        // Initial Type Speed
        let typeSpeed = 300;

        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        if (!this.isDeleting && this.txt === fullText) {
            typeSpeed = this.wait;
            this.isDeleting = true
        } else if (this.isDeleting && this.txt === '') {
            this.wordIndex += 1;
            this.isDeleting = false;

            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}
