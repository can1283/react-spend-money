import './App.css';
import {useState} from "react";

function App() {

    const productsData = [

        {
            "id": 1,
            "title": "quarter gold",
            "price": 95,
            "image": "https://cdn.ozanlargold.com/images/original/products/ceyrek-altin-yeni-tarihli-1623154142.jpg"
        },
        {
            "id": 2,
            "title": "House",
            "price": 260000,
            "image": "https://neal.fun/spend/images/single-family-home.jpg"
        },
        {
            "id": 3,
            "title": "Shoes",
            "price": 50,
            "image": "https://www.ayakkabicity.com/Uploads/UrunResimleri/buyuk/sanzelize-k-07-kadin-sneaker-ayakkabi-47cd.jpg"
        },
        {
            "id": 4,
            "title": "Car",
            "price": 60000,
            "image": "https://cdn-nq.toyzzshop.com/product/600x600/0f06b_Metal_Cek_Birak_Murat_131_Araba.jpg"
        },
        {
            "id": 5,
            "title": "Ship",
            "price": 80000000,
            "image": "https://i.ibb.co/sCbmRKV/Ekran-Resmi-2021-04-16-13-45-31.png"
        },
        {
            "id": 6,
            "title": "1 TL",
            "price": 0.1,
            "image": "https://iasbh.tmgrup.com.tr/802b79/0/0/0/0/0/0?u=http://i.sabah.com.tr/sb/galeri/dunya/1-tlnin-diger-ulke-paralari-karsisindaki-degeri/1.jpg"
        },
        {
            "id": 7,
            "title": "100 TL",
            "price": 10.5,
            "image": "https://i.ibb.co/vPpNrdb/Ekran-Resmi-2021-04-16-13-38-07.png"
        },
        {
            "id": 8,
            "title": "iPad Pro",
            "price": 1700,
            "image": "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/TeoriV2-106818-1_large.jpg"
        },
        {
            "id": 9,
            "title": "Bag",
            "price": 150,
            "image": "https://www.flowerayakkabi.com/Uploads/UrunResimleri/buyuk/beyaz-deri-sirt-cantasi-2a20.jpg"
        },
        {
            "id": 10,
            "title": "Diamond",
            "price": 157000000,
            "image": "https://us.123rf.com/450wm/tiero/tiero1602/tiero160200153/52851410-diamond-classic-cut-on-white-background.jpg?ver=6"
        },
        {
            "id": 11,
            "title": "Mona Lisa",
            "price": 2000000000,
            "image": "https://render.fineartamerica.com/images/rendered/square-product/small/images/artworkimages/mediumlarge/1/monalisa-with-white-background-sushil-deokar.jpg"
        },
        {
            "id": 12,
            "title": "8 Bread",
            "price": 1,
            "image": "https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/05120000/05120000-a957e2.jpg"
        },
        {
            "id": 13,
            "title": "chewing gum",
            "price": 0.5,
            "image": "https://productimages.hepsiburada.net/s/22/375/9952480460850.jpg"
        },
        {
            "id": 14,
            "title": "Year of Netflix",
            "price": 100,
            "image": "https://neal.fun/spend/images/year-of-netflix.jpg"
        },
        {
            "id": 15,
            "title": "Jet Ski",
            "price": 11000,
            "image": "https://neal.fun/spend/images/jet-ski.jpg"
        },
        {
            "id": 16,
            "title": "Cola",
            "price": 1,
            "image": "https://ayb.akinoncdn.com/products/2019/01/18/1796/b792f041-5479-4d5f-a74e-233d5da474bc_size780x780_quality60_cropCenter.jpg"
        },
        {
            "id": 17,
            "title": "Factory",
            "price": 11000000,
            "image": "https://www.freepngimg.com/thumb/machine/55396-5-factory-free-download-image.png"
        },
        {
            "id": 18,
            "title": "Cruise Ship",
            "price": 950000000,
            "image": "https://neal.fun/spend/images/cruise-ship.jpg"
        },
        {
            "id": 19,
            "title": "NBA Team",
            "price": 2250000000,
            "image": "https://neal.fun/spend/images/nba-team.jpg"
        },
        {
            "id": 20,
            "title": "Smartphone",
            "price": 700,
            "image": "https://neal.fun/spend/images/smartphone.jpg"
        },
        {
            "id": 21,
            "title": "Instagram App",
            "price": 100000000000,
            "image": "https://cdn.pixabay.com/photo/2016/08/09/17/52/instagram-1581266_1280.jpg"
        },
        {
            "id": 22,
            "title": "Twitter",
            "price": 41000000000,
            "image": "https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
        },
        {
            "id": 23,
            "title": "Kylian Mbappe",
            "price": 180000000,
            "image": "https://pbs.twimg.com/media/EwJSzanXMAcEAqd.jpg"
        },
        {
            "id": 24,
            "title": "F-35 Fighter Jet",
            "price": 90000000,
            "image": "https://upload.wikimedia.org/wikipedia/commons/6/61/F-35A_flight_%28cropped%29.jpg"
        }
    ]

    const [balance, setBalance] = useState(100000000000);
    const [products, setProducts] = useState(productsData);
    const [cart, setCart] = useState([]);

    const buyProduct = (product) => {
        if (balance >= product.price) {
            setBalance(balance - product.price);
            const updatedProducts = products.map((p) =>
                p.id === product.id ? { ...p, quantity: (p.quantity || 0) + 1 } : p
            );
            setProducts(updatedProducts);
            setCart([...cart, product]);
        }
    };

    const sellProduct = (product) => {
        const productIndex = cart.indexOf(product);
        if (productIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart.splice(productIndex, 1);
            setCart(updatedCart);
            setBalance(balance + product.price);
            const updatedProducts = products.map((p) =>
                p.id === product.id ? { ...p, quantity: (p.quantity || 1) - 1 } : p
            );
            setProducts(updatedProducts);
        }
    };

    return (
        <div>
            <h1>Spend Money</h1>
            <h2>Amount: ${balance}</h2>
            <div className="product-list">
                {products.map((product) => (
                    <div className="product-card" key={product.id}>
                        <img src={product.image}/>
                        <h3>{product.title}</h3>
                        <p>Price: ${product.price}</p>
                        <p>Buy Amount: {product.quantity || 0}</p>
                        {balance >= product.price && (
                            <button onClick={() => buyProduct(product)}>Buy</button>
                        )}
                    </div>
                ))}
            </div>
            <h2>Products</h2>
            <ul>
                {cart.map((product) => {
                    const quantity = cart.filter((item) => item.id === product.id).length;
                    if (quantity > 1) {
                        return (
                            <li key={product.id}>
                                {product.title} - ${product.price} (x{quantity})
                                <button onClick={() => sellProduct(product)}>Sell</button>
                            </li>
                        );
                    } else {
                        return (
                            <li key={product.id}>
                                {product.title} - ${product.price}
                                <button onClick={() => sellProduct(product)}>Sell</button>
                            </li>
                        );
                    }
                })}
            </ul>
            <p>Total Amount: ${cart.reduce((total, product) => total + product.price, 0)}</p>
        </div>
    );
}

export default App;