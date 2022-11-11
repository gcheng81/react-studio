import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */



function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState([]);

  const listItem = cart.map(item =>
     
    <li>{item.name}</li>
  )

  const [price, setPrice] = useState(0);

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
      
      {bakeryData.map((item, index) => { // TODO: map bakeryData to BakeryItem components
        
        //<p>item {index}</p>
        // replace with BakeryItem component 
        return (
          <BakeryItem key={index} item={item} setCart={setCart} setPrice={setPrice}/>
        )
      })}

      <div>
        <h2>Cart</h2>
        {/* TODO: render a list of items in the cart */
        
        <ul>{listItem}</ul>}
        <h3>Total: ${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}</h3>
      </div>
    </div>
  );
}

export default App;
