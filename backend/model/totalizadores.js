import mongoose from 'mongoose';

const totalizadoresSchema = new mongoose.Schema({
  saldoConta: {
    type: String,
    required: true
  },
  totalFatura: {
    type: String,
    required: true
  }
});

const Totalizadores = mongoose.model('Totalizadores', totalizadoresSchema);
export { Totalizadores };