import './App.css';
import { useEffect } from 'react';
import { useTelegram } from './hooks/useTelegram';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList/ProductList';
import Form from './components/Form/Form';

const products = [
    {
        id: '1',
        title: 'Джинсы',
        price: 5000,
        description: 'Синего цвета, прямые'
    },
    {
        id: '2',
        title: 'Куртка',
        price: 12000,
        description: 'Зеленого цвета, теплая'
    },
    {
        id: '3',
        title: 'Джинсы 2',
        price: 5000,
        description: 'Синего цвета, прямые'
    },
    {
        id: '4',
        title: 'Куртка 8',
        price: 122,
        description: 'Зеленого цвета, теплая'
    },
    {
        id: '5',
        title: 'Джинсы 3',
        price: 5000,
        description: 'Синего цвета, прямые'
    },
    {
        id: '6',
        title: 'Куртка 7',
        price: 600,
        description: 'Зеленого цвета, теплая'
    },
    {
        id: '7',
        title: 'Джинсы 4',
        price: 5500,
        description: 'Синего цвета, прямые'
    },
    {
        id: '8',
        title: 'Куртка 5',
        price: 12000,
        description: 'Зеленого цвета, теплая'
    }
];

function App() {
    const { tg } = useTelegram();

    useEffect(() => {
        tg.ready();
    }, []);

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route
                    index
                    element={<ProductList products={products} />}
                />
                <Route
                    path={'/form'}
                    element={<Form />}
                />
            </Routes>
        </div>
    );
}

export default App;
