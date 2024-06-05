'use client'
import React, { useState, useEffect } from 'react';

const SelectProduct = () => {
  const [unit, setUnit] = useState('kg');
  const [quantities, setQuantities] = useState([]);
  const [selectedQuantity, setSelectedQuantity] = useState('');
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const availableQuantities = getProductQuantities(unit);
    setQuantities(availableQuantities);
    setSelectedQuantity(availableQuantities[0]);
  }, [unit]);

  useEffect(() => {
    const newPrice = calculatePrice(unit, selectedQuantity);
    setPrice(newPrice);
  }, [unit, selectedQuantity]);

  const handleUnitChange = (event) => {
    setUnit(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setSelectedQuantity(event.target.value);
  };

  const getProductQuantities = (unit) => {
    switch (unit) {
      case 'kg':
        return ['1 kg', '2 kg', '5 kg', '10 kg'];
      case 'gm':
        return ['250 gm', '500 gm', '1 kg'];
      case 'ltr':
        return ['1 ltr', '2 ltr', '5 ltr'];
      case 'item':
        return ['1 item', '2 items', '3 items', '5 items'];
      default:
        return ['Unknown unit'];
    }
  };

  const calculatePrice = (unit, quantity) => {
    // Example pricing logic
    const prices = {
      'kg': { '1 kg': 10, '2 kg': 18, '5 kg': 40, '10 kg': 75 },
      'gm': { '250 gm': 3, '500 gm': 5, '1 kg': 10 },
      'ltr': { '1 ltr': 5, '2 ltr': 9, '5 ltr': 20 },
      'item': { '1 item': 2, '2 items': 3.5, '3 items': 5, '5 items': 8 }
    };

    return prices[unit][quantity] || 0;
  };

  return (
    <div>
      <h1>Product Details</h1>
      <label>
        Select Unit:
        <select value={unit} onChange={handleUnitChange}>
          <option value="kg">Kilograms (kg)</option>
          <option value="gm">Grams (gm)</option>
          <option value="ltr">Liters (ltr)</option>
          <option value="item">Items</option>
        </select>
      </label>
      <br />
      <label>
        Select Quantity:
        <select value={selectedQuantity} onChange={handleQuantityChange}>
          {quantities.map((quantity) => (
            <option key={quantity} value={quantity}>
              {quantity}
            </option>
          ))}
        </select>
      </label>
      <br />
      <p>Price: ${price}</p>
    </div>
  );
};

export default SelectProduct;
