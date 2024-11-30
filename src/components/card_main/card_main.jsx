import React, { useState, useEffect } from "react";
import { Card } from "@consta/uikit/Card";
import { Text } from "@consta/uikit/Text";
import "./card_main.css";
import { FakeInfo } from "../../__mocks__/fake_info/FakeInfo";
import { ApiPath } from "../../const";
import { Loader } from "@consta/uikit/Loader";

const news = FakeInfo();

const Card_main = () => {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(ApiPath.news, { method: 'GET' })
            .then((response) => response.json())
            .then((data) => {
                setNews(data);
                setIsLoading(false);
            })
            .catch(() => {
                setIsLoading(false);
            });
    }, []);

    return (
        <>
            <h1 className="title-news">Новости</h1>
            <div className="news-list">
                {isLoading ? (
                    <Loader size="m" />
                ) : (
                    news.map((item) => (
                        <Card
                            key={item.id}
                            verticalSpace="xl"
                            horizontalSpace="xl"
                            shadow
                            className="news-item"
                        >
                            <img src={item.image} alt={item.title} className="news-image" />
                            <div className="news-content">
                                <Text size="xl" weight="bold" className="news-title">
                                    {item.name}
                                </Text>
                                <Text size="m" view="secondary" className="news-description">
                                    {item.description}
                                </Text>
                                <Text size="s" view="ghost" className="news-date">
                                    {item.createdAt}
                                </Text>
                            </div>
                        </Card>
                    ))
                )}
            </div>
        </>
    );
}

export default Card_main;