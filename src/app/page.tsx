import RichTextEditor from '@/components/RichTextEditor';

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-3xl">
        <h1 className="text-4xl font-bold mb-4 text-purple-600">Uniblogx Editor 💻</h1>
        <RichTextEditor />
      </div>
    </main>
  );
}
