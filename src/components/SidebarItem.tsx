// import type { ReactElement } from "react";

// export function SidebarItem({text,icon}:{
//     text:string;
//     icon:ReactElement;
// }){
//     return <div className="flex text-gray-700 py-2 cursor-pointer hover:text-black hover:bg-gray-200 rounded max-w-48 pl-4 transition-all duration-150">
//         <div className="pr-2">
//             {icon}
//         </div>
//         <div >
//             {text}
//         </div>
         
//     </div>
// }

import type { ReactElement } from "react";

export function SidebarItem({
  text,
  icon,
  onClick,
  href
}: {
  text: string;
  icon: ReactElement;
  onClick?: () => void;
  href?: string;
}) {
  const content = (
    <div className="flex text-gray-700 py-2 cursor-pointer hover:text-black hover:bg-gray-200 rounded max-w-48 pl-4 transition-all duration-150">
      <div className="pr-2">{icon}</div>
      <div>{text}</div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return <div onClick={onClick}>{content}</div>;
}
