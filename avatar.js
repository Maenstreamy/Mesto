const avatarWrapper = document.querySelector('.profile-avatar-wrap')
const avatar = document.querySelector('.profile-avatar')
const avatarEdit = document.querySelector('.profile-avatar-edit')

avatarWrapper.onmouseenter = avatarWrapper.onmouseleave = handler

function handler(event) {
    if (event.type == 'mouseenter') {
        avatarEdit.style.display = 'block'
        avatar.style.opacity = '0.6'
    }
    if (event.type == 'mouseleave') {
        avatarEdit.style.display = 'none'
        avatar.style.opacity = '1'
    }

}

const avatarModal = document.querySelector('.modal-avatar')
const avatarClose = document.querySelector('.modal-avatar-close')
const avatarSave = document.querySelector('#avatarsave')
const avatarLink = document.querySelector('#avatarlink')

avatarWrapper.onclick = function () {
    avatarModal.style.visibility = 'visible'
    avatarModal.style.opacity = '1'
    overlay.style.display = 'flex'
}

function closeAvatarModal() {
    avatarModal.style.visibility = 'hidden'
    avatarModal.style.opacity = '0'
    overlay.style.display = 'none'
}

avatarClose.addEventListener("click", closeAvatarModal)
overlay.addEventListener("click", closeAvatarModal)
document.addEventListener("keydown", event => {
    if (event.isComposing || event.keyCode === 27) {
        closeAvatarModal()
    }
})

avatarSave.onclick = function () {
    avatar.src = avatarLink.value
    closeAvatarModal()
}

checkAvatarValidate(avatarLink)