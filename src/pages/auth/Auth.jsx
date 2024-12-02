import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "@consta/uikit/Button";
import "./Auth.css";
import { Informer } from "@consta/uikit/Informer";
import { setUser } from "../../store/userSlice";

const Auth = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formData, setFormData] = React.useState({
        username: "",
        password: "",
    });

    const [message, setMessage] = React.useState(null);

    const fieldChangeHandler = (evt) => {
        const { name, value } = evt.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const formSubmitHandle = async (evt) => {
        evt.preventDefault();
        if (formData.username.trim() && formData.password.trim()) {
            try {
                const response = await fetch("https://dummyjson.com/users");
                if (!response.ok) {
                    throw new Error("Ошибка при подключении к серверу");
                }

                const data = await response.json();
                const user = data.users.find(
                    (u) =>
                        u.username === formData.username &&
                        u.password === formData.password
                );

                if (user) {
                    // Сохраняем данные пользователя в Redux
                    dispatch(setUser(user));

                    // Сохраняем данные пользователя в localStorage
                    localStorage.setItem("user", JSON.stringify(user));

                    // Перенаправляем на профиль с ID пользователя
                    navigate(`/user/${user.id}`);
                } else {
                    setMessage({
                        label: "Неверные имя пользователя или пароль",
                        view: "filled",
                        status: "alert",
                    });
                }
            } catch (error) {
                setMessage({
                    label: error.message,
                    view: "filled",
                    status: "warning",
                });
            }
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
                <input
                    className="username"
                    name="username"
                    value={formData.username}
                    onChange={fieldChangeHandler}
                />
                <label htmlFor="password">Пароль:</label>
                <input
                    className="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={fieldChangeHandler}
                />
                {message && (
                    <Informer
                        label={message.label}
                        view={message.view}
                        status={message.status}
                        className="authInformer"
                    />
                )}
                <Button
                    className="authButton"
                    size="m"
                    label="Вход"
                    form="round"
                    onClick={formSubmitHandle}
                />
            </form>
        </div>
    );
};

export default Auth;
