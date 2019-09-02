import React, { useState } from 'react';
import logo from '../assets/tindev.svg'
import './Login.css'

import api from '../services/api';

export default function Login({ history }) {
    const [username, setUsername] = useState('');

    async function handlesubmit(e) {
        e.preventDefault();

        const response = await api.post('/devs', {
            username,
        });

        const { _id } = response.data;

        console.log(response);

        history.push(`./dev/${_id}`);
    }
    return (
        <div className="login-container">
            <form action="" onSubmit={handlesubmit}>
                <img src={logo} alt="tindev" />
                <input type="text"
                    placeholder="Digite seu usuário do Github"
                    value={username}
                    onChange={e => setUsername(e.target.value)} />
                <button type="submit">Enviar</button>

            </form>
        </div>


    );
}
