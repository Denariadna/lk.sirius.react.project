import React from "react";
import { Button } from "@consta/uikit/Button";
import "./Auth.css";

const Auth = () => {
    const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        comment: ''
    })

    const fieldChangeHandler = (evt) => {
        const { name, value } = evt.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const formSubmitHandle = (evt) => {
        alert(`Username: ${formData.username}\nPassword: ${formData.password}`);
    }

    return (
        <div className="feedback-form-container">
            <form className="feedback-form">
                <label htmlFor="firstName">Имя:</label>
                <input id="firstName" name="username" value={formData.username} onChange={fieldChangeHandler} />
                <label htmlFor="password">Пароль:</label>
                <input id="password" name="password" value={formData.password} onChange={fieldChangeHandler} />
                <Button size='m' label="Вход" form="round" onClick={formSubmitHandle} />
            </form>
        </div>
    );
};

export default Auth;