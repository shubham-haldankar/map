import './App.css';
import 'tachyons';

function App() {
  const fruits= [{name:'mango',color:'yellow'},{name:'apple',color:'red'},{name:'orange',color:'orange'}]
  return (
    <div className="App">
      <table border="1" className="center mt6">
      <tr>
      <td>fruit_name</td>
      <td>fruit_color</td>
      </tr>
      {
      fruits.map((item)=>
        <tr>
        <td>{item.name}</td>
        <td>{item.color}</td>
        </tr>
      )
    }
      </table>
    </div>
  );
}

export default App;
