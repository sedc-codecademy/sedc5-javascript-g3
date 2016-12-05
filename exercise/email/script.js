function getDomain(email) {
    let indexOfAt = email.indexOf("@")+1;
    let domain = email.substr(indexOfAt);

    return domain;
}