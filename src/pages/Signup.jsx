//tools
import { useState } from 'react';
import { getSignUp } from '../api';

//styles
import './Login.scss';

export default function Login() {
    const [formInfo, setFormInfo] = useState({});
    const [status, setStatus] = useState();
    const handleChange = evt => {
        evt.preventDefault();
        let currentInfo = formInfo;
        currentInfo[evt.target.name] = evt.target.value;
        setFormInfo(currentInfo);
    };
    const handleSubmit = async evt => {
        evt.preventDefault();
        setStatus(await getSignUp(formInfo));
    };
    return (
        <div className="login">
            <h1>SIGN UP PAGE</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="user" onChange={handleChange} />
                <input type="email" name="email" onChange={handleChange} />
                <input type="password" name="pwd" onChange={handleChange} />
                <button>Send</button>
            </form>
            <p>{status}</p>
        </div>
    );
}
