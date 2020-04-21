import React from "react";
import { RootState } from "../../../redux";
import { getCartItems, getTotalPrice } from "../../../helpers/getCartItems";
import { connect } from "react-redux";
import { Item, Header } from "semantic-ui-react";
import { priceFormat } from "../../../helpers/priceFormat";
import StripeCheckout, { Token }  from "react-stripe-checkout";
import axios  from "axios";

const mapStateToProps = (state: RootState) => ({
  cartItems: getCartItems(state),
  totalPrice: getTotalPrice(state)
});

type Props = ReturnType<typeof mapStateToProps>;

const UnconnectedCartItems: React.FC<Props> = ({ cartItems, totalPrice }) => {
  
  const handleToken = async (token: Token, id: number) => { 
    const product = cartItems
      .find(c => c.id === id);
    const response = await axios.post('http://localhost:4000/api/checkout'
    , {token, product});
    const { status } = response.data;
    if(status === 'success'){
      console.log('check email')
    }else { console.log('error')}
  }
  return (
    <>
      <Item.Group divided>
        {cartItems.map(cartItem => (
          <Item key={cartItem.id}>
            <Item.Image size="tiny" src={cartItem.img} />
            <Item.Content>
              <Item.Header>{cartItem.name}</Item.Header>
              <Item.Meta>
                <span className="price">{priceFormat(cartItem.price)}</span>
              </Item.Meta>
              <Item.Description>Quantity: {cartItem.quantity}</Item.Description>
              <StripeCheckout 
                stripeKey = "pk_test_b9WxNMjvj5p8SZLdxWmBGOjw00NJkBNjCv"
                token = {t => handleToken(t, cartItem.id)}
                billingAddress
                shippingAddress
                amount = {cartItem.price}
                name = {cartItem.name}
              />
            </Item.Content>
          </Item>
          
        ))}
      </Item.Group>
      <Header as="h3">Total Price: {priceFormat(totalPrice)}</Header>
     
    </>
  );
};

export const CartItems = connect(mapStateToProps)(UnconnectedCartItems);
