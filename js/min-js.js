let backref_open = document.getElementById("backref_open");
let modal_form = document.getElementsByClassName("modal-backref")[0];
let close_popup = document.getElementById("modal-backref-close");


backref_open.addEventListener("click", function (event) {
    let overlay = document.getElementsByClassName("overlay")[0];
    modal_form.style.transform = "scale(1)";
    overlay.style.transform = "scale(1)";
});

backref_open.addEventListener("focus", function (event) {
    let overlay = document.getElementsByClassName("overlay")[0];
    modal_form.style.transform = "scale(1)";
    overlay.style.transform = "scale(1)";
});

close_popup.addEventListener("click", function (event) {
    let overlay = document.getElementsByClassName("overlay")[0];
    modal_form.style.transform = "scale(0)";
    overlay.style.transform = "scale(0)";
});
