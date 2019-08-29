import styled from "styled-components";
import { lighten } from "polished";

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 30px;

    input {
      border: 0;
      background: rgba(0, 0, 0, 0.4);
      color: #fff;
      border-radius: 4px;

      padding: 10px 20px;
      margin-bottom: 10px;
      flex: 1;
    }

    button {
      font-size: 16px;
      font-weight: bold;
      background: #f94d6a;
      border: 0;
      border-radius: 4px;
      padding: 7px;
      transition: background 0.2s;

      &:hover {
        background: ${lighten(0.03, "#f94d6a")};
      }
    }

    span {
      font-size: 14px;
      color: #f94d6a;
      margin: 0 0 5px 10px;
    }
  }
`;
