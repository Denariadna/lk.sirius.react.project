import React from "react";
import { Card } from "@consta/uikit/Card";
import { Text } from "@consta/uikit/Text";
import "./card_main.css";
import { FakeInfo } from "../../__mocks__/fake_info/FakeInfo";

const news = FakeInfo();

const Card_main = () => {
    return (
        <div className="news-list">
            {news.map((item) => (
                <Card
                    key={item.id}
                    verticalSpace="xl"
                    horizontalSpace="xl"
                    shadow
                    className="news-item">
                    <img src={item.image} alt={item.title} className="news-image" />
                    <div className="news-content">
                        <Text size="xl" weight="bold" className="news-title">
                            {item.title}
                        </Text>
                        <Text size="m" view="secondary" className="news-description">
                            {item.description}
                        </Text>
                    </div>
                </Card>
            ))}
        </div>
    );
}

export default Card_main;