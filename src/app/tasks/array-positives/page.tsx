'use client'

import { useState } from 'react'
import { countPositiveElements } from '../../../utils/calculations'

export default function ArrayPositives() {
  const [array1, setArray1] = useState<number[]>([])
  const [array2, setArray2] = useState<number[]>([])
  const [result, setResult] = useState<number | null>(null)

  const handleArrayInput = (value: string, setArray: (arr: number[]) => void) => {
    const numbers = value.split(',').map(n => parseFloat(n.trim())).filter(n => !isNaN(n))
    setArray(numbers)
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Count Positive Elements</h1>
      <div className="space-y-4">
        <div>
          <label className="block">First array (comma-separated):</label>
          <input
            type="text"
            onChange={(e) => handleArrayInput(e.target.value, setArray1)}
            className="border p-2 rounded w-full"
            placeholder="-1, 2, 3, -4, 5"
          />
        </div>
        <div>
          <label className="block">Second array (comma-separated):</label>
          <input
            type="text"
            onChange={(e) => handleArrayInput(e.target.value, setArray2)}
            className="border p-2 rounded w-full"
            placeholder="1, -2, 3, 4, -5"
          />
        </div>
        <button
          onClick={() => setResult(countPositiveElements(array1, array2))}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Count Positives
        </button>
        {result !== null && (
          <div className="mt-4">
            Number of positive elements: {result}
          </div>
        )}
      </div>
    </div>
  )
} 