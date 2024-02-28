import React, { useState } from 'react';
import laptopImage from './images/laptop.jpg';
import toyImage from './images/toy.jpg';
import carImage from './images/car.jpg';
import ringImage from './images/ring.jpg';
import cupImage from './images/cup.jpg';
import airpodImage from './images/airpod.jpg';
import honeyImage from './images/honey.jpg'; 
import plateImage from './images/plate.jpg';
import ttImage from './images/tt.jpg';
import cuppImage from './images/cupp.jpg';
import furniImage from './images/furni.jpg';
import furImage from './images/fur.jpg';
import fuImage from './images/fu.jpg';
import laImage from './images/la.jpg';
import lapImage from './images/lap.jpg';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';

// TrendingItem Component
const TrendingItem = ({ name, price, description, sizes, imageUrl, addToCart }) => {
  const handleSize = (size) => {
    if (name === 'Honey') {
      return size;
    } else {
      return 'M';
    }
  };

  return (
    <div className="text-center">
      <img src={imageUrl} alt={name} className="mx-auto mb-4" style={{ width: '450px', height: '450px' }} />
      <h2 className="text-xl font-bold mb-2 text-black">{name}</h2>
      {/* <p className="text-black mb-2">{description}</p>
      <p className="text-gray-700 font-bold mb-2">${price}</p> */}
      {/* {sizes && (
        <p className="text-gray-700 font-bold mb-2">Available Sizes: {sizes.join(', ')}</p>
      )} */}
      {/* <p className="text-gray-700 font-bold mb-2">Size: {handleSize(sizes && sizes[0])}</p> */}
      {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={addToCart}>Add to Cart</button> */}
    </div>
  );
};

// Navigation Component
const Navigation = ({ cartCount, totalCartPrice, onCartClick, onProductsClick, onSearchClick, onHomeClick }) => (
  <nav className="bg-gray-50 p-4 text-black" style={{ boxShadow: '0 6px 12px rgba(0, 0, 0, 0.5)' }}>
    <ul className="flex justify-end items-right">
      <li>
        <button onClick={onHomeClick} className="text-xl bg-white font-bold">Home</button>
      </li>
      <li>
        <button onClick={onProductsClick} className="text-xl bg-white font-bold">Products</button>
      </li>
      <li>
        <button onClick={onCartClick} className="text-xl bg-white font-bold">Cart ({cartCount}) - Total: ${totalCartPrice.toFixed(2)}</button>
      </li>
      <li>
        <button onClick={onSearchClick} className="text-xl bg-white font-bold">Search</button>
      </li>
    </ul>
  </nav>
);



// Footer Component
const Footer = () => (
  <footer className="bg-gray-800 p-4 text-white text-center w-full">
    <p>&copy; 2024 E-Commerce Store. All rights reserved.</p>
  </footer>
);


