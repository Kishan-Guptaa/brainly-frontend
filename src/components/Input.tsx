
// interface InputProps{
//     placeholder:string;
//     reference?: any
// }

// export function Input ({placeholder, reference }: InputProps){
//     return <div>
//         <input ref={reference} placeholder={placeholder} type={"text"} className="px-4 py-2 border rounded m-2"  />
//     </div>
// }


interface InputProps {
  placeholder: string;
  reference?: any;
}

export function Input({ placeholder, reference }: InputProps) {
  return (
    <div className="w-full px-2 py-1">
      <input
        ref={reference}
        placeholder={placeholder}
        type="text"
        className="w-full px-4 py-2 border rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      />
    </div>
  );
}
