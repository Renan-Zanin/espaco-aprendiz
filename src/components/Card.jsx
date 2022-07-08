import { Element } from "./Element";

export function Card(props) {
  return (
    <div className="w-50 sm:w-70 mb-4 sm:mb-4 md:mb-0 lg:mb-0 text-black bg-slate-300 shadow-lg shadow-slate-500 flex flex-col items-center rounded-md">
      <img className="mb-8" src={props.img} alt="image" />
      <strong>{props.title}</strong>
      <strong>{props.subtitle}</strong>
      <div className=" my-4 w-14 border-b-4 border-red-800"></div>
    </div>
  );
}
