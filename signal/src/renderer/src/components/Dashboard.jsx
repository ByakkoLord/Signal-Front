import PriorityBoard from "./dashboard/PriorityBoard"
import SecondaryBoard from "./dashboard/SecondaryBoard"
import LastBoard from "./dashboard/LastBoard"

export default function Dashboard() {
  return (
    <div className="dashboard">
        <PriorityBoard/>
        <SecondaryBoard/>
        <LastBoard/>
    </div>
  )
}
