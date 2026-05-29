export function OfflineModeBanner() {
  return (
    <div className="bg-blue-50 border-b border-blue-200 px-4 py-2">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-blue-600 font-semibold">🔒 Modo Offline</span>
          <span className="text-blue-700 text-sm">
            Os dados são salvos localmente no seu navegador
          </span>
        </div>
        <a
          href="#/admin-local"
          className="text-xs bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
        >
          Painel Admin
        </a>
      </div>
    </div>
  );
}
