const email = document.getElementById("email");
const form = document.getElementById("form");
const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

form.addEventListener("submit", (e) => {
    if (email.value === "" || email.value == null || !(email.value.match(pattern))) {
        e.preventDefault();
        document.getElementsByClassName("error")[0].style.display = ("block");
    }
    else {
        e.preventDefault();
        email.value = ("");
        document.getElementsByClassName("error")[0].style.display = ("none");
    }

});