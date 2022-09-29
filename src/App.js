import React from 'react'
import ActivityList from './ActivityList';
import Dashboard from './Dashboard';
import Header from './Header';
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
    <Header/>
    <div style={{display:"flex", justifyContent:"space-around"}}>
    <NavBar />
    <Dashboard />
    <ActivityList/>
    </div>
    
    </div>
  );
}

export default App;
