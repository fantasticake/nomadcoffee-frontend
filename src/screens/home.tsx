import styled from "styled-components";
import Header from "../components/header";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.backgroundColor};
`;

const Home = () => {
  return (
    <Container>
      <Header />
    </Container>
  );
};

export default Home;
