import * as React from "react";
import { PureComponent } from "react";

export default class ControlPanel extends PureComponent {
  render() {
    return (
      <div className="control-panel">
        <h3>5G Around The World</h3>
        <p>
          Map sharing news and government articles related to 5G in countries
          around the world.
        </p>
        <p>Project for SEG2911</p>
      </div>
    );
  }
}
