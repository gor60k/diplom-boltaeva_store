import React, { useContext, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../..';
import { createBrand, fetchBrands } from '../../http/productApi';
import { useForm } from 'react-hook-form';
import { SHOP_ROUTE } from '../../utils/consts';
import { useNavigate } from 'react-router-dom';

export const BrandModal = observer(() => {

    const { product } = useContext(Context);

    const navigate = useNavigate();

    useEffect(() => {
        fetchBrands().then(data => product.setBrands(data));
    }, []);

    const [name, setName] = useState('');

    const addBrand = () => {
        const brandData = new FormData();
        brandData.append("name", name);
        createBrand(brandData).then(data => product.setBrand(data)).then(() => {
            navigate(SHOP_ROUTE)
        });;
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
                <h2>Add brand</h2>
                <input type="text" className='pop-up_input'
                    placeholder='Brand name'
                    onInput={(e) => {
                        setName(e.target.value)
                    }}
                    {
                    ...register("name", {
                        required: true,
                    })
                    }
                />
                <button onClick={handleSubmit(addBrand)} className='base_button'>Add Brand</button>
            </div>

        </>
    )
})
