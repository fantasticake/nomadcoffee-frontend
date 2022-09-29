import { gql } from "@apollo/client";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/header";
import { useEditCoffeeShopMutation } from "../generated/graphql";

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
  mutation EditCoffeeShop($name: String) {
    editCoffeeShop(name: $name) {
      ok
      error
    }
  }
`;

interface IForm {
  name: string;
}

const EditShop = () => {
  const { register, handleSubmit } = useForm<IForm>({});
  const naviate = useNavigate();
  const [editShop, { loading }] = useEditCoffeeShopMutation({
    onCompleted: ({ editCoffeeShop: { ok } }) => {
      if (ok) naviate("/");
    },
  });

  const onValid: SubmitHandler<IForm> = input => {
    if (!loading) {
      editShop({ variables: input });
    }
  };

  return (
    <Container>
      <Header />
      <Title>Edit coffee shop</Title>
      <Form onSubmit={handleSubmit(onValid)}>
        <Input {...register("name")} placeholder="name" />
        <Btn onSubmit={handleSubmit(onValid)}>Edit</Btn>
      </Form>
    </Container>
  );
};

export default EditShop;
