import { Card } from '../components/Card';
export function Attendance() {
  {
    document.title = 'EA | Atendimentos';
  }
  return (
    <>
      <div className='w-full p-32 flex flex-col items-center justify-center bg-attendance bg-cover'>
        <span className='text-4xl text-white font-bold uppercase'>
          Atendimentos
        </span>
        <div className=' mt-4 w-14 border-b-4 border-white'></div>
      </div>
      <main className='flex flex-col mx-72 my-20'>
        <div className='grid grid-cols-2 gap-y-20'>
          <div className='w-72 animate-pulse'>
            <Card
              img='./img/acompanhamento.png'
              title='ACOMPANHAMENTO ESCOLAR'
              subtitle='FUNDAMENTAL I E II'
            />
          </div>
          <div className='flex items-center'>
            <p>
              O acompanhamento escolar visa contribuir no desenvolvimento de
              cada criança. O desenvolvimento de diferentes habilidades é
              fundamental desde cedo, o mundo muda muito rápido e as crianças
              precisarão dessas habilidades no futuro. Nós buscamos sempre
              elaborar estratégicas de rendimentos aliados aos métodos
              pedagógicos, assim, favorecemos o desenvolvimento intelectual de
              cada criança, de forma individualizada!
            </p>
          </div>

          <div className='w-72 animate-pulse'>
            <Card
              img='./img/reforco.png'
              title='REFORÇO ESCOLAR'
              subtitle='FUNDAMENTAL I E II'
            />
          </div>
          <div className='flex items-center'>
            <p>
              O reforço é composto por aulas de apoio com temas disciplinares e
              objetivos específicos direcionados a um desafio, muitas vezes,
              indicado para provas e avaliações momentâneas, quando o aluno
              precisa superar algumas limitações disciplinares. O objetivo é ser
              aprovado em alguma avaliação específica e consequentemente
              melhorar o desempenho escolar para o futuro.
            </p>
          </div>

          <div className='w-72 animate-pulse'>
            <Card
              img='./img/atendimento.png'
              title='ATENDIMENTO'
              subtitle='PSICOPEDAGÓGICO'
            />
          </div>
          <div className='flex items-center'>
            <p>
              textex extex extex extex extex extex extex extex extex extex extex
              extex extextoasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
