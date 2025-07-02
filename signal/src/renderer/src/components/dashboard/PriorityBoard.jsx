import Tasks from "./Tasks";

export default function PriorityBoard({ type }) {
  console.log("1"+type);
  return (
    <div className="priority-board">
        <Tasks type={type}/>
        <Tasks type={type}/>
        <Tasks type={type}/>
        <Tasks type={type}/>
        <Tasks type={type}/>
        <Tasks type={type}/>
    </div>
  );
}