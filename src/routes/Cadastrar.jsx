function Cadastrar() {
  return (
    <div className="max-w-md mx-auto mt-12 p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-extrabold mb-8 text-center text-green-800">Cadastrar</h2>
      <form>
        <label className="block mb-5 text-gray-800 font-semibold">
          Nome:
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-3 mt-2 focus:outline-none focus:ring-4 focus:ring-green-400 transition"
          />
        </label>
        <label className="block mb-5 text-gray-800 font-semibold">
          Email:
          <input
            type="email"
            className="w-full border border-gray-300 rounded-md p-3 mt-2 focus:outline-none focus:ring-4 focus:ring-green-400 transition"
          />
        </label>
        <label className="block mb-8 text-gray-800 font-semibold">
          Senha:
          <input
            type="password"
            className="w-full border border-gray-300 rounded-md p-3 mt-2 focus:outline-none focus:ring-4 focus:ring-green-400 transition"
          />
        </label>
        <button
          type="submit"
          className="w-full bg-green-700 text-white px-5 py-3 rounded-md hover:bg-green-800 transition-colors duration-300"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default Cadastrar;
