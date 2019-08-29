import React from "react";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { Form, Input } from "@rocketseat/unform";
import { useDispatch } from "react-redux";

import { signInRequest } from "../../store/modules/auth/actions";

export default function SignIn() {
  const dispatch = useDispatch();

  const schema = Yup.object().shape({
    email: Yup.string()
      .email()
      .required("O email eh um campo obrigatorio"),
    password: Yup.string()
      .min(6, "No minimo 6 caracteres")
      .required("A senha eh campo obrigatorio")
  });

  function handleSubmit(data) {
    dispatch(signInRequest(data));
  }

  return (
    <>
      <span>M</span>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Digite seu e-mail" />
        <Input name="password" type="password" placeholder="Digite sua senha" />

        <button type="submit">Acessar</button>
        <Link to="/register">Crie uma conta gratis</Link>
      </Form>
    </>
  );
}
