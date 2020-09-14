
const Cryptr = require('cryptr');
let Key="2n8fbg8d9wn49"
const cryptr = new Cryptr(Key);


// TODO : fix this to 1 function

export function kFormatter(labelValue) {

    // Nine Zeroes for Billions
    return Math.abs(Number(labelValue)) >= 1.0e+9 

    ? Math.abs(Number(labelValue)) / 1.0e+9 + "bn"
    // Six Zeroes for Millions 
    : Math.abs(Number(labelValue)) >= 1.0e+6

    ? Math.abs(Number(labelValue)) / 1.0e+6 + "m"
    // Three Zeroes for Thousands
    : Math.abs(Number(labelValue)) >= 1.0e+3

    ? Math.abs(Number(labelValue)) / 1.0e+3 + "k"

    : Math.abs(Number(labelValue));

}

export function kFormatterSplit(labelValue) {

    // Nine Zeroes for Billions
    return Math.abs(Number(labelValue)) >= 1.0e+9 

    ? Math.abs(Number(labelValue)) / 1.0e+9 + ",bn"
    // Six Zeroes for Millions 
    : Math.abs(Number(labelValue)) >= 1.0e+6

    ? Math.abs(Number(labelValue)) / 1.0e+6 + ",m"
    // Three Zeroes for Thousands
    : Math.abs(Number(labelValue)) >= 1.0e+3

    ? Math.abs(Number(labelValue)) / 1.0e+3 + ",k"

    : Math.abs(Number(labelValue));

}

export function crypto(str){

    
    const encryptedString = cryptr.encrypt(str);
    return encryptedString
}

export function decrypto(str){
    //console.log(str)
  
    const decryptSting = cryptr.decrypt(str);
    //console.log(decryptSting)
    return decryptSting
}