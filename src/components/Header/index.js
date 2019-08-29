import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";

import { logout } from "../../store/modules/auth/actions";
import { Container, Content, Perfil, Details } from "./styles";

export default function Header() {
  const dispatch = useDispatch();
  function handleLogout() {
    dispatch(logout());
  }
  const name = useSelector(state => state.user.profile.name);
  return (
    <Container>
      <Content>
        <Link to="/dashboard">
          <span>M</span>
        </Link>
        <Perfil>
          <Details>
            <span>{name}</span>
            <Link to="/profile">Meu perfil</Link>
          </Details>
          <MdAccountCircle size={40} color="#f94d6a" />
          <button type="button" onClick={handleLogout}>
            Logout
          </button>
        </Perfil>
      </Content>
    </Container>
  );
}
