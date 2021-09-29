import {FaTruck, FaCreditCard, FaCompass} from 'react-icons/fa';

export const links = [
    {
        id: 1,
        text:"Home",
        url:"/"
    },
    {
        id: 2,
        text:"About",
        url:"/about"
    },
    {
        id: 3,
        text:"Products",
        url:"/products"
    },
]

export const services = [
    {
        id :1,
        icon:<FaTruck/>,
        title: "home delivery",
        content:"We provide home delivery for your comfort. Every product available at your doorstep. you don't have to search in the market and get tired."
    },
    {
        id :2,
        icon:<FaCreditCard/>,
        title: "payment methods",
        content:"Various payment options are provided for your ease Credit Card, Internet Banking , Cash on Delivery etc along with discounts on payment from banks."
    },
    {
        id :3,
        icon:<FaCompass/>,
        title: "mission",
        content:"Our mission is to provide the best things to customize home at very affordable prices on our customers' doorsteps across whole country."
    },
]

export const fetch_products = 'https://course-api.com/react-store-products';
export const fetch_single_product = `https://course-api.com/react-store-single-product?id=`;