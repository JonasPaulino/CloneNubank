import express from 'express';
import { Contato } from './model/contato.js';
import { Totalizadores } from './model/totalizadores.js';
import { Paginas } from './model/paginas.js';
import { conectarAoMongo } from './config/connect.js';
import cors from 'cors';


const app = express();

app.use(
    express.urlencoded({
        extended:true
    })
)

app.use(express.json())

app.use(cors('*'));

app.listen(3000)

app.post('/contato', async (request, response)=>{
    const { title, image, agencia, conta_corrente } = request.body;
    try {
        await conectarAoMongo();
       
        const novoContato = new Contato({
            title,
            image,
            agencia, 
            conta_corrente
          });

        await novoContato.save();

        response.json({ title, image, agencia,conta_corrente });
    }catch (err) {
        response.json(err);
    }
})

app.get('/contato', async (request, response)=>{
    await conectarAoMongo();
    const contatos = await Contato.find();
    response.json(contatos);
})

app.get('/contato/:chave_pix', async (request, response) => {
    const { chave_pix } = request.params;
  
    try {
      await conectarAoMongo();
      const contatos = await Contato.find({ chave_pix: chave_pix });
      response.json(contatos);
    } catch (err) {
      console.error('Erro ao buscar contatos por chave pix:', err);
      response.status(500).json({ erro: 'Erro ao buscar contatos por chave pix.' });
    }
  });


  app.put('/contato/:id', async (request, response) => {
    const { id } = request.params;
    const { nome, telefone, chave_pix } = request.body;
  
    try {
      await conectarAoMongo();
      const contatoAtualizado = await Contato.findByIdAndUpdate(
        id,
        { nome, telefone, chave_pix },
        { new: true }
      );
  
      if (!contatoAtualizado) {
        return response.status(404).json({ erro: 'Contato não encontrado.' });
      }
  
      response.json(contatoAtualizado);
    } catch (err) {
      console.error('Erro ao atualizar contato:', err);
      response.status(500).json({ erro: 'Erro ao atualizar contato.' });
    }
  });

  app.delete('/contato/:id', async (request, response) => {
    const { id } = request.params;
  
    try {
      await conectarAoMongo();
      const contatoRemovido = await Contato.findByIdAndDelete(id);
  
      if (!contatoRemovido) {
        return response.status(404).json({ erro: 'Contato não encontrado.' });
      }
  
      response.json({ mensagem: 'Contato removido com sucesso.' });
    } catch (err) {
      console.error('Erro ao excluir contato:', err);
      response.status(500).json({ erro: 'Erro ao excluir contato.' });
    }
  });
  

app.get('/totais', async (request, response)=>{
  await conectarAoMongo();
  const Totais = await Totalizadores.findOne();
  
  if (Totais) {
    response.json(Totais); // Retorna o objeto totalizador encontrado
  } else {
    response.status(404).json({ message: 'Nenhum totalizador encontrado.' });
}});

app.post('/totais', async (request, response)=>{
  const { saldoConta, totalFatura } = request.body;
  try {
      await conectarAoMongo();
     
      const novoTotal = new Totalizadores({
          saldoConta,
          totalFatura
        });

      await novoTotal.save();

      response.json({ saldoConta, totalFatura });
  }catch (err) {
      response.json(err);
  }
});

app.get('/paginas', async (request, response)=>{
  await conectarAoMongo();
  const paginas = await Paginas.find();
  
  if (paginas) {
    response.json(paginas); 
  } else {
    response.status(404).json({ message: 'Nenhuma pagina encontrada.' });
}});

app.post('/pagina', async (request, response)=>{
  const { imagemIcon, nome, pagina } = request.body;
  try {
      await conectarAoMongo();
     
      const novaPagina = new Paginas({
        imagemIcon,
        nome,
        pagina
      });

      await novaPagina.save();

      response.json({ imagemIcon, nome, pagina });
  }catch (err) {
      response.json(err);
  }
});