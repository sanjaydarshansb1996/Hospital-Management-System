import React from "react";
import styled from "styled-components";
function ProfileAvathar({ username = "" }) {
  return (
    <Container>
      <span>{username.charAt(0)}</span>
    </Container>
  );
}

const Container = styled.div`
  height: 2rem;
  width: 2rem;
  min-width: 2rem;
  border-radius: 50%;
  background-color: ${(props) => props.theme.grayShade200};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  overflow: hidden;
  color: ${(props) => props.theme.body};
  line-height: 2rem;
  text-align: center;
  span {
    display: inline-block;
    font-weight: 500;
    vertical-align: middle;
    text-align: center;
    line-height: normal;
  }
`;

export default ProfileAvathar;
