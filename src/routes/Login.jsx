function Login() {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form>
        <label className="block mb-2">
          Usuário:
          <input type="text" className="w-full border border-gray-300 rounded p-2 mt-1" />
        </label>
        <label className="block mb-4">
          Senha:
          <input type="password" className="w-full border border-gray-300 rounded p-2 mt-1" />
        </label>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;
