// components/Editor.tsx
'use client'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

export default function Editor() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>¡Escribí tu idea papurri ✨!</p>',
  })

  return (
    <div className="border p-4 rounded-md dark:bg-gray-800">
      <EditorContent editor={editor} />
    </div>
  )
}
