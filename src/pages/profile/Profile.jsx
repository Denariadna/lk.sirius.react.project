import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Profile.css";
import { Layout } from "@consta/uikit/Layout";
import { Text } from "@consta/uikit/Text";
import { Loader } from "@consta/uikit/Loader";

const Profile = () => {
    const { id } = useParams(); // Получаем id из маршрута (можно использовать в зависимости от ситуации)
    const [user, setUser] = useState(null); // Данные о пользователе
    const [loading, setLoading] = useState(true); // Состояние загрузки
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                // Если id пустое, загружаем данные из localStorage
                const storedUser = localStorage.getItem('user');
                if (storedUser) {
                    setUser(JSON.parse(storedUser)); // Загружаем пользователя из localStorage
                    setLoading(false);
                } else {
                    throw new Error("Нет данных о пользователе");
                }
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchUser();
    }, [id]);

    if (loading) {
        return (
            <div className="profile-loader">
                <Loader className="loader" size="m" />
            </div>
        );
    }

    if (error) {
        return <Text lineHeight="m" view="alert">{error}</Text>;
    }

    if (!user) {
        return <Text lineHeight="m" view="secondary">Пользователь не найден</Text>;
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
