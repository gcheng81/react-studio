// TODO: create a component that displays a single bakery item

export default function BakeryItem ({item, setCart}){
    return (
        <div>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <img src={item.image}/>
            <button onClick={() => setCart((prevCart) => [...prevCart, item])}>Add to Cart</button>
        </div>
    );
};