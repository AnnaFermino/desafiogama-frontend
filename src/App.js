import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import './App.css';


const FormInput = styled.input`
border: 1px solid black;
width: 300px;
margin: 10px;
margin-top: 15px;
padding: 5px;
text-align: center;
font-family: 'Poppins', sans-serif;
`;

const FormSelect = styled.select`
border: 1px solid black;
width: 300px;
margin: 10px;
margin-top: 15px;
padding: 5px;
text-align: center;
font-family: 'Poppins', sans-serif;
`;

const Label = styled.label`
font-family: 'Poppins', sans-serif;
`

const ErrorSpan = styled.span`
  color: red;
  display: ${(props) => props.isError ? 'block' : 'none'};
`;

const MainDiv = styled.div`
padding: 5px;
font-family: 'Poppins', sans-serif;
background: linear-gradient(to right, #654ea3, #eaafc8);
width: 100%;
`;

const Header = styled.header`
text-align: center;
padding: 30px;
font-size: 40px;
`;

const Button = styled.button`
background: linear-gradient(to right, #0f0c29, #302b63, #24243e);
border-radius: 3px;
border: 2px solid white;
color: white;
margin: 0 auto;
padding: 10px;
justify-content: center;
width: 100%;
`;

const Container = styled.div`
text-align: center;
font-size: 20px;
color: white;
padding: 10px;
background: #654ea3;
margin-bottom: 15px;
`;

const Box = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
text-align: center;
`;

const App = () => {  

  const fetchAddress = async () => {
    const address = await axios.get(`https://viacep.com.br/ws/${form.cep}/json/`);
    setForm({ ...form, street: address.data.logradouro, district: address.data.bairro, city: address.data.localidade, state: address.data.uf });
  };

  const createCandidate = async (candidate) => {
    try {
      const user = await axios.post('https://desafiogama-backend.herokuapp.com/register', form);
      if (user.status === 200) {
        alert('Candidato cadastrado com sucesso');
      }   
    } catch (error) {
      setCpfError(true);
    } 
  };

  const [form, setForm] = useState({
    name: '',
    profession: '',
    role: '',
    birth: '',
    civil: '',
    gender: '',
    cep: '',
    street: '',
    number: '',
    district: '',
    city: '',
    state: '',
    telephone1: '',
    telephone2: '',
    cellphone: '',
    email: '',
    identity: '',
    cpf: '',
    car: '',
    license: ''
  });

const [cpfError, setCpfError] = useState(false);

  return (
    <MainDiv>    
      <Header>Banco de Currículos JobsNET</Header>
    <div>
      <Container>DADOS PESSOAIS</Container>
      <div>
        <Label>Nome Completo *</Label>
        <FormInput onChange= {(e) => {
          setForm({ ...form, name: e.target.value });
        }} value={form.name}></FormInput>
      </div>
      <Box>
      <div>
        <Label>Profissão *</Label>
        <FormInput onChange= {(e) => {
          setForm({ ...form, profession: e.target.value });
        }} value={form.profession}></FormInput>
      </div>         
      <div>
        <Label>Cargo Pretendido</Label>
        <FormInput onChange= {(e) => {
          setForm({ ...form, role: e.target.value });
        }} value={form.role}></FormInput>
      </div>
      </Box>
      <Box>
      <div>
        <Label>Data de Nascimento *</Label>
        <FormInput onChange= {(e) => {
          setForm({ ...form, birth: e.target.value });
        }} value={form.birth}></FormInput>
      </div>
      <div>
        <Label>Estado Civil</Label>
        <FormSelect onChange= {(e) => {
          setForm({ ...form, civil: e.target.value });
        }} value={form.civil}>
          <option value=""></option>
          <option value="solteiro">Solteiro</option>
          <option value="casado">Casado</option>
        </FormSelect>
      </div>
      <div>
        <Label>Gênero</Label>
        <FormSelect onChange= {(e) => {
          setForm({ ...form, gender: e.target.value });
        }} value={form.gender}>
          <option value=""></option>
          <option value="feminino">Feminino</option>
          <option value="masculino">Masculino</option>
          <option value="outro">Prefiro não declarar</option>
        </FormSelect>
      </div>
      </Box>
      <div>
        <Label>CEP *</Label>
        <FormInput onBlur={() => {
          fetchAddress();
        }} onChange= {(e) =>{
          setForm({ ...form, cep: e.target.value });
        }} value={form.cep}></FormInput>
      </div>
      <Box>
      <div>
        <Label>Logradouro *</Label>
        <FormInput onChange= {(e) => {
          setForm({ ...form, street: e.target.value });
        }} value={form.street}></FormInput>
      </div> 
      <div>
        <Label>Número *</Label>
        <FormInput onChange= {(e) => {
          setForm({ ...form, number: e.target.value });
        }} value={form.number}></FormInput>
      </div> 
      </Box>
      <Box>
      <div>
        <Label>Bairro *</Label>
        <FormInput onChange= {(e) => {
          setForm({ ...form, district: e.target.value });
        }} value={form.district}></FormInput>
      </div> 
      <div>
        <Label>Cidade *</Label>
        <FormInput onChange= {(e) => {
          setForm({ ...form, city: e.target.value });
        }} value={form.city}></FormInput>
      </div> 
      <div>
        <Label>Estado *</Label>
        <FormInput onChange= {(e) => {
          setForm({ ...form, state: e.target.value });
        }} value={form.state}></FormInput>
      </div>
      </Box>
      <Box> 
      <div>
        <Label>Telefone Fixo 1</Label>
        <FormInput onChange= {(e) => {
          setForm({ ...form, telephone1: e.target.value });
        }} value={form.telephone1}></FormInput>
      </div> 
      <div>
        <Label>Telefone Fixo 2</Label>
        <FormInput onChange= {(e) => {
          setForm({ ...form, telephone2: e.target.value });
        }} value={form.telephone2}></FormInput>
      </div>
      <div>
        <Label>Celular *</Label>
        <FormInput onChange= {(e) => {
          setForm({ ...form, cellphone: e.target.value });
        }} value={form.cellphone}></FormInput>
      </div>
      </Box>
      <div>
        <Label>E-mail *</Label>
        <FormInput onChange= {(e) => {
          setForm({ ...form, email: e.target.value });
        }} value={form.email}></FormInput>
      </div>     
      <Container>DOCUMENTOS</Container>
      <Box>
      <div>
        <Label>Identidade *</Label>
        <FormInput onChange= {(e) => {
          setForm({ ...form, identity: e.target.value });
        }} value={form.identity}></FormInput>
      </div> 
      <div>
        <Label>CPF *</Label>
        <FormInput onChange= {(e) => {
          setForm({ ...form, cpf: e.target.value });
        }} value={form.cpf}></FormInput>
        <ErrorSpan isError={cpfError}>CPF já cadastrado e/ou campos obrigatórios(*) não preenchidos!</ErrorSpan>
      </div>
      <div>
        <Label>Possui veículo?</Label>
        <FormSelect onChange= {(e) => {
          setForm({ ...form, car: e.target.value });
        }} value={form.car}>
        <option value=""></option>
        <option value="sim">Sim</option>
        <option value="não">Não</option>
        </FormSelect>
      </div> 
      <div>
        <Label>Habilitação</Label>
        <FormSelect onChange= {(e) => {
          setForm({ ...form, license: e.target.value });
        }} value={form.license}>
          <option value=""></option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="AB">AB</option>
          <option value="outro">Outro</option>
        </FormSelect>      
      </div>
      </Box>    
      <Button onClick={() => createCandidate()}>Enviar</Button>
    </div>
    </MainDiv>
  );
};

export default App;
