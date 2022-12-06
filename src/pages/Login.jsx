//tools
import { useState } from 'react';
import { getLogin } from '../api';

//styles
import './Login.scss';

export default function Login() {
    const [formInfo, setFormInfo] = useState({});
    const handleChange = evt => {
        evt.preventDefault();
        let currentInfo = formInfo;
        currentInfo[evt.target.name] = evt.target.value;
        setFormInfo(currentInfo);
    };
    const handleSubmit = evt => {
        evt.preventDefault();
        getLogin(formInfo).then(res => console.log(res));
    };
    return (
        <div className="login">
            <h1>LOGIN PAGE</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="user" onChange={handleChange} />
                <input type="email" name="email" onChange={handleChange} />
                <input type="password" name="pwd" onChange={handleChange} />
                <button>Send</button>
            </form>
        </div>
    );
}
