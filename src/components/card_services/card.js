import React from 'react';
import { Layout } from '@consta/uikit/Layout';
import { Text } from '@consta/uikit/Text';
import { Card } from '@consta/uikit/Card';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import './card.css';
import { FakeInfo } from "../../__mocks__/fake_info/FakeInfo";

const Cards = FakeInfo();

function Card_services() {
  return (
    <Theme preset={presetGpnDefault}>
      <Layout className='Card_serv' flexDirection="row" gap="xs">
        {Cards.map((card) => (
          <Layout flex={1} className='MainCard' key={card.id}>
            <Card className='Card_info' verticalSpace="xs" horizontalSpace="xs">
              <img
                alt={card.title}
                src={card.image}
                style={{ width: '100%', height: 'auto' }}
              />
              <Layout className='text-desc'>
                <Text>{card.title}</Text>
                <Text>{card.description}</Text>
              </Layout>
            </Card>
          </Layout>
        ))}
      </Layout>
    </Theme>
  );
};

export default Card_services;