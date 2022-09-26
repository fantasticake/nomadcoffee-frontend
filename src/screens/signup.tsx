import { gql } from "@apollo/client";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/header";
import { useCreateAccountMutation } from "../generated/graphql";

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
  mutation CreateAccount(
    $username: String!
    $email: String!
    $password: String!
  ) {
    createAccount(username: $username, email: $email, password: $password) {
      ok
      error
    }
  }
`;

interface IForm {
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

const Signup = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, getValues } = useForm<IForm>();
  const [createAccountMutation, { loading }] = useCreateAccountMutation({
    onCompleted: ({ createAccount: { ok } }) => {
      if (ok) {
        navigate("/", {
          state: {
            email: getValues("email"),
            password: getValues("password"),
          },
        });
      }
    },
  });

  const onValid: SubmitHandler<IForm> = input => {
    if (input.password === input.passwordConfirm && !loading) {
      createAccountMutation({ variables: input });
    }
  };

  return (
    <Container>
      <Header />
      <Title>Signup</Title>
      <Form onSubmit={handleSubmit(onValid)}>
        <Input
          {...register("username", { required: true })}
          placeholder="username"
        />
        <Input {...register("email", { required: true })} placeholder="email" />
        <Input
          {...register("password", { required: true })}
          placeholder="password"
        />
        <Input
          {...register("passwordConfirm", { required: true })}
          placeholder="password confirm"
        />
        <Btn onSubmit={handleSubmit(onValid)}>Signup</Btn>
      </Form>
    </Container>
  );
};

export default Signup;
