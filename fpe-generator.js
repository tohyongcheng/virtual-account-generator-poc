const _ = require('underscore');
const fe1 = require('node-fe1-fpe');

const SHARED_KEY = "SHARED_KEY";

const generateAccountNumber = (blockStart, blockEnd, currentCounter) => {
    var subMerchantCode = String(blockStart).slice(0, 4);
    var lowerBound = parseInt(String(blockStart).slice(subMerchantCode.length));
    var upperBound = parseInt(String(blockEnd).slice(subMerchantCode.length));
    const boundRange = upperBound - lowerBound + 1;
    const generatedNumber = lowerBound + fe1.encrypt(boundRange, currentCounter, SHARED_KEY, subMerchantCode);

    return subMerchantCode + generatedNumber;
}

module.exports = generateAccountNumber;
