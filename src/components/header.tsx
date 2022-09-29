import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import client from "../apollo";
import { useSeeProfileQuery } from "../generated/graphql";
import { tokenVar, useTokenVar } from "../variables";
import Button from "./button";
import Loading from "./loading";

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
  const naviate = useNavigate();
  const { data, loading } = useSeeProfileQuery();

  const logout = () => {
    naviate("/");
    tokenVar("");
    localStorage.removeItem("token");
    client.clearStore();
  };

  return loading ? (
    <Loading />
  ) : (
    <Container>
      <Link to={"/"}>
        <Logo>Nomad Coffee</Logo>
      </Link>
      {token ? (
        <Btns>
          {!data?.seeProfile.result?.coffeeShop?.id && (
            <Link to={"/add"}>
              <Button>Create coffee shop</Button>
            </Link>
          )}
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
