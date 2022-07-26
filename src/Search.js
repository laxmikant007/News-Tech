import React from 'react'
import { useGlobalContext } from './context';
// import {useGlobalContext} from "./context";

export const Search = () => {
    const {query , searchPost } = useGlobalContext();
     return <>
     
    <div>
        <h1><u>Cyber-Tech-News!</u> </h1>
        <h1>By :-Laxmikant Saraswat 😎</h1>
        <form onSubmit={(e) => e.preventDefault()}>
            <div>
                <input type = "text" placeholder = "Search Your News Here!" 
                value = {query }
                onChange = {(e) => searchPost(e.target.value) } 
                />
            </div>
        </form>
    </div>


     
     
     
     
     
     </>
    
  
}
export default Search;