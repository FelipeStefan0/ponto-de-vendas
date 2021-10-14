var venda = [];
var valorTotal = 0;
var vendaLista = '';
var indice;

function preIncluir() {
  var nome = document.getElementById('prodNome').value;
  var qtd = parseInt(document.getElementById('prodQtd').value);
  var preco = parseFloat(document.getElementById('prodPreco').value);
  var erro = document.getElementById('msgErro');
  if (nome.length == 0){
    erro.innerHTML = ' ▶ Os campos <strong>Nome, Quantidade e Preço</strong> não podem ficar vazios!';
  }
  else if (nome.length < 3) {
    erro.innerHTML = ' ▶ O <strong>Nome</strong> do produto precisa ter mais de 3 caracteres!';
    document.getElementById('prodNome').focus();
    document.getElementById('prodNome').style.borderColor = 'red';
  }
  else if (qtd < 0 || isNaN(qtd)) {
    document.getElementById('prodNome').style.borderColor = 'rgb(168, 168, 168)';
    erro.innerHTML = ' ▶ A <strong>Quantidade</strong> precisa ser um número e maior que 0!';
    document.getElementById('prodQtd').focus();
    document.getElementById('prodQtd').style.borderColor = 'red';
  }
  else if (preco <= 0 || isNaN(preco)) {
    document.getElementById('prodNome').style.borderColor = 'rgb(168, 168, 168)';
    document.getElementById('prodQtd').style.borderColor = 'rgb(168, 168, 168)';
    erro.innerHTML = ' ▶ O <strong>Preço</strong> precisa ser um número e maior que 0! Utilize . (ponto) no lugar de , (vírgula)!';
    document.getElementById('prodPreco').focus();
    document.getElementById('prodPreco').style.borderColor = 'red';
  }
  else {
    document.getElementById('prodNome').style.borderColor = 'rgb(168, 168, 168)';
    document.getElementById('prodQtd').style.borderColor = 'rgb(168, 168, 168)';
    document.getElementById('prodPreco').style.borderColor = 'rgb(168, 168, 168)';
    erro.innerHTML = ' ▶ ';
  }
}

function add() {
  var nome = document.getElementById('prodNome').value;
  var qtd = parseInt(document.getElementById('prodQtd').value);
  var preco = parseFloat(document.getElementById('prodPreco').value);
  var erro = document.getElementById('msgErro');
  var vendaDetalhe = {
    'nome': nome,
    'qtd': qtd,
    'preco': preco,
    'valor': (preco * qtd)
  }
  if (nome.length == 0){
    erro.innerHTML = ' ▶ Os campos <strong>Produto</strong>, <strong>Quantidade</strong> e <strong>Preço</strong> não podem ficar vazios!';
  }
  else if (nome.length < 3) {
    erro.innerHTML = ' ▶ O <strong>Nome</strong> do produto precisa ter mais de 3 caracteres!';
    document.getElementById('prodNome').focus();
    document.getElementById('prodNome').style.borderColor = 'red';
  }
  else if (qtd < 0 || isNaN(qtd)) {
    document.getElementById('prodNome').style.borderColor = 'rgb(168, 168, 168)';
    erro.innerHTML = ' ▶ A <strong>Quantidade</strong> precisa ser um número e maior que 0!';
    document.getElementById('prodQtd').focus();
    document.getElementById('prodQtd').style.borderColor = 'red';
  }
  else if (preco <= 0 || isNaN(preco)) {
    document.getElementById('prodNome').style.borderColor = 'rgb(168, 168, 168)';
    document.getElementById('prodQtd').style.borderColor = 'rgb(168, 168, 168)';
    erro.innerHTML = ' ▶ O <strong>Preço</strong> precisa ser um número e maior que 0! Utilize . (ponto) no lugar de , (vírgula)!';
    document.getElementById('prodPreco').focus();
    document.getElementById('prodPreco').style.borderColor = 'red';
  }
  else {
    document.getElementById('prodNome').style.borderColor = 'rgb(168, 168, 168)';
    document.getElementById('prodQtd').style.borderColor = 'rgb(168, 168, 168)';
    document.getElementById('prodPreco').style.borderColor = 'rgb(168, 168, 168)';
    venda.push(vendaDetalhe);
    inserir();
    resumoVendas()
    erro.innerHTML = ' ▶ Venda inserida com sucesso!'
  }
}

