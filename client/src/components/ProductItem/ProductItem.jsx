import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PRODUCTPAGE_ROUTE } from '../../utils/consts';

export const ProductItem = ({product}) => {
    
    const navigate = useNavigate();

    return (
        <>

            <div className="product_item" onClick={() => navigate(PRODUCTPAGE_ROUTE + '/' + product.id)}>
                <div className="product_item-img">
                    <img src={`http://localhost:5000/${product.img}`} alt={product.name} />
                </div>

                <div className="product_item-info">
                    <span className="product_item-name">{product.name}</span>
                    <span className="product_item-price">{`${product.price}$`}</span>
                </div>
            </div>

        </>
    )
}
