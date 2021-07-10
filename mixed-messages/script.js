const randNumb = num => {
    return Math.floor(Math.random() * num);
}

let message = [];

const dao = {
    readable: ['The tao that can be told is not the eternal Tao, the name that can be named is not the eternal Name. The unnamable is the eternally real. Naming is the origin of all material things. Free from desire, you realize the mystery. Caught in desire, you see only the manifestations. Yet mystery and manifestations arise from the same source. This source is called darkness. Darkness within darkness. The gateway to all understanding.', 'When people see some things as beautiful, other things become ugly. When people see some things as good, other things become bad. Being and non-being create each other. Difficult and easy support each other. Long and short define each other. High and low depend on each other. Before and after follow each other. Therefore the Master acts without doing anything and teaches without saying anything. Things arise and she lets them come; things disappear and she lets them go. She has but doesn’t possess, acts but doesn’t expect. When her work is done, she forgets it. That is why it lasts forever.', 'If you overesteem great men, people become powerless. If you overvalue possessions, people begin to steal. The Master leads by emptying people’s minds and filling their cores, by weakening their ambition and toughening their resolve. He helps people lose everything they know, everything they desire, and creates confusion in those who think that they know. Practice not-doing, and everything will fall into place.', 'The Tao is like a well: used but never used up. It is like the eternal void: filled with infinite possibilities. It is hidden but always present. I don’t know who gave birth to it. It is older than God.', 'The Tao doesn’t take sides; it gives birth to both good and evil. The Master doesn’t take sides; she welcomes both saints and sinners. The Tao is like a bellows: it is empty yet infinitely capable. The more you use it, the more it produces; the more you talk of it, the less you understand. Hold on to the center.'],
    poetic: ['The Tao that can be told is not the eternal Tao. The name that can be named is not the eternal name. The nameless is the beginning of heaven and Earth. The named is the mother of the ten thousand things. Ever desireless, one can see the mystery. Ever desiring, one sees the manifestations. These two spring from the same source but differ in name; this appears as darkness. Darkness within darkness. The gate to all mystery.', 'Under heaven all can see beauty as beauty only because there is ugliness. All can know good as good only because there is evil. Therefore having and not having arise together. Difficult and easy complement each other. Long and short contrast each other: High and low rest upon each other; Voice and sound harmonize each other; Front and back follow one another. Therefore the sage goes about doing nothing, teaching no-talking. The ten thousand things rise and fall without cease, Creating, yet not possessing. Working, yet not taking credit. Work is done, then forgotten. Therefore it lasts forever.', 'Not exalting the gifted prevents quarreling. Not collecting treasures prevents stealing. Not seeing desirable things prevents confusion of the heart. The wise therefore rule by emptying hearts and stuffing bellies, by weakening ambitions and strengthening bones. If men lack knowledge and desire, then clever people will not try to interfere. If nothing is done, then all will be well.', 'The Tao is an empty vessel; it is used, but never filled. Oh, unfathomable source of ten thousand things! Blunt the sharpness, Untangle the knot, Soften the glare, Merge with dust. Oh, hidden deep but ever present! I do not know from whence it comes. It is the forefather of the gods.', 'Heaven and Earth are impartial; They see the ten thousand things as straw dogs. The wise are impartial; They see the people as straw dogs. The space between heaven and Earth is like a bellows. The shape changes but not the form; The more it moves, the more it yields. More words count less. Hold fast to the center.'],
    scholarly: ['Tao called Tao is not Tao. Names can name no lasting name. Nameless: the origin of heaven and earth. Naming: the mother of ten thousand things. Empty of desire, perceive mystery. Filled with desire, perceive manifestations. These have the same source, but different names. Call them both deep - Deep and again deep: the gateway to all mystery.', 'Recognize beauty and ugliness is born. Recognize good and evil is born. Is and Isn\'t produce each other. Hard depends on easy, Long is tested by short, High is determined by low, Sound is harmonized by voice, After is followed by before. Therefore the sage is devoted to non action, Moves without teaching, Creates ten thousand things without instruction, Lives but does not own, Acts but does not presume, Accomplishes without taking credit. When no credit is taken, Accomplishment endures.', 'Don\'t glorify heroes, And people will not contend. Don\'t treasure rare objects, And no one will steal. Don\'t display what people desire, And their hearts will not be disturbed. Therefore, the Sage rules By emptying hearts and filling bellies, By weakening ambitions and strengthening bones; Leads people Away from knowing and wanting; Deters those who know too much From going too far: Practices non-action And the natural order is not disrupted.', 'Tao is empty- its use never exhausted. Bottomless - the origin of all things. It blunts sharp edges, Unties knots, Softens glare, Becomes one with the dusty world. Deeply subsistent - I don\'t know whose child it is. It is older than the Ancestor.', 'Heaven and Earth are not kind: The ten thousand things are straw dogs to them. The Sage is not kind: People are straw dogs to him. Yet Heaven and Earth And all the space between Are like a bellows: Empty but inexhaustible, Always producing more. Longwinded speech is exhausting. Better to stay centered.'],
}

let rand = randNumb(dao['readable'].length);

for (let prop in dao) {
    switch(prop) {
        case 'readable':
            message.push(`A readable translation of chapter ${(rand + 1)} by Stephen Mitchell: ${dao[prop][rand]}`)
            break
        case 'poetic':
            message.push(`A poetic translation of chapter ${(rand + 1)} by Gia-Fu Feng and Jane English: ${dao[prop][rand]}`)
            break
        case 'scholarly':
            message.push(`A scholarly translation of chapter ${(rand + 1)} by Stephen Addiss and Stanley Lombardo: ${dao[prop][rand]}`)
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
