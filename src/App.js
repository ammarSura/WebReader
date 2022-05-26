import './App.css';
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import PageDisplay from './components/PageDisplay';
import Content from './components/Content';
import NavBar from './components/NavBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useSpring, animated } from 'react-spring';
import Underliner from './components/Underliner';
import Annotate from './components/Annotate';




const theme = createTheme({
  palette: {
    primary: {
      main: "#a103fc",
    },
    secondary: {
      main: "#A4028E"
    }
    
  },
});




function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <div style={{}} id="main"> 
        <NavBar />
        <PageDisplay children={<Content/>}/>
        {/* <Annotate sx={{}}/> */}
      </div> 
      
    </ThemeProvider>
    
    
    
  );
}
  

export default App;
