import './App.css';
import ComponentePai from './components/ComponentePai';

function App(props) {
  return (
    <div>
     <h1>Olá {props.name}</h1>
     <strong>{props.primeira}</strong>
     <ComponentePai 
        terceira={"Essa props será renderizado no ComponentePai.js"}
        quarta={props.segunda}
     />
    </div>
  );
}

export default App;
