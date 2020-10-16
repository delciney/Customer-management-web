export class Customer {
  constructor(
      public id: Number,
      public cnpj: String,
      public razaoSocial: String,
      public nomeFantasia: String,
      public email: String,
      public telefone: String,
      public nomeContato: String,
      public enderecoCep: String,
      public enderecoLogradouro: String,
      public enderecoNro: String,
      public enderecoBairro: String,
      public enderecoCidade: String,
      public enderecoEstado: String,
  ) { }
}
