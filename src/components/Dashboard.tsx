import  { useEffect, useState } from 'react';
import { Layout, Input, Button, Avatar, Typography, Space } from 'antd';
import { PhoneOutlined, VideoCameraOutlined, SearchOutlined, SendOutlined } from '@ant-design/icons';
import { ChatItem, Sidebar } from './Sidebar';
import { getRequest } from '../utils/apiHandler';
const { Header, Content, Footer } = Layout;
const { Text } = Typography;
interface Message {
  id: number;
  content: string;
  type: 'text' | 'code';
  sender: 'user' | 'other';
}

const messages: Message[] = [
  {
    id: 1,
    content: `* Added the following changes on the rca run deviation table
- Make the changes in the row index to show the sorted run deviation data
- Make the changes in the run deviation data and add one more key with the name sorted key to show row index
- Make the changes in the datasource of the table`,
    type: 'code',
    sender: 'other'
  },
  {
    id: 2,
    content: `* Create an api to make the mapping of csv file
- Create an function that will handle the file mapping
- First this file will read the columns of file
- Replace the file columns with mapped columns name
- Write and save the same with mapped columns`,
    type: 'code',
    sender: 'user'
  }
];

const chatList1: ChatItem[] = [
  {
    id: 1,
    name: "Copilot",
    lastMessage: "I understand. Let's try a...",
    lastSeen: "02-01-2025",
    avatar: "https://api.dicebear.com/7.x/avatars/svg?seed=1"
  },
  {
    id: 2,
    name: "gp-tvarit Analytics",
    lastMessage: "Today's status:",
    lastSeen: "Mon",
    avatar: "https://api.dicebear.com/7.x/avatars/svg?seed=2"
  },
  {
    id: 3,
    name: "gp-mouldFlo Internal",
    lastMessage: "📎 1.pdf",
    lastSeen: "Fri",
    avatar: "https://api.dicebear.com/7.x/avatars/svg?seed=3"
  },
  {
    id: 4,
    name: "Copilot44",
    lastMessage: "I understand. Let's try a...",
    lastSeen: "02-01-2025",
    avatar: "https://api.dicebear.com/7.x/avatars/svg?seed=1"
  },
  {
    id: 5,
    name: "gp-tvarit Analytics55",
    lastMessage: "Today's status:",
    lastSeen: "Mon",
    avatar: "https://api.dicebear.com/7.x/avatars/svg?seed=2"
  },
  {
    id: 6,
    name: "gp-mouldFlo Internal66",
    lastMessage: "📎 1.pdf",
    lastSeen: "Fri",
    avatar: "https://api.dicebear.com/7.x/avatars/svg?seed=3"
  },
  {
    id: 7,
    name: "Copilot77",
    lastMessage: "I understand. Let's try a...",
    lastSeen: "02-01-2025",
    avatar: "https://api.dicebear.com/7.x/avatars/svg?seed=1"
  },
  {
    id: 8,
    name: "gp-tvarit Analytics88",
    lastMessage: "Today's status:",
    lastSeen: "Mon",
    avatar: "https://api.dicebear.com/7.x/avatars/svg?seed=2"
  },
  {
    id: 9,
    name: "gp-mouldFlo Internal99",
    lastMessage: "📎 1.pdf",
    lastSeen: "Fri",
    avatar: "https://api.dicebear.com/7.x/avatars/svg?seed=3"
  },
  {
    id: 10,
    name: "Copilot10",
    lastMessage: "I understand. Let's try a...",
    lastSeen: "02-01-2025",
    avatar: "https://api.dicebear.com/7.x/avatars/svg?seed=1"
  },
  {
    id: 11,
    name: "gp-tvarit Analytics88",
    lastMessage: "Today's status:",
    lastSeen: "Mon",
    avatar: "https://api.dicebear.com/7.x/avatars/svg?seed=2"
  },
  {
    id: 12,
    name: "gp-mouldFlo Internal99",
    lastMessage: "📎 1.pdf",
    lastSeen: "Fri",
    avatar: "https://api.dicebear.com/7.x/avatars/svg?seed=3"
  },
  {
    id: 13,
    name: "Copilot77",
    lastMessage: "I understand. Let's try a...",
    lastSeen: "02-01-2025",
    avatar: "https://api.dicebear.com/7.x/avatars/svg?seed=1"
  },
  {
    id: 14,
    name: "gp-tvarit Analytics88",
    lastMessage: "Today's status:",
    lastSeen: "Mon",
    avatar: "https://api.dicebear.com/7.x/avatars/svg?seed=2"
  },
  {
    id: 15,
    name: "gp-mouldFlo Internal99",
    lastMessage: "📎 1.pdf",
    lastSeen: "Fri",
    avatar: "https://api.dicebear.com/7.x/avatars/svg?seed=3"
  }
];

