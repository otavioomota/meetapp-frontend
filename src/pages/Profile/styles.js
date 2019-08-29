import styled from "styled-components";
import { lighten } from "polished";

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;
  padding: 0 20px;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 50px;

    input {
      background: rgba(0, 0, 0, 0.4);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      margin-bottom: 10px;
      color: #fff;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    hr {
      height: 1px;
      margin-bottom: 20px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 4px;
    }

    button {
      border: 0;
      border-radius: 4px;
      padding: 10px;
      background: #f94d6a;
      font-size: 16px;
      font-weight: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${lighten(0.05, "#f94d6a")};
      }
    }
  }
`;
