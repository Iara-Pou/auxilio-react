import Button from "../Button/button"
import Text from "../Text/text"

const Card = (instruccion) => {
    return (
        <>
        <Text>
            <p>hola como estas</p>
        </Text>
        <Button instruccion={instruccion}></Button>
        </>
   )
}

export default Card;