import styled from "styled-components";

export const CardContainer = styled.div`
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 16px;
    max-width: 75%;
    transition: transform 0.2s, box-shadow 0.2s;
    margin: 4% auto;
    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
`

export const CardTtile = styled.h1`
    font-size: 2rem;
    margin: 0 0 8px;
    color: #333;
    text-align: center;
`

export const CardContent = styled.div`
    font-size: 1rem;
    color: #666;
    line-height: 1.5; 
`