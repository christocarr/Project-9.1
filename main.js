//function to add mobile and tab menu

function menuFunction() {
    var x = document.getElementById("menu");
    if (x.className === "active") {
        x.className += "clicked";
    } else {
        x.className = "active";
    }
}
