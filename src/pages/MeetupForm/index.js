import React from "react";
import * as Yup from "yup";
import { Form, Input } from "@rocketseat/unform";
import { useSelector, useDispatch } from "react-redux";
import { parseISO } from "date-fns";

import {
  meetupCreationRequest,
  meetupUpdateRequest
} from "../../store/modules/meetup/actions";

import { Container } from "./styles";

import FileInput from "./FileInput";
import DatePicker from "./DatePicker";

export default function MeetupForm() {
  const meetup = useSelector(state => {
    if (state.meetup.meetup) {
      return {
        ...state.meetup.meetup,
        date: parseISO(state.meetup.meetup.date)
      };
    }
  });

  const dispatch = useDispatch();

  const schema = Yup.object().shape({
    title: Yup.string().required("Este campo eh obrigatorio"),
    location: Yup.string().required("Este campo eh obrigatorio"),
    description: Yup.string().required("Este campo eh obrigatorio"),
    date: Yup.date().required("Este campo eh obrigatorio"),
    file_id: Yup.number()
  });

  function handleSubmit(data) {
    // IF THE USER WANNA UPDATE
    if (meetup) {
      const newData = {
        ...data,
        id: meetup.id
      };
      dispatch(meetupUpdateRequest(newData));
    }
    // IF THE USER WANNA CREATE
    else {
      const newData = {
        ...data
      };
      dispatch(meetupCreationRequest(newData));
    }
  }
  return (
    <Container>
      <Form initialData={meetup} schema={schema} onSubmit={handleSubmit}>
        <FileInput name="file_id" />
        <Input name="title" placeholder="Defina um titulo" />

        <Input
          name="location"
          type="text"
          placeholder="Defina uma localizacao"
        />
        <DatePicker name="date" placeholder="Selecione uma data" />
        <Input
          name="description"
          type="textarea"
          placeholder="Descreva a meetup"
        />
        <button type="submit">{meetup ? "Editar" : "Criar"}</button>
      </Form>
    </Container>
  );
}
