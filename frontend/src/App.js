import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from './components/Layout';
import Home from './pages/Home';

import Login from './components/Login'
import Register from './components/Register';
import  Transaction from './dashboard/Transaction';
import  TransactionPages from './pages/Transaction';
import Recharge from './pages/Recharge';
import Retrait from './pages/Retrait';
import Accounts from './pages/Accounts';
import ProtectedRoute from './components/ProtectedRoute';                     

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<ProtectedRoute />}>
          <Route path="/" element={<Layout />} >
          <Route path="/" element={<Home />} />

             <Route path="/recharge" element={<Recharge />} />
             <Route path="/Retirer" element={<Retrait />} />
             <Route path="/TransactionPages" element={<TransactionPages />} />
             <Route path="/accounts" element={<Accounts />} />

          </Route>
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/transaction" element={<Transaction />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
