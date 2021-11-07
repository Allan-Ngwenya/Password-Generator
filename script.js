// Document method 'getElementById()' used to return Element object representing the element whose id property matches the specified strings below
// Then called in the last function if user selects the criteria
// Id's have beem defined and linked to classes in the index.html page
const pwEl = document.getElementById("pw");
const lenEl = document.getElementById("len");
const upperEl = document.getElementById("upper");
const lowerEl = document.getElementById("lower");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");
const generateEl = document.getElementById("generate");

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // String of uppercase characters to be included in password
const lowerLetters = "abcdefghijklmnopqrstuvwxyz"; // String of lowercase characters to be included in password
const numbers = "0123456789"; // String of numeric characters to be included in password
const symbols = "!@#$%^&*()_+="; // String of special characters to be included in password

// The functions below from 'getLowercase()' to  'getSymbol()' are the criteria which the user may select and if selected the content is returned/added to the genrate password string.

function getLowercase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getUppercase() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

// The function 'generatePassword()' will check if the criteria outlined above (and ticked in the form) is slected, then it will add it to the password.

function generatePassword() {
    const len = lenEl.value;

    let password = "";

    if (upperEl.checked) {
        password += getUppercase();
    }

    if (lowerEl.checked) {
        password += getLowercase();
    }

    if (numberEl.checked) {
        password += getNumber();
    }

    if (symbolEl.checked) {
        password += getSymbol();
    }

    for (let i = password.length; i < len; i++) {
        const x = generateX();
        password += x;
    }

    pwEl.innerText = password; // innerTxt will set the content selected and I have assigned it to 'password'
}

// The function below is being used to push the criteria by using conditional statements to check if the options have been selcted above so the correct criteria can be displayed eventually

function generateX() {
    const xs = [];
    if (upperEl.checked) {
        xs.push(getUppercase());
    }

    if (lowerEl.checked) {
        xs.push(getLowercase());
    }

    if (numberEl.checked) {
        xs.push(getNumber());
    }

    if (symbolEl.checked) {
        xs.push(getSymbol());
    }

    if (xs.length === 0) return "";

    return xs[Math.floor(Math.random() * xs.length)];
}

//Add event listener to generate button uppon click action 

generateEl.addEventListener("click", generatePassword);

copyEl.addEventListener("click", () => {
    const textarea = document.createElement("textarea");
    const password = pwEl.innerText;

    if (!password) {
        return;
    }

    // Added event listener variable to generate button, testing to see if I can use the one above only
    var generateBtn = document.getElementById("generate");
});