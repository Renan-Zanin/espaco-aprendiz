import { Route, Routes } from "react-router-dom";
import { About } from "../pages/About";
import { Attendance } from "../pages/Attendance";
import { Contact } from "../pages/Contact";
import { Home } from '../pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<About />} />
      <Route path="/atendimento" element={<Attendance />} />
      <Route path="/contato" element={<Contact />} />
    </Routes>
  )
}
