function App() {
  const buttons: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <main className="bg-white max-w-3xl mx-auto flex justify-center flex-col items-center rounded-2xl mt-10">
        <div className="flex justify-center mt-2 flex-col items-center">
          <h1 className="text-3xl  font-bold mt-5">Tenzies</h1>
          <p className="text-lg w-64 text-center mt-4">
            Roll until all dice are the same. Click each die to freeze it at its
            current value between rolls.
          </p>
        </div>

        <div className="grid grid-cols-5  gap-2 w-4/5  mx-auto mt-10">
          {buttons.map((btn) => {
            return (
              <button className="p-2 font-bold text-2xl border shadow-sm shadow-gray-700 rounded-sm border-black max-w-30">
                {btn}
              </button>
            );
          })}

          
        </div>
        <button className="bg-indigo-600 cursor-pointer font-bold m-20 text-xl p-2 w-40 text-white rounded-2xl">
          Roll
        </button>
      </main>
    </>
  );
}

export default App;
