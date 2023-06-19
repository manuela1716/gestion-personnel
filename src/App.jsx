import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./component/Navbar.jsx";
import Recruitment from "./component/Recruitment.jsx";
import Dashboard from "./component/Dashboard.jsx";
import WorkRecords from "./component/WorkRecords.jsx";
import Performance from "./component/Performance.jsx";
import Payments from "./component/Payments";
import LeaveManagement from "./component/LeaveManagement.jsx";
import CareerManagement from "./component/CareerManagement.jsx";
import Admin from "./component/Admin.jsx";
import Error from "./component/Error.jsx";
import CreatePersonnel from "./component/CreatePersonnel.jsx";
console.log('bonjour')
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Admin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/recruitment" element={<Recruitment />} />
        <Route path="/workRecords" element={<WorkRecords />} />
        <Route path="/performance" element={<Performance />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/leaveManagement" element={<LeaveManagement />} />
        <Route path="/careerManagement" element={<CareerManagement />} />
        <Route path="/CreatePersonnel" element={<CreatePersonnel />} />
        <Route path="*" element={<Error />} />
      </Routes>{console.log('fait')}
    </BrowserRouter>
        
    
  );
};

export default App;