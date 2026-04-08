const fs = require('fs');
const readline = require('readline');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function importar() {
  const caminhoArquivo = 'Taco_4a_edicao_2011 - CMVCol taco3.csv';
  const fileStream = fs.createReadStream(caminhoArquivo);
  
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  const alimentos = [];
  console.log('--- Iniciando Extração de Macros ---');

  for await (const linha of rl) {
    const colunas = linha.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);

    if (colunas[0] && !isNaN(parseFloat(colunas[0]))) {
      
      const limpar = (val) => {
        if (!val || val.includes('NA') || val.includes('Tr')) return 0;
        const n = parseFloat(val.replace(/"/g, '').replace(',', '.').trim());
        return isNaN(n) ? 0 : n;
      };

      alimentos.push({
        nome: colunas[1].replace(/"/g, '').trim(), 
        calorias: limpar(colunas[3]),    
        proteina: limpar(colunas[5]),    
        gordura: limpar(colunas[6]),     
        carboidrato: limpar(colunas[8])
      });
    }
  }

  console.log(`\n Extraídos ${alimentos.length} alimentos com sucesso.`);

  try {
    await prisma.alimento.deleteMany(); 
    await prisma.alimento.createMany({ data: alimentos });
    console.log('Banco populado com Nome, Calorias, Proteína, Gordura e Carbo!');
  } catch (error) {
    console.error('Erro ao salvar no banco:', error);
  } finally {
    await prisma.$disconnect();
  }
}

importar();