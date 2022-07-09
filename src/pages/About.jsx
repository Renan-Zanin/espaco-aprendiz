import { Element } from "../components/Element";

export function About() {
  {
    document.title = "EA | Sobre";
  }
  return (
    <main className="flex flex-col items-center justify-center pt-[96px] -z-10 font-inter">
      <div className="w-full flex flex-col items-center justify-center bg-about bg-cover h-[180px]">
        <span className="text-4xl text-white font-bold uppercase">Sobre</span>
        <Element color="white" border={4} margin={4} />
      </div>

      <div className="gap-20 my-20 grid grid-cols-1 md:grid-cols-2 leading-relaxed text-start lg:w-[970px] md:w-[700px] sm:w-[550px] w-[300px]">
        <div>
          <span className="font-bold text-2xl uppercase">História</span>
          <Element color="black" border={4} margin={2} />
          <p className="mt-4">
            O Espaço Aprendiz é lugar de aprendizado e disciplina. Trabalhamos
            no apoio pedagógico cujo objetivo é ajudar os alunos do ensino
            fundamental I e II a desenvolver e aperfeiçoar habilidades de estudo
            e ganhar autonomia no processo de ensino aprendizagem.
          </p>
        </div>

        <div>
          <span className="font-bold text-2xl uppercase">Missão e Visão</span>
          <Element color="black" border={4} margin={2} />
          <p className="mb-6 mt-4">
            Vencer as dificuldades encontradas e fortalecer cada nova geração de
            alunos com conhecimentos e habilidades para torna-los protagonistas
            das grandes transformações.
          </p>
          <p>
            Visamos ir além da prestação de serviços educacionais com qualidade,
            profissionalismo e respeito. Procuramos sempre desenvolver o
            dinamismo profissional, a responsabilidade social e uma educação que
            ajude a elucidar as dificuldades de nossos alunos.
          </p>
        </div>
      </div>

      <div className="mb-20 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center mb-10">
          <h1 className="font-bold text-2xl uppercase">
            Pilares da nossa instituição
          </h1>
          <Element color="black" border={4} margin={2} />
        </div>
        <img
          src="./img/pillars.jpg"
          alt="pilares"
          className="mb-20 mt-[-8px] w-[350px] lg:w-[800px] md:w-[600px]"
        />
      </div>
    </main>
  );
}