const HomePage = ({ onProductsClick }) => {
  
  const [cartItems, setCartItems] = useState([]);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);

  const addToCartHandler = (product) => {
    // Check if the product already exists in the cart
    const existingProductIndex = cartItems.findIndex(item => item.name === product.name);

    if (existingProductIndex !== -1) {
      // If the product exists, update its quantity and price
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingProductIndex] = {
        ...updatedCartItems[existingProductIndex],
        quantity: updatedCartItems[existingProductIndex].quantity + 1,
        price: updatedCartItems[existingProductIndex].price + product.price
      };
      setCartItems(updatedCartItems);
    } else {
      // If the product is new, add it to the cart
      setCartItems(prevCartItems => [
        ...prevCartItems,
        { ...product, quantity: 1 }
      ]);
    }

    // Update the total price in the cart
    setCartTotalPrice(prevTotalPrice => prevTotalPrice + product.price);
  };


  return (
    <div className="p-4 text-center bg-white ">
      <h1 className="text-4xl font-bold mb-12 mt-12 text-black"> <i>WELCOME TO OUR E-COMMERCE WEBSITE</i> </h1>
      <a href="/shop" className="block mx-auto mb-8" style={{ width: '100%', height: '600px' }}>
        <img 
          src={plateImage} 
          alt="E-commerce Banner" 
          className="rounded-lg shadow-md w-full h-full"
        />
      </a>
      <h1 className="text-5xl font-bold mb-6 mt-12 text-black"> <i>CATEGORIES</i> </h1>
      <pre style={{textAlign:'center', color:'black'}}>Discover a world of endless possibilities 
        with our wide range of categories, 
        carefully curated just for you! </pre>
        <pre style={{textAlign:'center', color:'black'}}>Shop now and experience the ultimate online shopping experience at our E-Commerce Store! 🛒✨</pre>
      <h1 className="text-5xl font-bold mb-12 text-black mt-6">
        <button onClick={onProductsClick} className="text-3xl font-bold bg-blue-400 hover:bg-blue-700 text-white py-2 px-4 rounded">
          check
        </button>
      </h1>
      <div className="grid grid-cols-3 gap-12 mx-auto " style={{ paddingLeft:'80px', paddingRight:'80px' , height:'500px', boxShadow:'  0 4px 6px rgba(0, 0, 0, 0.1)'}}>
      <TrendingItem 
  name="laptop" 
  price={800} 
  description="" 
  imageUrl={laptopImage} 
  addToCart={() => addToCartHandler({ name: 'laptop', price: 800 })} // Pass the product object
/>
        <TrendingItem name="toy" price={302} description="" imageUrl={toyImage} addToCart={() => addToCartHandler({ name: 'toy', price: 302 })} />
        <TrendingItem name="car" price={25000000} description="" imageUrl={carImage} addToCart={() => addToCartHandler({ name: 'car', price: 25000000 })} />
      </div> 
      <h1 className="text-5xl font-bold mb-6 mt-52 text-black"> <i> OUR TRENDING ITEMS</i> </h1>
      <pre style={{textAlign:'center', color:'black'}}>Looking for the hottest items on the market? Look no further! Check out our trending selection </pre>
        <pre style={{textAlign:'center', color:'black'}}>and stay ahead of the curve with the latest and greatest products🛒✨</pre>
      <h1 className="text-3xl font-bold mb-12 text-black mt-6">
        <button onClick={onProductsClick} className="text-5xl font-bold bg-blue-400 hover:bg-blue-700 text-white py-2 px-4 rounded">
        check
        </button>
      </h1>
      <div className="grid grid-cols-3 gap-12 "style={{paddingLeft:'125px', paddingRight:'125px',  height:'500px', boxShadow:'  0 4px 6px rgba(0, 0, 0, 0.1)'}}>
        <TrendingItem name="ring" price={40000} description="" imageUrl={ringImage} />
        <TrendingItem name="cup" price={20} description="" imageUrl={cupImage} style={{marginBottom:'23px'}} />
        <TrendingItem name="airpod" price={30} description="" imageUrl={furImage} />
      </div> 
      
     
      <h1 className="text-5xl font-bold mb-6 mt-52 text-black"> <i> PRODUCTS</i> </h1>
      <pre style={{textAlign:'center', color:'black'}}>we pride ourselves on offering a wide selection of high-quality products </pre>
        <pre style={{textAlign:'center', color:'black'}}>Whether you're looking for electronics, toys, fashion accessories. 🛒✨</pre>
        <button onClick={onProductsClick} className="text-3xl font-bold bg-blue-400 hover:bg-blue-700 text-white py-2 px-4 rounded mt-6 mb-12">
          check
        </button>
    
      
      <div className="grid grid-cols-3 gap-12 "style={{paddingLeft:'125px', paddingRight:'125px',  height:'650px',boxShadow:'  0 4px 6px rgba(0, 0, 0, 0.1)'}}>
        <TrendingItem name="ring" price={40000} description="" imageUrl={honeyImage} />
        <TrendingItem name="cup" price={20} description="" imageUrl={fuImage} style={{marginBottom:'400px'}} />
        <TrendingItem name="airpod" price={30} description="" imageUrl={ttImage} />
      </div>
    </div>
  );
};

