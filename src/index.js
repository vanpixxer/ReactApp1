import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY =  'AIzaSyCFUMwqxCM3Fq2J8CQG4iogZGn94vOPcPo'; 


//Create a new component.  This component should
//produce some HTML
const App = function() {
  return <div>Hi!</div>;
}


// Take this component's generated HTML and put it
//on the page
ReactDOM.render(<App />, document.querySelector('.container'));
