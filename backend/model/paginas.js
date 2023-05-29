import mongoose from 'mongoose';

const paginasSchema = new mongoose.Schema({
    imagemIcon: {
        type: String,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    pagina: {
        type: String,
        required: true
    }
});

const Paginas = mongoose.model('Paginas', paginasSchema);
export { Paginas };