import React, { useEffect, useState } from "react";
import { Avatar, Button, List, Skeleton } from "antd";

const count = 15;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;

// Define the type for the item
interface ListItem {
  loading?: boolean;
  name: {
    first?: string;
    last?: string;
  };
  picture: {
    large: string;
  };
}

function Sidebar() {
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  // Use ListItem[] as the type for data and list states
  // const [data, setData] = useState<ListItem[]>([]);
  const [list, setList] = useState<ListItem[]>([]);

  useEffect(() => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        setInitLoading(false);
        setList(res.results);
        console.log('res.results :', res.results);
      });
  }, []);


//   const onLoadMore = () => {
//     setLoading(true);
//     setList(
//       data.concat(
//         [...new Array(count)].map(() => ({
//           loading: true,
//           name: {},
//           picture: { large: "" },
//         }))
//       )
//     );
//     fetch(fakeDataUrl)
//       .then((res) => res.json())
//       .then((res) => {
//         const newData = data.concat(res.results);
//         setData(newData);
//         setList(newData);
//         setLoading(false);
//         window.dispatchEvent(new Event("resize"));
//       });
//   };
const handleClick = (item: any) => {
  setSelectedItem(item.name?.last);
};


  return (
    <>
    <div style={{height:'100vh'}}>
      <div className="h-1/3">
        <span>my name is khan</span>

      </div>
      <div className="h-2/3 overflow-y-scroll">
      <List
        className="demo-loadmore-list"
        loading={initLoading}
        itemLayout="horizontal"
        // loadMore={loadMore}
      dataSource={list}
      renderItem={(item) => (
        <List.Item
          className={`list-item ${selectedItem === item.name?.last ? 'selected' : ''}`}
          onClick={() => handleClick(item)}
        >
          <Skeleton avatar title={false} loading={item.loading} active>
            <List.Item.Meta
              avatar={<Avatar src={item.picture.large} />}
              title={<a href="https://ant.design">{item.name?.last}</a>}
              description="Ant Design, a design language"
            />
          </Skeleton>
        </List.Item>
      )}
    />
      </div>
    </div>
    </>
  );
}

