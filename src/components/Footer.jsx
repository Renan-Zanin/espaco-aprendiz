import { BsWhatsapp, BsFacebook, BsInstagram } from "react-icons/bs";

export function Footer() {
  return (
    <div>
      <div className="w-full p-10 bg-blue-500 grid grid-cols-1 md:flex justify-center gap-x-24 text-sm flex-wrap gap-y-6 items-start text-zinc-50 font-inter">
        <div className="w-80 flex flex-col justify-center mb-4 lg:mb-0 ">
          <span className="font-bold text-[15px]">SOBRE</span>
          <p className="mt-2 leading-6">
            O Espaço Aprendiz é um lugar de aprendizado e disciplina.
            Trabalhamos nas dificuldades do aluno e na solução delas. Nossos
            professores são qualificados e preparados.
          </p>
        </div>

        <div className="w-[200px] flex flex-col gap-4 mb-4 md:mb-0 lg:mb-0">
          <span className="font-bold text-[15px]">CONTATO</span>
          <p>● (12) 98211-5543</p>
          <p>● espacoaprendiz@gmail.com</p>
          <p>● São José dos Campos - SP</p>
        </div>

        <div className="w-[200px] flex flex-col sm:justify-center gap-x-4 ">
          <span className="font-bold text-[15px] mb-4 uppercase">
            Mídias Sociais
          </span>
          <div className="flex flex-row gap-x-4">
            <a href="https://web.whatsapp.com/">
              <BsWhatsapp size={35} color="#DA9A00" />
            </a>

            <a href="https://web.whatsapp.com/">
              <BsInstagram size={35} color="#DA9A00" />
            </a>

            <a href="https://web.whatsapp.com/">
              <BsFacebook size={35} color="#DA9A00" />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full h-12 bg-slate-300 flex items-center justify-center">
        <p className="text-sm text-gray-900">
          Espaço Aprendiz © {new Date().getFullYear()} - Todos os direitos
          reservados.
        </p>
      </div>
    </div>
  );
}
