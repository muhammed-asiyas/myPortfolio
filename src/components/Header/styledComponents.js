import {styled} from 'styled-components'

export const HamburgerIconButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  color: red;
  background-color: ${props => props.isClickMenu ? 'red' : 'yellow'};
  margin-right: 12px;
  height: 40px;
  width: 50px;
  border-radius: 8px;
`