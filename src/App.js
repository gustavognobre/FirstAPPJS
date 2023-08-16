import { useState } from 'react';
import Nome from './components/Nome';



function App() {

  const[aluno, setAluno] = useState('Sujeito Programador')
  function handleChangeName(nome){
    setAluno(nome);
    alert('Bacana')
  }
  return (
    <div >
      <h1> Bem Vindo ao meu primeiro projeto em react</h1><br/>
      <h2>Olá: {aluno}</h2>
      <button onClick={() => handleChangeName('Gustavo')}>
        Mudar Nome
      </button>
      <Nome aluno = "Pedro" idade = "25"/>
    </div>
  );
}

export default App;
