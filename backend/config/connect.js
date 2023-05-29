import mongoose from 'mongoose';

async function conectarAoMongo() {
  const url = 'mongodb://localhost:27017/clone_nubank';

  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log('Conectado ao MongoDB!');
  } catch (err) {
    console.error('Erro ao conectar ao MongoDB:', err);
    throw err;
  }
}

export { conectarAoMongo };