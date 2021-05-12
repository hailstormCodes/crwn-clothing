export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};


export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
      cartItem => cartItem.id === cartItemToRemove.id
    )

    if (existingCartItem.quantity === 1) {
      return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }

    //Map over the Cart Items and if the ID is equal to the ID of the Cart Item to Remove, then spread in the rest of the properties and remove 1 from the quantity property. If the ID's do not match, return the cartItem object.
    return cartItems.map(cartItem => 
      cartItem.id === cartItemToRemove.id 
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
    );
};