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

    //se guarda en un elemento con += y después se exporta? Confuso
  const contenido = () => {
    [1,2,3].map(element => {
    <Button instruccion = "hola"></Button>;   
  });
  }

export default Card;