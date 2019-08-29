import React from "react";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { Form, Input } from "@rocketseat/unform";
import { useDispatch } from "react-redux";

import { signUpRequest } from "../../store/modules/auth/actions";

export default function SignUp() {
  const dispatch = useDispatch();
  const schema = Yup.object().shape({
    name: Yup.string().required("O nome eh um campo"),
    email: Yup.string()
      .email()
      .required("O email eh um campo obrigatorio"),
    password: Yup.string()
      .min(6, "No minimo 6 caracteres")
      .required("A senha eh campo obrigatorio")
  });
  function handleSubmit(data) {
    dispatch(signUpRequest(data));
  }
  return (
    <>
      <span>M</span>
      <Form onSubmit={handleSubmit} schema={schema}>
        <Input name="name" type="name" placeholder="Digite seu nome" />
        <Input name="email" type="email" placeholder="Digite seu e-mail" />
        <Input name="password" type="password" placeholder="Digite sua senha" />

        <button type="submit">Criar a conta</button>
        <Link to="/">Ja tenho uma conta!</Link>
      </Form>
    </>
  );
}
