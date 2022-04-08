var donateMap = {
    'food': 'https://docs.google.com/forms/d/e/1FAIpQLSdGzK3dPVs7ZyP3Y11GzjAWpvdVzbUpg8ZS1V_Pz1LXARr2mw/viewform',
    'stuff': 'https://docs.google.com/forms/d/e/1FAIpQLSdAZYpbaZLUzqZf4aE2lxzQpLKKbqSOvTNko2B_CsoWFJgseQ/viewform',
    'cash': 'https://docs.google.com/forms/d/e/1FAIpQLSdXknCJFxLNIHMJl1RnErDMPZOeT-8FnJhgpssGL9iMLmeorQ/viewform'
}
var donateRedirection = (val) => {
    // console.log('Hello', val)
    window.open(donateMap[val]).focus()
}

var popupDonationContent = `
<div class="donate-popup-content-wrapper">
    <div class="donate-choice-wrapper">
        <button class="Btn donate-choice" onclick="donateRedirection('food')">Sản phẩm</button>
    </div>
    <div class="donate-choice-wrapper">
        <button class="Btn donate-choice" onclick="donateRedirection('stuff')">Hiện vật</button>
    </div>
    <div class="donate-choice-wrapper">
        <button class="Btn donate-choice" onclick="donateRedirection('cash')">Hiện kim</button>
    </div>
</div>
`

function popDonation() {
    Swal.fire({
        // title: '<strong>HTML <u>example</u></strong>',
        // icon: 'info',
        html: popupDonationContent,
        showCloseButton: true,
        allowOutsideClick: true,
        focusConfirm: false,
        showConfirmButton: false,
        confirmButtonText:
            '<i class="fa fa-thumbs-up"></i> Great!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText:
            '<i class="fa fa-thumbs-down"></i>',
        cancelButtonAriaLabel: 'Thumbs down',
    })
}

const donatableSrc = [
    document.querySelector('#MDonateBtn'),
    document.querySelector('.top-left-side-icons.donate-btn'),
    document.querySelector('.regular-donate.donate-btn')
]
    .filter(x => !!x)

donatableSrc.forEach(el => {
    el.addEventListener('click', popDonation)
})
