import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../../index';
import { fetchProducts, filterProducts } from '../../http/productApi';

export const TypeBar = observer(() => {
  const { product } = useContext(Context);

  const choose = () => {
    filterProducts({ type: product.selectedType, brand: product.selectedBrand }).then(data => product.setProducts(data));
  }

  return (
    <>
      <div className="types_bar">
        {
          product.types.map(type => (
            <span onClick={() => { product.setSelectedType(type); choose() }} className={type.id === product.selectedType?.id ? 'shop_tabs-item active' : 'shop_tabs-item'} key={type.id}>{type.name}</span>
          ))
        }
        <span onClick={() => { fetchProducts().then(data => product.setProducts(data)); product.setSelectedType(null);}} className={product.selectedType === null ? 'shop_tabs-item active' : 'shop_tabs-item'} >All</span>
      </div>
      <div className="brands_bar">
        {
          product.brands.map(brand => (
            <span onClick={() => { product.setSelectedBrand(brand); choose() }} className={brand.id === product.selectedBrand?.id ? 'shop_tabs-item active' : 'shop_tabs-item'} key={brand.id}>{brand.name}</span>
          ))
        }
        <span onClick={() => { fetchProducts().then(data => product.setProducts(data)); product.setSelectedBrand(null);}} className={product.selectedBrand === null ? 'shop_tabs-item active' : 'shop_tabs-item'}>All</span>

      </div>
    </>
  );
});
