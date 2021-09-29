import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home, About, Products, SingleProduct, Checkout, Cart, Error, AuthWrapper } from './pages';
import { Navbar, Footer, SideDrawer } from "./components";

function App() {
  return (
    <AuthWrapper>
      <BrowserRouter>
        <Navbar />
        <SideDrawer />
        <Switch>
          <Route exact path="/"> <Home /> </Route>
          <Route exact path="/about"> <About /> </Route>
          <Route exact path="/products"> <Products /> </Route>
          <Route exact path="/product/:id" children={<SingleProduct />} />
          <Route exact path="/checkout"> <Checkout /> </Route>
          <Route exact path="/cart"> <Cart /> </Route>
          <Route path="*"> <Error /> </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </AuthWrapper>
  )
};

export default App;
