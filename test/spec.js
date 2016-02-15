'use strict';
const one = require('../index.js'),
    // http://www.unicode.org/charts/PDF/U0300.pdf
    COMBINING_DIACRITICALS_START = parseInt('0300', 16),
    COMBINING_DIACRITICALS_END = parseInt('036F', 16);

describe('onespace', function() {
    function is_one_space(str, should_fail) {
        [].forEach.call(str, char => {
            expect(char.charCodeAt(0) <= COMBINING_DIACRITICALS_END &&
                char.charCodeAt(0) >= COMBINING_DIACRITICALS_START).toBe(!should_fail);
        });
    }

    it('converts', function() {
        is_one_space(one.convert('this is not one space'));
    });

    it('converts back', function() {
        let original = 'this is not one space',
            converted = one.convert(original);

        is_one_space(converted);
        is_one_space(original, true);

        expect(one.convert(converted)).toBe(original);
    });
});
