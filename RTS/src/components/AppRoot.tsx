import * as React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
color: green;
`

export default class AppRoot extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return <StyledDiv>hello world</StyledDiv>;
  }


}