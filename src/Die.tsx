export default function Die(props: { data: number; isHeld: boolean }) {
  return (
    <>
      {props.isHeld ? (
        <button className="p-2 font-bold text-2xl border shadow-sm bg-green-400 text-white shadow-gray-700 rounded-sm border-black max-w-30">
          {props.data}
        </button>
      ) : (
        <button className="p-2 font-bold text-2xl border shadow-sm shadow-gray-700 rounded-sm border-black max-w-30">
          {props.data}
        </button>
      )}
    </>
  );
}