const response =[
  {
    "_id": "66113269cbb31b15bf1b6bcb",
    "name": "",
    "isGroup": false,
    "creater": "661117761258312bf279c989",
    "participants": [
      {
        "_id": "661117761258312bf279c989",
        "firstName": "manish",
        "lastName": "kumar",
        "avtar": "http://res.cloudinary.com/dpb8jmbij/image/upload/v1712396150/orisciywfed6mvfrbtpr.webp"
      },
      {
        "_id": "661a520423a10bee848b7aa7",
        "firstName": "Ajay",
        "lastName": "tiwari",
        "avtar": "http://res.cloudinary.com/dpb8jmbij/image/upload/v1713000963/ocyo34e9xpavd5uxxrdc.jpg"
      }
    ],
    "lastMessages": {
      "_id": "67612cb0da6878eeb79d7745",
      "senderId": "661a520423a10bee848b7aa7",
      "chatId": "66113269cbb31b15bf1b6bcb",
      "contentType": "text",
      "content": "shishir",
      "createdAt": "2024-12-17T07:48:00.877Z",
      "updatedAt": "2024-12-17T07:48:00.877Z",
      "__v": 0,
      "senderDetails": {
        "_id": "661a520423a10bee848b7aa7",
        "firstName": "Ajay",
        "lastName": "tiwari",
        "avtar": "http://res.cloudinary.com/dpb8jmbij/image/upload/v1713000963/ocyo34e9xpavd5uxxrdc.jpg"
      }
    }
  },
  {
    "_id": "661d55eeb78f04b2b842dbc1",
    "name": "",
    "isGroup": false,
    "creater": "661117761258312bf279c989",
    "participants": [
      {
        "_id": "661117761258312bf279c989",
        "firstName": "manish",
        "lastName": "kumar",
        "avtar": "http://res.cloudinary.com/dpb8jmbij/image/upload/v1712396150/orisciywfed6mvfrbtpr.webp"
      },
      {
        "_id": "661a525d23a10bee848b7aab",
        "firstName": "sharad",
        "lastName": "gupta",
        "avtar": "http://res.cloudinary.com/dpb8jmbij/image/upload/v1713001052/zydtw9ma8vldy2138mny.png"
      }
    ],
    "lastMessages": {
      "_id": "66a137c6da6878eeb79d76d5",
      "senderId": "661117761258312bf279c989",
      "chatId": "661d55eeb78f04b2b842dbc1",
      "contentType": "text",
      "content": "hello",
      "createdAt": "2024-07-24T17:20:06.249Z",
      "updatedAt": "2024-07-24T17:20:06.249Z",
      "__v": 0,
      "senderDetails": {
        "_id": "661117761258312bf279c989",
        "firstName": "manish",
        "lastName": "kumar",
        "avtar": "http://res.cloudinary.com/dpb8jmbij/image/upload/v1712396150/orisciywfed6mvfrbtpr.webp"
      }
    }
  },
  {
    "_id": "661d55bd770581bec6c77fe2",
    "name": "Vinod Pal",
    "isGroup": false,
    "creater": "661117761258312bf279c989",
    "participants": [
      {
        "_id": "661117761258312bf279c989",
        "firstName": "manish",
        "lastName": "kumar",
        "avtar": "http://res.cloudinary.com/dpb8jmbij/image/upload/v1712396150/orisciywfed6mvfrbtpr.webp"
      },
      {
        "_id": "661a529e23a10bee848b7aaf",
        "firstName": "vinod",
        "lastName": "Pal",
        "avtar": "http://res.cloudinary.com/dpb8jmbij/image/upload/v1713001117/kv9aguapesbxthkmbqdk.png"
      }
    ],
    "lastMessages": {
      "_id": "661d635072256454a81585e7",
      "senderId": "661a529e23a10bee848b7aaf",
      "chatId": "661d55bd770581bec6c77fe2",
      "contentType": "text",
      "content": "vinod mmmmmmmmmmmm",
      "createdAt": "2024-04-15T17:26:40.969Z",
      "updatedAt": "2024-04-15T17:26:40.969Z",
      "__v": 0,
      "senderDetails": {
        "_id": "661a529e23a10bee848b7aaf",
        "firstName": "vinod",
        "lastName": "Pal",
        "avtar": "http://res.cloudinary.com/dpb8jmbij/image/upload/v1713001117/kv9aguapesbxthkmbqdk.png"
      }
    }
  },
  {
    "_id": "661d5544e22d955cb830ebb6",
    "name": "Group Chat2",
    "isGroup": true,
    "creater": "661117761258312bf279c989",
    "participants": [
      {
        "_id": "661117761258312bf279c989",
        "firstName": "manish",
        "lastName": "kumar",
        "avtar": "http://res.cloudinary.com/dpb8jmbij/image/upload/v1712396150/orisciywfed6mvfrbtpr.webp"
      },
      {
        "_id": "661a520423a10bee848b7aa7",
        "firstName": "Ajay",
        "lastName": "tiwari",
        "avtar": "http://res.cloudinary.com/dpb8jmbij/image/upload/v1713000963/ocyo34e9xpavd5uxxrdc.jpg"
      },
      {
        "_id": "661a525d23a10bee848b7aab",
        "firstName": "sharad",
        "lastName": "gupta",
        "avtar": "http://res.cloudinary.com/dpb8jmbij/image/upload/v1713001052/zydtw9ma8vldy2138mny.png"
      },
      {
        "_id": "661a529e23a10bee848b7aaf",
        "firstName": "vinod",
        "lastName": "Pal",
        "avtar": "http://res.cloudinary.com/dpb8jmbij/image/upload/v1713001117/kv9aguapesbxthkmbqdk.png"
      }
    ],
    "lastMessages": {
      "_id": "661d5924c463cf2475c27b37",
      "senderId": "661a525d23a10bee848b7aab",
      "chatId": "661d5544e22d955cb830ebb6",
      "contentType": "text",
      "content": "welcome to this group",
      "createdAt": "2024-04-15T16:43:16.046Z",
      "updatedAt": "2024-04-15T16:43:16.046Z",
      "__v": 0,
      "senderDetails": {
        "_id": "661a525d23a10bee848b7aab",
        "firstName": "sharad",
        "lastName": "gupta",
        "avtar": "http://res.cloudinary.com/dpb8jmbij/image/upload/v1713001052/zydtw9ma8vldy2138mny.png"
      }
    }
  },
  {
    "_id": "661131af6d5c13c46581a144",
    "name": "Group Chat",
    "isGroup": true,
    "creater": "661117761258312bf279c989",
    "participants": [
      {
        "_id": "661117761258312bf279c989",
        "firstName": "manish",
        "lastName": "kumar",
        "avtar": "http://res.cloudinary.com/dpb8jmbij/image/upload/v1712396150/orisciywfed6mvfrbtpr.webp"
      },
      {
        "_id": "661a520423a10bee848b7aa7",
        "firstName": "Ajay",
        "lastName": "tiwari",
        "avtar": "http://res.cloudinary.com/dpb8jmbij/image/upload/v1713000963/ocyo34e9xpavd5uxxrdc.jpg"
      },
      {
        "_id": "661a525d23a10bee848b7aab",
        "firstName": "sharad",
        "lastName": "gupta",
        "avtar": "http://res.cloudinary.com/dpb8jmbij/image/upload/v1713001052/zydtw9ma8vldy2138mny.png"
      }
    ],
    "lastMessages": {
      "_id": "661bacd5b81024ee58576aba",
      "senderId": "661a520423a10bee848b7aa7",
      "chatId": "661131af6d5c13c46581a144",
      "contentType": "text",
      "content": "oooooooooooooo gncghc nbvncnchj gchgchgchg hhgvhvhjvjhvj gchgchgch hvjhvjhvh ghcvhgchjcj oo",
      "createdAt": "2024-04-14T10:15:49.053Z",
      "updatedAt": "2024-04-14T10:15:49.053Z",
      "__v": 0,
      "senderDetails": {
        "_id": "661a520423a10bee848b7aa7",
        "firstName": "Ajay",
        "lastName": "tiwari",
        "avtar": "http://res.cloudinary.com/dpb8jmbij/image/upload/v1713000963/ocyo34e9xpavd5uxxrdc.jpg"
      }
    }
  },
  {
    "_id": "661d5579e12a6a41c75eff01",
    "name": "Group Chat3",
    "isGroup": true,
    "creater": "661117761258312bf279c989",
    "participants": [
      {
        "_id": "661117761258312bf279c989",
        "firstName": "manish",
        "lastName": "kumar",
        "avtar": "http://res.cloudinary.com/dpb8jmbij/image/upload/v1712396150/orisciywfed6mvfrbtpr.webp"
      },
      {
        "_id": "661a525d23a10bee848b7aab",
        "firstName": "sharad",
        "lastName": "gupta",
        "avtar": "http://res.cloudinary.com/dpb8jmbij/image/upload/v1713001052/zydtw9ma8vldy2138mny.png"
      },
      {
        "_id": "661a529e23a10bee848b7aaf",
        "firstName": "vinod",
        "lastName": "Pal",
        "avtar": "http://res.cloudinary.com/dpb8jmbij/image/upload/v1713001117/kv9aguapesbxthkmbqdk.png"
      }
    ]
  }
]

export default Sidebar;