const HoneyPage = ({ addToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('M');
  const [totalPrice, setTotalPrice] = useState(12.99 * quantity); 
  const [redirectToConfirmation, setRedirectToConfirmation] = useState(false);


  const handleSizeChange = (selectedSize) => {
    setSize(selectedSize);
    calculateTotalPrice(selectedSize, quantity);
  };
const handleQuantityChange = (event) => {
  const value = parseInt(event.target.value);
  const newQuantity = value >= 1 ? value : 1;
  setQuantity(newQuantity);
  calculateTotalPrice(size, newQuantity); 
};

  const calculateTotalPrice = (selectedSize, selectedQuantity) => {
    let pricePerUnit = 12.99; 
    if (selectedSize === 'S') {
      pricePerUnit -= 2; 
    } else if (selectedSize === 'L') {
      pricePerUnit += 2; 
    }
    const total = pricePerUnit * selectedQuantity;
    setTotalPrice(total);
  };

  const handleAddToCart = () => {
    addToCart({
      id: 13,
      name: 'Honey',
      price: totalPrice,
      imageUrl: honeyImage,
      size: size,
      quantity: quantity,
    });
  };
  

  if (redirectToConfirmation) {
    // Redirect to confirmation page
    window.location.href = '/confirmation'; 
  }
  return (
    <div style={{ padding: '100px',backgroundColor: '#fff' }}>
      
      <div style={{ display: 'flex', marginBottom: '15px' , paddingleft:'180px', justifyContent:'space-around' }}>
        <div style={{ flex: '1', marginRight: '100px' }}>
        <img src={honeyImage} alt="Honey" style={{ width: '789px', height: '500px', paddingRight: '20px', paddingLeft: '102px', borderRadius: '0.5rem' }} />

        </div>
        <div style={{ flex: '2' }}>
          <p style={{ fontSize: '70px', fontWeight:'bold',marginBottom: '0.5rem', color: '#4B5563' }}>Natural Honey Bottle</p>
          <p style={{color:'#4B5563'}}>$99</p>
          <p style={{ fontSize: '1rem', color: '#6B7280' }}>Honey is a natural sweet substance produced by bees from the nectar of flowers. It has been used by humans </p>
          <p style={{ fontSize: '1rem', marginBottom: '1rem', color: '#6B7280' }}> for thousands of years as a sweetener, flavoring agent, and for its medicinal properties..</p>
          <p style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#4B5563' }}>Size:</p>
          <div style={{ marginBottom: '1rem' }}>
            <button onClick={() => handleSizeChange('S')} style={{ marginRight: '0.5rem', padding: '0.5rem 1rem', backgroundColor: '#6EE7B7', color: '#fff', borderRadius: '0.25rem', border: 'none', cursor: 'pointer' }}>S</button>
            <button onClick={() => handleSizeChange('M')} style={{ marginRight: '0.5rem', padding: '0.5rem 1rem', backgroundColor: '#6EE7B7', color: '#fff', borderRadius: '0.25rem', border: 'none', cursor: 'pointer' }}>M</button>
            <button onClick={() => handleSizeChange('L')} style={{ padding: '0.5rem 1rem', backgroundColor: '#6EE7B7', color: '#fff', borderRadius: '0.25rem', border: 'none', cursor: 'pointer' }}>L</button>
          </div>
          <p style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#4B5563' }}>Quantity:</p>
          <input type="number" value={quantity} onChange={handleQuantityChange} style={{ width: '4rem',backgroundColor: '#3B82F6', padding: '0.5rem', marginRight: '0.5rem', borderRadius: '0.25rem', border: '1px solid #D1D5DB', color: '#4B5563' }} />
          <button onClick={handleAddToCart} style={{ backgroundColor: '#3B82F6', color: '#fff', padding: '0.5rem 1rem', borderRadius: '0.25rem', border: 'none', cursor: 'pointer' }}>Add to Cart (${totalPrice.toFixed(2)})</button>
        </div>
      </div>
    </div>
  );
};
const SearchPage = ({ products, addToCart }) => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchMessage, setSearchMessage] = useState('');

  const handleSearchInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const searchTerm = query.toLowerCase();
    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm)
    );
    if (filteredProducts.length > 0) {
      setSearchResults(filteredProducts);
      setSearchMessage('');
    } else {
      setSearchResults([]);
      setSearchMessage('No products found.');
    }
  };

  const categoryButtons = [
    { name: 'Laptop', query: 'laptop' },
    { name: 'Toy', query: 'toy' },
    { name: 'Car', query: 'car' },
    { name: 'Ring', query: 'ring' },
    { name: 'Cup', query: 'cup' },
    { name: 'Airpod', query: 'airpod' },
    { name: 'furniture', query: 'furniture' },
  ];

  return (
    <div className="p-4 bg-white text-black">
      <h2 className="text-2xl font-bold mb-4">Search Products</h2>
      <p>You can search any category here. All you have to do is click from the .</p>
      <p>category and hit the search button. This will render all related products to your page</p>
      <p className='text-red-600'>ONCE YOU CHECK THE PRODUCT EXISTS NAVIAGE TO OUR PRODUCTS PAGE</p>
      <p className='mb-12'>Happy shopping!</p>
      
      <form onSubmit={handleSubmit} className="mb-4 flex justify-end">
        <div className="flex">
          <input
            type="text"
            value={query}
            onChange={handleSearchInputChange}
            placeholder="Enter product name..."
            className="border border-gray-100 px-4 py-2 rounded-md mr-6  text-white search-input w-6"
            style={{ width: '100%' }}
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white mr-48 rounded-md cursor-pointer"
          >
            Search
          </button>
        </div>
      </form>
      <h2 className='text-3xl ml-12 mb-6'>Categories</h2>
      <div className="flex flex-wrap">
        {categoryButtons.map((button, index) => (
          <button
            key={index}
            onClick={() => setQuery(button.query)}
            className="m-1 px-4 py-2 bg-gray-800 text-white rounded-md"
          >
            {button.name}
          </button>
        ))}
      </div>
      {searchMessage && <p>{searchMessage}</p>}
      {searchResults.length > 0 && (
        <div className="grid grid-cols-4 gap-4">
     {searchResults.map(product => (
  <div key={product.id} className="p-4 border bg-white rounded-lg overflow-hidden shadow-md searched-item">
    <img
      src={product.imageUrl}
      alt={product.name}
      className="mb-2 rounded-md object-cover w-full h-64"
    />
    <h2 className="text-lg font-bold">{product.name}</h2>
    <p className="text-gray-600">{product.price ? `$${parseFloat(product.price).toFixed(2)}` : 'Price not available'}</p>
    {/* <button
      onClick={() => {
        console.log("Adding to cart:", product); // Log the product object
        addToCart(product); // Ensure that addToCart is called with the product
      }}
      className="mt-4 pb-4 bg-blue-500 text-white px-4 py-2 rounded"
    >
      Add to Cart
    </button> */}
  </div>
))}

        
        </div>
      )}
    </div>
  );
};


