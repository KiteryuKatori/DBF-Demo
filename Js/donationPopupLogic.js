var donateMap = {
    'cake': 'https://youtube.com'
}
var donateRedirection = (val) => {
    console.log('Hello', val)
    window.open(donateMap[val]).focus()
}

var popupContent = `
<div class="donate-popup-content-wrapper">
    <div class="donate-choice-wrapper">
        <button class="Btn donate-choice" onclick="donateRedirection('cake')">Cake</button>
    </div>
    <div class="donate-choice-wrapper">
        <button class="Btn donate-choice">Book</button>
    </div>
    <div class="donate-choice-wrapper">
        <button class="Btn donate-choice">Cash</button>
    </div>
</div>
`

document.querySelector('.donate-btn').addEventListener('click', function () {
    Swal.fire({
        // title: '<strong>HTML <u>example</u></strong>',
        // icon: 'info',
        html: popupContent,
        showCloseButton: true,
        allowOutsideClick: true,
        focusConfirm: false,
        confirmButtonText:
            '<i class="fa fa-thumbs-up"></i> Great!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText:
            '<i class="fa fa-thumbs-down"></i>',
        cancelButtonAriaLabel: 'Thumbs down',
    })
})
