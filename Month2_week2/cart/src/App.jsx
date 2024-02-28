// import React, { useState } from 'react';
// import './ShoppingCart.css'; // Import the CSS file for styling

// const ShoppingCart = () => {
//   const [items, setItems] = useState([]);
//   const [name, setName] = useState('');
//   const [quantity, setQuantity] = useState(0);
//   const [price, setPrice] = useState(0);
//   const [size, setSize] = useState(''); // State for size

//   const handleNameChange = (e) => {
//     setName(e.target.value);
//   };

//   const handleQuantityChange = (e) => {
//     setQuantity(parseInt(e.target.value));
//   };

//   const handlePriceChange = (e) => {
//     setPrice(parseFloat(e.target.value));
//   };

//   const handleSizeChange = (e) => { // Handle size change
//     setSize(e.target.value);
//   };

//   const handleAddToCart = (e) => {
//     e.preventDefault();
//     const newItem = { name, quantity, price, size }; // Include size in newItem
//     setItems([...items, newItem]);
//     setName('');
//     setQuantity(0);
//     setPrice(0);
//     setSize('');
//   };

//   const calculateTotalPrice = () => {
//     return items.reduce((total, item) => total + item.quantity * item.price, 0);
//   };

//   return (
//     <div className="shopping-cart-container" style={{marginTop: '0'}}> {/* Apply inline CSS to set margin-top to 0 */}
//       <h1 style={{marginTop: '-280px'}}>Shopping Cart</h1>
//       <div className="form-container ">
//         <form onSubmit={handleAddToCart}>
//           <label style={{color: 'black' }}> 
//             Name:
//             <input type="text" value={name} onChange={handleNameChange} />
//           </label>
//           <br />
//           <label style={{color: 'black'}}> 
//             Quantity:
//             <input type="number" value={quantity} onChange={handleQuantityChange} />
//           </label>
//           <br />
//           <label style={{color: 'black'}}> 
//             Price:
//             <input type="number" value={price} onChange={handlePriceChange} />
//           </label>
//           <br />
//           <label style={{color: 'black'}}> 
//             Size:
//             <select value={size} onChange={handleSizeChange}>
//               <option value="">Select size</option>
//               <option value="S">S</option>
//               <option value="M">M</option>
//               <option value="L">L</option>
//             </select>
//           </label>
//           <br />
//           <button type="submit" style={{backgroundColor: 'lightblue'}}>Add to Cart</button> {/* Apply inline CSS to make button light blue */}
//         </form>
//       </div>
//       <div className="cart-section">
//         <h2>Cart</h2>
//         <table>
//           <thead>
//             <tr>
//               <th style={{backgroundColor: 'lightblue', color: 'black'}}>Name</th> {/* Apply inline CSS to set background color */}
//               <th style={{backgroundColor: 'lightblue', color: 'black'}}>Quantity</th>
//               <th style={{backgroundColor: 'lightblue', color: 'black'}}>Price</th>
//               <th style={{backgroundColor: 'lightblue', color: 'black'}}>Size</th> {/* Include Size column in table */}
//               <th style={{backgroundColor: 'lightblue', color: 'black'}}>Total Price</th>
//             </tr>
//           </thead>
//           <tbody>
//             {items.map((item, index) => (
//               <tr key={index}>
//                 <td>{item.name}</td>
//                 <td>{item.quantity}</td>
//                 <td>{item.price}</td>
//                 <td>{item.size}</td> {/* Display Size */}
//                 <td>{item.quantity * item.price}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <h3>Total Price: {calculateTotalPrice()}</h3>
//       </div>
//     </div>
//   );
// };

// export default ShoppingCart;
import React, { useState } from 'react';
import './ShoppingCart.css'; // Import the CSS file for styling

