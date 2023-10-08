import React, { useEffect, useState } from "react";
import styled from "styled-components";
import InputCheckBox from "./InputCheckBox";
import TitleSeting from "./TitleSeting";

export const Cover = styled.div`
  width: 800px;
  height: 100%;
  border-radius: 10px;
  border: 1px solid grey;
  background-color: white;
  margin-left: 50px;
  margin-top: -50px;
`;

function Setting() {
  const [checked, setChecked] = useState();
  const Courses = [
    { id: 1, name: "Public" },
    { id: 2, name: "Curated Audience" },
    { id: 3, name: "Community Only" },
  ];
  const ArrayButton = ["Product", "Marketing", "Engineering", "Design"];
  const handleClick = () => {
  
  } 
  return (
    <Cover>
      <div className="setting">Setting</div>
      <div className="checkbox">
        <InputCheckBox
          title="I want to approve attendees"
          inputType="checkbox"
        />
      </div>
      <TitleSeting title="Privacy" />
      <div className="radio">
        {Courses.map((item) => (
          <div key={item.id}>
            <input
              type="radio"
              checked={checked === item.id}
              onChange={() => setChecked(item.id)}
            />
            {item.name}
          </div>
        ))}
      </div>
      <TitleSeting title="Tag your social" />
      <TitleSeting title="Pick tags for our curation engine to work its magin" />
      <div className="handle-setting">
      </div>
      <div className="button-setting">
        {ArrayButton.map((item,index) => (
          <div key={index}>
            <button onClick={handleClick} className="click-button">
              {item}
            </button>
            
          </div>
        ))}
      </div>
    </Cover>
  );
}

export default Setting;
