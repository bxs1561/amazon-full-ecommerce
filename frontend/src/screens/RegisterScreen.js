import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import {register} from "../actions/userActions";

function RegisterScreen(props) {
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const userRegister = useSelector(state=>state.userRegister);
    const {userInfo, loading, error} = userRegister;

    const dispatch = useDispatch();
    const redirect = props.location.search? props.location.search.split("=")[1] : "/";
    const submitHandler =(e)=>{
        e.preventDefault();
        if(password!==confirmPassword){
            alert("password do not match")
        }
        else{
            dispatch(register(name, email, password))

        }

    };
    useEffect(()=>{
        if(userInfo){
            props.history.push(redirect)
        }
    },[props.history,redirect, userInfo])
    return(
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Register</h1>
                </div>
                {loading && <LoadingBox/>}
                {error && <MessageBox variant="danger">{error}</MessageBox>}
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Enter name"
                        required
                        onChange={event => setName(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter email"
                        required
                        onChange={event => setEmail(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter password"
                        required
                        onChange={event => setPassword(event.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        placeholder="Enter Confirm Password"
                        required
                        onChange={event => setConfirmPassword(event.target.value)}
                    />
                </div>
                <div>
                    <label/>
                    <button className="primary" type="submit">
                        Register
                    </button>
                </div>
                <div>
                    <label/>
                    <div>
                        Already have an account? {' '}
                        <Link to={`/signin?redirect=${redirect}`}>Sing-In</Link>
                    </div>
                </div>
            </form>
        </div>
    )

}
export default RegisterScreen
