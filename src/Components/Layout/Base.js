import React from 'react';

const Base = props => (
    <div className="wrapper">
        <section className="section-container">
            { props.children }
        </section>
    </div>
)
export default Base;
