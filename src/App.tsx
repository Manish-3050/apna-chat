import 'antd/dist/reset.css'; // Imports Ant Design's styles
import './App.css'
import { Dashboard } from './components/Dashboard';
import { Layout } from 'antd';
function App() {
  return (
    <>
      <div >
      <Layout style={{ height: '100vh' }}>
      <Dashboard />
    </Layout>

      </div>
    </>
  )
}

export default App
