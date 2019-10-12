let submitButton = document.getElementById('submitButton');
let inputAddress = document.getElementById('inputAddress');
let inputAmount = document.getElementById('inputAmount');
let inputOtp = document.getElementById('inputOtp');

let smallAddressDisplay = document.getElementById('addressDisplay')
let smallAmountDisplay = document.getElementById('amountDisplay')
let smallOtpDisplay = document.getElementById('otpDisplay')

let addressValue;
let amountValue;
let otpValue;

let exampleDatabase = {
    email: '123@gmail.com',
    otp: '123456'
}


let checkInput = () => {

}

let checkInputOtp = () => {
    if(event.target.value.length === 6){
        if(event.target.value === exampleDatabase.otp){
            console.log(event.target.value)
        }
        else{
            console.log('Incorrect OTP number')
        }
    }
    else{
        console.log('nay')
    }
}

let checkInputAmount = () => {
    if(event.target.value.includes('$')){
        let newValue = event.target.value.replace(/\$/g, '')
        console.log(newValue)
    }
    else{
        if(event.target.value > 5){
            console.log(event.target.value)
        }
        else{
            console.log('Value too low')
        }
    }
}

let checkInputAddress = () => {
    if(!event.target.value.includes('@gmail.com')){
        console.log('hey')
    }
    else{
        if(event.target.value === exampleDatabase.email){
            console.log(event.target.value)
        }
        else{
            console.log('Incorrect registered email address')
        }
    }
};


window.onload = () => {
    inputAddress.addEventListener('keyup', checkInputAddress)
    inputAmount.addEventListener('keyup', checkInputAmount)
    inputOtp.addEventListener('keyup', checkInputOtp)
};