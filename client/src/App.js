import React from 'react';
import './App.css';

// import Hello from './components/Hello';
import HelloLazy from './components/HelloLazy';

function App() {
  return (
    <div className='App'>
      <h1>React App - ApolloClient - useLazyQuery</h1>
      <HelloLazy />
    </div>
  );
}

export default App;
