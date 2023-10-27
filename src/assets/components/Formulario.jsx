import React from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Formulario = ({setErrores}) => {
    // Define our regular expression.
    const validEmail =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    //const validEmail =  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")
    const [mensaje, setMensaje] = useState("")
    // const [error, setError] = useState(false)
    // const [ok, setOk] = useState(false)


    const validarInput = (e) => {
        //Prevenimos el comportamiento por defecto
        e.preventDefault()
        //Eliminar mensaje de error
        //Validación input
        if (nombre === '' || email === '' || password === '' || password2 === '') {
            // setError(true)
            // setMensaje("Todos los campos son obligatorios")
            setErrores({mensaje:"Todos los campos son obligatorios", color: "danger"})
            return
        }
        if(!validEmail.test(email)){
            // setError(true)
            // setMensaje("Email incorrecto")
            setErrores({mensaje:"Email incorrecto", color: "danger"})
            return
        }
        if (password != password2) {
            // setError(true)
            // setMensaje("Las contraseñas no coinciden")
            setErrores({mensaje:"Las contraseñas no coinciden", color: "danger"})
            return
        }
        
        //setOk(true)
        setErrores({mensaje:"Todos los datos han sido ingresado de forma correcta", color: "success"})

    }
  return (
    <Form onSubmit={validarInput}>
        <Form.Group className="mb-3" controlId="formBasicNombre">
            <Form.Control type="Nombre" placeholder="Nombre" onChange={(e) => setNombre(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="tuemail@ejemplo.com" onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicContrasena">
            <Form.Control type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicContrasenaConfirmar">
            <Form.Control type="password" placeholder="Confirma tu Contraseña" onChange={(e) => setPassword2(e.target.value)}/>
        </Form.Group>

        <Button variant="primary" type="submit" className='w-100'>
            Registrarte
        </Button>
        
    </Form>
  )
}

export default Formulario
