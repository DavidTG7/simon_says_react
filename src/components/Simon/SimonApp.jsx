import { useState } from "react";
import { playSound, randomChoice } from "./helper";
import { Button, CenterButton, CenterButtonWrapper, Level, SimonButtons, SimonMain } from "./SimonApp.styles";

export const SimonApp = () => {
  const [isActiveBlue, setIsActiveBlue] = useState(false);
  const [isActiveGreen, setIsActiveGreen] = useState(false);
  const [isActiveRed, setIsActiveRed] = useState(false);
  const [isActiveYellow, setIsActiveYellow] = useState(false);
  const [machinePicks, setMachinePicks] = useState([]);

  let level = machinePicks.length;

  let myIndex = 0;

  const start = () => {
    setMachinePicks([]);
    const newMachinePick = randomChoice(
      setIsActiveBlue,
      setIsActiveGreen,
      setIsActiveRed,
      setIsActiveYellow
    );
    setMachinePicks([newMachinePick]);

    myIndex = 0;
  };

  const checkUserClick = (value) => {
    if (value === machinePicks[myIndex]) {
      playSound(value);
      if (myIndex === machinePicks.length - 1) {
        setMachinePicks([
          ...machinePicks,
          randomChoice(
            setIsActiveBlue,
            setIsActiveGreen,
            setIsActiveRed,
            setIsActiveYellow
          ),
        ]);
        myIndex = 0;
        return;
      }
      // level += 1;
      myIndex += 1;
    } else {
      playSound("wrong");
      setTimeout(() => {
        alert(`Wrong! Try again... \nFinal score = ${level - 1}`);
      }, 300);
      setMachinePicks([]);
    }
  };
  console.log(level);

  const handleClick = (e) => {
    const value = e.target.value;
    checkUserClick(value);
    e.preventDefault();
  };

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
      <SimonButtons>
        <CenterButtonWrapper>
        {!machinePicks.length 
          ? <CenterButton onClick={start}>START</CenterButton>
          : <CenterButton levelTag>{level}</CenterButton>
        }

        </CenterButtonWrapper>
        {allButtons}
      </SimonButtons>
    </SimonMain>
  );
};
