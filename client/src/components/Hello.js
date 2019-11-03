import React from 'react';
import { useQuery, useApolloClient } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const HELLONAME = gql`
  query HelloName($name: String) {
    hello(name: $name)
  }
`;

export default function Hello() {
  const client = useApolloClient();

  const { name } = client.readQuery({
    query: gql`
      query {
        name @client
      }
    `,
  });

  const { loading, error, data } = useQuery(HELLONAME, {
    variables: { name },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! {error}</p>;

  // console.log('data: ', data);

  return (
    <div>
      <h2>{data.hello}</h2>
    </div>
  );
}
