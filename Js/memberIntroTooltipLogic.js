document.querySelectorAll('.smolCell').forEach((el) => {
    const uniqIdent = makeID(10)
    el.classList.add(uniqIdent)

    const contentDOM = el.querySelector('.quoteModal .quote')
    tippy(`.${uniqIdent}`, {
        content: contentDOM ? `<div class="tooltip-sr"><p class="tooltip-text">${contentDOM.innerText}</p></div>` : 'My tooltip!',
        animateFill: true,
        animation: 'fade',
        delay: 0,
        duration: [0, 0],
        allowHTML: true,
    });
})
