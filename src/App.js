import "./App.scss";
import Header from "./compenant/Header";
import Footer from "./compenant/Footer";
import Main from "./compenant/Main";

import { useState } from "react";

function App() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Main switchValue={switch1} setSwitch={setSwitch1} />
        <Main switchValue={switch2} setSwitch={setSwitch2} />
        <Main switchValue={switch3} setSwitch={setSwitch3} />

        <div
          className="result"
          style={{
            backgroundColor: switch1 && switch2 && switch3 ? "green" : "red",
          }}
        >
          {" "}
          <h1>
            {switch1 && switch2 && switch3 === true ? "Let's gooo" : "No Way!"}
          </h1>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
