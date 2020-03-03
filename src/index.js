import Helpers from './Helpers'
import {ERROR} from './messages'

export default function Conversor(config={}) {
    
    if (!config.inputBin) throw config.empty_input_bin || ERROR.EMPTY_INPUT_BIN
    if (!config.inputText) throw config.empty_input_text || ERROR.EMPTY_INPUT_TEXT

    this.config = config;
    this.inputBin = document.querySelector(this.config.inputBin);
    this.inputText = document.querySelector(this.config.inputText);
    
    this.inputBin.addEventListener('input', e=> this.convert(e));
    this.inputText.addEventListener('input', e=> this.convert(e));
    this.inputBin.addEventListener('click', e=> this.copyToClipboard(e.target));
    this.inputText.addEventListener('click', e=> this.copyToClipboard(e.target));

    document.querySelectorAll(this.config.copyButton).forEach(item=> {
        item.addEventListener('click', e=> {
            const parent = e.target.parentElement;            
            const target = parent.querySelector(this.config.inputBin) || parent.querySelector(this.config.inputText);

            if (!target) throw ERROR.COPY_ELEMENT_FOT_FOUND;
            this.copyToClipboard(target);
        });
    });    
};

/**
 * @param  {} e - Event
 * @description Converts given text to binary
 * @returns void
 */
Conversor.prototype.convertTextToBinary = function(e) {
    this.inputBin.value = (typeof e.target.value === "string") ? 
        Helpers.convertStringToBinary(e.target.value) : 
        Helpers.convertNumberToBinary(e.target.value);
};

/**
 * @param  {} e - Event
 * @description Check if trigger key is valid, before convert
 * @returns Boolean
 */
Conversor.prototype.isInValidTrigger = function(e) {
    return e.ctrlKey || e.altKey || e.which === 9;
}

/**
 * @param  {} e - Event
 * @description Converts given binary to text
 * @returns void
 */
Conversor.prototype.convertBinaryToText = function(e) {
    if (!Helpers.isValidBinary(e)) {
        this.error(this.config.invalid_binary || ERROR.INVALID_BINARY, e);
        return;
    }
    this.inputText.value = Helpers.convertBinaryToText(e.target.value);
};

/**
 * @param  {} e - Event
 * @description Reset given input
 * @returns void
 */
Conversor.prototype.reset = function(e) {
    e.target.value = "";
};

/**
 * @param  {} msg - String
 * @param  {} element - Input element
 * @description Show a message for the user, and reset the field 
 * @returns void
 */
Conversor.prototype.error = function(msg, element) {
    this.showMessage(msg);
    this.reset(element);
};

/**
 * @param  {} msg - String
 * @description Show a message for the user (A simple alert)
 * @returns void
 */
Conversor.prototype.showMessage = function(msg) {
    alert(msg);
};

/**
 * @param  {} e - Event
 * @description Do the conversion
 * @returns void
 */
Conversor.prototype.convert = function(e) {
    if (this.isInValidTrigger(e)) return;
    return (e.target === this.inputBin) ? this.convertBinaryToText(e) : this.convertTextToBinary(e);
};

/**
 * @param  {} target - Element
 * @description Copy to clipboard
 * @returns void
 */
Conversor.prototype.copyToClipboard = function(target) {
    if (!target.value) return;
    target.select();
    document.execCommand('copy');
};