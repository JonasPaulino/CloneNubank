import mongoose from 'mongoose';

const contatoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  agencia: {
    type: String,
    required: true
  },
  conta_corrente: {
    type: String,
    required: true
  }
});

const Contato = mongoose.model('Contato', contatoSchema);
export { Contato };