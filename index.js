module.exports.creditCardValidate = cardno => {
    const re = /^\d{4}([ \-]?)((\d{6}\1?\d{5})|(\d{4}\1?\d{4}\1?\d{4}))$/gm;
    return re.test(cardno)
}