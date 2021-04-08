const place = document.getElementById('place')
const addplace = document.getElementById('addplace')
const closeplace = document.getElementById('closeplace')

addplace.onclick = function () {
    place.style.visibility = 'visible'
    place.style.opacity = '1'
    overlay.style.display = 'block'
}

function closePlace() {
    place.style.visibility = 'hidden'
    place.style.opacity = '0'
    overlay.style.display = 'none'
}

closeplace.addEventListener("click", closePlace)
overlay.addEventListener("click", closePlace)
document.addEventListener("keydown", event => {
    if (event.isComposing || event.keyCode === 27) {
        closePlace()
    }
})

////

let gallery = document.getElementById('gallery')
let inputPlace = document.querySelector('#inputplace')
let inputLink = document.querySelector('#inputlink')
let save = document.querySelector('#save')

function savePlace() {
    const newElem = document.querySelector('#template').content.cloneNode(true)
    const galleryName = newElem.querySelector('.gallery-elem-name')
    const galleryImage = newElem.querySelector('.gallery-elem-image')
    galleryName.textContent = inputPlace.value
    galleryImage.style.backgroundImage = `url(${inputLink.value})`
    gallery.prepend(newElem)
}

save.onclick = function () {
    savePlace()
    closePlace()
}

place.addEventListener("keydown", event => {
    if (event.keyCode === 13) {
        savePlace()
        closePlace()
    }
})

const clear = document.querySelector('.gallery-elem-clear')
const picture = document.querySelector('#picture')
const closePicture = document.querySelector('#closepicture')
const pictureImage = document.querySelector('.modal-picture-image')
let pictureHeader = document.querySelector('.modal-picture-header')
// let galleryHeader = document.querySelector('.gallery-elem-name')


function closeModalPicture() {
    picture.style.visibility = 'hidden'
    picture.style.opacity = '0'
    overlay.style.display = 'none'
}

closePicture.addEventListener('click', closeModalPicture)
overlay.addEventListener('click', closeModalPicture)
document.addEventListener("keydown", event => {
    if (event.isComposing || event.keyCode === 27) {
        closeModalPicture()
    }
})


gallery.addEventListener('click', event => {
    if (event.target.closest('.gallery-elem-clear')) {
        let galleryElem = event.target.closest('.gallery-elem')
        overlay.style.display = 'none'
        galleryElem.remove().remove()
    }

    if (event.target.closest('.gallery-elem-image')) {
        picture.style.display = 'flex'
        overlay.style.display = 'block'
        picture.style.opacity = '1'
        picture.style.visibility = 'visible'

        let galleryImg = event.target.closest('.gallery-elem-image')
        let galleryBackground = galleryImg.style.backgroundImage
        let newBackground = galleryBackground.replace(/[{()}]/g, '').replace('url', '').replace(/"/g, '')
        pictureImage.src = newBackground
        let galleryHeader = event.target.closest('.gallery-elem').textContent
        pictureHeader.textContent = galleryHeader
    }

    if (event.target.closest('.gallery-elem-like')) {
        event.target.classList.toggle('gallery-elem-like-active')
    }
})
