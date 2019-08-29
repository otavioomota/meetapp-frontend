import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Input } from "@rocketseat/unform";
import { updateProfileRequest } from "../../store/modules/user/actions";
import { Container } from "./styles";
export default function Profile() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  function handleUpdateProfile(data) {
    dispatch(updateProfileRequest(data));
  }
  return (
    <Container>
      <Form initialData={profile} onSubmit={handleUpdateProfile}>
        <Input name="name" type="text" placeholder="Digite seu nome" />
        <Input name="email" type="email" placeholder="Digite seu email" />
        <hr />
        <Input
          name="oldPassword"
          type="password"
          placeholder="Digite sua senha atual"
        />
        <Input
          name="password"
          type="password"
          placeholder="Digite sua nova senha"
        />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirme sua nova senha"
        />
        <button type="submit">Atualizar</button>
      </Form>
    </Container>
  );
}
