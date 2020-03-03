export default class Helpers {
    static convertStringToBinary(str) {
        return str.split("").map(val=> `${Helpers.convertNumberToBinary(val.charCodeAt(0))} `).join("");
    }
    
    static convertNumberToBinary(num) {
        return num.toString(2);
    }
    
    static convertBinaryToText(str) {
        return str.split(" ").map(char => String.fromCharCode(parseInt(char, 2))).join("");
    }

    static isValidBinary(e) {
        return /^[10 ]*$/.test(e.target.value);
    }
}
