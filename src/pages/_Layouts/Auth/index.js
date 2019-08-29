import React from "react";

import { Wrapper, Content } from "./styles";

export default function Auth({ children }) {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
}
