import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const HELLO_NAME = gql`
  query HelloName($name: String) {
    hello(name: $name)
  }
`;

export default function HelloLazy() {
  const [name, setName] = useState('');

  const [helloName, { loading, error, data }] = useLazyQuery(HELLO_NAME);

  const handleChange = e => setName(e.target.value);

  const handleClick = () => helloName({ variables: { name } });

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error! {error}</p>}
      <h2>{data && data.hello}</h2>
      <input
        type='text'
        placeholder='...Name'
        value={name}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}
