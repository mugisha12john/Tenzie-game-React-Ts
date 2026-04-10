function App() {
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
          <button className="p-2 font-bold text-2xl border border-black w-30">
            1
          </button>
          <button className="p-2 font-bold text-2xl border border-black w-30">
            2
          </button>
          <button className="p-2 font-bold text-2xl border border-black w-30">
            3
          </button>
          <button className="p-2 font-bold text-2xl border border-black w-30">
            4
          </button>
          <button className="p-2 font-bold text-2xl border border-black w-30">
            5
          </button>
          <button className="p-2 font-bold text-2xl border border-black w-30">
            6
          </button>
          <button className="p-2 font-bold text-2xl border border-black w-30">
            7
          </button>
          <button className="p-2 font-bold text-2xl border border-black w-30">
            8
          </button>
          <button className="p-2 font-bold text-2xl border border-black w-30">
            9
          </button>
          <button className="p-2 font-bold text-2xl border border-black w-30">
            10
          </button>
        </div>
        <button className="bg-indigo-600 font-bold m-20 text-xl p-2 w-40 ">
          Roll
        </button>
      </main>
    </>
  );
}

export default App;
