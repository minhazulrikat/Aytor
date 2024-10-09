import React, { useState, useEffect } from 'react';
import styles from "./Load.module.css"
import { RxCross2 } from "react-icons/rx";

const Load = () => {
   
    const [loading, setLoading] = useState(true);
    let Submit =(event)=>{
        event.preventDefault();
    }
let CrossPopup =()=>{
    setLoading(false)
}
    const handleCheckboxChange = (event) => {
        if (event.target.checked) {
            setLoading(false);
        }
    }

    if (loading) {
        return (
            <div className={`${styles.LoadParent} ${loading ? 'loading' : ''}`}>
                <form className={`${styles.LoadChild}`}>
                    <h2>Newsletter</h2>
                    <p>Seamlessly disseminate interoperable collaboration and idea-sharing via magnetic catalysts for change. Interactively enable competitive customer service.</p>
                    <div>
                        <span className={`${styles.cross}`}>
                            <RxCross2 onClick={CrossPopup}/>
                        </span>
                        <input type="text"  placeholder='Enter Keyword'/>
                        <button type='submit' onClick={Submit}>Subscribe</button>
                    </div>
                    <span id='checkbox'>
                        <input type="checkbox" name="popup" id="popup" onChange={handleCheckboxChange} />
                        <label htmlFor="popup" id="pupUpBox">Don't Show this PopUp Again</label>
                    </span>
                </form>
            </div>
        );
    } else {
        return null;
    }
};

export default Load;