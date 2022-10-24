import React, { useState } from 'react';
import './ProductList.css';
import ProductItem from '../ProductItem/ProductItem';
import { useTelegram } from '../../hooks/useTelegram';

const getTotalPrice = (items) => {
    return items.reduce((acc, item) => {
        return (acc += item.price);
    }, 0);
};

const ProductList = ({ products }) => {
    const { tg } = useTelegram();
    const [addedItems, setAddedItems] = useState([]);

    const onAdd = (product) => {
        const alreadyAdded = addedItems.find((item) => item.id === product.id);
        let newItems = [];

        if (alreadyAdded) {
            newItems = addedItems.filter((item) => item.id !== product.id);
        } else {
            newItems = [...addedItems, product];
        }

        setAddedItems(newItems);

        if (newItems.length === 0) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
            tg.MainButton.setParams({
                text: `Купить ${getTotalPrice(newItems)}`
            });
        }
    };

    return (
        <div className={'list'}>
            {products.map((item) => (
                <ProductItem
                    product={item}
                    onAdd={onAdd}
                    className={'item'}
                />
            ))}
        </div>
    );
};

export default ProductList;
