const moment = require('moment');

const Oi = (name) => {
    console.log(`Oi ${name}!`);
}

const AgoraSao = () => {
    console.log(`Agora são ${moment().format('HH:mm')}`);
}

module.exports = [
    Oi,
    AgoraSao
];

Oi('Eduardo');
AgoraSao();
