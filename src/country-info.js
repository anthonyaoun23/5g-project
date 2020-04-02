import * as React from "react";
import { PureComponent } from "react";

export default class CountryInfo extends PureComponent {
  render() {
    const { info } = this.props;
    console.log(info);

    return (
      <div>
        <div className="info-head">
          <span className="info-country">{info.country}</span>{" "}
          <img width={24} src={info.image} />
        </div>
        <div
          style={{ display: "flex", flexDirection: "column" }}
          className="info-links"
        >
          {info.links.map(link => (
            <a
              style={{ marginBottom: 6 }}
              target="_new"
              key={link.title}
              href={`${link.url}`}
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>
    );
  }
}
