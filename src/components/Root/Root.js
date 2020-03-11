import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Listings from "./Listings";

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin: 0 auto;
  witdh: 80rem;
`;

const Content = styled.div`
  flex: 1;
  margin-right: 1rem;
`;

const Sidebar = styled.div`
  flex: 0 auto;
  width: 10rem;
`;

const Wrapper = styled.div`
  box-sizing: border-box;
  height: 100%;
  padding: 1rem;
  width: 100%;
`;

const Button = styled.button`
  padding: 1em 2.1em 1.1em;
  border-radius: 3px;
  margin: 8px 8px 8px 8px;
  color: #fbdedb;
  background-color: #fbdedb;
  display: inline-block;
  background: #e74c3c;
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
  font-family: sans-serif;
  font-weight: 800;
  font-size: 0.85em;
  text-transform: uppercase;
  text-align: center;
  text-decoration: none;
  -webkit-box-shadow: 0em -0.3rem 0em rgba(0, 0, 0, 0.1) inset;
  -moz-box-shadow: 0em -0.3rem 0em rgba(0, 0, 0, 0.1) inset;
  box-shadow: 0em -0.3rem 0em rgba(0, 0, 0, 0.1) inset;
  position: relative;

  &:hover,
  &:focus {
    opacity: 0.8;
  }

  &:active {
    -webkit-transform: scale(0.8);
    -moz-transform: scale(0.8);
    -ms-transform: scale(0.8);
    -o-transform: scale(0.8);
    transform: scale(0.8);
  }

  user-select: none; /* supported by Chrome and Opera */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
`;

const Root = () => {
  const [mapView, setMapView] = useState(true);

  useEffect(() => {
    //  .then(({ data }) => {
    //     setInitialised(true);
    //   });
  }, []);

  return (
    <Wrapper>
      <Button onClick={() => setMapView(!mapView)}>
        View {mapView ? "list" : "map"}
      </Button>
      <Container>
        <Content>{mapView ? <h1>MAP</h1> : <Listings />}</Content>
      </Container>
    </Wrapper>
  );
};

export default Root;
