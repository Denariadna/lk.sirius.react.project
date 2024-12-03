import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Layout } from "@consta/uikit/Layout";
import { Text } from "@consta/uikit/Text";
import { Loader } from "@consta/uikit/Loader";
import { setUser } from "../../store/userSlice";
import "./Profile.css";

const Profile = () => {
    const { id } = useParams();
    const [userId, setUserId] = useState(parseInt(id, 10)); // Преобразуем id в число
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isAuth = useSelector((state) => state.user.isAuth);
    const storedUser = useSelector((state) => state.user.user);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [user, setUserState] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                setLoading(true);

                // Проверка авторизации
                if (!isAuth) {
                    const localUser = localStorage.getItem("user");
                    if (localUser) {
                        const parsedUser = JSON.parse(localUser);
                        dispatch(setUser(parsedUser)); // Обновляем Redux из localStorage
                    } else {
                        throw new Error("Пользователь не авторизован");
                    }
                }

                // Логика для получения данных пользователя
                if (id) {
                    const response = await fetch(`https://dummyjson.com/users/${userId}`);
                    if (!response.ok) {
                        throw new Error("Пользователь не найден");
                    }
                    const data = await response.json();

                    if (data.id === storedUser.id) {
                        setUserState(data); // Пользователь совпадает
                    } else {
                        throw new Error("Доступ к профилю запрещён");
                    }
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, [id, isAuth, dispatch, storedUser.id]);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                setLoading(true);

                if (!isAuth) {
                    throw new Error("Пользователь не авторизован");
                }

                if (id) {
                    const response = await fetch(`https://dummyjson.com/users/${id}`);
                    if (!response.ok) {
                        throw new Error("Пользователь не найден");
                    }

                    const data = await response.json();
                    if (data.id === storedUser.id) {
                        setUserState(data);
                    } else {
                        throw new Error("Доступ запрещён");
                    }
                }
            } catch (err) {
                setError(err.message);
                navigate("/");
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, [id, isAuth, navigate, dispatch, storedUser.id]);


    if (loading) {
        return (
            <div className="profile-loader">
                <Loader className="loader" size="m" />
            </div>
        );
    }

    if (error) {
        return (
            <Text lineHeight="m" view="alert">
                {error}
            </Text>
        );
    }

    if (!user) {
        return (
            <Text lineHeight="m" view="secondary">
                Пользователь не найден
            </Text>
        );
    }

    return (
        <Layout className="profile">
            <Text lineHeight="m" view="primary" className="profile-title">
                Профиль пользователя
            </Text>
            <Layout className="profile-info">
                <Layout className="profile-image">
                    <img
                        src={user.image}
                        alt="User Avatar"
                        className="card-image"
                    />
                </Layout>
                <Layout className="profile-details">
                    <Text lineHeight="m" view="primary" className="profile-text-details">
                        Имя: {user.firstName} {user.lastName}
                    </Text>
                    <Text lineHeight="m" view="primary" className="profile-text-details">
                        Почта: {user.email}
                    </Text>
                    <Text lineHeight="m" view="primary" className="profile-text-details">
                        Телефон: {user.phone}
                    </Text>
                    <Text lineHeight="m" view="primary" className="profile-text-details">
                        Возраст: {user.age}
                    </Text>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default Profile;

