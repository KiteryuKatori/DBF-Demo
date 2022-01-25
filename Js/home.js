const coreTeamDropDownBtn = document.querySelector('#dropdownIconContainer');
const CoreTeam = document.querySelector('#CoreTeam');
const coreTeamList = document.querySelector('.coreTeamList');
const HeaderDropDownToggle = document.querySelector('#dropDownToggle');
const HeaderDropDownMenu = document.querySelector('#mainNav');


HeaderDropDownToggle.addEventListener("click", () => {
    if (!HeaderDropDownMenu.classList.contains("active")) {
        addClass(HeaderDropDownMenu, "active");
    } else {
        remClass(HeaderDropDownMenu, "active");
    }
})


coreTeamDropDownBtn.addEventListener("click", () => {

    if (!CoreTeam.classList.contains("active")) {
        addClass(coreTeamDropDownBtn, "active");
        addClass(CoreTeam, "active");
        addClass(coreTeamList, "active");
    } else {
        remClass(coreTeamDropDownBtn, "active");
        remClass(CoreTeam, "active");
        remClass(coreTeamList, "active");
    }
})


function addClass(e, c) {
    e.classList.add(c);
}

function remClass(e, c) {
    e.classList.remove(c);
}

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

// handle pod press

// fill your classname and embedded soundcloud here
var mapPodToContent = {
    'Pod first': (
        `<div>
            <iframe width="100%" height="300" scrolling="no" frameBorder="no" allow="autoplay"
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/950722921&color=%23740c10&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"/>
            <div
                style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;">
                <a href="https://soundcloud.com/cattymayer-art" title="菲然" target="_blank"
                   style="color: #cccccc; text-decoration: none;">菲然</a> · <a
                href="https://soundcloud.com/cattymayer-art/ice-paper-jade-pieces" title="Ice Paper - 双鱼玉佩"
                target="_blank"
                style="color: #cccccc; text-decoration: none;">Ice Paper - 双鱼玉佩</a>
            </div>
        </div>
        `
    ),
    'Pod second': (
        `<div>
            <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1009508287&color=%23740c10&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/princessgypsophila" title=". 안개꽃.✿❀❁" target="_blank" style="color: #cccccc; text-decoration: none;">. 안개꽃.✿❀❁</a> · <a href="https://soundcloud.com/princessgypsophila/franky-ming-yue-xing-he" title="Franky (弗兰奇) - 明月星河(Ming Yue Xing He)" target="_blank" style="color: #cccccc; text-decoration: none;">Franky (弗兰奇) - 明月星河(Ming Yue Xing He)</a></div>
        </div>`
    )
}

var playlistDisplayer = document.querySelector('.PodcastList-Container')
if (playlistDisplayer) {
    playlistDisplayer.childNodes.forEach((e, index) => {
        const validElement = !!e.className
        if (validElement) {
            e.addEventListener('click', function () {
                const player = document.querySelector('#Podcast .music-player')
                player.querySelector('.empty-music-state').style.setProperty('display', 'none')
                const realPlayer = player.querySelector('.have-some-music-case')
                realPlayer.style.setProperty('display', 'block')
                const targetMusic = mapPodToContent[e.className]
                console.log(e.className, targetMusic)
                if (targetMusic) {
                    realPlayer.innerHTML = targetMusic
                }
            })
        }
    })
}
