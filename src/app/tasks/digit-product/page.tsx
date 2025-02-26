'use client'

import { useState } from 'react'
import { calculateDigitProduct } from '../../../utils/calculations'

export default function DigitProduct() {
  const [number, setNumber] = useState<number>(0)
  const [result, setResult] = useState<number | null>(null)

  const handleCalculate = () => {
    const result = calculateDigitProduct(number)
    setResult(result)
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Digit Product Calculator</h1>
      <div className="space-y-4">
        <div>
          <label className="block">Enter a number:</label>
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(parseInt(e.target.value) || 0)}
            className="border p-2 rounded"
          />
        </div>
        <button
          onClick={handleCalculate}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Calculate
        </button>
        {result !== null && (
          <div className="mt-4">
            Product of digits: {result}
          </div>
        )}
      </div>
    </div>
  )
} 