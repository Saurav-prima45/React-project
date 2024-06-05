import './App.css'
import DeviceStatus from './components/DeviceStatus'
import Earning from './components/Earning'
import Ecommerse from './components/Ecommerce'
import LineChart from './components/LineChart'
import CustomNavbar from './components/NavBar'
import DoughnutChart from './components/Piechart'
import ProjectStatus from './components/ProjectStatus'
import SalesAnalysisTrend from './components/SalesAnalysisTrend'
import SalesAnalytics from './components/SalesAnalytics'
import Sessions from './components/Sessions'
import SideBar from './components/SideBar'
function App() {
  return (
    <div style={{backgroundColor:'#e8eff9'}}>
      <div>
        <CustomNavbar />
      </div>
      <div style={{ display: 'flex' , backgroundColor:'#ffff'}}>
        <div className='d-none d-lg-flex' style={{ flexBasis: '16%' }}>
          <SideBar />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', flexBasis: '84%' }}>
            <div className='topComponents p-3 w-100' style={{ display:'flex', gap:'20px' ,flexWrap:'wrap',marginTop:'60px'}} >
            <DoughnutChart />
              <LineChart />
              <DeviceStatus />
            </div>
          <div className='middleComponent p-3 w-100 ' style={{ display:'flex', gap:'20px' ,flexWrap:'wrap'}}>
              <Sessions />
              <SalesAnalytics />
              <Earning />
          </div>
          <div>
            <Ecommerse />
          </div>
          <div className='bottomSection p-3 w-100 ' style={{ display:'flex',alignItems:"flex-start", gap:'20px' ,flexWrap:'wrap'}}>
              <SalesAnalysisTrend />
              <ProjectStatus />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
