const pane = document.querySelectorAll(".pane");

const info = document.querySelector(".info");


pane.forEach(panel => {
    panel.addEventListener("click", () => {
        const activatedPanel =  panel.closest(".navBar").querySelector(".active");
        deActivate(activatedPanel);
        Activate(panel);
    })
})

function deActivate(panel) {
    if (panel == null) {
        return;
    }
    panel.classList.remove("active");
    console.log("Deactivate panel");
}

function Activate(panel) {
    if (panel == null) {
        return;
    }
    panel.classList.add("active");
    console.log("Activate panel");
    if( panel.innerHTML == "about.") {
        info.innerHTML = "about";
    }else if( panel.innerHTML == "donate.") {
        info.innerHTML = "donate";
    }else if( panel.innerHTML == "license.") {
        info.innerHTML = "license";
    }else if( panel.innerHTML == "faq.") {
        info.innerHTML = "faq";
    }
}