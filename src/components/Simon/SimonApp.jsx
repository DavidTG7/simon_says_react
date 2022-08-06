import { useState } from "react";
import {
  Button,
  SimonButtons,
  SimonMain,
} from "./SimonApp.styles";
import wrong from "../../sounds/wrong.mp3";
import blue from "../../sounds/blue.mp3";
import green from "../../sounds/green.mp3";
import red from "../../sounds/red.mp3";
import yellow from "../../sounds/yellow.mp3";

export const SimonApp = () => {
  const [isActiveBlue, setIsActiveBlue] = useState(false);
  const [isActiveGreen, setIsActiveGreen] = useState(false);
  const [isActiveRed, setIsActiveRed] = useState(false);
  const [isActiveYellow, setIsActiveYellow] = useState(false);
  let [userPicks, setUserPicks] = useState([]);

  const options = ["blue", "red", "green", "yellow"];

  const randomChoice = () => {
    const index = Math.floor(Math.random() * 4);
    const optionSelected = options[index];
    console.log(optionSelected);

    switch (optionSelected) {
      case "blue":
        setTimeout(() => {
          setIsActiveBlue(true);
          setTimeout(() => {
            setIsActiveBlue(false);
          }, 300);
        }, 1000);
        break;
      case "green":
        setTimeout(() => {
          setIsActiveGreen(true);
          setTimeout(() => {
            setIsActiveGreen(false);
          }, 300);
        }, 1000);
        break;
      case "red":
        setTimeout(() => {
          setIsActiveRed(true);
          setTimeout(() => {
            setIsActiveRed(false);
          }, 300);
        }, 1000);
        break;
      case "yellow":
        setTimeout(() => {
          setIsActiveYellow(true);
          setTimeout(() => {
            setIsActiveYellow(false);
          }, 300);
        }, 1000);
        break;
      default:
      // code block
    }
  };

  function playSound(sound) {
    const sounds = {
      blue,
      green,
      yellow,
      red
    }
    var audio = new Audio(sounds[sound]);
    audio.play();
  }

  const handleClick = (e) => {
    const value = e.target.value;
    console.log(value);
    setUserPicks([...userPicks, value]);
    playSound(value);
    // randomChoice();
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
