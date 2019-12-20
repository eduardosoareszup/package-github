const moment = require('moment');


const AgoraSao = () => {
    console.log(`Agora são ${moment().format('HH:mm')}`);
}

module.exports = [
    AgoraSao
];
