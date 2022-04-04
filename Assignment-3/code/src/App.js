import React from 'react';
// import logo from './logo.svg';
import './App.css';
import CustomerInfo from './components/CustomerInfo';
import Header from './components/Header';
import OrderInfo from './components/OrderInfo';
import ProductList from './components/ProductList';



function App({information}) {
  return (
    <div className="site-container">
      <Header information={information}/>
      <CustomerInfo information={information}/>
      <OrderInfo information={information}/>
      <ProductList information={information}/>
    </div>
  );
}

export default App;
