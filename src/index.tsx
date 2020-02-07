import React from "react";
import ReactDOM from "react-dom";
import * as View from "./atoms/View";
import "./styles.css";

console.log(View);
function App() {
  return (
    <View.Div.animated.presence.ComponentPresenceDiv
      presenceKey="test"
      variants={{ exit: {} }}
    >
      ok
    </View.Div.animated.presence.ComponentPresenceDiv>
  );
}

const rootElement = document.getElementById("app");
ReactDOM.render(<App />, rootElement);
