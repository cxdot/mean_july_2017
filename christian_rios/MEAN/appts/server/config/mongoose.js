let mongoose = require('mongoose');
let fs = require('fs');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/drappointments', { useMongoClient: true });

let models_path = __dirname + '/../models';

fs.readdirSync(models_path).forEach(file => {
    if (file.includes('.js')) {
        console.log(`loading ${file}...`);
        require(`${models_path}/${file}`);
    }
})