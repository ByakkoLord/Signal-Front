import Tasks from "./Tasks";

export default function SecondaryBoard( { type } ) {
  return (
    <div className="secondary-board">
      <Tasks type={type}/>
      <Tasks type={type}/>
      <Tasks type={type}/>
      <Tasks type={type}/>
      <Tasks type={type}/>
    </div>
  );
}