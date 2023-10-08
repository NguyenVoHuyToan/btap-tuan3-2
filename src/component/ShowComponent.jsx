import React from "react";
import Content from "./Content";
import Description from "./Description";
import HeaderComponent from "./pageHeader/HeaderComponent";
import Setting from "./pageSetting/Setting";
import "./ShowComponent.css";

function ShowComponent() {
  return (
    <>
      <div className="show-cpn">
        <HeaderComponent />
        <Content />
        <Description
          title="Description"
          inputTupe="text"
          placeholder="Description of your event"
        />
        <Setting />
      </div>
    </>
  );
}

export default ShowComponent;
