import styled from "styled-components";

export const Container = styled.div`
  background: #000000;
`;
export const Content = styled.div`
  height: 64px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  max-width: 900px;
  margin: 0 auto;

  span {
    color: #f94d6a;
    font-size: 30px;
    padding-left: 10px;
  }
`;
export const Perfil = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;

  button {
    background: none;
    border: none;
    color: #7159c1;

    padding: 5px;
    font-size: 16px;
  }
`;

export const Details = styled.div`
  text-align: right;
  margin-right: 10px;
  span {
    font-size: 16px;
    color: #7159c1;
    display: block;
  }

  a {
    color: #fff;
    font-size: 14px;
    display: block;
  }
`;
