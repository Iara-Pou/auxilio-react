function saludar (){
alert("hola");
}

const Button = (props) => {
    //Si le paso funciones, que esten entre llaves
    return (<button onClick = {saludar}>{props.instruccion}</button>)
}

export default Button;