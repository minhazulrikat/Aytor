import React from 'react';
import "./Grid.css"
const CommonGrid = ({Text}) => {
    return (
        <>
            <section className='grid-section'>
                <div className='container'>
                    <h2>{Text} - Grid</h2>
                    <p>Home / {Text}</p>

                </div>
            </section>
        </>
    );
};

export default CommonGrid;