import styled from "styled-components";


export const TitleHistory = styled.h1`
    font-size: 1.5rem;
    margin: 0 0 8px;
    color: #333;
    text-align: center;
`

export const CardHistory = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`


export const CardHistoryContent = styled.div`
    background-color: #33383d;
    border: 2px solid #cff500;
    border-radius: 10px;
    padding: 10px;
    width: auto;
    margin: 5px 10px;
    color: white;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
`

export const ContainerHistorialButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: end;
    @media (max-width: 768px) {
        margin: 10px 0px;
        justify-content: center;
    }
`

export const HistorialButton = styled.button`
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
`;