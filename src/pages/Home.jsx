import { Card } from "../components/Card";
import { Element } from "../components/Element";
import { Header } from "../components/Header";
import { SwiperGallery } from "../components/SwiperGallery";

export function Home() {
  return (
    <div className="flex flex-col items-center font-inter">
      <div className="flex flex-col w-full py-24 items-center justify-center bg-home bg-cover text-white">
        <h1 className="text-zinc-50 font-bold font-inter mt-24 lg:text-5xl md:text-4xl text-3xl text-center">
          ACOMPANHAMENTO EDUCACIONAL
        </h1>
        <Element color="white" />
        <p className=" text-gray-200 font-inter md:text-[16px] lg:text-[18px] text-[14px]">
          “A educação é o nosso passaporte para o futuro, pois, o <br /> amanhã
          pertence às pessoas que se preparam hoje.”
        </p>
        <Element />
        <span className=" text-[14px] font-inter">MALCOLM X</span>
      </div>

      <main className="flex flex-col items-center justify-center mt-24 sm:w-[80vw] 2xl:w-[70vw] flex-wrap">
        <h1 className="text-2xl font-bold">ATENDIMENTOS</h1>
        <div className=" mt-4 mb-8 w-14 border-b-4 border-black"></div>
        <div className="flex-col sm:flex-row md:flex gap-x-8 my-4">
          <Card
            img="./img/acompanhamento.png"
            title="ACOMPANHAMENTO ESCOLAR"
            subtitle="FUNDAMENTAL I E II"
          />
          <Card
            img="./img/reforco.png"
            title="REFORÇO ESCOLAR"
            subtitle="FUNDAMENTAL I E II"
          />
          <Card
            img="./img/atendimento.png"
            title="ATENDIMENTO"
            subtitle="PSICOPEDAGÓGICO"
          />
        </div>

        <h1 className="mt-20 text-2xl font-bold">NOSSO ESPAÇO</h1>
        <div className=" mt-4 w-14 border-b-4 border-black"></div>
        <div className="my-8">
          <SwiperGallery className="z-0" />
        </div>

        <h1 className="mt-20 text-2xl font-bold">NOSSA INSTITUIÇÃO</h1>
        <div className=" mt-4 mb-8 w-14 border-b-4 border-black"></div>

        <div className="lg:min-w-[970px] md:min-w-[816px] max-w-[400px] flex items-center justify-between">
          <div className="flex flex-col lg:gap-y-20 md:gap-y-16 gap-y-12 items-between pb-24 pl-4">
            <div className="flex items-center">
              <img
                className="md:h-16 lg:h-20 h-12"
                src="./img/student.svg"
                alt="student"
              />
              <strong className="md:text-[18px] lg:text-[24px] text-[14px]">
                PROFESSORES
                <br />
                QUALIFICADOS
              </strong>
            </div>

            <div className="flex items-center">
              <img
                className="md:h-16 lg:h-20 h-12"
                src="./img/article.svg"
                alt="student"
              />
              <strong className="md:text-[18px] lg:text-[24px] text-[14px]">
                MATERIAL PRÓPRIO
              </strong>
            </div>

            <div className="flex items-center">
              <img
                className="md:h-16 lg:h-20 h-12"
                src="./img/user.svg"
                alt="student"
              />
              <strong className="md:text-[18px] lg:text-[24px] text-[14px]">
                TRATAMENTO
                <br />
                PERSONALIZADO
              </strong>
            </div>
          </div>
          <img
            className="mb-20 md:w-[300px] lg:w-[400px] lg:h-[500px] sm:w-[250px] w-[200px]"
            src="./img/child.svg"
            alt=""
          />
        </div>
      </main>
    </div>
  );
}
