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

const Root = () => {
  const [initialised, setInitialised] = useState(true);

  useEffect(() => {
    //  .then(({ data }) => {
    //     setInitialised(true);
    //   });
  }, []);

  if (!initialised) return "Loading...";

  return (
    <Wrapper>
      <Container>
        <Content>
          <Listings />
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Root;