const ShoppingCart = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [size, setSize] = useState(''); // State for size
  const [removeName, setRemoveName] = useState('');
  const [removeQuantity, setRemoveQuantity] = useState(0);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const handlePriceChange = (e) => {
    setPrice(parseFloat(e.target.value));
  };

  const handleSizeChange = (e) => { // Handle size change
    setSize(e.target.value);
  };

  const handleRemoveNameChange = (e) => {
    setRemoveName(e.target.value);
  };

  const handleRemoveQuantityChange = (e) => {
    setRemoveQuantity(parseInt(e.target.value));
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    const newItem = { name, quantity, price, size }; // Include size in newItem
    setItems([...items, newItem]);
    setName('');
    setQuantity(0);
    setPrice(0);
    setSize('');
  };

  const handleRemoveFromCart = (e) => {
    e.preventDefault(); // Prevent default form submission
    const index = items.findIndex(item => item.name === removeName);
    if (index !== -1 && items[index].quantity >= removeQuantity) {
      const newItems = [...items];
      newItems[index].quantity -= removeQuantity;
      if (newItems[index].quantity === 0) {
        newItems.splice(index, 1);
      }
      setItems(newItems);
      setRemoveName('');
      setRemoveQuantity(0);
    }
};


  const calculateTotalPrice = () => {
    return items.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  return (
    <div className="shopping-cart-container">
        <h1 style={{marginTop: '-280px',paddingBottom:'110px'}}>Shopping Cart</h1>
        <div className='bet' style={{display:'flex', justifyContent:'space-evenly '}}>
          <div style={{paddingRight: '50px',paddingLeft: '50px', paddingBottom: '50px',boxShadow:'0px 0px 10px rgba(0, 0, 0, 3.2)' }}>
        <h2 style={{paddingTop: '50px' }}>Add to your cart</h2>
      <div className="form-container">
        <form onSubmit={handleAddToCart}>
        <label style={{color: 'black' }}> 
            Name:
            <input type="text" value={name} onChange={handleNameChange} />
          </label>
          <br />
          <label style={{color: 'black' }}> 
            Quantity:
            <input type="number" value={quantity} onChange={handleQuantityChange} />
          </label>
          <br />
          <label style={{color: 'black' }}> 
            Price:
            <input type="number" value={price} onChange={handlePriceChange} />
          </label>
          <br />
          <label style={{color: 'black' }}> 
            Size:
            <select value={size} onChange={handleSizeChange}>
              <option value="">Select size</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
            </select>
          </label>
          <br />
          <button type="submit" style={{backgroundColor: 'lightblue'}}>Add to Cart</button>
        </form>
      </div>
      </div>
      <div className="remove-form" style={{paddingTop:'50px',boxShadow:'0px 0px 10px rgba(0, 0, 0, 3.2)',paddingLeft: '50px',paddingRight: '50px' , paddingTop: '50px',alignItems:'center',alignContent:'center'}}>
        <h2>Remove from Cart</h2>
        <form  onSubmit={handleRemoveFromCart}>
        <label style={{color: 'black' }}> 
            Name:
            <input type="text" value={removeName} onChange={handleRemoveNameChange} />
          </label>
          <br />
          <label style={{color: 'black' }}> 
            Quantity:
            <input type="number" value={removeQuantity} onChange={handleRemoveQuantityChange} />
          </label>
          <br />
          <button type="submit" style={{backgroundColor: 'lightblue'}}>Remove</button>
        </form>
      </div>
      </div>
      <div className="cart-section">
        <h2>Cart</h2>
        <table style={{paddingTop:'50px',boxShadow:'0px 0px 10px rgba(0, 0, 0, 3.2)'}}>
          <thead>
            <tr>
            <th style={{backgroundColor: 'lightblue', color: 'black'}}>Name</th>
            <th style={{backgroundColor: 'lightblue', color: 'black'}}>Quantity</th>
            <th style={{backgroundColor: 'lightblue', color: 'black'}}>Price</th>
            <th style={{backgroundColor: 'lightblue', color: 'black'}}>Size</th>
            <th style={{backgroundColor: 'lightblue', color: 'black'}}>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>{item.size}</td>
                <td>{item.quantity * item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3>Total Price: {calculateTotalPrice()}</h3>
      </div>
    </div>
  );
};

export default ShoppingCart;
