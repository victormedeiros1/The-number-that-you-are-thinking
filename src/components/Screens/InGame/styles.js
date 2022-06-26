import styled from "styled-components";

export const InGameContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  p {
    margin-bottom: 20px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;

  @media (max-width: 476px){
    flex-direction: column;
  }
`