import { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";
import Story from "./Story";

const Stories = () => {
  const [storiesData, setStoriesData] = useState([]);

  useEffect(() => {
    const userStories: any = Array(30)
      .fill(0)
      .map(() => ({
        id: faker.datatype.uuid(),
        username: faker.internet.userName(),
        profileImg: `https://i.pravatar.cc/150?img=${Math.ceil(
          Math.random() * 70
        )}`,
      }));
    setStoriesData(userStories);
  }, []);

  return (
    <div className="flex p-4 space-x-4 border rounded-xl overflow-x-scroll scrollbar-none mb-4">
      {storiesData.map((data: any) => (
        <Story username={data.username} profileImg={data.profileImg} />
      ))}
    </div>
  );
};

export default Stories;
