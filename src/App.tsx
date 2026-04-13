import { useState } from "react";
import { nanoid } from "nanoid";
import Die from "./Die";

function App() {
  interface Data {
    data: number;
    isHeld: boolean;
    id: string;
  }
  const [btn, setBtn] = useState<Data[]>(generateNewDie());

  function generateNewDie() {
    return new Array(10).fill(0).map(() => {
      return {
        data: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid(),
      };
    });
  }

  function hold(id: string) {
    const a = btn.map((item) => {
      if (item.id === id) {
        return { ...item, isHeld: !item.isHeld };
      } else {
        return item;
      }
    });
    setBtn(a);
  }

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
          {btn.map((btn) => {
            return (
              <Die
                key={btn.id}
                id={btn.id}
                data={btn.data}
                isHeld={btn.isHeld}
                hold={hold}
              />
            );
          })}
        </div>
        <button
          onClick={() => {
            setBtn(generateNewDie());
          }}
          className="bg-indigo-600 cursor-pointer font-bold m-20 text-xl p-2 w-40 text-white rounded-2xl"
        >
          Roll
        </button>
      </main>
    </>
  );
}

export default App;
