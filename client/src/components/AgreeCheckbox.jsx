import React, { useState } from 'react';

export const AgreeCheckbox = (props) => {

    const [isActive, setActive] = useState(false);


    const toggleClass = (e) => {
        e.preventDefault();
        setActive(!isActive);

    }

    return (
        <>

            <div className={isActive ? 'argee_checkbox checked' : 'argee_checkbox'}
                onClick={(e) => toggleClass(e)}
            >
                <input type="checkbox" name="argee_checkbox" id="argee_checkbox" />
                <label htmlFor="argee_checkbox">{props.text}</label>
            </div>

        </>
    )
}
