import React from "react";
import ReactDOM from "react-dom";
import Courses from "./Components/Courses";
import Statistics from "./Components/Statistics";
import Button from "./Components/Button";
import "./index.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      good: 0,
      bad: 0,
      neutral: 0,
      maara: 0,
      average: 0,
    };
  }
  hyvaa = () => {
    this.setState({
      good: this.state.good + 1,
      maara: this.state.maara + 1,
      average: this.state.average + 1,
    });
  };
  neutraali = () => {
    this.setState({
      neutral: this.state.neutral + 1,
      maara: this.state.maara + 1,
    });
  };
  huono = () => {
    this.setState({
      bad: this.state.bad + 1,
      maara: this.state.maara + 1,
      average: this.state.average - 1,
    });
  };

  render() {
    const pos = (this.state.good / this.state.maara) * 100;
    const keskiarvo = this.state.average / this.state.maara;

    return (
      <>
        {this.state.maara === 0 ? <Courses /> : <p></p>}
        <h1>anna palautetta</h1>
        <Button handleClick={this.hyvaa} text="hyvä" />
        <Button handleClick={this.neutraali} text="neutraali" />
        <Button handleClick={this.huono} text="huono" />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          kesk={Number.isNaN(keskiarvo) ? 0 : keskiarvo.toFixed(1)}
          pos={pos.toFixed(1) + " %"}
        />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
