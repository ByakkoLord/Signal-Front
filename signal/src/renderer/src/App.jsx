import electronLogo from './assets/electron.svg'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <>
      <div className="sidebar-container">
        <Sidebar />
        <div className="sidebar-middle">
          <Topbar />
          <div className="w-full h-screen flex flex-col items-center justify-center">
            <Dashboard />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
