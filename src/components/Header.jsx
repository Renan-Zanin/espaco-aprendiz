import { Logo } from "./Logo";

export function Header() {
  return (
    <header className='flex items-center justify-between bg-blue-500 w-full h-[80px] px-52 text-white'>
      <div>
        <Logo />
      </div>

      <li className='list-none flex gap-x-8'>
        <a href="/">HOME</a>
        <a href="/">SOBRE</a>
        <a href="/">ATENDIMENTO</a>
        <a href="/">CONTATO</a>
      </li>
    </header>
  )
}
