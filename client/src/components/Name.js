import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const NAME = gql`
  query {
    name @client
  }
`;

export default function Name() {
  const { loading, error, data } = useQuery(NAME);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! {error}</p>;

  return (
    <div>
      <h2>{data && data.name}</h2>
    </div>
  );
}
