<<<<<<< HEAD:server/models/countBodega.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var countBodegaSchema = new Schema({
    nombre: { type: String, required: [true, 'El nombre es necesario'] },
    cantidad: { type: String, required: [true, 'El precio únitario es necesario'] },
    bodega: { type: String, required: [true, 'la bodega es necesaria'] },

    valor: { type: String, required: [true, 'el valor es necesariaa'] },
});


=======
var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var countBodegaSchema = new Schema({
    nombre: { type: String, required: [true, 'El nombre es necesario'] },
    cantidad: { type: String, required: [true, 'El precio únitario es necesario'] },
    bodega: { type: String, required: [true, 'la bodega es necesaria'] },

    valor: { type: String, required: [true, 'el valor es necesariaa'] },
});


>>>>>>> Arreglando Errores:server/models/CountBodega.js
module.exports = mongoose.model('countBodega', countBodegaSchema);