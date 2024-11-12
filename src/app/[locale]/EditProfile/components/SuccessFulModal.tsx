import React from 'react';
import Link from 'next/link';

const SuccessFulModal = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
      <div className="bg-white rounded-lg p-8 max-w-sm mx-auto shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Dados cadastrados com sucesso!</h2>
        <p className="mb-6">Agora você já pode voltar ao estudos.</p>
        <Link href="/Home">
          <button className="bg-bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
            Ir para Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SuccessFulModal;
