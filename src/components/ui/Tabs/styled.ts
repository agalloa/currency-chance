import styled from "styled-components";
import { ITabButtonProps } from "./Tabs";

export const Container = styled.div`
// width: 100%;
// max-width: 600px;
// margin: 0 auto;
// text-align: center;
padding: 20px;
`;

export const ContainerTabs = styled.div`
display: flex;
justify-content: center;
margin-bottom: 20px;
`;

export const TabButton = styled.button<ITabButtonProps>`
padding: 10px 20px;
margin: 0 5px;
cursor: pointer;
border: 2px solid ${(props) => (props.active ? '#007BFF' : '#ddd')};
background-color: ${(props) => (props.active ? '#007BFF' : 'white')};
color: ${(props) => (props.active ? 'white' : '#007BFF')};
outline: none;
&:hover {
  background-color: ${(props) => (props.active ? '#0056b3' : '#f0f0f0')};
}
`;

export const Content = styled.div`
padding: 20px;
`;