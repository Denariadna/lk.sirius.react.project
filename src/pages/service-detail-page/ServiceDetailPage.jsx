import './ServiceDetailPage.css';
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FakeInfo } from '../../__mocks__/fake_info/FakeInfo';

export const ServiceDetailPage = () => {

    const { id } = useParams();
    const [serviceId, setServiceId] = useState(id);
    const [service, setService] = useState(null);


    useEffect(() => {
        let isNeedUpdate = true;
        fetch(`https://673423afa042ab85d1190055.mockapi.io/api/v1/services/${serviceId}`, {
            method: 'GET',
        }).then(response => response.json())
            .then((service) => isNeedUpdate && setService(service));
        return () => isNeedUpdate = false
    }, [serviceId])

    return (
        <div>
            <button onClick={() => setServiceId(parseInt(serviceId) + 1)}>Next</button>
            <h3>Идентификатор услуги: {serviceId}</h3>
            {service && (
                <div>
                    <image src={FakeInfo()[id].image} />
                    <h3>Название: {service.name}</h3>
                    <p>Описание: {service.description}</p>
                </div>
            )}
        </div>
    )
};

export default ServiceDetailPage;