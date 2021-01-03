const MainMenu = (props) => {
  return (
    <>
      <div className="text-7xl font-bold mb-8">Memory Game</div>
      <button
        className="w-48 bg-green-500 text-white font-bold rounded-lg text-xl p-4 hover:bg-gray-700"
        onClick={props.onStart}
      >
        New Game
      </button>
    </>
  );
};

export default MainMenu;