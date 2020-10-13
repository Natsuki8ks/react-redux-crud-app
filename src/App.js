import React from 'react';

function App() {
  return (
    <div className="App">
	<input type="text" onClick={() => { console.log("Hi")}}  />
	<input type="text" onChange={() => {console.log("editing")}} />
	<h1>Welcom to React</h1>
    </div>
  );
}

export default App;
