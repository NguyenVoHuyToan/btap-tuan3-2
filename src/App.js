import './App.css';
import Content from './component/Content';
import Description from './component/Description';
import Header from './component/Header';

function App() {
  return (
  <>
    <div style={{
      backgroundColor: "#fef452",
    }}>
      <div>
        <Header/>
      </div>
      <div>
        <Content/>
      </div>
      <div>
        <Description/>
      </div>
    </div>
  </>
  );
}

export default App;