export function Dashboard() {
  const [selectedChat, setSelectedChat] = useState<ChatItem | null>(null);
  const [chatList ,setChatList] = useState <ChatItem[]>()

  const handleSelectChat = (chatId: number) => {
    const chat = chatList?.find(c => c.id === chatId);
    setSelectedChat(chat || null);
  };
  useEffect(()=>{
     console.log("useeffect is called")
     getContactList()

  },[])

  const getContactList = async () =>{
    const response = await getRequest('/contact/list?userId=661117761258312bf279c989')
    console.log('response :', response);
    const data = extractChatData(response.data.data)
    console.log('data :', data);
    setChatList(data)
  }


  function extractChatData(chatArray: any[]): ChatItem[] {
    return chatArray.map(chat => ({
      id: chat._id, // Assuming `_id` is a number. If it's a string, consider parsing or changing the type.
      name: chat.name || "Unnamed Chat",
      lastMessage: chat.lastMessages?.content || "No messages yet",
      lastSeen: chat.lastMessages?.createdAt || "Unknown",
      avatar: chat.lastMessages?.senderDetails?.avtar || "", // Defaulting to an empty string for missing avatars.
    }));
  }
  
  
  return (
    <Layout style={{ height: '100vh' }}>
      <Sidebar chatList={chatList || []} onSelectChat={handleSelectChat} />
      <Layout>
        <Header style={{ background: '#fff', padding: '0 16px', borderBottom: '1px solid #f0f0f0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Avatar size={40} src={selectedChat?.avatar || "https://github.com/shadcn.png"} />
              <div style={{ marginLeft: '12px' }}>
                <Text strong>{selectedChat?.name || "Select a chat"}</Text>
                <Text type="secondary" style={{ display: 'block' }}>
                  {selectedChat ? `Last seen ${selectedChat.lastSeen}` : "No chat selected"}
                </Text>
              </div>
            </div>
            <Space>
              <Button icon={<PhoneOutlined />} shape="circle" />
              <Button icon={<VideoCameraOutlined />} shape="circle" />
              <Button icon={<SearchOutlined />} shape="circle" />
            </Space>
          </div>
        </Header>
        <Content style={{ overflowY: 'auto', padding: '16px' }}>
          <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
            {messages.map((message) => (
              <div
                key={message.id}
                style={{
                  maxWidth: '70%',
                  alignSelf: message.sender === 'user' ? 'flex-end' : 'flex-start',
                  backgroundColor: message.type === 'code' ? '#e6f7ff' : '#f0f0f0',
                  padding: '12px',
                  borderRadius: '8px',
                }}
              >
                <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'inherit', margin: 0 }}>
                  {message.content}
                </pre>
              </div>
            ))}
          </Space>
        </Content>
        <Footer style={{ padding: '16px', background: '#fff', borderTop: '1px solid #f0f0f0' }}>
          <Space.Compact style={{ width: '100%' }}>
            <Input placeholder="Type a message" />
            <Button type="primary" icon={<SendOutlined />}>Send</Button>
          </Space.Compact>
        </Footer>
      </Layout>
    </Layout>






  );
}

