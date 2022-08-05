import { useState } from "react";
import {
  BottomButtons,
  Button,
  SimonButtons,
  SimonMain,
  TopButtons,
} from "./SimonApp.styles";

const options = ['blue', 'red', 'green', 'yellow'];

const randomChoice = () => {
  const index = Math.floor(Math.random() * 4);
  const optionSelected = options[index];
  console.log(optionSelected);
}


export const SimonApp = () => {
  let userPicks = [];
  
  const handleClick = (e) => {
    const value = e.target.value;
    console.log(value);
    userPicks.push(value)
    console.log(userPicks);
    randomChoice();
  }

  return (
    <SimonMain>
      <SimonButtons>
        <TopButtons>
          <Button value="blue" onClick={handleClick} color="blue" />
          <Button value="green" onClick={handleClick} color="green" />
        </TopButtons>
        <BottomButtons>
          <Button value="red" onClick={handleClick} color="red" />
          <Button value="yellow" onClick={handleClick} color="yellow" />
        </BottomButtons>
      </SimonButtons>
    </SimonMain>
  );
};
