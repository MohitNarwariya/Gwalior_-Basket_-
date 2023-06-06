import Company from "./component/administrator/Company";
import DisplayAllCompanies from "./component/administrator/DisplayAllCompanies";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import AdminLogin from "./component/administrator/AdminLogin";

import Banner from "./component/administrator/Banner";


import DashBoard from "./component/administrator/DashBoard";
import Home from "./component/userinterface/screens/Home";
import Home2 from "./component/userinterface/screens/Home2";
import HomePageDrawer from "./component/userinterface/usercomponents/HomePageDrawer";
import Footer from "./component/userinterface/usercomponents/Footer";
import Home3 from "./component/userinterface/screens/Home3";
import AllCategory from "./component/userinterface/screens/AllCategory";
import Cart from "./component/userinterface/screens/Cart";
import Product from "./component/userinterface/screens/Product";
import MakePayment from "./component/userinterface/screens/MakePayment";
function App() {
  return (
    <div>
     <Router>
      <Routes>
        <Route element={<Company/>} path={"/company"}/>
        <Route element={<DisplayAllCompanies/>} path={"/displayallcompanies"}/>
        <Route element={<Cart/>} path={"/cart"}/>       
        <Route element={<DashBoard/>} path={"/dashboard/*"}/>
        <Route element={<Home/>} path={"/home"}/>
        <Route element={<AdminLogin/>} path={"/adminlogin"}/>
        <Route element={<Product/>} path={"/Productscreen"}/>
       
        <Route element={<Home2/>} path={"/home2"}/>
        <Route element={<AllCategory/>} path={"/AllCategory"}/>
        <Route element={<MakePayment/>} path={"/makepayment"}/>
     
        {/* <Route element={<Home3/>} path={"/home3"}/> */}
        <Route element={<HomePageDrawer/>} path={"/homepagedrawer"}/>
        <Route element={<Footer/>} path={"/footer"}/>
        
      </Routes>
     </Router>
    </div>
  );
}

export default App;
