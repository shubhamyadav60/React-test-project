import '../../../assets/scss/dashboard.css'
import CRUD from '../CrudOpration';
import './dashbord.css'

export default function DashboardContainer() {
  return (
    <div className="dashboard-container">
    <div className="dashboard-header">
      <h1 className="dashboard-title">Dashboard</h1>
    </div>
    <CRUD/>
  </div>
  );
}
