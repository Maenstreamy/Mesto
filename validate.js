/// PROFILE-VALIDATION

let validError = document.querySelector('.valid-error')

function checkProfileValidate(input) {
    input.addEventListener("input", event => {
        let err = input.nextElementSibling
        if (input.value.length < 1) {
            err.style.display = 'block'
            submit.disabled = true
            modal.disabled = true
        }
        if (input.value.length > 0) {
            err.style.display = 'none'
            submit.disabled = false
            modal.disabled = false
        }
    }, false)
}

checkProfileValidate(inputName)
checkProfileValidate(inputWork)


/// PLACE-VALIDATION

save.disabled = true

function checkPlaceValidation(input) {
    input.addEventListener("input", event => {
        let errPlace = inputPlace.nextElementSibling
        let errLink = inputLink.nextElementSibling

        if (!inputLink.value.includes('http') && inputLink.value.length < 1) {
            errLink.style.display = 'block'
            save.disabled = true
        }

        if (inputLink.value.includes('http')) {
            errLink.style.display = 'none'
        }

        if (inputPlace.value.length < 1) {
            errPlace.style.display = 'block'
            save.disabled = true
        }

        if (inputPlace.value.length > 0) {
            errPlace.style.display = 'none'
        }

        if (inputPlace.value.length > 0 && inputLink.value.length > 0 && inputLink.value.includes('http')) {
            save.disabled = false
        }
    }, false)
}

checkPlaceValidation(inputPlace)
checkPlaceValidation(inputLink)