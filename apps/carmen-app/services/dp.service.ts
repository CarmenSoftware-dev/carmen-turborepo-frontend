import { backendApi } from "@/lib/backend-api";
import { DeliveryPointDto } from "@/dtos/config.dto";

export const getAllDeliveryPoints = async (token: string) => {
    const url = `${backendApi}/api/config/delivery-point`;
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });
    const data = await response.json();
    return data;
}

export const createDeliveryPoint = async (token: string, deliveryPoint: DeliveryPointDto) => {
    const url = `${backendApi}/api/config/delivery-point`;
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(deliveryPoint),
    });
    const data = await response.json();
    return data;
}

export const updateDeliveryPoint = async (token: string, deliveryPoint: DeliveryPointDto) => {
    const url = `${backendApi}/api/config/delivery-point/${deliveryPoint.id}`;
    const response = await fetch(url, {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(deliveryPoint),
    });
    const data = await response.json();

    console.log('data', data);
    return data;
}

export const inactiveDeliveryPoint = async (token: string, deliveryPoint: DeliveryPointDto) => {
    const url = `${backendApi}/api/config/delivery-point/${deliveryPoint.id}`;
    const response = await fetch(url, {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...deliveryPoint, is_active: !deliveryPoint.is_active }),
    });
    const data = await response.json();
    console.log('data', data);
    return data;
}

