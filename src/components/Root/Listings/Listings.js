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

  const data = {};
  // if (loading) return "Loading...";

  return (
    <div>
      <h1>Listings</h1>
      <div>
        {data.listings.map(listing => (
          <Listing key={listing.id}>
            <Title>{listing.title}</Title>
            <Description>{listing.description}</Description>
          </Listing>
        ))}
      </div>
    </div>
  );
};

export default Listings;
