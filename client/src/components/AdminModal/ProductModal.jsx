import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../..'
import { Dropdown } from 'react-bootstrap';
import { createProduct, fetchBrands, fetchProducts, fetchTypes } from '../../http/productApi';
import { useForm } from 'react-hook-form';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { SHOP_ROUTE } from '../../utils/consts';

export const ProductModal = observer(() => {

    const { product } = useContext(Context);

    useEffect(() => {
        fetchTypes().then(data => product.setTypes(data));
        fetchBrands().then(data => product.setBrands(data));
    }, []);

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [brandId, setBrandId] = useState(0);
    const [typeId, setTypeId] = useState(0);
    const [img, setImg] = useState('');

    const addProduct = () => {
        const productData = new FormData();
        productData.append("name", name);
        productData.append("price", price);
        productData.append("brandId", brandId.id);
        productData.append("typeId", typeId.id);
        productData.append("img", img);
        createProduct(productData).then(data => product.setProduct(data)).then(() => {
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

            <div className="product_modal admin_modal">
                <div className="admin_modal-wrap">
                    <h2>Add product</h2>
                    <Dropdown className='pop-up_dropdown'>
                        <Dropdown.Toggle className='pop-up_dropdown-toggle'>
                            {typeId.name || "Выберите тип"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu className='pop-up_dropdown-menu'>
                            {
                                product.types.map(type => (
                                    <Dropdown.Item onClick={() => setTypeId(type)} key={type.id}>{type.name}</Dropdown.Item>
                                ))
                            }
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className='pop-up_dropdown'>
                        <Dropdown.Toggle className='pop-up_dropdown-toggle'>
                            {brandId.name || "Выберите бренд"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu className='pop-up_dropdown-menu'>
                            {
                                product.brands.map(brand => (
                                    <Dropdown.Item onClick={() => setBrandId(brand)} key={brand.id}>{brand.name}</Dropdown.Item>
                                ))
                            }
                        </Dropdown.Menu>
                    </Dropdown>
                    <input type="text" className='pop-up_input' placeholder='product name' value={name}
                        onInput={(e) => {
                            setName(e.target.value)
                        }}
                        {
                        ...register("name", {
                            required: true,
                        })
                        } />
                    {errors.name?.type === "required" && (
                        <div style={{ color: "red", marginTop: "-15px" }}>
                            Поле не должно быть пустое
                        </div>
                    )}
                    <input type="text" className='pop-up_input' placeholder='product price' value={price}
                        onInput={(e) => {
                            setPrice(e.target.value)
                        }}
                        {
                        ...register("price", {
                            required: true,
                        })
                        } />
                    {errors.price?.type === "required" && (
                        <div style={{ color: "red", marginTop: "-15px" }}>
                            Поле не должно быть пустое
                        </div>
                    )}
                    <input type="file" className='pop-up_input'
                        onChange={(e) => {
                            console.log(e.target.files);
                            setImg(e.target.files[0]);
                        }}
                    />
                    <button onClick={handleSubmit(addProduct)} className='base_button' >Add Product</button>
                </div>
            </div>
        </>
    )
})
