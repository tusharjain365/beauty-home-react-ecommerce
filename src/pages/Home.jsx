import {Cover, Services, FeaturedProducts, NewsLetter} from '../components';

const Home = ()=>{
    return(
        <main>
            <Cover />
            <FeaturedProducts />
            <Services />
            <NewsLetter />
        </main>
    )
}

export default Home;