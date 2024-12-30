import React, { useEffect, useState } from "react";
import { Avatar, Button, List, Skeleton } from "antd";

const count = 3;
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
  
  // Use ListItem[] as the type for data and list states
  const [data, setData] = useState<ListItem[]>([]);
  const [list, setList] = useState<ListItem[]>([]);

  useEffect(() => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        setInitLoading(false);
        setData(res.results);
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


  return (
    <>
      <List
        className="demo-loadmore-list"
        loading={initLoading}
        itemLayout="horizontal"
        // loadMore={loadMore}
        dataSource={list}
        renderItem={(item) => (
          <List.Item
            actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}
          >
            <Skeleton avatar title={false} loading={item.loading} active>
              <List.Item.Meta
                avatar={<Avatar src={item.picture.large} />}
                title={<a href="https://ant.design">{item.name?.last}</a>}
                description="Ant Design, a design language"
              />
              {/* <div>content</div> */}
            </Skeleton>
          </List.Item>
        )}
      />
    </>
  );
}

export default Sidebar;
