import styled from "styled-components";

export const CurrencySelectorContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`

export const ExchangeRateContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: 0px 40px;
    @media (max-width: 768px) {
         width: 90%;
    }

`

export const TitleAmount = styled.h1`
    font-size: 1.0rem;
    margin: 0 0 8px;
    color: #333;
`