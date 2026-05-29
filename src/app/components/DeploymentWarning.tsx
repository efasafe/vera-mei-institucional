export function DeploymentWarning() {
  return (
    <div className="fixed bottom-4 right-4 max-w-md bg-red-600 text-white p-4 rounded-lg shadow-lg z-50 animate-pulse">
      <div className="flex items-start gap-3">
        <div className="text-2xl">⚠️</div>
        <div>
          <h3 className="font-bold mb-1">Edge Function precisa ser deployada!</h3>
          <p className="text-sm opacity-90 mb-2">
            Posts criados não aparecem? Faça o deploy da Edge Function do Supabase nas configurações do Make.
          </p>
          <div className="flex gap-2">
            <a
              href="/#/debug-kv"
              className="text-xs bg-white text-red-600 px-3 py-1 rounded hover:bg-red-50"
            >
              Debug
            </a>
            <button
              onClick={() => {
                const el = document.querySelector('.deployment-warning');
                if (el) el.remove();
              }}
              className="text-xs bg-red-700 px-3 py-1 rounded hover:bg-red-800"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
