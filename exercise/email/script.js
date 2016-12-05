function getDomain(email) {
    let indexOfAt = email.indexOf("@");
    if (indexOfAt <= 0)
        return false;
    if (email.lastIndexOf("@") !== indexOfAt)
        return false;

    let domain = email.substr(indexOfAt + 1);
    return domain;
}

function isSameDomain(first, second){
    var firstDomain = getDomain(first);
    if (!firstDomain)
        return false;
    var secondDomain = getDomain(second);
    if (!secondDomain)
        return false;

    let result = firstDomain === secondDomain;
    return result;
}