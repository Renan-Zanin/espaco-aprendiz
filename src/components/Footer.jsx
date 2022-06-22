export function Footer() {
  return (
    <>
      <div className="flex items-center justify-around mt-8 font-bold text-yellow-500">
        <div className="ml-[-200px]">
          <span>SOBRE NÓS</span>
          <div className=" mt-4 w-14 border-b-4 border-yellow-500 rounded"></div>
        </div>

        <div className="ml-[-180px]">
          <span>CONTATO</span>
          <div className=" mt-4 w-14 border-b-4 border-yellow-500 rounded"></div>
        </div>

        <div className="ml-[-170px]">
          <span>REDES SOCIAIS</span>
          <div className=" mt-4 w-14 border-b-4 border-yellow-500 rounded"></div>
        </div>

      </div>
      <div className="w-full h-44 bg-gray-300 flex items-center justify-around text-sm">
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

        <div className="w-80 flex gap-x-4">
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
    </>
  )
}
