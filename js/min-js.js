let backref_open = document.getElementById("backref_open");
let modal_form = document.getElementsByClassName("modal-backref")[0];
let close_popup = document.getElementById("modal-backref-close");


backref_open.addEventListener("click", function (event) {
    event.preventDefault();
    let overlay = document.getElementsByClassName("overlay")[0];
    modal_form.classList.add("modal-display");
    overlay.classList.add("modal-display");
});

backref_open.addEventListener("focus", function (event) {
    event.preventDefault();
    let overlay = document.getElementsByClassName("overlay")[0];
    modal_form.classList.add("modal-display");
    overlay.classList.add("modal-display");
});

close_popup.addEventListener("click", function (event) {
    event.preventDefault();
    let overlay = document.getElementsByClassName("overlay")[0];
    modal_form.classList.remove("modal-display");
    overlay.classList.remove("modal-display");
});
