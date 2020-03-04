# binary-2-text-2-binary
A Binary / Text / Binary Converter

Get on NPM:

https://www.npmjs.com/package/@diogocercilio/binary-2-text-2-binary

See in action:

http://diogocercilio.github.io/binary-converter/index.html

How to use:

```javascript
import Conversor from 'Conversor';

window.onload = function() {
    new Conversor({
        inputBin: '#input-bin', // ID for the binary input element (could be class, or any ID used for querySelector)
        inputText: '#input-digit', // ID for the binary input element (could be class, or any ID used for querySelector)
        copyButton: '.copy' // Classname for copy to clipboard button (Optional)
    });
};
```
