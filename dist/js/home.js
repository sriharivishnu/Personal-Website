// TypeWriter
class TypeWriter {
  constructor(txtElement, words, wait = 1500) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.isDeleting = false;
    this.type();
  }
  type() {
    const current = this.wordIndex % this.words.length;

    const fullText = this.words[current];

    if (this.isDeleting) {
      this.txt = fullText.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullText.substring(0, this.txt.length + 1);
    }
    this.txtElement.innerHTML = `<span class="txt-cursor">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 150;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    if (!this.isDeleting && this.txt === fullText) {
      typeSpeed = this.wait;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.wordIndex += 1;
      this.isDeleting = false;

      typeSpeed = 150;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

// Select DOM Items
// Init
document.addEventListener("DOMContentLoaded", init);

// Init App
function init() {
  const txtElement = document.querySelector(".text-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");
  new TypeWriter(txtElement, words, wait);
}
