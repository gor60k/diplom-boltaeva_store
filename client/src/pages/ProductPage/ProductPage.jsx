import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper/modules';
import { ButtonComponent } from '../../components/ButtonComponent';

const ProductPage = () => {
    const product = {
        id: 1,
        name: 'BEAUTY BOMB scaly monster',
        price: 2000,
        rating: 5,
        images: [
            {
                id: 1,
                img: 'product1.jpg'
            },
            {
                id: 2,
                img: 'product1.jpg'
            },
            {
                id: 3,
                img: 'product1.jpg'
            },
            {
                id: 4,
                img: 'product1.jpg'
            },
            {
                id: 5,
                img: 'product1.jpg'
            },
            {
                id: 6,
                img: 'product1.jpg'
            },
        ],
        discription: [
            {
                title: 'Product',
                text: 'A truly magical box that in a matter of seconds will make your eyebrows as natural as possible and at the same time expressive. The natural composition of all positions in this box guarantees the safe use of products. Try it to be sure!'
            },
            {
                title: 'Specifications',
                text: 'lorem2'
            },
            {
                title: 'Delivery',
                text: 'lorem3'
            },
        ]
    }

    // const [swiper, updateSwiper] = useState(null);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [counter, setCounter] = useState(0);

    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = index => {
        setActiveTab(index);
    }

    const increment = () => {
        setCounter(counter + 1)
    }

    const decrement = () => {
        setCounter(counter - 1)
    }

    useEffect(() => {
        if (counter > 1) {
            // Логика для увеличения цены при изменении счетчика
            const updatedPrice = product.price + ((counter - 1) * 2); // Увеличиваем цену на 100 за каждое увеличение счетчика, начиная со второго товара
            document.querySelector('.product_page-price').innerText = `${updatedPrice}$`;
        }
    }, [counter]);

    return (
        <>
            <main className="product_page page">
                <div className="product_page-wrapper">
                    <div className="product_page-swiper-container">
                        <Swiper className='product_page-swiper'
                            modules={[Thumbs]}
                            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                        >
                            {product.images.map(item => (
                                <SwiperSlide>

                                    <img key={item.id} src={require('../../assets/images/' + item.img)} alt="product" />

                                    {/* <img src={require('../../assets/images/' + product.img)} alt="" /> */}
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <Swiper className='product_page-thumbs'
                            slidesPerView={4}
                            onSwiper={setThumbsSwiper}
                            slideToClickedSlide='true'
                            modules={[Thumbs]}
                            direction='vertical'
                            spaceBetween={12}
                        >
                            {product.images.map(item => (
                                <SwiperSlide>

                                    <img key={item.id} src={require('../../assets/images/' + item.img)} alt="product" />

                                    {/* <img src={require('../../assets/images/' + product.img)} alt="" /> */}
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="product_page-controllers">
                        <div className="product_page-controllers-wrapper">
                            <h1 className="product_page-title">{product.name}</h1>
                            <div className="product_page-counter-price">
                                <div className="counter">
                                    <button className="counter_decrement"
                                        onClick={decrement}
                                    >-</button>
                                    <span className="counter_value">{counter}</span>
                                    <button className="counter_increment"
                                        onClick={increment}
                                    >+</button>
                                </div>
                                <span className="product_page-price">{`${product.price}$`}</span>
                            </div>
                            <ButtonComponent text={'Add to shopping cart'} />
                            <div className="product_page-tabs">
                                <div className="product_page-tabs-buttons">
                                    {
                                        product.discription.map((item, index) => (
                                            <button className={activeTab === index ? 'product_page-tabs-button active' : 'product_page-tabs-button'} key={index} onClick={() => handleTabClick(index)}>
                                                <span>
                                                    {item.title}
                                                </span>
                                            </button>
                                        ))
                                    }
                                </div>
                                <div className="product_page-tabs-contents">
                                    {
                                        product.discription.map((item, index) => (
                                            <div className={activeTab === index ? 'product_page-tabs-content open' : 'product_page-tabs-content'} key={index}>
                                                <span>
                                                    {item.text}
                                                </span>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default ProductPage;
