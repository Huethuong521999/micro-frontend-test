import React, { useContext, useState } from 'react';
import '../index.css';
import { useNavigate } from 'react-router-dom';
import { remoteModules, users } from "../utils/constant";
import { AppContext } from '../context-provider/AppContext';

const Login = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState({
        username: '',
        password: '',
    })
    const { modules, setModules } = useContext(AppContext);

    const handleChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        })
    }

    const login = (object) => {
        const user = users.find((item) =>
            item.username === object?.username && item.password === object?.password
        );
    
        if (!user) return false;
    
        switch (user.role) {
          case "truongkhoa": {
            setModules(remoteModules); // all modules
            break;
          }
          case "bacsi": {
            setModules(remoteModules.slice(0, 2)); // takes first 2
            break;
          }
          default: {
            setModules([remoteModules[0]]); // take first
          }
        }
    
        return true;
      };

    const handleLogin = () => {
        const success = login(value);
        if (success) {
            navigate('/homepage');
        }

        console.log("modules", modules);
    }

    return (
        <div className="pl-4">
            <h1>Login</h1>
            <div>
                <div>Username</div>
                <input type="text" name='username' onChange={handleChange} />
            </div>
            <div>
                <div>Password</div>
                <input type="password" name='password' onChange={handleChange} />
            </div>
            <button onClick={handleLogin}>Login</button>
        </div >
    );
}

export default Login;