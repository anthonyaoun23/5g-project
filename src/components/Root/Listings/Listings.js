import React from "react";
import styled from "styled-components";

const Description = styled.p`
  margin-bottom: 0;
`;

const Listing = styled.div`
  padding: 1rem 0;

  :not(:last-child) {
    border-bottom: 1px solid ${props => props.theme.veryLightGrey};
  }
`;

const Title = styled.strong`
  display: block;
  font-size: 1.5rem;
  font-weight: 700;
`;

const Listings = () => {
  // const { data, loading, refetch } = useQuery(query);

  const data = [
    {
      id: 0,
      title: "Canada",
      links: ["https://aaoun.com", "https://google.com"]
    },
    { id: 1, title: "USA", links: ["https://aaoun.com", "https://google.com"] },
    {
      id: 2,
      title: "China",
      links: ["https://aaoun.com", "https://google.com"]
    }
  ];
  // if (loading) return "Loading...";

  return (
    <div>
      <h1>Listings</h1>
      <div>
        {data.map(country => (
          <Listing key={country.id}>
            <Title>{country.title}</Title>
            <Description>
              {country.links.map(link => (
                <span key={link}>
                  {link}
                  <br></br>
                </span>
              ))}
            </Description>
          </Listing>
        ))}
      </div>
    </div>
  );
};

export default Listings;
