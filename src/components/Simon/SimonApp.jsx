import { useState } from "react";
import { playSound, randomChoice } from "./helper";
import {
  Button,
  SimonButtons,
  SimonMain,
} from "./SimonApp.styles";


export const SimonApp = () => {
  const [isActiveBlue, setIsActiveBlue] = useState(false);
  const [isActiveGreen, setIsActiveGreen] = useState(false);
  const [isActiveRed, setIsActiveRed] = useState(false);
  const [isActiveYellow, setIsActiveYellow] = useState(false);
  let [userPicks, setUserPicks] = useState([]);

  

  const handleClick = (e) => {
    const value = e.target.value;
    console.log(value);
    setUserPicks([...userPicks, value]);
    playSound(value);
    randomChoice(setIsActiveBlue, setIsActiveGreen, setIsActiveRed, setIsActiveYellow);
    e.preventDefault();
  };

  console.log(userPicks);
  const buttonSatates = [
    {
      blueSate: isActiveBlue,
      color: "blue",
    },
    {
      greenState: isActiveGreen,
      color: "green",
    },
    {
      redState: isActiveRed,
      color: "red",
    },
    {
      yellowState: isActiveYellow,
      color: "yellow",
    },
  ];

  const allButtons = buttonSatates.map((item, i) => {
    const [state, color] = Object.values(item);

    return (
      <Button
        key={`button-${i}`}
        active={state}
        value={color}
        onClick={(active) => handleClick(active)}
      />
    );
  });

  return (
    <SimonMain>
      <SimonButtons>{allButtons}</SimonButtons>
    </SimonMain>
  );
};
