import { ConversionForm } from "../../ConversionForm/ConversionForm"
import { CardContainer, CardTtile } from "./styled"


export const Card = () => {
  return (
    <CardContainer>
        <CardTtile>Conversor de divisas</CardTtile>
        <ConversionForm />
    </CardContainer>
  )
}