function valorCalc() {
  var qtd = document.getElementById('prodQtd').value;
  var preco = document.getElementById('prodPreco').value;
  var erro = document.getElementById('msgErro');
  if (qtd <= 0 || isNaN(qtd)) {
    document.getElementById('prodNome').style.borderColor = 'rgb(168, 168, 168)';
    erro.innerHTML = ' ▶ A <strong>Quantidade</strong> precisa ser um número e maior que 0!';
    document.getElementById('prodQtd').focus();
    document.getElementById('prodQtd').style.borderColor = 'red';
  }
  else if (preco <= 0 || isNaN(preco)) {
    document.getElementById('prodNome').style.borderColor = 'rgb(168, 168, 168)';
    document.getElementById('prodQtd').style.borderColor = 'rgb(168, 168, 168)';
    erro.innerHTML = ' ▶ O <strong>Preço</strong> precisa ser um número e maior que 0! Utilize . (ponto) no lugar de , (vírgula)!';
    document.getElementById('prodPreco').focus();
    document.getElementById('prodPreco').style.borderColor = 'red';
  }
  else {
    const precoFormat = parseFloat(preco).toFixed(2)
    valorTotal = qtd * precoFormat;
    document.getElementById('prodValor').value = valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    erro.innerHTML = ' ▶ ';
    document.getElementById('prodQtd').style.borderColor = 'rgb(168, 168, 168)';
    document.getElementById('prodPreco').style.borderColor = 'rgb(168, 168, 168)';
  }
}

function inserir() {
  vendaLista = ''
  for (var i = 0; i < venda.length; i++) {
    var vendaDetalhe = venda[i];
    var conteudo = '<tr>'
    conteudo = '<li>'
    conteudo += '<td>'
    conteudo += 'Produto: ' + '<strong>' + vendaDetalhe.nome + '</strong>';
    conteudo += '</td>'
    conteudo += '<td>'
    conteudo += ' ┆ '
    conteudo += 'Quantidade: ' + '<strong>' + vendaDetalhe.qtd.toFixed(0) + '</strong>' + ' Unidade(s)';
    conteudo += '</td>'
    conteudo += '<td>'
    conteudo += ' ┆ '
    conteudo += 'Preço Unitário: ' + '<strong>' + vendaDetalhe.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + '</strong>';
    conteudo += '</td>'
    conteudo += '<td>'
    conteudo += ' ┆ '
    conteudo += 'Valor Total: ' + '<strong>' + vendaDetalhe.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + '</strong>';
    conteudo += '</td>'
    conteudo += '<td>'
    conteudo += ' ┆ '
    conteudo += '<button type="button" onclick="delet(' + i + ')">Excluir</button>'
    conteudo += '</td>'
    conteudo += '</li>'
    conteudo += '</tr>'
    vendaLista += conteudo;
  }
  document.getElementById('vendaLista').innerHTML = vendaLista;
}

function mostrarResumoVenda() {
  resumoVendas()
  if (venda.length == 0) {
    document.getElementById('msgErro').innerHTML = ' ▶ Não existe itens na lista para serem mostrados!'
    document.getElementsByClassName('resumoVenda')[0].style.display='none';
  }
  else {
    document.getElementsByClassName('resumoVenda')[0].style.display='grid';
  }
}

function resumoVendas() {
  if (venda.length == 0) {
    document.getElementById('msgErro').innerHTML = ' ▶ Não existe itens na lista para serem mostrados!'
    document.getElementsByClassName('resumoVenda')[0].style.display='none';
  }
  else {
    var somatotal = 0;
    var produtosTotal = 0;
    for (var i = 0;i < venda.length;i++){
      somatotal += venda[i].valor;
      produtosTotal += venda[i].qtd;
    }
    document.getElementById('resumoVenda qtdVendida').innerHTML = `┇Quantidade de produtos vendidos: <span>${produtosTotal} Unidade(s)</span>┇`
    document.getElementById('resumoVenda valorPagar').innerHTML = `┇Valor total das vendas realizadas: <span>${somatotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>┇`
    var maior = 0;
    var listaMax = 0;
    var indexMax = 0;
    var j;
    for (j = 0; j < venda.length; j++) {
      if (maior < parseFloat(venda[j].preco)) {
        maior = parseFloat(venda[j].preco);
        listaMax = maior;
        indexMax = j + 1;
      }
    }
    document.getElementById('resumoVenda maisCaro').innerHTML = `┇Produto mais caro: <span>Produto ${indexMax} - ${listaMax.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>┇`
    var menor = 999999999;
    var listaMin = 0;
    var indexMin = 0;
    var i;
    for (i = 0; i < venda.length; i++) {
      if (menor > parseFloat(venda[i].preco)) {
        menor = parseFloat(venda[i].preco);
        listaMin = menor
        indexMin = i + 1;
      }
    }
    document.getElementById('resumoVenda maisBarato').innerHTML = `┇Produto mais barato:  <span>Produto ${indexMin} - ${listaMin.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>┇`
  }
}

function delet(indice) {
  venda.splice(indice, 1);
  inserir();
  resumoVendas();
  indice += 1
  document.getElementById('msgErro').innerHTML =  ' ▶ Venda '+ indice +' excluída com sucesso!'
  document.getElementById('resumoVenda qtdVendida').innerHTML = `┇Quantidade de produtos vendidos: <span>${produtosTotal-venda[indice].qtd} Unidade(s)</span>┇`
}