import Helpers from './Helpers'

describe('Helpers Testing', ()=> {
    describe('method:::convertStringToBinary', ()=> {
        it('should convertStringToBinary', ()=> {
            try { Helpers.convertStringToBinary(); expect(true).toBe(false); }
            catch(error) { expect(error.message).toBe('param "str" is required, and should be a string') }

            try { Helpers.convertStringToBinary(null); expect(true).toBe(false); }
            catch(error) { expect(error.message).toBe('param "str" is required, and should be a string') }

            try { Helpers.convertStringToBinary(undefined); expect(true).toBe(false); }
            catch(error) { expect(error.message).toBe('param "str" is required, and should be a string') }

            expect(Helpers.convertStringToBinary('')).toBe('');
            expect(Helpers.convertStringToBinary('👌')).toBe('1101100000111101 1101110001001100');
            expect(Helpers.convertStringToBinary('This test is working fine! ãáàõóòùúìíç')).toBe('1010100 1101000 1101001 1110011 100000 1110100 1100101 1110011 1110100 100000 1101001 1110011 100000 1110111 1101111 1110010 1101011 1101001 1101110 1100111 100000 1100110 1101001 1101110 1100101 100001 100000 11100011 11100001 11100000 11110101 11110011 11110010 11111001 11111010 11101100 11101101 11100111');
        })
    })

    describe('method:::convertNumberToBinary', ()=> {
        it('should validate convertNumberToBinary', ()=> {
            try { Helpers.convertNumberToBinary(); expect(true).toBe(false); }
            catch(error) { expect(error.message).toBe('param "num" is required, and should be a number') }

            try { Helpers.convertNumberToBinary(null); expect(true).toBe(false); }
            catch(error) { expect(error.message).toBe('param "num" is required, and should be a number') }

            try { Helpers.convertNumberToBinary(undefined); expect(true).toBe(false); }
            catch(error) { expect(error.message).toBe('param "num" is required, and should be a number') }

            try { Helpers.convertNumberToBinary(Object); expect(true).toBe(false); }
            catch(error) { expect(error.message).toBe('param "num" is required, and should be a number') }

            try { Helpers.convertNumberToBinary('11a'); expect(true).toBe(false); }
            catch(error) { expect(error.message).toBe('param "num" is required, and should be a number') }

            try { Helpers.convertNumberToBinary('1111111 111100'); expect(true).toBe(false); }
            catch(error) { expect(error.message).toBe('param "num" is required, and should be a number') }

            expect(Helpers.convertNumberToBinary(0)).toBe('0');
            expect(Helpers.convertNumberToBinary('0')).toBe('0');
            expect(Helpers.convertNumberToBinary(1)).toBe('1');
            expect(Helpers.convertNumberToBinary(1111111)).toBe('100001111010001000111');
            expect(Helpers.convertNumberToBinary('1111111')).toBe('100001111010001000111');
            expect(Helpers.convertNumberToBinary('1111111 ')).toBe('100001111010001000111');
        })
    })
    describe('method:::isValidBinary', ()=> {
        it('should validate if given binary is valid or no', ()=> {
            expect(Helpers.isValidBinary()).toBe(false);
            expect(Helpers.isValidBinary(null)).toBe(false);
            expect(Helpers.isValidBinary(undefined)).toBe(false);
            expect(Helpers.isValidBinary({})).toBe(false);
            expect(Helpers.isValidBinary([])).toBe(false);
            expect(Helpers.isValidBinary(false)).toBe(false);
            expect(Helpers.isValidBinary(true)).toBe(false);
            expect(Helpers.isValidBinary('xxx')).toBe(false);
            expect(Helpers.isValidBinary('111111 101010 a')).toBe(false);

            expect(Helpers.isValidBinary('1')).toBe(true);
            expect(Helpers.isValidBinary('0')).toBe(true);
            expect(Helpers.isValidBinary(0)).toBe(true);
            expect(Helpers.isValidBinary(1)).toBe(true);
            expect(Helpers.isValidBinary('111111')).toBe(true);
            expect(Helpers.isValidBinary('111111 ')).toBe(true);
            expect(Helpers.isValidBinary('111111 101010')).toBe(true);
        })        
    });

    describe('method:::convertBinaryToText', ()=> {
        it('should throw an error calling convertBinaryToText without and with wrong params', ()=> {
            try { Helpers.convertBinaryToText(); expect(true).toBe(false);  } 
            catch(error) { expect(error.message).toBe('param "str" is required, and should be a string') }

            try { Helpers.convertBinaryToText(true); expect(true).toBe(false); } 
            catch(error) { expect(error.message).toBe('param "str" is required, and should be a string') }
            
        })
        
        it('should convertBinaryToText correctly', ()=> {
            // expect(Helpers.convertBinaryToText("")).toBe("");
            const val = Helpers.convertBinaryToText('01010100 01101000 01101001 01110011 00100000 01110100 01100101 01110011 01110100 00100000 01101001 01110011 00100000 01110111 01101111 01110010 01101011 01101001 01101110 01100111 00100000 01100110 01101001 01101110 01100101 00100001 00100000 11100011 11100001 11100000 11110101 11110011 11110010 11111001 11111010 11101100 11101101 11100111');
            expect(val).toBe('This test is working fine! ãáàõóòùúìíç');
        });        
    });
});