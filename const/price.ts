export type Shipment = {
    service: string;
    basePrice: number;
}

export const Shipping: Shipment[] = [
    {
        service: 'Air Freight',
        basePrice: 265000
    },
    {
        service: 'Ocean Freight',
        basePrice: 1
    }
]
