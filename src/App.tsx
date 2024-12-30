import 'antd/dist/reset.css'; // Imports Ant Design's styles
import './App.css'
import Sidebar from './components/Sidebar';
import { Flex, Layout } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
function App() {

  return (
    <>
      <div className='w-max'>
        <Flex gap="middle" wrap>
          <Layout className='layoutStyle'>
            <Sider width="25%" className='sider'>
              <Sidebar />
            </Sider>
            <Layout>
              <Header className='headerStyle' >Header</Header>
              <Content className='contentStyle'  >Content</Content>
              <Footer className='footerStyle' >Footer</Footer>
            </Layout>
          </Layout>
        </Flex>
      </div>
    </>
  )
}

export default App
