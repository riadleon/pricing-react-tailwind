import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const Pricing = () => {
    const pricingOptions = [
        {
            id: 1, name: 'free', price: 0, features: [
                'Awesome Feature',
                'Extra Feature',
                'will never'
            ]
        },
        {
            id: 2, name: 'premium', price: 19.99, features: [
                'Awesome Feature',
                'Extra Feature',
                'will never'
            ]
        },
        {
            id: 1, name: 'medium', price: 9.99, features: [
                'Awesome Feature',
                'Extra Feature',
                'will never'
            ]
        }
    ]
    return (
        <div>
            <h2 className='text-5xl font-bold bg-indigo-300 p-12 text-white mt-4'>Best deal of the town</h2>
            <div className='grid grid-cols-3 gap'>
                {
                    pricingOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;