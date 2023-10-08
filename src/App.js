import { useState } from "react";
import "./App.css";
import Button from "./component/Button";
import Header from "./component/pageHeader/Header";
import HeaderComponent from "./component/pageHeader/HeaderComponent";
import DetailComponent from "./detail-component/DetailComponent";
import Content from "./component/Content";
import Description from "./component/Description";
import Setting from "./component/pageSetting/Setting";

function App() {
  const [show, setShow] = useState(true);
  const handleClick = () => {
    setShow(false);
  };
  return (
    <>
      {show ? (
        <div>
          <div className="background">
            <HeaderComponent />
            <Content />
            <Description
              title="Description"
              inputTupe="text"
              placeholder="Description of your event"
            />
          </div>
          <Setting />
          <Button onClick={handleClick} />
        </div>
      ) : (
        <div>
          <DetailComponent />
        </div>
      )}
    </>
  );
}

export default App;
