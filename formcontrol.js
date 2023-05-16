const form = document.querySelector("form")
const inputsGroup = document.querySelectorAll(".input-group")
const inputs = document.querySelectorAll("input")

let userName
let cardNumber
let monthExpiration
let yearExpiration
let cvcNumber



/*form Controle */
const nameInput = document.querySelector(".input-group:nth-child(1) input")


nameInput.addEventListener("blur", userValidation)

function userValidation(){
    if(nameInput.value === ""){
        nameInput.style.borderColor ="hsl(0, 100%, 66%)"
        const msgError = document.createElement("p")
        msgError.classList.add("msg-error")
        msgError.innerText = "You have to enter your name"
        inputsGroup[0].appendChild(msgError)

        setTimeout(()=>{
            nameInput.style.borderColor ="hsl(249, 99%, 64%)"
            msgError.style.display = "none"
        },2000)
    }
    else{
        userName =  nameInput.value
    }
}

const cardNumberInput = document.querySelector(".input-group:nth-child(2) input")


cardNumberInput.addEventListener("blur", numberCardValidation)

function numberCardValidation(){
    if(cardNumberInput.value.length < 16 || cardNumberInput.value.length > 16){
        cardNumberInput.style.borderColor = "hsl(0, 100%, 66%)"
        const msgError = document.createElement("p")
        msgError.classList.add("msg-error")
        msgError.innerText = "You must enter 16 numbers"
        inputsGroup[1].appendChild(msgError)
        setTimeout(()=>{
            cardNumberInput.style.borderColor ="hsl(249, 99%, 64%)"
            msgError.style.display = "none"
        },2000)
    }
    else{
        cardNumber =  cardNumberInput.value
    }
}

const monthInput = document.querySelector("#month")
const yearInput = document.querySelector("#year")

monthInput.addEventListener("blur", dateValidation)
yearInput.addEventListener("blur", dateValidation)

function dateValidation(){
    if(monthInput.value === "" || yearInput.value ===""){
        monthInput.style.borderColor = "hsl(0, 100%, 66%)"
        yearInput.style.borderColor = "hsl(0, 100%, 66%)"
        const msgError = document.createElement("p")
        msgError.classList.add("msg-error")
        msgError.innerText = "Can't be blank"
        inputsGroup[2].appendChild(msgError)

        setTimeout(()=>{
            monthInput.style.borderColor ="hsl(249, 99%, 64%)"
            yearInput.style.borderColor ="hsl(249, 99%, 64%)"
            msgError.style.display = "none"
        },2000)
    }
    else{
        monthExpiration =  monthInput.value
        yearExpiration =  yearInput.value
    }
}

const cvcInput = document.querySelector("#cvc")

cvcInput.addEventListener("blur", cvcValidation)

function cvcValidation(){
    if(cvcInput.value === ""){
        cvcInput.style.borderColor = "hsl(0, 100%, 66%)"
        const msgError = document.createElement("p")
        msgError.classList.add("msg-error")
        msgError.innerText = "Can't be blank"
        inputsGroup[3].appendChild(msgError)

        setTimeout(()=>{
            cvcInput.style.borderColor ="hsl(249, 99%, 64%)"
            msgError.style.display = "none"
        },2000)
    }
    else if(cvcInput.value.length < 3){
        cvcInput.style.borderColor = "hsl(0, 100%, 66%)"
        const msgError = document.createElement("p")
        msgError.classList.add("msg-error")
        msgError.innerText = "you have to enter 3 number"
        inputsGroup[3].appendChild(msgError)

        setTimeout(()=>{
            cvcInput.style.borderColor ="hsl(249, 99%, 64%)"
            msgError.style.display = "none"
        },2000)
    }
    else{
        cvcNumber = cvcInput.value
    }
}

/*Display the card informations*/

const user_name = document.querySelector(".user-name")
const card_number = document.querySelector(".card-number")
const expiration_date = document.querySelector(".expiration-date")
const cvc_number = document.querySelector(".cvc-number")



form.addEventListener("submit", handleForm)

function handleForm(e){
    e.preventDefault()
    userValidation()
    numberCardValidation()
    dateValidation()
    cvcValidation()

    user_name.textContent = userName
    card_number.textContent = cardNumber
    expiration_date.textContent = `${monthExpiration}/${yearExpiration}`
    cvc_number.textContent = cvcNumber

    showSucces()
}

const msgSucces = document.querySelector(".message-card-saved")

function showSucces(){
    form.style.display ="none"
    msgSucces.style.display = "block"
}