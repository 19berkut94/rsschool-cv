"use strict";

class Modal {
  constructor(options) {
    this.overlay = "";
    this.modal = "";
    this.modalContent = "";
    this.logo = "";
    this.logo_title = "";
    this.logo_symbol = "";
    this.nav = "";
    this.linkHome = "";
    this.linkServices = "";
    this.linkPortfolio = "";
    this.linkAbout = "";
    this.linkContact = "";

    this.createDomNode();
    this.buildModal();
    this.createModalContent();
    this.gatherTogether();
    //this.modalOpen();
    //  this.modalClose();
  }

  createDomNode(node, element, ...classes) {
    node = document.createElement(element);
    node.classList.add(...classes);
    return node;
  }

  buildModal() {
    //overlay
    this.overlay = this.createDomNode(this.overlay, "div", "overlay");

    //modal
    this.modal = this.createDomNode(this.modal, "div", "modal");
  }

  createModalContent() {
    this.modalContent = this.createDomNode(
      this.modalContent,
      "div",
      "modal__content"
    );
    //Logo
    this.logo = this.createDomNode(this.logo, "div", "modal__logo");
    this.logo_title = this.createDomNode(
      this.logo_title,
      "h1",
      "logo-title",
      "modal__logo__title"
    );
    this.logo_title.innerText = "singolo";

    this.logo_symbol = this.createDomNode(
      this.logo_symbol,
      "span",
      "logo-symbol"
    );
    this.logo_symbol.innerText = "*";

    this.logo.append(this.logo_title, this.logo_symbol);

    //Navigation
    this.nav = this.createDomNode(this.nav, "div", "modal__nav");

    this.linkHome = this.createDomNode(this.linkHome, "a", "modal__nav__links");
    this.linkHome.innerText = "home";
    this.linkHome.setAttribute("href", "#home");

    this.linkServices = this.createDomNode(
      this.linkServices,
      "a",
      "modal__nav__links"
    );
    this.linkServices.innerText = "services";
    this.linkServices.setAttribute("href", "#services");

    this.linkPortfolio = this.createDomNode(
      this.linkPortfolio,
      "a",
      "modal__nav__links"
    );
    this.linkPortfolio.innerText = "portfolio";
    this.linkPortfolio.setAttribute("href", "#portfolio");

    this.linkAbout = this.createDomNode(
      this.linkAbout,
      "a",
      "modal__nav__links"
    );
    this.linkAbout.innerText = "about";
    this.linkAbout.setAttribute("href", "#about");

    this.linkContact = this.createDomNode(
      this.linkContact,
      "a",
      "modal__nav__links"
    );
    this.linkContact.innerText = "contact";
    this.linkContact.setAttribute("href", "#contact");

    this.nav.append(
      this.linkHome,
      this.linkServices,
      this.linkPortfolio,
      this.linkAbout,
      this.linkContact
    );

    //appending all to modalContent
    this.modalContent.append(this.logo, this.nav);
    return this.modalContent;
  }

  gatherTogether() {
    this.modal.classList.add("modal-disappear");

    this.modal.append(this.modalContent);
    this.overlay.append(this.modal);
    return this.overlay;
  }

  modalOpen() {
    document.body.append(this.overlay);
    this.modal.classList.remove("modal-disappear");
    this.modal.classList.add("modal-appear");
  }

  modalClose() {
    this.modal.classList.add("modal-disappear");
    this.modal.classList.remove("modal-appear");

    delay(1500).then(() => {
      document.body.removeChild(this.overlay);
      burger.style.position = "relative";
    });
    //document.body.removeChild(this.overlay);
  }
}

const SingoloModal = new Modal();

//--------bind open and close to burger---------

const burger = document.querySelector(".burger");
burger.classList.add("burger-unroll");

burger.addEventListener("click", () => {
  burger.style.position = "fixed";
  if (SingoloModal.modal.classList.contains("modal-disappear")) {
    SingoloModal.modalOpen();
    burger.classList.add("burger-roll");
    burger.classList.remove("burger-unroll");
  } else {
    SingoloModal.modalClose();
    burger.classList.add("burger-unroll");
    burger.classList.remove("burger-roll");
  }
});

//this is general delay function, because I'm not ready enough to use async funcs now
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

//closing window with links
SingoloModal.nav.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal__nav__links")) {
    SingoloModal.modalClose();
    burger.classList.add("burger-unroll");
    burger.classList.remove("burger-roll");
  }
});

console.log(SingoloModal.nav);
