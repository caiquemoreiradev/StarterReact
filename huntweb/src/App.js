import React from 'react';

import './styles.css';

import Routes from './routes';
import Header from './components/Header/Header';

const App = () => (
  <div className="App">
      <Header />
      <Routes />
    </div>
)

export default App;



//function App() {
  //   return (
  //     <div className="App">
  //       <h1>Hello Rocketseat</h1>
  //     </div>
  //   );
  // }