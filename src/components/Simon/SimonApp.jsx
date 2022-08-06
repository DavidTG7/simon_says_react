import { useState } from "react";
import {
  BottomButtons,
  Button,
  SimonButtons,
  SimonMain,
  TopButtons,
} from "./SimonApp.styles";
import sound from "../../sounds/sound.mp3";

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

    switch(optionSelected) {
      case 'blue':
        setTimeout(() => {
          setIsActiveBlue(true);
          setTimeout(() => {
            setIsActiveBlue(false);
          }, 300);
        }, 1000);
        break;
      case 'green':
        setTimeout(() => {
          setIsActiveGreen(true);
          setTimeout(() => {
            setIsActiveGreen(false);
          }, 300);
        }, 1000);
        break;
      case 'red':
        setTimeout(() => {
          setIsActiveRed(true);
          setTimeout(() => {
            setIsActiveRed(false);
          }, 300);
        }, 1000);
        break;
      case 'yellow':
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
    
    function playSound() {
      var audio = new Audio(sound);
      audio.play();
    }
    
    const handleClick = (e) => {
      const value = e.target.value;
      console.log(value);
      setUserPicks([...userPicks, value])
      // playSound();
      randomChoice();
      e.preventDefault();
    };
    
    console.log(userPicks);
  return (
    <SimonMain>
      <SimonButtons>
        <TopButtons>
          <Button
            active={isActiveBlue}
            value="blue"
            onClick={(active) => handleClick(active)}
          />
          <Button
            active={isActiveGreen}
            value="green"
            onClick={(active) => handleClick(active)}
          />
        </TopButtons>
        <BottomButtons>
          <Button
            active={isActiveRed}
            value="red"
            onClick={(active) => handleClick(active)}
          />
          <Button
            active={isActiveYellow}
            value="yellow"
            onClick={(active) => handleClick(active)}
          />
        </BottomButtons>
      </SimonButtons>
    </SimonMain>
  );
};
