import React, { useContext, useState } from 'react';
import { ButtonComponent } from '../ButtonComponent';
import { ReactComponent as User } from '../../assets/icons/user.svg';
import { CSS } from '../../colors';
import { AgreeCheckbox } from '../AgreeCheckbox';
import { ReactComponent as Question } from '../../assets/icons/question.svg';
import { useNavigate } from 'react-router-dom';
import { registration, login } from '../../http/userAPI';
import {Context} from '../../';
import { SHOP_ROUTE } from '../../utils/consts';

export const ModalContent = () => {

    const {user} = useContext(Context);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const click = async() => {
        try {
            let data;
            if(active) {
                const response = await registration(email, password);
            } else {
                const response = await login(email, password);
            }
            user.setUser(user);
            user.setIsAuth(true);
            navigate(SHOP_ROUTE);

        } catch (e) {
            // alert(e.response.data.message)
        }
        
    }

    const [active, setActive] = useState(true);

    return (
        <>
            {active ?
                <div className="pop-up_reg">
                    <div className="pop-up_text-wrap">
                        <h2 className="pop-up_title">Registration</h2>
                        <p className="pop-up_text">If this is your first time on the site, then you should fill out a questionnaire so that we can keep a history of your orders</p>
                    </div>
                    <form className='pop-up_form' action="">
                        <input className='pop-up_input' type="text" placeholder='Your name' />
                        <input className='pop-up_input'
                            type="text"
                            placeholder='E-Mail'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <input className='pop-up_input' type="text" placeholder='Contact number' />
                        <input className='pop-up_input'
                            type="text"
                            placeholder='Password'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <input className='pop-up_input' type="text" placeholder='Country' />
                        <input className='pop-up_input' type="text" placeholder='City' />
                    </form>
                    <button className='base_button' onClick={click}>Complite registration</button>
                    <button className="pop-up_toggle-auth" onClick={() => setActive(false)} >
                        <User fill={CSS.brown} />
                        <span>Log in</span>
                    </button>
                    <AgreeCheckbox text={'I agree with the rules of personal data processing'} />
                </div>
                :

                <div className="pop-up_log">
                    <div className="pop-up_text-wrap">
                        <h2 className="pop-up_title">Authorization</h2>
                        <p className="pop-up_text">Please enter your username and password from your account to log in, or register</p>
                    </div>
                    <form className='pop-up_form' action="">
                        <div className="pop-up_input-wrap">
                            <input className='pop-up_input' type="text" placeholder='Your E-Mail' />
                        </div>
                        <div className="pop-up_input-wrap">
                            <input className='pop-up_input' type="text" placeholder='Password' />
                            <button className="pop-up_forgot-btn">
                                <span>Forgot your password?</span>
                                <Question />
                            </button>
                        </div>
                    </form>
                    <button className='base_button' onClick={click} >Log in</button>
                    <button className="pop-up_toggle-auth" onClick={() => setActive(true)} >
                        <User fill={CSS.brown} />
                        <span>Sign in</span>
                    </button>
                    <AgreeCheckbox text={'I agree with the rules of personal data processing'} />
                </div>
            }
        </>
    )
}