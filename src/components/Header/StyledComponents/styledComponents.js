import styled from "styled-components";

export const ToggelButton = styled.button`
  border-radius: 12px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  cursor: pointer;
  background-color: ${(props) => (props.isDark ? 'black' : 'white')};
  border: ${(props) => (props.isDark ? '1px solid beige' : '1px solid black')}
`;
