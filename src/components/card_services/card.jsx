import React, { useState, useEffect } from 'react';
import { Text } from '@consta/uikit/Text';
import { Card } from '@consta/uikit/Card';
import './card.css';
import { FakeInfo } from "../../__mocks__/fake_info/FakeInfo";
import { ServiceDetailPage } from '../../pages/service-detail-page/ServiceDetailPage';
import { NavLink } from 'react-router-dom';
import { AppRoute } from '../../const';
import { ApiPath } from '../../const';
import { Loader } from '@consta/uikit/Loader';

const Cards = FakeInfo();
function Card_services() {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`${ApiPath.services}`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        setServices(data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="card-list">
      {isLoading ? (
        <Loader size="m" />
      ) : (
        services.map((item) => (
          <NavLink
            to={`${AppRoute.service}/${item.id}`}
            key={item.id}
            className="card-link"
            style={{ textDecoration: 'none' }}
          >
            <Card
              verticalSpace="l"
              horizontalSpace="l"
              shadow
              className="card-item"
            >
              <img
                src={Cards[item.id - 1]?.image || ""}
                alt={item.name}
                className="card-image"
              />
              <div className="card-content">
                <p size="l" weight="bold" className="card-title">
                  {item.name}
                </p>
                <Text size="s" view="secondary" className="card-description">
                  {item.description}
                </Text>
              </div>
            </Card>
          </NavLink>
        ))
      )}
    </div>
  );
};

export default Card_services;