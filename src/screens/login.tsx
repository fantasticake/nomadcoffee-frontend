import styled from "styled-components";
import Header from "../components/header";
import { useForm, SubmitHandler } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { gql } from "@apollo/client";
import { useLoginMutation } from "../generated/graphql";
import { tokenVar } from "../variables";

const Container = styled.div``;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 600;
  text-align: center;
  margin: 50px 0 30px 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const Input = styled.input`
  width: 400px;
  border: 1px solid ${props => props.theme.accent};
  :focus {
    border-width: 2px;
  }
  ::placeholder {
    opacity: 0.6;
  }
  padding: 10px 12px;
  outline: none;
`;

const Btn = styled.button`
  width: 420px;
  padding: 10px 12px;
  background-color: ${props => props.theme.accent};
  color: white;
  border-radius: 6px;
`;

gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      ok
      token
      error
    }
  }
`;

interface IForm {
  email: string;
  password: string;
}

const Login = () => {
  const { state } = useLocation();
  const { register, handleSubmit } = useForm<IForm>({
    defaultValues: {
      email: state?.email || "",
      password: state?.password || "",
    },
  });

  const [loginMutation, { loading }] = useLoginMutation({
    onCompleted: ({ login: { ok, token } }) => {
      if (ok && token) {
        tokenVar(token);
        localStorage.setItem("token", token);
      }
    },
  });

  const onValid: SubmitHandler<IForm> = input => {
    if (!loading) {
      loginMutation({ variables: input });
    }
  };

  return (
    <Container>
      <Header />
      <Title>Login</Title>
      <Form onSubmit={handleSubmit(onValid)}>
        <Input {...register("email")} placeholder="email" />
        <Input
          {...register("password")}
          placeholder="password"
          type={"password"}
        />
        <Btn onSubmit={handleSubmit(onValid)}>Login</Btn>
      </Form>
    </Container>
  );
};

export default Login;
