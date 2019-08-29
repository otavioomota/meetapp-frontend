import styled from "styled-components";
import { lighten } from "polished";

export const Wrapper = styled.div`
  display: flex;

  height: 100%;

  justify-content: center;
  align-items: center;

  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.9), #68276f);
`;

export const Content = styled.div`
  max-width: 600px;
  width: 300px;
  margin: 0 auto;
  text-align: center;

  span {
    color: #f94d6a;
    font-size: 40px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      padding: 10px 5px;
      margin-bottom: 3px;
      color: #fff;
    }

    button {
      margin-top: 10px;
      border: 0;
      background: #f94d6a;
      border-radius: 4px;
      padding: 10px;
      transition: background 0.2s;

      &:hover {
        background: ${lighten(0.06, "#f94d6a")};
      }
    }
    a {
      align-self: center;
      font-size: 14px;
      color: #7159c1;
      text-decoration: none;
      margin-top: 10px;

      &:hover {
        color: ${lighten(0.1, "#7159c1")};
      }
    }

    span {
      color: #f94d6a;
      font-size: 12px;
      margin: 5px 0;
      padding-left: 3px;
    }
  }
`;
