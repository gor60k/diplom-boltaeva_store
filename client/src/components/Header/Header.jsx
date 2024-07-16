import { NavLink, useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import { ReactComponent as Search } from '../../assets/icons/search.svg';
import { ReactComponent as Card } from '../../assets/icons/card.svg';
import { ReactComponent as User } from '../../assets/icons/user.svg';
import { ReactComponent as Exit } from '../../assets/icons/exit.svg';
import { Modal } from '../Modal/Modal';
import { ModalCard } from '../ModalCard/ModalCard';
import { ModalContent } from '../ModalContent/ModalContent';
import { CSS } from '../../colors';
import { Context } from '../..';

export const Header = () => {
    const { user } = useContext(Context);
    const navigate = useNavigate();
    const [modalActive, setModalActive] = useState(false);
    const [component, setComponent] = useState('');
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const logOut = () => {
        user.setUser({});
        user.setIsAuth(false);
    }

    const headerClass = isScrolled ? 'header active' : 'header';
    return (
        <>

            <header className={headerClass}>
                <div className="header_wrapper">
                    <div className="header_list">
                        <li className="header_list-item">
                            <NavLink to={'/'}>Catalog</NavLink>
                        </li>
                        <li className="header_list-item">
                            <NavLink to={'/about'}>About</NavLink>
                        </li>
                        <li className="header_list-item">
                            <NavLink to={'/delivery'}>Delivery</NavLink>
                        </li>
                        <li className="header_list-item">
                            <NavLink to={'/admin'}>Admin</NavLink>
                        </li>
                    </div>
                    <div className="header_logo">
                        <Logo />
                    </div>
                    <div className="header_list">
                        <li className="header_list-item">
                            <NavLink to={'/contacts'}>Contacts</NavLink>
                        </li>
                        <div className="header_list-icons">
                            <button>
                                <Search />
                            </button>
                            <button onClick={() => {
                                setModalActive(true);
                                setComponent(<ModalCard />)
                            }}>
                                <Card />
                            </button>
                            <button onClick={() => {
                                setModalActive(true);
                                setComponent(<ModalContent />)
                            }}>
                                <User fill={CSS.textcolor} />
                            </button>
                            {user.isAuth &&
                                <button onClick={() => {
                                    logOut()
                                }}>
                                    <Exit fill={CSS.textcolor} width={14} height={16} />
                                </button>
                            }
                        </div>
                    </div>
                </div>
            </header>
            <Modal active={modalActive} setActive={setModalActive} component={component} />
        </>
    )
}
