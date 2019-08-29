import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { meetupCancelationRequest } from "../../store/modules/meetup/actions";
import { Container, Settings, MeetupDetails } from "./styles";

export default function DetailsEdit() {
  const meetup = useSelector(state => state.meetup.meetup);

  console.log(meetup);

  const dispatch = useDispatch();

  function handleRemoveMeetup(id) {
    dispatch(meetupCancelationRequest(id));
  }
  return (
    <Container>
      <Settings>
        <Link to="/meetup" past={meetup.past}>
          Editar
        </Link>
        <button type="button" onClick={() => handleRemoveMeetup(meetup.id)}>
          Cancelar
        </button>
      </Settings>
      <div>
        <img src={meetup.File.url} alt="Meetup" />
        <MeetupDetails>
          <h3>{meetup.title}</h3>
          <hr />
          <span>
            Data/Hora: <strong>{meetup.dateFormatted}</strong>
          </span>
          <p>Localizacao: {meetup.location}</p>
          <span>Descricao :</span>
          <br />
          <p>{meetup.description}</p>
        </MeetupDetails>
      </div>
    </Container>
  );
}
