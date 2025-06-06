'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useEffect, useState } from 'react';

export default function RichTextEditor() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Escribe tu magia aquí, compa 💫</p>',
  });

  if (!mounted) return null; // Evita el render en el server

  return (
    <div className="border p-4 rounded-md bg-white shadow">
      <EditorContent editor={editor} />
    </div>
  );
}
