'use client'

import { useState } from 'react'
import { removeMiddleLetters } from '../../../utils/calculations'

export default function StringModifier() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState<string | null>(null)

  const handleModify = () => {
    const modified = removeMiddleLetters(input)
    setResult(modified)
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">String Modifier</h1>
      <div className="space-y-4">
        <div>
          <label className="block">Enter text:</label>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border p-2 rounded w-full"
            placeholder="Enter text to modify"
          />
        </div>
        <button
          onClick={handleModify}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Remove Middle Letter(s)
        </button>
        {result !== null && (
          <div className="mt-4">
            Modified text: {result}
          </div>
        )}
      </div>
    </div>
  )
} 