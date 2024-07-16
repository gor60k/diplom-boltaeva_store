import { TypeBar } from '../../components/TypeBar/TypeBar';
import { ProductList } from '../../components/ProductList/ProductList';
import { observer } from 'mobx-react-lite';
import { useContext, useEffect } from 'react';
import { Context } from '../..';
import { fetchBrands, fetchProducts, fetchTypes } from '../../http/productApi';

const Shop = observer(() => {

    const { product } = useContext(Context);

    useEffect(() => {
        fetchTypes().then(data => product.setTypes(data));
        fetchBrands().then(data => product.setBrands(data));
        fetchProducts().then(data => product.setProducts(data));
    }, []);


    return (
        <>
            <main className="shop page">
                <div className="shop_tabs">
                    <TypeBar />
                </div>
                <div className="wrapper">
                    <div className="shop_content">
                        <div className="shop_categories">
                            <ProductList />
                        </div>
                    </div>
                </div>

            </main>
        </>
    )
})

export default Shop;
