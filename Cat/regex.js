const regexStringSensitive = /[a-zA-Z]/g
const result = 'HELLO'.match(regexStringSensitive)
if (result) {
    console.log('True')
} else {
    console.log('False')
}

const regNumber = /^\d*(\.\d+)?$/
const result2 = '123'.match(regNumber)       // true
if (result) {
    console.log('Match')
} else {
    console.log('Not Match')
}

const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const result3 = 'helo@gmail.com'.match(regexEmail)
if (result) {
    console.log('Email is Match')
} else {
    console.log('Not Match')
}

const regexMatchString = /(abc|def)[0-9]{8,11}/
const result4 = 'abc234832748374asdf7943278934haskhjd'.match(regexMatchString)  //if match abc234832748374 it will true
if (result) {
    console.log('Match')
} else {
    console.log('Not Match')
}

const regexFileName = /\.(gif|jpg|jpeg|tiff|png)$/i
const result5 = 'helo.jpg'.match(regexFileName)  // match with filename gif|jpg|jpeg|tiff|png
if (result) {
    console.log('Match File')
} else {
    console.log('Not Match')
}

const regexSpecialCharacter = /[\!\@\#\$\%\^\&\*\)\(\+\=\.\<\>\{\}\[\]\:\;\'\"\|\~\`\_\-]/g
const result6 = '*( Helo {k. ='.match(regexSpecialCharacter)
if (result) {
    console.log('Contain Special Character')
} else {
    console.log('Not Contain Special Character')
}

//https://dev.to/zidniryi/advanced-regex-with-modern-javascript-complete-guide-1d4d
