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
        //info.innerHTML = "Đây là section nội dung của about";
        info.innerHTML = "www.google.com";
        
    }else if( panel.innerHTML == "donate.") {
        info.innerHTML = "Đây là section nội dung của donate. Sau này sẽ add thêm 1 chiếc button(hoặc link) xinh xắn để dẫn người dùng qua donating page";
        
    }else if( panel.innerHTML == "license.") {
        info.innerHTML = "Đây là section nội dung của license. Cái này anh chưa biết gì nên chưa có idea gì hết nhe =)))";
    }else if( panel.innerHTML == "faq.") {
        info.innerHTML = "- faq: phần mô tả sẽ là các chủ đề chính(3-5 chủ đề), click vào chủ đề nào thì sẽ hiện ra page về chủ đề đó + 7749 các câu hỏi thường gặp";
    }
}
