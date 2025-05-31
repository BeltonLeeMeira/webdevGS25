function Sobre() {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-3xl font-bold mb-4">AlertaFácil</h2>
      <h3 className="text-2xl font-semibold mb-3">Parceiro de Negócio</h3>
      <p className="mb-4">Defesa Civil Municipal e órgãos públicos responsáveis por emergências climáticas.</p>
      <h3 className="text-2xl font-semibold mb-3">Stakeholders</h3>
      <ul className="list-disc list-inside mb-4">
        <li>População em áreas de risco</li>
        <li>Agentes da Defesa Civil</li>
        <li>Prefeituras municipais</li>
        <li>Desenvolvedores do sistema</li>
      </ul>
      <h3 className="text-2xl font-semibold mb-3">Justificativa de Design</h3>
      <p>
        A proposta é que o app funcione bem em regiões com pouca conectividade e que mesmo pessoas com baixa alfabetização tecnológica consigam usá-lo. Por isso o design é simples, direto e com foco na experiência de pessoas em situação de emergência.
      </p>
    </div>
  );
}

export default Sobre;
