


const Login = () => {
    return ( 
        <div className="auth-container">
            <div className="form-container">
                <form>
                    <input type="text" name="username" placeholder="username" required/>
                    <div className="error username"></div>
                    <input type="password" name="password" placeholder="password" required />
                    <div className="error password"></div>
                    <button>Login</button>
                </form>
            </div>
        </div>
     );
}
 
export default Login;