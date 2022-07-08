export function About() {
  {
    document.title = "EA | Sobre";
  }
  return (
    <main className="flex flex-col items-center justify-center">
      <div className="w-full p-32 flex flex-col items-center justify-center bg-about bg-cover">
        <span className="text-4xl text-white font-bold uppercase">Sobre</span>
        <div className=" mt-4 w-14 border-b-4 border-white"></div>
      </div>

      <div className="gap-12 mx-40 my-32 grid grid-cols-2 leading-relaxed text-justify w-[1020px]">
        <div>
          <span className="font-bold text-2xl">História</span>
          <div className=" my-4 w-14 border-b-4 border-black"></div>
          <p>
            O Espaço Aprendiz é lugar de aprendizado e disciplina. Trabalhamos
            no apoio pedagógico cujo objetivo é ajudar os alunos do ensino
            fundamental I e II a desenvolver e aperfeiçoar habilidades de estudo
            e ganhar autonomia no processo de ensino aprendizagem.
          </p>
        </div>
        <div>
          <span className="font-bold text-2xl">Missão e Visão</span>
          <div className=" my-4 w-14 border-b-4 border-black"></div>
          <p className="mb-6">
            Vencer as dificuldades encontradas e fortalecer cada nova geração de
            alunos com conhecimentos e habilidades para torna-los protagonistas
            das grandes transformações
          </p>
          <p>
            Visamos ir além da prestação de serviços educacionais com qualidade,
            profissionalismo e respeito. Procuramos sempre desenvolver o
            dinamismo profissional, a responsabilidade social e uma educação que
            ajude a elucidar as dificuldades de nossos alunos.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <h1 className="font-bold text-2xl uppercase">
          pilares da nossa instituição
        </h1>
        <div className=" mt-4 w-14 border-b-4 border-black"></div>
        <img src="./img/pillars.jpeg" alt="pilares" />
      </div>
    </main>
  );
}