const Cart = ({ cart, removeFromCart }) => {
  
  const totalCartPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const totalCartQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  const shippingCost = 5;
  const totalPriceWithShipping = totalCartPrice + shippingCost;
  const [isCheckoutClicked, setIsCheckoutClicked] = useState(false);

  const handleCheckout = () => {
    setIsCheckoutClicked(true);
  };

  return (
    <div className="p-32 w-full bg-white flex justify-between">
      {!isCheckoutClicked ? (
        <div style={{ paddingLeft: '123px', paddingRight: '300px', color: 'black' }}>
          <h2 className="text-2xl font-bold mb-4 text-center"> Your Shopping Cart</h2>
          <p className="text-xl font-bold mb-12 text-center ">Not ready to checkout? Continue Shopping</p>
          {cart.length === 0 ? (
            <p className="text-xl font-bold mb-4 text-gray-400 text-center"> Your cart is empty</p>
          ) : (
            <div>
              <ul>
                {cart.map(item => (
                  <li key={item.id} className="flex justify-between items-center border-b p-2">
                    <img src={item.imageUrl} alt={item.name} className="w-72
                     h-52 mr-6 " />
                    <div>
                      <p>{item.name}</p>
                      <p>Size: {item.size}</p>

                      <p>Quantity: {item.quantity}</p>
                      <span>${(item.price * item.quantity).toFixed(2)}</span> {/* Corrected calculation */}
                      <button onClick={() => removeFromCart(item.id)} className="text-red-500">
                        Remove
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ) : (
        <ConfirmationPage cart={cart} />
      )}
      {!isCheckoutClicked && (
        <div style={{ width: '100%' }}>
          <div className="text-right mr-64">
            <div>
              <p className="text-xl font-bold text-black">Total Quantity: {totalCartQuantity}</p>
              <p className="text-xl font-bold text-black">Subtotal: ${totalCartPrice.toFixed(2)}</p>
              <p className="text-xl font-bold text-black">Shipping: ${shippingCost.toFixed(2)}</p>
              <hr />
              <p className="text-xl font-bold text-black">Total Price (including shipping): ${totalPriceWithShipping.toFixed(2)}</p>
              <button
                onClick={handleCheckout}
                className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded pr-6"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


const ProductsPage = ({ products, addToCart, onHoneyClick }) => (
  <div className="p-4 w-full ml-4 bg-white">
    <h2 className="text-5xl font-bold mb-6 " style={{textAlign:'center' ,color:'black'}}>Products</h2>
    <div className="text-box">
  <p className='text-black text-xl'>Discover top-tier products tailored to your lifestyle on our platform. From sleek electronics to  </p>
  <p className='text-black text-xl mb-6'>trendy fashion accessories, we've curated a selection that meets your every need,</p>

</div>

    <div className="grid grid-cols-5 gap-12 ">
      {products.map(product => (
        <div key={product.id} className="p-4 border bg-white rounded-lg overflow-hidden shadow-md w-full">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="mb-2 rounded-md object-cover w-full h-64"  
          />
          <h2 className="text-lg font-bold">{product.name}</h2>
          <p className="text-gray-600">${product.price}</p>
          
          {product.name.toLowerCase() === 'honey' ? (
            <button onClick={onHoneyClick} className="mt-4 pb-4 bg-blue-800 text-white px-4 py-2 rounded">
              View Details
            </button>
          ) : (
            <button onClick={() => addToCart({...product, quantity: 1})} className="mt-4 pb-4 bg-blue-500 text-white px-4 py-2 rounded">
              Add to Cart
            </button>
          )}
        </div>
      ))}
    </div>
  </div>
);
const ConfirmationPage = ({ cart }) => {
  return (
    <div className="p-6 text-center bg-white">
      <h2 className="text-5xl font-bold mb-8 ml-72 text-black text-center">Order Confirmation</h2>
      {cart.length === 0 ? (
        <p className="text-5xl font-bold ml-72 text-red-500">You didn't buy anything, you poor soul!</p>
      ) : (
        <>
          <p className="text-4xl font-bold ml-72 mb-6 text-black">Thank you for your purchase!</p>
          <div className="mx-auto max-w-md text-left">
            <p className="text-4xl font-bold mb-12 text-black">You have bought:</p>
            {cart.map(item => (
              <div key={item.id} className={item.bought ? "bg-gray-200 rounded p-4 mb-2" : "mb-2"}>
                <p className="text-3xl text-black">
                  {item.name} x {item.quantity} {item.size ? `- Size: ${item.size}` : ''}
                </p>
              </div>
            ))}
          </div>
          <p className="text-2xl mt-4 text-red-500">Your order will be processed shortly.</p>
        </>
      )}
    </div>
  );
};





const App = () => {
  const [cart, setCart] = useState([]);
  const [currentPage, setCurrentPage] = useState('home');
  const products = [
    { id: 1, name: 'Laptop', price: 800, imageUrl: laptopImage },
    { id: 2, name: 'Toy', price: 302, imageUrl: toyImage },
    { id: 3, name: 'Honey', price: 30, imageUrl: honeyImage },
    { id: 4, name: 'Ring', price: 40000, imageUrl: ringImage },
    { id: 5, name: 'Cup', price: 20, imageUrl: cupImage },
    { id: 6, name: 'Airpod', price: 30, imageUrl: furImage },
    { id: 7, name: 'Furniture', price: 2000, imageUrl: furniImage },
    { id: 8, name: 'Furniture', price: 30, imageUrl: furImage },
    { id: 9, name: 'Furniture', price: 30, imageUrl: fuImage },
    { id: 10, name: 'Laptop', price: 30, imageUrl: laImage },
    { id: 11, name: 'Laptop', price: 30, imageUrl: lapImage },
    { id: 12, name: 'Car', price: 25000000, imageUrl: carImage },
 
    { id: 13, name: 'Toy', price: 30, imageUrl: ttImage },
    { id: 14, name: 'Cup', price: 30, imageUrl: cuppImage },
  ];

  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex(item => item.id === product.id);
  
    if (existingProductIndex !== -1) {
     
      const updatedCart = [...cart];
      updatedCart[existingProductIndex] = {
        ...updatedCart[existingProductIndex],
        quantity: updatedCart[existingProductIndex].quantity + product.quantity
      };
      setCart(updatedCart);
    } else {
      // If the product does not existtttt
      setCart(prevCart => [...prevCart, product]);
    }
  };
  

  const removeFromCart = (productId) => {
    const updatedCart = [...cart];
    const index = updatedCart.findIndex(item => item.id === productId);
    if (index !== -1) {
      if (updatedCart[index].quantity > 1) {
      
        updatedCart[index] = { ...updatedCart[index], quantity: updatedCart[index].quantity - 1 };
      } else {
        
        updatedCart.splice(index, 1);
      }
      setCart(updatedCart);
    }
  };
  

  const navigateToPage = (page) => {
    setCurrentPage(page);
  };

  let content;
  switch (currentPage) {
    case 'home':
      content = <HomePage onProductsClick={() => navigateToPage('products')} />;
      break;
    case 'products':
      content = <ProductsPage products={products} addToCart={addToCart} onHoneyClick={() => navigateToPage('honey')} />;
      break;
    case 'honey':
      content = <HoneyPage addToCart={addToCart} />;
      break;
    case 'search':
      content = <SearchPage products={products} addToCart={addToCart} />;
      break;
    case 'cart':
      content = <Cart cart={cart} removeFromCart={removeFromCart} />;
      break;
    default:
      content = <HomePage onProductsClick={() => navigateToPage('products')} />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation
        cartCount={cart.reduce((total, item) => total + item.quantity, 0)}
        totalCartPrice={cart.reduce((total, item) => total + item.price * item.quantity, 0)}
        onCartClick={() => navigateToPage('cart')}
        onProductsClick={() => navigateToPage('products')}
        onSearchClick={() => navigateToPage('search')}
        onHomeClick={() => navigateToPage('home')}
        onHoneyClick={() => navigateToPage('honey')}
      />
      <div className="flex-grow">
        {content}
      </div>
      <Footer />
    </div>
  );
};


export default App;
