export default function Die(props) {
  return (
    <>
      {props.isHeld ? (
        <button
          onClick={() => props.hold(props.id)}
          className="p-2 font-bold text-2xl border shadow-sm bg-green-400 text-white shadow-gray-700 rounded-sm border-black max-w-30"
        >
          {props.data}
        </button>
      ) : (
        <button
          onClick={() => props.hold(props.id)}
          className="p-2 font-bold text-2xl border shadow-sm shadow-gray-700 rounded-sm border-black max-w-30"
        >
          {props.data}
        </button>
      )}
    </>
  );
}
