import { useState } from 'react';

export function Lesson01() {
  const [valor, setValor] = useState();

  return (
    <>
      <h2 className='font-semibold text-center uppercase'>
        Detalhes sobre o funcionamento do useState
      </h2>
      <main className='p-8'></main>
    </>
  );
}
