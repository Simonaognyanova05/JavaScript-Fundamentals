function santaSecretHelper(data) {
    let key = data.shift();
    let decryptArr = [];
    let template = /@(?<name>[A-Za-z]+)[^@\-!:>]*!(?<behavior>[G|N])!/;

    for (let i of data) {
        let strAfterDecrypt = '';

        if (i !== 'end') {
            for (let j of i) {
                let checkLetter = j.charCodeAt() - key;
                let decryptLetter = String.fromCharCode(checkLetter);
                strAfterDecrypt += decryptLetter;
            }

            decryptArr.push(strAfterDecrypt);
        }
        //  else {
        //     decryptArr.push(i);
        // }
    }

    let printArr = [];

    for (let element of decryptArr) {
        // if (element === 'end') break; // no need to check up

        let info = element.match(template);

        if (info === null) continue; // continue not break

        let name = info.groups.name;
        let behavior = info.groups.behavior;

        if (behavior === 'G') {
            printArr.push(name);
        }
    }

    console.log(printArr.join('\n'));
}