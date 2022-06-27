import { Logo } from "./Logo";
import { NavLink } from 'react-router-dom';
import './header.css'

export function Header() {
  return (
    <header className='flex justify-between py-5 px-40 items-center flex-wrap bg-blue-500'>
      <NavLink to='/'>
        <Logo />
      </NavLink>

      <lu className="list-none flex-wrap flex gap-x-3 text-gray-200 font-bold ">
        <NavLink to="/"  className="hover:text-yellow-200 transition-colors" activeClassName="active">HOME</NavLink>
        <NavLink to="/sobre"  className="hover:text-yellow-200 transition-colors" activeClassName="active">SOBRE</NavLink>
        <NavLink to="/atendimento"  className="hover:text-yellow-200 transition-colors" activeClassName="active">ATENDIMENTO</NavLink>
        <NavLink to="/contato"  className="hover:text-yellow-200 transition-colors" activeClassName="active">LOCALIZAÇÃO</NavLink>
      </lu>
    </header>
  )
}
