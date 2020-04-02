import * as React from "react";
import { PureComponent } from "react";

export default class ControlPanel extends PureComponent {
  render() {
    return (
      <div className="control-panel">
        <h3>5g Around The World</h3>
        <p>
          Map sharing news and government articles related to 5g in countries
          around the world.
        </p>
        <p>Project for CSI2911</p>
      </div>
    );
  }
}
