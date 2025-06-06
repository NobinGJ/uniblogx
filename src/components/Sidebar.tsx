// components/Sidebar.tsx
'use client'
import { useState } from 'react'

export default function Sidebar() {
  const [pages, setPages] = useState(["Página 1", "Página 2"])

  return (
    <div className="w-64 h-full bg-gray-100 dark:bg-gray-900 p-4 border-r">
      <h2 className="text-lg font-bold mb-4">Uniblogx 📒</h2>
      <ul>
        {pages.map((p, i) => (
          <li key={i} className="p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded cursor-pointer">
            {p}
          </li>
        ))}
      </ul>
    </div>
  )
}
