import styled from "styled-components";
import { lighten } from "polished";

export const Container = styled.div`
  max-width: 600px;
  margin: 20px auto;

  display: flex;
  flex-direction: column;
  justify-content: center;

  img {
    width: 550px;
    height: 300px;
    margin: 50px 0 30px;
    border-radius: 4px;
  }
`;

export const Settings = styled.div`
  align-self: flex-end;
  margin-right: 10px;
  padding-bottom: 5px;

  a {
    color: #7159c1;
    font-size: 18px;
    margin-right: 10px;
    transition: color 0.2s;

    &:hover {
      color: ${lighten(0.06, "#7159c1")};
    }
  }

  button {
    background: none;
    border: 0;
    color: #f94d6a;
    font-size: 16px;
    transition: color 0.2s;

    &:hover {
      color: ${lighten(0.06, "#f94d6a")};
    }
  }
`;
export const MeetupDetails = styled.div`
  color: #fafafa;
  h3 {
    text-align: center;
    font-size: 22px;
    display: block;
    margin-bottom: 20px;
  }

  hr {
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  span {
    display: block;
    margin-top: 10px;
  }

  p {
    margin-top: 10px;
  }
`;
