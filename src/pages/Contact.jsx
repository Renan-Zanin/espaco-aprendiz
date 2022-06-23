export function Contact() {
  {
    document.title = 'EA | Localização';
  }
  return (
    <>
      <div className='w-full h-44 flex flex-col items-center justify-center bg-contact bg-cover'>
        <span className='text-4xl text-white font-bold uppercase'>Localização</span>
        <div className=' mt-4 w-14 border-b-4 border-white'></div>
      </div>
      <main className='flex flex-col justify-center items-center gap-10 m-10'>
        <h1 className="text-4xl">Agende uma visita para conhecer melhor nossa instituição</h1>
          <a
          href='https://www.google.com/maps/place/ESPA%C3%87O+APRENDIZ/@-23.2309414,-45.9033352,15z/data=!4m12!1m6!3m5!1s0x0:0xafeec27a1af62e9a!2sESPA%C3%87O+APRENDIZ!8m2!3d-23.2309414!4d-45.9033352!3m4!1s0x0:0xafeec27a1af62e9a!8m2!3d-23.2309414!4d-45.9033352'
          target='_blank'
        >
          <img src='./img/locale.png' alt='' />
          </a>
      </main>
    </>
  );
}
