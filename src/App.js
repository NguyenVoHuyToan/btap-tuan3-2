import './App.css';
import Button from './component/Button';
import Content from './component/Content';
import Description from './component/Description';
import Header from './component/Header';
import Setting from './component/Setting';

function App() {
  return (
  <>
    <div style={{
      backgroundColor: "#fef452",
      height: "1000px"
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
    <Setting/>
    <Button/>
  </>
  );
}

export default App;
