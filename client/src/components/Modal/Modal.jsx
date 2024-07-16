import React from 'react'
import { ReactComponent as Cross } from '../../assets/icons/cross.svg';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';

export const Modal = ({ active, setActive, component }) => {

    return (
        <>
            <div className={active ? "modal_overflow active" : "modal_overflow"} >
                <div className="pop-up">
                    <div className="pop-up_top">
                        <div className="pop-up_cross-wrap">
                            <button className='pop-up_cross' onClick={() => setActive(false)}><Cross /></button>
                        </div>
                        <Logo />
                    </div>
                    <div className="pop-up_content">
                        {component}
                    </div>
                </div>
            </div>

        </>
    )
}
