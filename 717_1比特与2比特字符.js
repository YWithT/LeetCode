/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    if(bits[bits.length-1] == '1') return false;
    var count = 0;
    for(i=bits.length-2; i>-1; i--){ //从后往前统计，直到出现第一个0时退出，统计和末尾0之间1的个数，只要1的个数为单数，必然是以10结尾
        if(bits[i] == 0) break;
        else count++;
    }
    return count % 2 == 0 ? true : false;
};

console.log(isOneBitCharacter([1, 1, 1, 0]))