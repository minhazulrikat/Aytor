import React from 'react';
import styles from "./Search.module.css"
import { RxCross2 } from "react-icons/rx";
const Search = (props) => {
    
let Submit =(event)=>{
event.preventDefault();
}
let onCrossClick = ()=>{
    props.toSetSearch(false);
}
    return (
        <>
            <div className= {`${styles.SearchParent} ${props.getClick?styles.opened:''}`} >
                <form >
                <span className={`${styles.cross}`}>
                    <RxCross2 onClick={onCrossClick}/>
                </span>
                    <input type="text"  placeholder='Search'/>
                    <button type='submit' onClick={Submit}>Search</button>
                </form>
            </div>
        </>
    );
};

export default Search;