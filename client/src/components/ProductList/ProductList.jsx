import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '../../index';
import { ProductItem } from '../ProductItem/ProductItem';

export const ProductList = observer(() => {
    const { product } = useContext(Context);

    return (
        <>
            <div className="product_list">
                {
                    product.product.map(product => (
                        <ProductItem
                            key={product.id}
                            product={product}
                        />
                    ))
                }
            </div>
        </>
    );
});
