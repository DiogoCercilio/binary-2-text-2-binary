export default class Helpers {
    static convertStringToBinary(str) {
        if ((!str && str != "") || typeof str !== 'string') {
            throw new Error('param "str" is required, and should be a string');
        }
        const mapped = str.split("");
        const last = mapped.length - 1;
        return mapped.map((val, i)=> Helpers.convertNumberToBinary(val.charCodeAt(0)) + (i === last ? "" : " ") ).join("");
    }
    
    static convertNumberToBinary(num) {
        if ((!num && num !== 0) || isNaN(num)) {
            throw new Error('param "num" is required, and should be a number');
        }
        return parseInt(num).toString(2);
    }
    
    static convertBinaryToText(str) {
        if ((!str && str != "") || typeof str !== 'string') {
            throw new Error('param "str" is required, and should be a string');
        }
        return str.split(" ").map(char => String.fromCharCode(parseInt(char, 2))).join("");
    }

    static isValidBinary(str) {
        return /^[10 ]+$/.test(str);
    }
}
