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
  public mode: String = 'list';
  public form: FormGroup;

  constructor(private fb: FormBuilder){

  this.form = this.fb.group({
    id: [''],
    CNPJ: [''],
    RazaoSocial: [''],
    NomeFantasia: [''],
    Email: [''],
    Telefone: [''],
    NomeContato: [''],
    EnderecoCep: [''],
    EnderecoLogradouro: [''],
    EnderecoNro: [''],
    EnderecoBairro: [''],
    EnderecoCidade: [''],
    EnderecoEstado: [''],
  });

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
    this.mode = 'edit';
    const response = await api.get(`customers?id=${id}`);
    console.log(response);
  } catch (error) {
    console.warn(error);
  }
  }
  async POST(){
  try {
  const data = {
  CNPJ:this.form.controls['CNPJ'].value,
  RazaoSocial:this.form.controls['RazaoSocial'].value,
  NomeFantasia:this.form.controls['NomeFantasia'].value,
  Email:this.form.controls['Email'].value,
  Telefone:this.form.controls['Telefone'].value,
  NomeContato:this.form.controls['NomeContato'].value,
  EnderecoCep:this.form.controls['EnderecoCep'].value,
  EnderecoLogradouro:this.form.controls['EnderecoLogradouro'].value,
  EnderecoNro:this.form.controls['EnderecoNro'].value,
  EnderecoBairro:this.form.controls['EnderecoBairro'].value,
  EnderecoCidade:this.form.controls['EnderecoCidade'].value,
  EnderecoEstado:this.form.controls['EnderecoEstado'].value
  };
  const response = await api.post("customers",data);
  console.log(response);
  this.GET();
  } catch (error) {
  console.warn(error);
  }
  }
  async PUT(){
    try {
      const id = this.form.controls['id'].value;
      const data = {
        CNPJ:this.form.controls['CNPJ'].value,
        RazaoSocial:this.form.controls['RazaoSocial'].value,
        NomeFantasia:this.form.controls['NomeFantasia'].value,
        Email:this.form.controls['Email'].value,
        Telefone:this.form.controls['Telefone'].value,
        NomeContato:this.form.controls['NomeContato'].value,
        EnderecoCep:this.form.controls['EnderecoCep'].value,
        EnderecoLogradouro:this.form.controls['EnderecoLogradouro'].value,
        EnderecoNro:this.form.controls['EnderecoNro'].value,
        EnderecoBairro:this.form.controls['EnderecoBairro'].value,
        EnderecoCidade:this.form.controls['EnderecoCidade'].value,
        EnderecoEstado:this.form.controls['EnderecoEstado'].value
      };
      const response = await api.put(`customers?id=${id}`,data);
      console.log(response);
      this.mode = 'list';
      this.GET();
    } catch (error) {
      console.warn(error);
    }
  }
  async DELETE(id: Number){
  try {
  const response = await api.delete(`customers?id=${id}`);
  console.log(response);
  this.GET();
  } catch (error) {
  console.warn(error);
  }
  }

}
