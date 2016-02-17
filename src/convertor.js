'use strict';

const map = {},
    COMBINING_DIACRITICALS_START = parseInt('0300', 16),
    get_code = String.fromCharCode.bind(String);

for(let i = 0, limit = 111, adjustment = 0; i < limit; i++) {
    // Create a map in both directions
    map[map[get_code(i + adjustment)] = get_code(i + COMBINING_DIACRITICALS_START)] = get_code(i + adjustment);
    if(i === 15) {
        // Skip from 15 to 32, since we only have 112 combining chars to use (no useful js chars in this range)
        adjustment = 16;
    }
}

module.exports = function (str) {
    return [].map.call(str, char => map[char]).join('');
};
