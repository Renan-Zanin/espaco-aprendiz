export function Element(props) {
  return (
    <div
      className={`w-14 border-b-${props.border} border-${props.color} my-${props.margin}`}
    ></div>
  );
}
