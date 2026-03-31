// Tela 01_Login separada do shell principal para simular página pública.
export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-navy via-steel to-slate-900 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
        <p className="text-xs uppercase tracking-[0.2em] text-steel">SaaS Obras</p>
        <h1 className="mb-6 text-2xl font-semibold text-navy">Entrar no sistema</h1>
        <form className="space-y-3">
          <input type="email" placeholder="E-mail" className="w-full rounded-lg border border-slate-300 px-3 py-2" />
          <input type="password" placeholder="Senha" className="w-full rounded-lg border border-slate-300 px-3 py-2" />
          <button className="w-full rounded-lg bg-steel px-4 py-2 font-medium text-white">Entrar</button>
        </form>
        <a className="mt-4 block text-center text-sm text-steel" href="#">Esqueci minha senha</a>
      </div>
    </main>
  );
}
