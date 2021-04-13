// OPEN - CLOSE

const modal = document.getElementById('profile')
const edit = document.getElementById('edit')
const close = document.getElementById('close')
const overlay = document.getElementById('overlay')

edit.onclick = function () {
    modal.style.visibility = 'visible'
    modal.style.opacity = '1'
    overlay.style.display = 'flex'
}

function closeModal() {
    modal.style.visibility = 'hidden'
    modal.style.opacity = '0'
    overlay.style.display = 'none'
}

close.addEventListener("click", closeModal)
overlay.addEventListener("click", closeModal)
document.addEventListener("keydown", event => {
    if (event.isComposing || event.keyCode === 27) {
        closeModal()
    }
})

// NAME - WORKPLACE

let inputName = document.getElementById('inputname')
let inputWork = document.getElementById('inputwork')
let profileName = document.querySelector('.profile-info-name')
let profileWork = document.querySelector('.profile-info-workplace')

inputName.value = profileName.textContent
inputWork.value = profileWork.textContent

let submit = document.getElementById('submit')

function submitEdit() {
    profileName.innerHTML = inputName.value
    profileWork.innerHTML = inputWork.value
    closeModal()
}

submit.onclick = function () {
    submitEdit()
}