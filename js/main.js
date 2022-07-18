const elsAboutImgWrapper = document.querySelectorAll(`.about__img-wrapper`);
const elsAboutRemoveWrapper = document.querySelectorAll(`.about__remove-wrapper`);
const elsAboutAvatarWrapper = document.querySelectorAll(`.about-avatar__wrapper`);
const elsCardContentWrapper = document.querySelectorAll(`card-content__wrapper`);

elsAboutImgWrapper.forEach(function(item, index) {
    item.addEventListener('click', function () {
        elsAboutAvatarWrapper[index].classList.toggle('none')
        elsCardContentWrapper[index].classList.remove('none')
    });
});

