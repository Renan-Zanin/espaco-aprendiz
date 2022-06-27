export function Footer() {
  return (
    <div>

      <div className="w-full p-10 bg-gray-300 flex justify-around text-sm flex-wrap gap-y-6">
        <div className="w-80">
          <p>
            O Espaço Aprendiz é um lugar de aprendizado e disciplina. Trabalhamos nas dificuldades do aluno e na solução delas. Nossos professores são qualificados e preparados.
          </p>
        </div>

        <div className="w-80 flex flex-col gap-4">
          <p>● (12) 98211-5543</p>
          <p>● espacoaprendiz@gmail.com</p>
          <p>● São Jośe dos Campos-SP</p>
        </div>

        <div className="w-80 flex sm:justify-center">
          <a href="https://web.whatsapp.com/">
            <img src="./img/whatsapp.svg" alt="whatsapp" />
          </a>

          <a href="https://web.whatsapp.com/">
            <img src="./img/instagram.svg" alt="whatsapp" />
          </a>

          <a href="https://web.whatsapp.com/">
            <img src="./img/facebook.svg" alt="whatsapp" />
          </a>
        </div>
      </div>
      <div className="w-full h-12 bg-blue-500 flex items-center justify-center">
        <p className="text-sm text-white">
          Espaço Aprendiz 2022 - Todos os direitos reservados.
        </p>
      </div>
    </div>
  )
}
