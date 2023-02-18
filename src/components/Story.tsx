const Story = ({ username, profileImg }: any) => {
  return (
    <div className="flex flex-col items-center space-y-1">
      <div className="bg-gradient-to-tr from-yellow-400 to-purple-600 rounded-full p-[2.5px]">
        <img
          src={profileImg}
          alt="user profile"
          className="w-14 h-14 rounded-full bg-white p-[2.5px]"
        />
      </div>
      <p className="text-xs w-16 truncate text-center">{username}</p>
    </div>
  );
};

export default Story;
