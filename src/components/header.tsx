import { Link } from "react-router-dom";
import styled from "styled-components";
import client from "../apollo";
import { tokenVar, useTokenVar } from "../variables";
import Button from "./button";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 80rem;
  margin: 0 auto;
  padding: 20px 0;
  background-color: ${props => props.theme.backgroundColor};
  border-bottom: 1px solid ${props => props.theme.color};
`;

const Logo = styled.div`
  color: ${props => props.theme.accent};
  font-size: 32px;
  font-weight: 700;
`;

const Btns = styled.div`
  display: flex;
  gap: 6px;
`;

const Header = () => {
  const token = useTokenVar();

  const logout = () => {
    tokenVar("");
    localStorage.removeItem("token");
    client.clearStore();
  };

  return (
    <Container>
      <Link to={"/"}>
        <Logo>Nomad Coffee</Logo>
      </Link>
      {token ? (
        <Btns>
          <Button onClick={logout}>Logout</Button>
        </Btns>
      ) : (
        <Btns>
          <Link to={"/signup"}>
            <Button>Signup</Button>
          </Link>
          <Link to={"/"}>
            <Button>Login</Button>
          </Link>
        </Btns>
      )}
    </Container>
  );
};

export default Header;
