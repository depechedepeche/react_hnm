import React from 'react';
import { Navigate } from 'react-router-dom';
import ProductDetail from '../page/ProductDetail';

const PrivateRoute = ({ authenticate }) => {
  return authenticate === true ? <ProductDetail /> : <Navigate to="/login" />;
};

export default PrivateRoute;

//authenticate가 true일때 ProductDetail페이지로 가고 false일 경우 로그인 페이지로
