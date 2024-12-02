import './ServiceDetailPage.css';
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Informer } from '@consta/uikit/Informer';
import { Layout } from '@consta/uikit/Layout';

export const ServiceDetailPage = () => {
    const { id } = useParams();
    const [serviceId, setServiceId] = useState(parseInt(id, 10)); // Преобразуем id в число
    const [service, setService] = useState(null);
    const [message, setMessage] = useState(""); // Для отображения сообщения

    useEffect(() => {
        let isNeedUpdate = true;
        fetch(`https://673423afa042ab85d1190055.mockapi.io/api/v1/services/${serviceId}`, {
            method: 'GET',
        })
            .then(response => response.json())
            .then((service) => {
                if (isNeedUpdate) {
                    setService(service);
                    setMessage(""); // Сбрасываем сообщение при успешной загрузке
                }
            })
            .catch(() => setMessage("Произошла ошибка при загрузке услуги."));
        return () => isNeedUpdate = false;
    }, [serviceId]);

    const handleNext = () => {
        fetch(`https://673423afa042ab85d1190055.mockapi.io/api/v1/services/${serviceId + 1}`, {
            method: 'GET',
        })
            .then(response => {
                if (response.ok) {
                    setServiceId(serviceId + 1);
                } else {
                    setMessage("Дальше услуг нет.");
                }
            })
            .catch(() => setMessage({
                label: "Это последняя услуга",
                view: "filled",
                status: "warning",
            }));
    };

    const handleBack = () => {
        if (serviceId > 1) {
            setServiceId(serviceId - 1);
        } else {
            setMessage({
                label: "Это самая первая услуга",
                view: "filled",
                status: "warning",
            });
        }
    };

    return (
        <div className='service-detail'>
            <h3 className='service-detail-id'>Идентификатор услуги: {serviceId}</h3>
            {service && (
                <div className='service-detail-info'>
                    <h3 className='service-detail-name'>Название: {service.name}</h3>
                    <p className='service-detail-description'>Описание: {service.description}</p>
                </div>
            )}
            {message &&
                <Informer
                    label={message.label}
                    view={message.view}
                    status={message.status}
                    className="ButtonInformer"
                />}
            <Layout className="service-buttons">
                <button className="back-button" onClick={handleBack}>Назад</button>
                <button className="next-button" onClick={handleNext}>Вперед</button>
            </Layout>
        </div>
    );
};

export default ServiceDetailPage;
