import { Card } from "../components/Card";
import { Element } from "../components/Element";
export function Attendance() {
  {
    document.title = "EA | Atendimentos";
  }
  return (
    <main className="flex flex-col items-center justify-center pt-[96px] -z-10 font-inter">
      <div className="w-full flex flex-col items-center justify-center bg-attendance bg-cover h-[180px]">
        <span className="text-4xl text-white font-bold uppercase">
          Atendimentos
        </span>
        <Element color="white" border={4} margin={4} />
      </div>

      <section className="lg:w-[970px] md:w-[700px] sm:w-[550px] w-[300px] flex flex-col justify-center items-center">
        <div className="flex flex-col mx-72 my-20">
          <div className="flex md:flex-row flex-col md:justify-between justify-center items-center lg:w-[970px] md:w-[700px] sm:w-[550px] w-[300px] mb-20">
            <div className="lg:w-72 md:w-64 w-60 animate-pulse mb-8 md:mb-0">
              <Card
                img="./img/acompanhamento.png"
                title="ACOMPANHAMENTO ESCOLAR"
                subtitle="FUNDAMENTAL I E II"
              />
            </div>

            <p className="lg:w-[600px] md:w-[380px] w-[280px]">
              O acompanhamento escolar visa contribuir no desenvolvimento de
              cada criança. O desenvolvimento de diferentes habilidades é
              fundamental desde cedo, o mundo muda muito rápido e as crianças
              precisarão dessas habilidades no futuro. Nós buscamos sempre
              elaborar estratégicas de rendimentos aliados aos métodos
              pedagógicos, assim, favorecemos o desenvolvimento intelectual de
              cada criança, de forma individualizada!
            </p>
          </div>
          <div className="flex md:flex-row flex-col grid- md:justify-between justify-center items-center lg:w-[970px] md:w-[700px] sm:w-[550px] w-[300px] mb-20">
            <div className="lg:w-72 md:w-64 w-60 animate-pulse mb-8 md:mb-0">
              <Card
                img="./img/reforco.png"
                title="REFORÇO ESCOLAR"
                subtitle="FUNDAMENTAL I E II"
              />
            </div>
            <p className="lg:w-[600px] md:w-[380px] w-[280px]">
              O reforço é composto por aulas de apoio com temas disciplinares e
              objetivos específicos direcionados a um desafio, muitas vezes,
              indicado para provas e avaliações momentâneas, quando o aluno
              precisa superar algumas limitações disciplinares. O objetivo é ser
              aprovado em alguma avaliação específica e consequentemente
              melhorar o desempenho escolar para o futuro.
            </p>
          </div>

          <div className="flex md:flex-row flex-col grid- md:justify-between justify-center items-center lg:w-[970px] md:w-[700px] sm:w-[550px] w-[300px] mb-20">
            <div className="lg:w-72 md:w-64 w-60 animate-pulse mb-8 md:mb-0">
              <Card
                img="./img/atendimento.png"
                title="ATENDIMENTO"
                subtitle="PSICOPEDAGÓGICO"
              />
            </div>
            <p className="lg:w-[600px] md:w-[380px] w-[280px]">
              textex extex extex extex extex extex extex extex extex extex extex
              extex extextoasdfasdfasd
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
