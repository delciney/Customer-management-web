import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import axios from 'axios';
import { Customer } from 'src/models/customer.model';
const api = axios.create({
  baseURL: 'http://localhost:5000/v1/',
});

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public customers: Customer[] = [];
  public form: FormGroup;

  constructor(){
  this.GET();
  }

  async GET(){
    try {
    const response = await api.get("customers");
    console.log(response);
    this.customers = response.data;
    console.log(this.customers);

    } catch (error) {
    console.warn(error);
    }
  }

  async SHOW(id: Number){
  try {
  const response = api.get(`customers?id=${id}`);
  console.log(response);
  } catch (error) {
  console.warn(error);
  }
  }
  async POST(){
  try {
  const data = {
  CNPJ:"10607215000227",
  RazaoSocial:"Teste de Cadastro",
  NomeFantasia:"Teste",
  Email:"teste@teste.com.br",
  Telefone:"16992346460",
  NomeContato:"Teste",
  EnderecoCep:"14860000",
  EnderecoLogradouro:"Rua teste",
  EnderecoNro:"123",
  EnderecoBairro:"Vila Virginia",
  EnderecoCidade:"Ribeirão Preto",
  EnderecoEstado:"São Paulo"
  };
  const response = api.post("customers",data);
  console.log(response);
  } catch (error) {
  console.warn(error);
  }
  }
  async PUT(){
    try {
      const data = {
      ID:2,
      CNPJ:"10607215000227",
      RazaoSocial:"Teste de Cadastro 1",
      NomeFantasia:"Teste 1",
      Email:"teste@teste.com.br",
      Telefone:"16992346460",
      NomeContato:"Teste 1",
      EnderecoCep:"14860000",
      EnderecoLogradouro:"Rua teste 1",
      EnderecoNro:"1234",
      EnderecoBairro:"Vila Virginia",
      EnderecoCidade:"Ribeirão Preto",
      EnderecoEstado:"São Paulo"
      };
      const response = await api.put("customers",data);
      console.log(response);
    } catch (error) {
      console.warn(error);
    }
  }
  async DELETE(id: Number){
  try {
  const response = await api.delete(`customers?id=${id}`);
  console.log(response);
  } catch (error) {
  console.warn(error);
  }
  }

}
