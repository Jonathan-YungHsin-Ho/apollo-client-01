import React, { useState } from 'react';
import { useApolloClient } from '@apollo/react-hooks';

export default function Input() {
  const [name, setName] = useState('');
  const client = useApolloClient();

  const handleChange = e => setName(e.target.value);

  const handleClick = () => {
    client.writeData({ data: { name } });
    // console.log(client);
  };

  return (
    <div>
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
