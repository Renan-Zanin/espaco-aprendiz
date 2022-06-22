import { Element } from "./Element";

export function Card(props) {
  return (
    <div className='w-70 text-black h-80 bg-slate-300 shadow-lg shadow-slate-500 flex flex-col items-center rounded-md'>
      <img  className="mb-8" src={props.img} alt="image" />
      <strong>{props.title}</strong>
      <strong>{props.subtitle}</strong>
      <div className=" mt-6 w-14 border-b-4 border-red-800"></div>
    </div>
  )
}