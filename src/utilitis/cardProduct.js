import { getProductFromDb } from "./fakeDb"

export const cartItems = async () =>{
    const res = await fetch("products.json");
    const data = await res.json();
    console.log(data);
    const stroedProducts =  getProductFromDb();
    let cart = [];

        for (const id in stroedProducts) {
            let cartProduct;
            cartProduct =  data.find(pd => pd.id === id);
            cartProduct.quantity = stroedProducts[id];
            cart.push(cartProduct);
        }
 return cart;
}
