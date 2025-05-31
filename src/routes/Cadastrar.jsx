function Cadastrar() {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Cadastrar</h2>
      <form>
        <label className="block mb-2">
          Nome:
          <input type="text" className="w-full border border-gray-300 rounded p-2 mt-1" />
        </label>
        <label className="block mb-2">
          Email:
          <input type="email" className="w-full border border-gray-300 rounded p-2 mt-1" />
        </label>
        <label className="block mb-4">
          Senha:
          <input type="password" className="w-full border border-gray-300 rounded p-2 mt-1" />
        </label>
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default Cadastrar;
