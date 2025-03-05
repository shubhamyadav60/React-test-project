import '../../../assets/scss/dashboard.css'
import CRUD from '../CrudOpration';
import './dashbord.css'
import GridExample from './GridExample';
import RevenueTrafficChart from './RevenueTrafficChart';

export default function DashboardContainer() {
  return (
    <div className="dashboard-container mt-[2.3rem]">
    <main className=" ">
            <div className="container  mx-auto grid">
              <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">Dashboard</h2>
              {/* CTA */}
            
              {/* Cards */}
              <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
                {/* Card */}
                <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                  <div className="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">Total clients</p>
                    <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">6389</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                  <div className="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">US clients</p>
                    <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">1567</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                  <div className="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">Indian clients</p>
                    <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">2359</p>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                  <div className="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400"> Forigen clients</p>
                    <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">389</p>
                  </div>
                </div>
                {/* Add other cards here */}
              </div>
              {/* Charts */}
              <div className=''>
              <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">Charts</h2>
              <GridExample/>
              </div>
              <div className='mt-20'>
              <RevenueTrafficChart/>
              </div>
            </div>
            <CRUD/>
          </main>
    
  </div>
  );
}
