import logo from './logo.svg';
import './App.css';
import SayMyName from './componentes/SayMyName';
import Pessoa from './componentes/Pessoa';
import Frase from './componentes/Frase';
import List from './componentes/List';
function App() {
  return (
    <div className="App">
      <h1>Testando Css</h1>
      <Frase />
      <Frase />
      <SayMyName nome="José" />
      <SayMyName nome="Wesley" />
      <Pessoa nome="Gabriel" idade="24" profissao="Programador" foto="https://via.placeholder.com/150"/>
      <List />
      
    </div>
  );
}

export default App;
