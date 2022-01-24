const coreTeamDropDownBtn = document.querySelector('#dropdownIconContainer');
const CoreTeam = document.querySelector('#CoreTeam');
const coreTeamList = document.querySelector('.coreTeamList');
const HeaderDropDownToggle = document.querySelector('#dropDownToggle');
const HeaderDropDownMenu = document.querySelector('#mainNav');


HeaderDropDownToggle.addEventListener("click", () => {
    if (!HeaderDropDownMenu.classList.contains("active")) {addClass(HeaderDropDownMenu, "active");}

    else {remClass(HeaderDropDownMenu, "active");}
})



coreTeamDropDownBtn.addEventListener("click", () => {

    if (!CoreTeam.classList.contains("active")) {
        addClass(coreTeamDropDownBtn, "active");
        addClass(CoreTeam, "active");
        addClass(coreTeamList, "active");
    }
    else {
        remClass(coreTeamDropDownBtn, "active");
        remClass(CoreTeam, "active");
        remClass(coreTeamList, "active");
    }
})


function addClass(e, c) {e.classList.add(c);}
function remClass(e, c) {e.classList.remove(c);}

// function cellSelect(cell) {
//     if (cell == null) return;
//     if(!cell.classList.contains("selected")) {
//         cell.classList.add("selected");
//     }
//     else {
//         cell.classList.remove("selected");
//     }
// }

// closeModalList.forEach(btn => {
//     btn.addEventListener("click", () => {
//         //console.log(`${btn.parentElement}`);
//         closeModal(document.querySelector(`#${btn.parentElement.parentElement.id}`));
//     })
// })

// function closeModal(modal) {
//     modal.parentElement.classList.remove("active");
//     modal.classList.remove("active");
// }

// function openModal(modal) {
//     modal.parentElement.classList.add("active");
//     modal.classList.add("active");
//     // console.log(`${modal} activated`);
// }
