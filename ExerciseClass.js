// Criando Classes de Clientes e retornando cada dado Especifico do Cliente

class Client{
    nome;
    idade;
    cpf;
    agencia;
    cidade;
    saldo;
  }
  
  const Client1 = new Client()

  Client1.agencia = 2619;
  Client1.cidade = 'Paulínia';
  Client1.cpf = 18726895414;
  Client1.nome = 'Lucas Alves'
  Client1.idade = 27;
  Client1.saldo = "R$"  + 2000.00;

  console.log(Client1)
  console.log()
  const Client2 = new Client()

  Client2.agencia = 2619;
  Client2.cidade = 'Valinhos';
  Client2.cpf = 47952368135;
  Client2.nome = 'Antônio Nascimento';
  Client2.idade = 42;
  Client2.saldo = "R$" + 4000.00;
  
  console.log(Client2)

  
  
  //Usando Classes e retornando apenas Agência,Nome,CPF do Client1 e Client2
  console.log()
  console.info('Retornando apenas Agência,Nome,Cpf')
  console.log()
  console.log('Agência: ' + Client1.agencia + ',' + 'Nome: ' + Client1.nome + ' CPF: ' + Client1.cpf)
  console.log('Agência: ' + Client2.agencia + ',' + 'Nome: ' +  Client2.nome + ' CPF: ' + Client2.cpf)
