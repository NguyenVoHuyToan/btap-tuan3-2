import './App.css';
import Button from './component/Button';
import Content from './component/Content';
import Description from './component/Description';
import Header from './component/Header';
import Setting from './component/Setting';

function App() {
  return (
  <>
    <div className='background'>
        <Header/>
        <Content/>
        <Description/>
    </div>
    <Setting/>
    <Button/>
  </>
  );
}

export default App;
