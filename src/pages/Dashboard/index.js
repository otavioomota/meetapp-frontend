import React, { useState, useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { format, subDays, addDays, isBefore } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";
import pt from "date-fns/locale/pt";

import {
  MdChevronLeft,
  MdChevronRight,
  MdAddCircleOutline
} from "react-icons/md";

import { FaRegCalendarTimes } from "react-icons/fa";

import api from "../../services/api";

import {
  Container,
  MeetupsList,
  MeetupContainer,
  Details,
  NoAppointments
} from "./styles";

import {
  moreDetails,
  createMeetupPage
} from "../../store/modules/meetup/actions";

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);

  const [date, setDate] = useState(new Date());
  const currentDate = new Date();

  const dispatch = useDispatch();

  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );

  useEffect(() => {
    async function loadingMeetup() {
      const response = await api.get(`/meetups`, {
        params: { date }
      });

      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      const data = response.data.map(meetup => {
        const checkDate = utcToZonedTime(meetup.date, timezone);
        const past = isBefore(checkDate, currentDate);

        return {
          ...meetup,
          past,
          dateFormatted: format(checkDate, "'dia' dd 'de' MMMM', as' H:mm'h'", {
            locale: pt
          })
        };
      });

      setMeetups(data);
    }

    loadingMeetup();
  }, [date]);

  function handleMeetupCreate() {
    dispatch(createMeetupPage());
  }

  function handlePrevDay() {
    setDate(subDays(date, 1));
  }

  function handleNextDay() {
    setDate(addDays(date, 1));
  }

  function handleMoreDetails(meetup) {
    dispatch(moreDetails(meetup));
  }
  return (
    <Container>
      <header>
        <MdChevronLeft size={40} color="#fff" onClick={handlePrevDay} />
        <span>{dateFormatted}</span>
        <MdChevronRight size={40} color="#fff" onClick={handleNextDay} />
      </header>
      <Link to="/meetup" onClick={handleMeetupCreate}>
        {" "}
        Criar uma nova Meetup{" "}
      </Link>
      <MeetupsList>
        {meetups.length > 0 ? (
          meetups.map(meetup => (
            <MeetupContainer key={meetup.id} past={meetup.past}>
              <Details>
                <span>
                  Titulo: <strong>{meetup.title}</strong>
                </span>
                <span>
                  Data/Hora: <strong>{meetup.dateFormatted}</strong>
                </span>
                <small>
                  Inscritos: <strong>{meetup.Subscriptions.length || 0}</strong>
                </small>
              </Details>

              <Link to="/details" onClick={() => handleMoreDetails(meetup)}>
                {" "}
                <MdAddCircleOutline size={14} color="#7159c1" />
                <span>Detalhes</span>
              </Link>
            </MeetupContainer>
          ))
        ) : (
          <NoAppointments>
            <span>Nao ha agendamentos para esta data</span>
            <div>
              <FaRegCalendarTimes size={60} color="#7159c1" />
            </div>
          </NoAppointments>
        )}
      </MeetupsList>
    </Container>
  );
}
