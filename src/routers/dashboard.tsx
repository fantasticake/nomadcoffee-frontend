import { gql } from "@apollo/client";
import styled from "styled-components";
import Header from "../components/header";
import Loading from "../components/loading";
import { useSeeCoffeeShopLazyQuery } from "../generated/graphql";
import useSeeProfile from "../hooks/useSeeProfile";

const Container = styled.div``;

const Content = styled.div`
  width: 90%;
  max-width: 80rem;
  margin: 50px auto;
`;

const Name = styled.h1`
  font-size: 26px;
  color: ${props => props.theme.accent};
`;

gql`
  query SeeCoffeeShop($shopId: Int!) {
    seeCoffeeShop(shopId: $shopId) {
      ok
      error
      result {
        id
        name
      }
    }
  }
`;

const DashBoard = () => {
  const [seeCoffeeShop, { data, loading }] = useSeeCoffeeShopLazyQuery();
  const { loading: profileLoading } = useSeeProfile({
    onCompleted: ({ seeProfile: { ok, result } }) => {
      if (!loading && result?.coffeeShop?.id) {
        seeCoffeeShop({ variables: { shopId: result.coffeeShop.id } });
      }
    },
  });

  return profileLoading || loading ? (
    <Loading />
  ) : (
    <Container>
      <Header />
      <Content>
        <Name>{data?.seeCoffeeShop.result?.name}</Name>
      </Content>
    </Container>
  );
};

export default DashBoard;
