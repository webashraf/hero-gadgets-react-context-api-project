export const addToDb = id =>{
    let cart = {};
    
    const previousProduct = localStorage.getItem("shopping-cart");
    
    if (previousProduct){
        cart = JSON.parse(previousProduct);
    }
    
    const quantity = cart[id];
    console.log(quantity);
    if (quantity) {
        const newQuantity = quantity + 1;
        cart[id] = newQuantity;
    }
    else{
        cart[id] = 1;
    }
    
    
    localStorage.setItem("shopping-cart", JSON.stringify(cart));
}


export const getProductFromDb = () =>{
    let cartProducts = {}

    const storedCard = localStorage.getItem("shopping-cart");
    if (storedCard) {
        cartProducts = JSON.parse(storedCard);
    }
    return cartProducts;
}


export const removeFromDb = id => {
    const storedCard = localStorage.getItem("shopping-cart");
    if (storedCard) {
       const cartProducts = JSON.parse(storedCard);
        if (id in cartProducts) {
            delete cartProducts[id];
            localStorage.setItem("shopping-cart", JSON.stringify(cartProducts))
        }

    }
console.log('Clicked');
}

export const clearShoppingCart = () => localStorage.removeItem("shopping-cart");