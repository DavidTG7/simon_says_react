import wrong from "../../sounds/wrong.mp3";
import blue from "../../sounds/blue.mp3";
import green from "../../sounds/green.mp3";
import red from "../../sounds/red.mp3";
import yellow from "../../sounds/yellow.mp3";

export const playSound = (sound) => {
  const sounds = {
    blue,
    green,
    yellow,
    red,
    wrong,
  };
  var audio = new Audio(sounds[sound]);
  audio.play();
};

const options = ["blue", "red", "green", "yellow"];

export const randomChoice = (
  setIsActiveBlue,
  setIsActiveGreen,
  setIsActiveRed,
  setIsActiveYellow
) => {
  const index = Math.floor(Math.random() * 4);
  const optionSelected = options[index];

  switch (optionSelected) {
    case "blue":
      machineChoice(setIsActiveBlue, optionSelected);
      break;
    case "green":
      machineChoice(setIsActiveGreen, optionSelected);
      break;
    case "red":
      machineChoice(setIsActiveRed, optionSelected);
      break;
    case "yellow":
      machineChoice(setIsActiveYellow, optionSelected);
      break;
    default:
    // code block
  }

  return optionSelected;
};

function machineChoice(setter, option) {
  setTimeout(() => {
    setter(true);
    playSound(option);
    setTimeout(() => {
      setter(false);
    }, 300);
  }, 1000);
}

