import { gql } from "@apollo/client";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/header";
import { useDeleteCoffeeShopMutation } from "../generated/graphql";

const Container = styled.div``;

const Content = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  max-width: 80rem;
  margin: 40px auto;
`;

const Button = styled.button`
  background-color: tomato;
  color: white;
  padding: 10px 30px;
  border-radius: 10px;
`;

gql`
  mutation DeleteCoffeeShop($shopId: Int!) {
    deleteCoffeeShop(shopId: $shopId) {
      ok
      error
    }
  }
`;

const DeleteShop = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [deleteCoffeeShop, { loading }] = useDeleteCoffeeShopMutation({
    onCompleted: () => {
      navigate("/");
    },
  });

  const onDelete = () => {
    if (!loading) {
      deleteCoffeeShop({ variables: { shopId: +(id || 0) } });
    }
  };

  return (
    <Container>
      <Header />
      <Content>
        <Button onClick={onDelete}>Delete coffee shop</Button>
      </Content>
    </Container>
  );
};

export default DeleteShop;
