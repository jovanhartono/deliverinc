export type Shipment = {
    service: string;
    basePrice: number;
}

export const Shipping: Shipment[] = [
    {
        service: 'Air Freight',
        basePrice: 1
    },
    {
        service: 'Ocean Freight',
        basePrice: 1
    }
]
