import { Element } from "../components/Element";

export function Contact() {
  {
    document.title = "EA | Localização";
  }
  return (
    <main className="flex flex-col items-center justify-center pt-[96px] z-10 font-inter ">
      <div className="w-full flex flex-col items-center justify-center bg-contact bg-cover  h-[180px]">
        <span className="text-4xl text-white font-bold uppercase">
          Localização
        </span>
        <Element color="white" border={4} margin={4} />
      </div>
      <section className="flex flex-col justify-center items-center gap-10 m-10 lg:w-[970px] md:w-[700px] sm:w-[550px] w-[300px]">
        <h1 className="md:text-4xl text-center leading-snug text-2xl">
          Agende uma visita para conhecer melhor nossa instituição
        </h1>
        <a href="https://www.google.com/maps/place/ESPA%C3%87O+APRENDIZ/@-23.2309414,-45.9033352,15z/data=!4m12!1m6!3m5!1s0x0:0xafeec27a1af62e9a!2sESPA%C3%87O+APRENDIZ!8m2!3d-23.2309414!4d-45.9033352!3m4!1s0x0:0xafeec27a1af62e9a!8m2!3d-23.2309414!4d-45.9033352">
          <img
            src="./img/locale.png"
            alt=""
            className="lg:w-[850px] md:w-[600px] sm:w-[450px] w-[400px] mb-20"
          />
        </a>
      </section>
    </main>
  );
}
