import { Card } from "../components/Card";
import { Element } from "../components/Element";
import { Header } from "../components/Header";
import { SwiperGallery } from "../components/SwiperGallery";
import Video from "../../public/video/video.mp4";

export function Home() {
  {
    document.title = "EA | Home";
  }
  return (
    <div className="flex flex-col items-center font-inter">
      {/* <div className="flex flex-col w-full py-24 items-center justify-center bg-home bg-cover text-gray-100">
        <h1 className="text-gray-50 font-bold font-inter mt-24 lg:text-5xl md:text-4xl text-3xl text-center">
          ACOMPANHAMENTO EDUCACIONAL
        </h1>
        <Element color="white" />
        <p className=" text-gray-100 md:text-[16px] lg:text-[18px] text-[14px] font-josefin italic">
          “A educação é o nosso passaporte para o futuro, pois, o <br /> amanhã
          pertence às pessoas que se preparam hoje.”
        </p>
        <Element />
        <span className=" text-[14px] font-josefin text-zinc-50">
          MALCOLM X
        </span>
      </div> */}

      <section className="relative top-[96px] w-screen md:h-[70vh] h-[55vh] flex flex-col items-center justify-center text-center text-white py-0 px-3 mb-20">
        <div className="video-docker absolute top-0 left-0 w-full md:h-[70vh] h-[55vh] overflow-hidden z-[-3]">
          <video
            className="min-w-full min-h-full absolute object-cover"
            autoPlay
            loop
            muted
            src={Video}
            type="video/mp4"
          />
        </div>

        <div className="video-content space-y-2 z-[-2]  py-2 px-6 flex flex-col items-center">
          <h1 className="text-gray-50 font-bold font-inter py-4 lg:text-5xl md:text-4xl text-3xl text-center">
            ACOMPANHAMENTO EDUCACIONAL
          </h1>
          <p className=" text-gray-100 md:text-[16px] lg:text-[18px] text-[14px] font-josefin italic py-1">
            “A educação é o nosso passaporte para o futuro, pois, o <br />{" "}
            amanhã pertence às pessoas que se preparam hoje.”
          </p>
          <span className=" text-[14px] font-josefin text-zinc-50 py-2">
            MALCOLM X
          </span>
        </div>
      </section>

      <main className="flex flex-col items-center justify-center mt-24 sm:w-[80vw] 2xl:w-[70vw] flex-wrap text-gray-900">
        <h1 className="text-2xl lg:text-3xl font-bold">ATENDIMENTOS</h1>
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

        <h1 className="mt-20 text-2xl lg:text-3xl font-bold">NOSSO ESPAÇO</h1>
        <div className=" mt-4 w-14 border-b-4 border-black"></div>
        <div className="my-8">
          <SwiperGallery className="z-0" />
        </div>

        <h1 className="mt-20 text-2xl lg:text-3xl font-bold">
          NOSSA INSTITUIÇÃO
        </h1>
        <div className=" mt-4 mb-8 w-14 border-b-4 border-black"></div>

        <div className="lg:w-[970px] md:w-[816px] sm:w-[550px] flex flex-col md:flex-row lg:flex-row items-center justify-between">
          <div className="flex flex-col lg:gap-y-20 md:gap-y-16 gap-y-12 items-between pb-10">
            <div className="flex items-center">
              <img
                className="md:h-16 lg:h-20 h-12 pr-2 md:pr-4 lg:pr-6"
                src="./img/student.svg"
                alt="student"
              />
              <strong className="md:text-[18px] lg:text-[20px] text-[14px]">
                PROFESSORES
                <br />
                QUALIFICADOS
              </strong>
            </div>

            <div className="flex items-center">
              <img
                className="md:h-16 lg:h-20 h-12 pr-2 md:pr-4 lg:pr-6"
                src="./img/article.svg"
                alt="student"
              />
              <strong className="md:text-[18px] lg:text-[20px] text-[14px]">
                MATERIAL PRÓPRIO
              </strong>
            </div>

            <div className="flex items-center">
              <img
                className="md:h-16 lg:h-20 h-12 pr-2 md:pr-4 lg:pr-6"
                src="./img/user.svg"
                alt="student"
              />
              <strong className="md:text-[18px] lg:text-[20px] text-[14px] mb">
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

      <style>{`
      .video-docker video {
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      .video-docker::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.3);
      }
    `}</style>
    </div>
  );
}
