import styled from "styled-components";
import { lighten } from "polished";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 50px;

  header {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    span {
      font-size: 22px;
      color: #fff;
      margin: 0 10px;
    }
  }

  a {
    align-self: center;
    margin-bottom: 20px;

    color: #fff;
    transition: color 0.2s;
    &:hover {
      color: ${lighten(0.1, "#7159c1")};
    }
  }
`;

export const MeetupsList = styled.ul``;

export const MeetupContainer = styled.li`
  background: rgba(0, 0, 0, 0.4);
  padding: 20px 10px;
  border-radius: 4px;
  width: 400px;
  display: flex;
  margin-bottom: 15px;
  opacity: ${props => (props.past ? 0.5 : 1)};
  a {
    background: none;
    border: 0;
    color: #f94d6a;
    font-size: 14px;
    display: flex;
    align-items: center;
    align-self: flex-end;
    margin-top: 50px;

    span {
      margin-left: 2px;
    }
  }
`;
export const Details = styled.div`
  color: #fff;
  line-height: 1.4;
  span {
    display: block;
    font-size: 16px;
  }
`;

export const NoAppointments = styled.div`
  background: #fefefe;
  border-radius: 4px;
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    padding: 50px;
    margin: 50px 0;
    font-size: 20px;
  }
`;
