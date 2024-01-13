import React from 'react'

import { Routes, Route, Navigate} from 'react-router-dom'

import Home from '../pages/Home/Home'
import Cursos from '../pages/Cursos/Cursos'
import Login  from '../pages/Login/Login'


import Contact from '../pages/Contact/Contact'
import SellerProfile from '../pages/SellerProfile/SellerProfile'
import EditProfile from '../pages/EditProfile/EditProfile'
import Wallet from '../pages/Wallet/Wallet'
import NftDetails from '../pages/NftDetails/NftDetails'

const Routers = () => {
  return (
    <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/login" element={<Login />} />


        <Route path="/contact" element={<Contact />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/seller-profile" element={<SellerProfile />} /> 
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/market/:id" element={<NftDetails />} />          
        
    </Routes>
  )
}
export default Routers