(function backToTop() {
    let scrollBtn = document.getElementById("js-scroll-button");
    window.onscroll = function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollBtn.style.display = "block";
        } else {
            scrollBtn.style.display = "none";
        }
    }
    scrollBtn.onclick = function topFunction(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };
})();
document.querySelector('.button_mobile').onclick = function () {
    this.classList.toggle('active');
    document.querySelector('.mobile-menu').classList.toggle('active');
};
$('.select').on('click', '.select__head', function () {
    if ($(this).hasClass('open')) {
        $(this).removeClass('open');
        $(this).next().fadeOut();
    } else {
        $('.select__head').removeClass('open');
        $('.select__list').fadeOut();
        $(this).addClass('open');
        $(this).next().fadeIn();
    }
});

$('.select').on('click', '.select__item', function () {
    $('.select__head').removeClass('open');
    $(this).parent().fadeOut();
    $(this).parent().prev().text($(this).text());
    $(this).parent().prev().prev().val($(this).text());
});

$(document).click(function (e) {
    if (!$(e.target).closest('.select').length) {
        $('.select__head').removeClass('open');
        $('.select__list').fadeOut();
    }
});

// Possible request for the form
// function validateEmail(email) {
//     let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
//     return reg.test(email);
// }
// const formButton = document.getElementById('js-form-button');
// formButton.onclick = function () {
//
//     let formEmail = document.getElementById('js-email');
//
//     if (validateEmail(formEmail.value)) {
//         let xhr = new XMLHttpRequest();
//         xhr.open("GET", "url" + formEmail.value, true);
//         xhr.send();
//         xhr.onreadystatechange = function () {
//             if (this.readyState === 4 && this.status === 200) {
//                 // something
//             } else if (this.status !== 200) {
//                 alert(xhr.status + ": " + xhr.statusText);
//             }
//         };
//         xhr.onerror = function() {
//             alert(`Network Error`);
//         };
//     }
// };