module.exports.creditCardValidate = cardno => {
    const re = /^\d{4}([ \-]?)((\d{6}\1?\d{5})|(\d{4}\1?\d{4}\1?\d{4}))$/gm;
    return re.test(cardno)
}

module.exports.dateValidate = date => {
    const re = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    return re.test(date);
}

module.exports.mailValidate = email => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

module.exports.trPhoneValidate = phone => {
    phone = phone.split(' ').join('').split('+90').join('')
    return phone.length === 10
}

module.exports.specialCharacterValidate = text => {
    const re = /[!@#$%^&*(),.?":{}|<>]/g;
    return re.test(text);
}

module.exports.tcIDValidate = value => {
    value = value.toString();

    var isEleven = /^[0-9]{11}$/.test(value);
    var totalX = 0;

    for (var i = 0; i < 10; i++) {
        totalX += Number(value.substr(i, 1));
    }

    var isRuleX = totalX % 10 == value.substr(10, 1);
    var totalY1 = 0;
    var totalY2 = 0;

    for (var i = 0; i < 10; i += 2) {
        totalY1 += Number(value.substr(i, 1));
    }

    for (var i = 1; i < 10; i += 2) {
        totalY2 += Number(value.substr(i, 1));
    }

    var isRuleY = ((totalY1 * 7) - totalY2) % 10 == value.substr(9, 0);

    return isEleven && isRuleX && isRuleY;
}

module.exports.urlValidate = url => {
    const re = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
    return re.test(url);
}