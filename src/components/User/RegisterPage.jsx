const RegisterPage = (props) => {
    const registerHandler = (event) =>{
        const registro ={
            dni: event.target.dni.value,
            fullName: event.target.fullName.value,
            userName: event.target.userName.value,
            email: event.target.email.value,
            password: event.target.password.value
        }

        const requestOptions ={
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(registro)
        }
        
        fetch("http://localhost:4000/users/register", requestOptions)
        .then(response =>{
            if(!response.ok){
                throw new Error('El request no fue exitoso');
            }
            return response.text();
        })
        .then(data =>{
            console.log('respuesta del servidor:', data);
        })
    }

    return(
        <div>
            <form onSubmit={registerHandler}>
                <input type="text" name="dni" placeholder="DNI" /> <br/>
                <input type="text" name="fullName" placeholder="Nombre y apellido" /> <br/>
                <input type="text" name="userName" placeholder="Nombre de Usuario" /> <br/>
                <input type="email" name="email" placeholder="Email " /> <br />
                <input type="password" name="password" placeholder="Contraseña" /> <br />
                <button type="submit">Registrarse</button>
            </form>
        </div>
    )
}

export default RegisterPage;