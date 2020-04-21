import React, { useEffect } from "react";
import { Container, Header, Card } from "semantic-ui-react";
import { RootState } from "../../../redux";
import { bindActionCreators, Dispatch } from "redux";
import { requestProducts } from "../../../redux/actions/productActions";
import { connect } from "react-redux";
import { ProductCard } from "./ProductCard";

const mapStateToProps = (state: RootState) => ({
  products: state.products.products
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      requestProducts
    },
    dispatch
  );

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const UnconnectedShop: React.FC<Props> = ({ requestProducts, products }) => {
  useEffect(() => {
    if (products.length === 0) {
      requestProducts();
    }
  }, [requestProducts, products]);

  return (
    <Container>
      <Header as="h2">Shop</Header>
      <Card.Group>
        {products.map(product => (
          <ProductCard product={product} />
        ))}
      </Card.Group>
    </Container>
  );
};

export const Shop = connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedShop);
