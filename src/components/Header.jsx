import { Logo } from "./Logo";
import { NavLink } from 'react-router-dom';
import './header.css'

export function Header() {
  return (
    <header className='flex items-center justify-between bg-blue-500 w-full h-[80px] px-52 text-white'>
      <NavLink to='/'>
        <Logo />
      </NavLink>

      <li className='list-none flex gap-x-8 font-bold'>
        <NavLink to="/" activeClassName="active">HOME</NavLink>
        <NavLink to="/sobre" activeClassName="active">SOBRE</NavLink>
        <NavLink to="/atendimento" activeClassName="active">ATENDIMENTO</NavLink>
        <NavLink to="/contato" activeClassName="active">LOCALIZAÇÃO</NavLink>
      </li>
    </header>
  )
}
