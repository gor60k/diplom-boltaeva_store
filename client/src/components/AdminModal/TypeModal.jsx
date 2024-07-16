import React, { useContext, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useForm } from 'react-hook-form';
import { Context } from '../..';
import { createType, fetchTypes } from '../../http/productApi';
import { useNavigate } from 'react-router-dom';
import { SHOP_ROUTE } from '../../utils/consts';

export const TypeModal = observer(() => {
    const { product } = useContext(Context);

    useEffect(() => {
        fetchTypes().then(data => product.setTypes(data));
    }, []);

    const navigate = useNavigate();

    const [name, setName] = useState('');

    const addType = () => {
        const brandData = new FormData();
        brandData.append("name", name);
        createType(brandData).then(data => product.setType(data)).then(() => {
            navigate(SHOP_ROUTE)
        });
    }

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors, isValid, isSubmitted },
    } = useForm();

    return (
        <>

            <div className="brand_modal admin_modal">
                <h2>Add type</h2>
                <input type="text" className='pop-up_input'
                    placeholder='Type name'
                    onInput={(e) => {
                        setName(e.target.value)
                    }}
                    {
                    ...register("name", {
                        required: true,
                    })
                    }
                />
                <button onClick={handleSubmit(addType)} className='base_button'>Add Type</button>
            </div>

        </>
    )
})
