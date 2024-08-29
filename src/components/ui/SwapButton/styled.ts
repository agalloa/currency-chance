import styled from "styled-components";

export const ButtonSwapp= styled.button`
  background-color: #a66bff;
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 20px;
  margin: 0px 20px  0px 0px;
  transition: background-color 0.3s;

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
           border-radius: 50%;
        width: 30px;
        height: 30px;
        margin-top: 20px;
    }
`;