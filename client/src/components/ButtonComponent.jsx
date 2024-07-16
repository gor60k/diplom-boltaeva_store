import React from 'react'

export const ButtonComponent = (props) => {

    return (
        <>
            <button className='base_button' onClick={props.onClick}>{props.text}</button>
        </>
    )
}
