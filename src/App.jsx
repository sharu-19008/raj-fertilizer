import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from "./components/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Fertilizers from "./pages/Fertilizers"
import Seeds from "./pages/Seeds"
import Pesticides from "./pages/Pesticides"
import ShopLayout from "./components/ShopLayout"
import { ProductsContext } from './context/ProductsContext'
import { CartProvider } from './context/CartContext'
import products from "./data/data"
import ProductDetails from './pages/ProductDetails'
import CartDetails from './pages/CartDetails'
import Page404 from './components/Page404'
import CheckoutPage from './pages/CheckoutPage'
import { CheckoutProvider} from './context/CheckoutContext'
import ItemPurchased from './pages/ItemPurchased'
import CollectInfo from './pages/CollectInfo'
import Contact from './pages/Contact'
import { SortProvider } from './context/SortContext'
function App() {

  

  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <CheckoutProvider>

            <ProductsContext value={products}>
              <SortProvider>

                <Routes>
                  <Route path="/" element={<Layout />}>
                    <Route path="*" element={<Page404 />} />
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />

                      <Route path="shop" element={<ShopLayout />} >
                        <Route path="fertilizers">
                          <Route index element={<Fertilizers />} />
                          <Route path=":id" element={<ProductDetails />} />
                        </Route>
                        <Route path="pesticides">
                          <Route index element={<Pesticides />} />
                          <Route path=":id" element={<ProductDetails />} />
                        </Route>
                        <Route path="seeds">
                          <Route index element={<Seeds />} />
                          <Route path=":id" element={<ProductDetails />} />
                        </Route>
                      </Route>


                    <Route path="cart" element={<CartDetails />} />
                    <Route path="details" element={<CollectInfo />} />
                    <Route path="checkout" element={<CheckoutPage />} />
                    <Route path="item-purchased" element={<ItemPurchased />} />
                    <Route path="contact" element={<Contact />} />
                  </Route> 
                </Routes>

              </SortProvider>
            </ProductsContext>
          </CheckoutProvider>

        </BrowserRouter>
      </CartProvider>
      
    </>
  )
}

export default App
