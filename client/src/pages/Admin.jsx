import React from 'react'
import { TypeModal } from '../components/AdminModal/TypeModal';
import { Modal } from '../components/Modal/Modal';
import { useState } from 'react';
import { BrandModal } from '../components/AdminModal/BrandModal';
import { ProductModal } from '../components/AdminModal/ProductModal';

export const Admin = () => {

    const [modalActive, setModalActive] = useState(false);
    const [component, setComponent] = useState('');

    return (
        <>
            <main className="admin_page page">
                <div className="wrapper">
                    <div className="admin_page-panel">
                        <button className="admin_page-btn" onClick={() => {
                            setModalActive(true);
                            setComponent(<TypeModal />)
                        }}>
                            <span>Add type</span>
                        </button>
                        <button className="admin_page-btn" onClick={() => {
                            setModalActive(true);
                            setComponent(<BrandModal />)
                        }}>
                            <span>Add brand</span>
                        </button>
                        <button className="admin_page-btn" onClick={() => {
                            setModalActive(true);
                            setComponent(<ProductModal />)
                        }}>
                            <span>Add product</span>
                        </button>
                    </div>
                </div>
            </main>
            <Modal active={modalActive} setActive={setModalActive} component={component} />
        </>
    )
}
