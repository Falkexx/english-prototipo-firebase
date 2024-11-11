function Loading() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="animate-spin rounded-full border-8 border-t-transparent border-bg-primary border-solid w-16 h-16"></div>

      <h1 className="text-xl font-extrabold text-zinc-700">Carregando</h1>
    </main>
  );
}

export default Loading;