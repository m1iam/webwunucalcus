import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-6">Mathematical Problem Solver</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link href="/tasks/expression-calculator" 
          className="p-4 border rounded hover:bg-gray-100">
          <h2 className="font-semibold">Expression Calculator</h2>
          <p className="text-sm text-gray-600">Calculate complex mathematical expressions</p>
        </Link>

        <Link href="/tasks/digit-product" 
          className="p-4 border rounded hover:bg-gray-100">
          <h2 className="font-semibold">Digit Product</h2>
          <p className="text-sm text-gray-600">Find product of digits in a number</p>
        </Link>

        <Link href="/tasks/array-operations" 
          className="p-4 border rounded hover:bg-gray-100">
          <h2 className="font-semibold">Array Operations</h2>
          <p className="text-sm text-gray-600">Find min/max elements and indices</p>
        </Link>

        <Link href="/tasks/array-positives" 
          className="p-4 border rounded hover:bg-gray-100">
          <h2 className="font-semibold">Positive Elements Counter</h2>
          <p className="text-sm text-gray-600">Count positive elements in arrays</p>
        </Link>

        <Link href="/tasks/string-modifier" 
          className="p-4 border rounded hover:bg-gray-100">
          <h2 className="font-semibold">String Modifier</h2>
          <p className="text-sm text-gray-600">Remove middle letter(s) from string</p>
        </Link>
      </div>
    </main>
  );
}
