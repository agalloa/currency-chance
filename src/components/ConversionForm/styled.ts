import styled from "styled-components";

export const ConversionFormContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    margin: 20px 0px;
    align-items: flex-end;
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export const AmountContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 250px;

`
export const TitleAmount = styled.h1`
    font-size: 1.0rem;
    margin: 0 0 8px;
    color: #333;
`

export const InputAmount = styled.input`
    border: 1px solid #ccc; 
    border-radius: 4px; 
    padding: 10px 12px; 
    font-size: 1rem; 
    color: #333; 
    width: 100%; 
    box-sizing: border-box; 
    transition: border-color 0.3s;
    &:focus {
        border-color: #a66bff; 
        outline: none; 
        background-color: #fff; 
    }

    &::placeholder {
        color: #aaa; 
    }
`

export const ConversionButton = styled.button`
    background-color: #a66bff; 
    color: #fff; 
    border: none; 
    border-radius: 4px; 
    padding: 10px 20px; 
    font-size: 1rem;    
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;
    &:active {
        transform: scale(0.98); 
    }

    &:disabled {
        background-color: #ccc; 
        cursor: not-allowed; 
        color: #666; 
    }

    &:focus {
        outline: none; 
    }

    @media (max-width: 768px) {
        margin: 10px 0px;
    }
`;

export const ContainerResult = styled.div`
    margin: 20px 0px;
`

export const TitleResult = styled.h1`
    font-size: 1.0rem;
    color:#333;
`   

export const ResultContainer = styled.p`
    font-weight: bold;
    font-size: 1.3rem;
    color: #a66bff;

`