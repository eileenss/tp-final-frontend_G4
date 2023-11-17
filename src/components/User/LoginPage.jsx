const LoginPage = (props) =>{
const loginHandler = (event) =>{
    event.preventDefault();
    const login ={
        email: event.target.email.value,
        password: event.target.password.value
    }

    const requestOptions ={
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(login)
    }
    fetch("http://localhost:4000/users/login", requestOptions)
    .then(response =>{
        if(!response.ok){
            throw new Error('El request no fue exitoso');
        }
        return response.json();
    })
    .then(data =>{
        console.log(data);
    })}

    return(
        <div>
            <form onSubmit={loginHandler}>
                <input type="email" name="email" placeholder="Email " /> <br />
                <input type="password" name="password" placeholder="Contraseña" /> <br />
                <button type="submit">Registrarse</button>
            </form>
        </div>
    )
}

export default LoginPage;