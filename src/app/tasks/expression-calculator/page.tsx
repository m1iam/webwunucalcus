'use client'

import { useState } from 'react'
import { calculateExpression } from '../../../utils/calculations'

export default function ExpressionCalculator() {
  const [values, setValues] = useState({ a: 5.46, x: 1.52 })
  const [result, setResult] = useState<number | null>(null)

  const handleCalculate = () => {
    const result = calculateExpression(values.a, values.x)
    setResult(result)
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Expression Calculator</h1>
      <div className="space-y-4">
        <div>
          <label className="block">Value of a:</label>
          <input
            type="number"
            value={values.a}
            onChange={(e) => setValues({ ...values, a: parseFloat(e.target.value) })}
            className="border p-2 rounded"
          />
        </div>
        <div>
          <label className="block">Value of x:</label>
          <input
            type="number"
            value={values.x}
            onChange={(e) => setValues({ ...values, x: parseFloat(e.target.value) })}
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
            Result: {result.toFixed(4)}
          </div>
        )}
      </div>
    </div>
  )
} 