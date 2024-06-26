'use client'
import React from 'react'

const MyTable= ({headerCol,product}) => {
    console.log('MY Table Resuable component render')
 
    return (
      <div className="overflow-x-auto max-h-full">
        <table className="w-full border-collapse">
          <thead className="sticky top-0 z-10 bg-yellow-600">
            <tr className="text-left border uppercase font-serif px-2">
              {headerCol.map((item, index) => (
                <th key={index} className="px-2">
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {product.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {headerCol.map((index) => (
                  <td key={index} className="py-2 px-2 text-nowrap">
                    {row[index]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}

export default MyTable