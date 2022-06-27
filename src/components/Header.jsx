import { Logo } from "./Logo";
import { NavLink } from 'react-router-dom';
import './header.css'

export function Header() {
  return (
    <header className='flex justify-between py-5 px-40 items-center flex-wrap bg-blue-500'>
      <NavLink to='/'>
        <Logo />
      </NavLink>

      <lu className="list-none flex-wrap flex gap-x-3 text-white font-bold">
        <NavLink to="/" activeClassName="active">HOME</NavLink>
        <NavLink to="/sobre" activeClassName="active">SOBRE</NavLink>
        <NavLink to="/atendimento" activeClassName="active">ATENDIMENTO</NavLink>
        <NavLink to="/contato" activeClassName="active">LOCALIZAÇÃO</NavLink>
      </lu>
    </header>
  )
}
