// import type { ReactElement } from "react";


// interface ButtonProps{
//     variant:"primary" | "secondary";
//     text : string;
//     startIcon:ReactElement;
//     onClick?:()=>void;
//     fullWidth?: boolean;
//     loading?:boolean;
// }

// const variantClasses = {
//     "primary" : "bg-purple-600 text-white",
//     "secondary" : "bg-purple-200 text-purple-600"
// };

// const defaultStyles = "px-4 py-2 rounded-md font-light flex items-center"

// export function Button({variant, text, startIcon, onClick,fullWidth, loading}: ButtonProps){
//      return <button onClick={onClick} className={variantClasses[variant]+ " " + defaultStyles + `${fullWidth ? " w-full flex justify-center items-center" : ""} ${loading ? "opacity-45" : ""}`}disabled={loading}>
//         <div className="pr-2">
//             {startIcon}
//         </div>
        
//         {text}
//      </button>
// }

import type { ReactElement } from "react";

// Make startIcon optional
interface ButtonProps {
  variant: "primary" | "secondary";
  text: string;
  startIcon?: ReactElement;
  onClick?: () => void;
  fullWidth?: boolean;
  loading?: boolean;
}

const variantClasses = {
  primary: "bg-purple-600 text-white hover:bg-purple-700",
  secondary: "bg-purple-200 text-purple-600 hover:bg-purple-300",
};

const defaultStyles =
  "px-4 py-2 rounded-md font-light flex items-center justify-center gap-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50";

export function Button({
  variant,
  text,
  startIcon,
  onClick,
  fullWidth,
  loading,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${variantClasses[variant]} ${defaultStyles} ${
        fullWidth ? "w-full" : ""
      }`}
      disabled={loading}
    >
      {loading ? (
        <svg
          className="animate-spin h-4 w-4 mr-2 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8H4z"
          ></path>
        </svg>
      ) : (
        startIcon && <div className="pr-1">{startIcon}</div>
      )}
      <span>{text}</span>
    </button>
  );
}
