import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊": "Smiling Face",
  "😔": "Sad Face",
  "😢": "Crying Face",
  "💧": "Droplet",
  "😪": "Sleepy Face",
  "😕": "Confused Face",
  "😑 ": "Expressionless Face",
  "😒 ": "Unamused Face",
  "🤧 ": "Sneezing Face",
  "😠": " Angry Face"
};

var emojiWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("Translation will appear here...");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "sorry we don't have this is our Database!";
    }

    setMeaning(meaning);
  }

  function onClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1> inside outtt </h1>
      <input
        onChange={emojiInputHandler}
        placeholder={"Search your emoji....."}
      />
      <h2 style={{ color: "red" }}> {meaning} </h2>

      <h3 style={{ color: "blue" }}> emojis we know</h3>
      {emojiWeKnow.map((emoji) => {
        return (
          <span
            key={emoji}
            onClick={() => onClickHandler(emoji)}
            style={{ cursor: "pointer", fontSize: "2rem", padding: ".5rem" }}
          >
            {" "}
            {emoji}
          </span>
        );
      })}
    </div>
  );
}

/**
 * things to notice
 * class --> className
 * style --> takes an object instead of ""
 *
 * VISER --. View -> Interact -> State in Event handler  -> Render
 */
