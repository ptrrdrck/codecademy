const randNumb = num => {
    return Math.floor(Math.random() * num);
}

let message = [];

const dao = {
    readable: ['aaaa', 'bbbb', 'cccc', 'dddd', 'eeee'],
    poetic: ['poeticaaaa', 'poeticbbbb', 'poeticcccc', 'poeticdddd', 'poeticeeee'],
    scholarly: ['scholarlyaaaa', 'scholarlybbbb', 'scholarlycccc', 'scholarlydddd', 'scholarlyeeee'],
}

let rand = randNumb(dao['readable'].length);

for (let prop in dao) {
    switch(prop) {
        case 'readable':
            message.push(`The readable translation of chapter ${rand} by Stephen Mitchell: ${dao[prop][rand]}`)
            break
        case 'poetic':
            message.push(`The poetic translation of chapter ${rand} by Gia-Fu Feng and Jane English: ${dao[prop][rand]}`)
            break
        case 'scholarly':
            message.push(`The scholarly translation of chapter ${rand} by Stephen Addiss and Stanley Lombardo: ${dao[prop][rand]}`)
            break
        default:
            message.push('Could not fetch the translations.')
    }
}

const formattedMessage = text => {
    let formatted = message.join('\n');
    console.log(formatted);
}

formattedMessage(message);
