'use client'

import { useState } from 'react'
import { findMinElement, findMaxElementWithIndex } from '../../../utils/calculations'

export default function ArrayOperations() {
  const [array, setArray] = useState<number[]>([])
  const [matrix, setMatrix] = useState<number[][]>([[]])
  const [minResult, setMinResult] = useState<number | null>(null)
  const [maxResult, setMaxResult] = useState<{ value: number; row: number; col: number } | null>(null)

  const handleArrayInput = (value: string) => {
    const numbers = value.split(',').map(n => parseFloat(n.trim())).filter(n => !isNaN(n))
    setArray(numbers)
  }

  const handleMatrixInput = (value: string) => {
    try {
      const rows = value.split(';').map(row => 
        row.split(',').map(n => parseFloat(n.trim())).filter(n => !isNaN(n))
      )
      setMatrix(rows)
    } catch {
      // Silently handle parsing errors
      setMatrix([[]])
    }
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Array Operations</h1>
      <div className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Find Minimum Element</h2>
          <div>
            <label className="block">Enter numbers (comma-separated):</label>
            <input
              type="text"
              onChange={(e) => handleArrayInput(e.target.value)}
              className="border p-2 rounded w-full"
              placeholder="1, 2, 3, 4, 5"
            />
          </div>
          <button
            onClick={() => setMinResult(findMinElement(array))}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Find Minimum
          </button>
          {minResult !== null && (
            <div className="mt-4">
              Minimum element: {minResult}
            </div>
          )}
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Find Maximum Element with Index</h2>
          <div>
            <label className="block">Enter matrix (semicolon-separated rows, comma-separated numbers):</label>
            <textarea
              onChange={(e) => handleMatrixInput(e.target.value)}
              className="border p-2 rounded w-full"
              placeholder="1,2,3;4,5,6;7,8,9"
              rows={4}
            />
          </div>
          <button
            onClick={() => setMaxResult(findMaxElementWithIndex(matrix))}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Find Maximum
          </button>
          {maxResult && (
            <div className="mt-4">
              Maximum element: {maxResult.value} at position [row: {maxResult.row}, col: {maxResult.col}]
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 