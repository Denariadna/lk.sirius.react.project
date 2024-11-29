import React from "react";
import { Button } from "@consta/uikit/Button";
import "./Auth.css";
import { Informer } from '@consta/uikit/Informer';

const Auth = () => {
    const [formData, setFormData] = React.useState({
        username: "",
        password: "",
    })

    const fieldChangeHandler = (evt) => {
        const { name, value } = evt.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const [message, setMessage] = React.useState(null);

    const formSubmitHandle = (evt) => {
        evt.preventDefault();
        if (formData.username.trim() && formData.password.trim()) {
            setMessage({
                label: "Спасибо за регистрацию",
                view: "filled",
                status: "success",
            });
        } else {
            setMessage({
                label: "Заполните все поля",
                view: "filled",
                status: "alert",
            });
        }
    };

    return (
        <div className="feedback-form-container">
            <form className="feedback-form">
                <label htmlFor="firstName">Имя:</label>
                <input id="firstName" name="username" value={formData.username} onChange={fieldChangeHandler} />
                <label htmlFor="password">Пароль:</label>
                <input id="password" name="password" value={formData.password} onChange={fieldChangeHandler} />
                {message && (
                    <Informer
                        label={message.label}
                        view={message.view}
                        status={message.status}
                        className="authInformer"
                    />
                )}
                <Button className="authButton" size='m' label="Вход" form="round" onClick={formSubmitHandle} />
            </form>
        </div>
    );
};

export default Auth;