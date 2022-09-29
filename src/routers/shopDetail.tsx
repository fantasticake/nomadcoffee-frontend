import { gql } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/button";
import Header from "../components/header";
import Loading from "../components/loading";
import {
  useSeeCoffeeShopQuery,
  useSeeProfileQuery,
} from "../generated/graphql";

const Container = styled.div``;

const Content = styled.div`
  width: 90%;
  max-width: 80rem;
  margin: 50px auto;
`;

const TopBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Name = styled.h1`
  font-size: 26px;
  color: ${props => props.theme.accent};
`;

const Btns = styled.div`
  display: flex;
  gap: 6px;
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

const ShopDetail = () => {
  const { id } = useParams();
  const { data, loading } = useSeeCoffeeShopQuery({
    variables: { shopId: +(id || 0) },
  });
  const { data: profileData, loading: profileLoading } = useSeeProfileQuery();
  const isOwner =
    profileData?.seeProfile.result?.coffeeShop?.id ===
    data?.seeCoffeeShop.result?.id;

  return loading || profileLoading ? (
    <Loading />
  ) : (
    <Container>
      <Header />
      <Content>
        <TopBox>
          <Name>{data?.seeCoffeeShop.result?.name}</Name>
          {isOwner && (
            <Btns>
              <Link to={`/shop/${data?.seeCoffeeShop.result?.id}/edit`}>
                <Button>Edit</Button>
              </Link>
              <Link to={`/shop/${data?.seeCoffeeShop.result?.id}/delete`}>
                <Button>Delete</Button>
              </Link>
            </Btns>
          )}
        </TopBox>
      </Content>
    </Container>
  );
};

export default ShopDetail;
