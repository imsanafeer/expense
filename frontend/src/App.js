import React, {useState, useMemo} from 'react'
import styled from "styled-components";
import bg from './img/bg.png'
import {MainLayout} from './styles/Layouts'
import Orb from './Components/Orb/Orb'
import Navigation from './Components/Navigation/Navigation'
import Dashboard from './Components/Dashboard/Dashboard';
import Income from './Components/Income/Income'
import Expenses from './Components/Expenses/Expenses';
import { useGlobalContext } from './context/globalContext';
import './Components/Login';
import './Components/Singup';
import Signup from './Components/Singup';
import Login from './Components/Login';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';


function App() {

  const [active, setActive] = useState(1)

  const global = useGlobalContext()
  console.log(global);

  const displayData = () => {
    switch(active){
      case 1:
        return <Dashboard />
      case 2:
        return <Dashboard />
      case 3:
        return <Income />
      case 4: 
        return <Expenses />
      default: 
        return <Dashboard />
    }
  }

  const orbMemo = useMemo(() => {
    return <Orb />
  },[])

  
  const user = localStorage.getItem("token");

  return (
    

    <AppStyled bg={bg} className="App">
      <BrowserRouter>
      <Routes>
        			{user && <Route path="/" exact element={<Navigate to={displayData} />} /> }
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
      </Routes>
      </BrowserRouter>
      {orbMemo}
      <MainLayout>
     
        
      
        <Navigation active={active} setActive={setActive} />
        <main>
          {displayData()}
          
        </main>
        
        
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-color: #85FFBD;
background-image: linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%);
  padding:0;
  position: relative;
  main{
    flex: 2;
    background:transparent;
    height:100%;
    padding:0;
    overflow-x: auto;
    box-shadow:20px;
    border : 2px solid white;
    border-radius: 25px;
    &::-webkit-scrollbar{
      width: 0;
    }
  }
`;

export default App;
