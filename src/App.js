import React from 'react'
import Pagination from './Pagination';
import Search from './Search';
import Stories from './Stories';
import "./App.css";
// import { useContext } from 'react';
// import { AppContext } from './context';
// import {useGlobalContext} from './context';

export const App = () => {

  // const data = useGlobalContext();

  return ( 
    <>
    
    <Search/>
    <Pagination/> 
    <Stories/>

    </>
  )
}

export default App;
