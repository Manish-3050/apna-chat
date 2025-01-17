import { Layout, Input, Menu, Avatar, List, Typography } from 'antd';
import { SearchOutlined, MessageOutlined, TeamOutlined, AppstoreOutlined } from '@ant-design/icons';
import { useState } from 'react';
import '../App.css'
const { Sider } = Layout;
const { Text } = Typography;

export interface ChatItem {
  id: number;
  name: string;
  lastMessage: string;
  lastSeen: string;
  avatar: string;
}

interface SidebarProps {
  chatList: ChatItem[];
  onSelectChat: (chatId: number) => void;
}

export function Sidebar({ chatList, onSelectChat }: SidebarProps) {
  const [selectedChatId, setSelectedChatId] = useState<number | null>(null);

  const handleChatSelection = (chatId: number) => {
    setSelectedChatId(chatId);
    onSelectChat(chatId);
  };

  return (
    <Sider width={300} theme="light">
      <div style={{ padding: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
          <Avatar size={40} src="https://github.com/shadcn.png" />
          <div style={{ marginLeft: '12px' }}>
            <Text strong>Manish kumar</Text>
            <Text type="secondary" style={{ display: 'block' }}>₹ 0.00</Text>
          </div>
        </div>
        <Input
          placeholder="Search"
          prefix={<SearchOutlined />}
          style={{ marginBottom: '16px' }}
        />
      </div>
      <Menu mode="horizontal" defaultSelectedKeys={['1']} style={{ borderBottom: '1px solid #f0f0f0' }}>
        <Menu.Item key="1" icon={<AppstoreOutlined />}>All</Menu.Item>
        <Menu.Item key="2" icon={<MessageOutlined />}>Chats</Menu.Item>
        <Menu.Item key="3" icon={<TeamOutlined />}>Channels</Menu.Item>
      </Menu>
      <div style={{ overflowY: 'auto', height: 'calc(100vh - 200px)' }}>
        <List
          dataSource={chatList}
          renderItem={(item) => (
            <List.Item
              key={item.id}
              style={{
                padding: '12px 16px',
                cursor: 'pointer',
                backgroundColor: item.id === selectedChatId ? '#e6f7ff' : 'transparent',
              }}
              onClick={() => handleChatSelection(item.id)}
              className="chat-item-hover"
            >
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={item.name}
                description={item.lastMessage}
              />
              <div>
                <Text type="secondary" style={{ fontSize: '12px' }}>{item.lastSeen}</Text>
              </div>
            </List.Item>
          )}
        />
      </div>
    </Sider>
  );
}
