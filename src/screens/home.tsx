import { gql } from "@apollo/client";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/header";
import Loading from "../components/loading";
import { useSeeCoffeeShopsQuery } from "../generated/graphql";

const Container = styled.div``;

const ShopGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  width: 90%;
  max-width: 80rem;
  margin: 40px auto;
`;

const Shop = styled.div``;

const Img = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Name = styled.h2`
  color: ${props => props.theme.accent};
`;

gql`
  query SeeCoffeeShops {
    seeCoffeeShops {
      ok
      error
      result {
        id
        name
        photos {
          id
          url
        }
      }
    }
  }
`;

const Home = () => {
  const { data, loading } = useSeeCoffeeShopsQuery();

  return loading ? (
    <Loading />
  ) : (
    <Container>
      <Header />
      <ShopGrid>
        {data?.seeCoffeeShops.result?.map(shop => {
          const image = shop?.photos?.length ? shop.photos[0] : null;
          return (
            shop && (
              <Link key={shop.id} to={`/shop/${shop.id}`}>
                <Shop>
                  <Img src={image?.url} />
                  <Name>{shop.name}</Name>
                </Shop>
              </Link>
            )
          );
        })}
      </ShopGrid>
    </Container>
  );
};

export default Home;
