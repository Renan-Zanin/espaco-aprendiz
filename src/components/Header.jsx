import { Logo } from "./Logo";
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className='flex items-center justify-between bg-blue-500 w-full h-[80px] px-52 text-white'>
      <div>
        <Logo />
      </div>

      <li className='list-none flex gap-x-8'>
        <Link to="/">HOME</Link>
        <Link to="/sobre">SOBRE</Link>
        <Link to="/atendimento">ATENDIMENTO</Link>
        <Link to="/contato">LOCALIZAÇÃO</Link>
      </li>
    </header>
  )
}
