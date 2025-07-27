
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Logo } from "../Icons/Logo";
// import { TwitterIcon } from "../Icons/TwitterIcon";
// import { YouTubeIcon } from "../Icons/YoutubeIcon";
// import { SidebarItem } from "./SidebarItem";
// import { X, Menu } from "lucide-react";

// export function Sidebar() {
//   const navigate = useNavigate();
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     setIsAuthenticated(!!token);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setIsAuthenticated(false);
//     window.location.href = "/dashboard";
//   };

//   return (
//     <>
//       {/* Top Bar for Mobile */}
//       <div className="md:hidden flex items-center justify-between p-4 border-b bg-white">
//         <div className="flex items-center text-xl font-semibold">
//           <Logo className ="w-6 h-6 mr-2" />
//           Brainly
//         </div>
//         <button onClick={() => setIsOpen(true)}>
//           <Menu className="w-6 h-6" />
//         </button>
//       </div>

//       {/* Sidebar */}
//       <div
//         className={`
//           fixed top-0 left-0 h-full w-72 bg-white border-r p-6 z-50
//           flex flex-col justify-between
//           transition-transform duration-300 ease-in-out
//           ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0
//         `}
//       >
//         {/* Close Button for Mobile */}
//         <div className="md:hidden flex justify-end mb-4">
//           <button onClick={() => setIsOpen(false)}>
//             <X className="w-6 h-6" />
//           </button>
//         </div>

//         {/* TOP: Logo + Name (only desktop) + Social Links */}
//         <div>
//           <div className="hidden md:flex text-2xl items-center pb-6">
//             <div className="pr-2">
//               <Logo />
//             </div>
//             Brainly
//           </div>

//           {/* Social Links — Always at the top */}
//           <div className="pt-4 pl-2">
//             <SidebarItem text="Twitter" icon={<TwitterIcon />} href="https://twitter.com" />
//             <SidebarItem text="Youtube" icon={<YouTubeIcon />} href="https://youtube.com" />
//           </div>
//         </div>

//         {/* Bottom: Auth Buttons */}
//         <div className="flex flex-col gap-3 pr-6">
//           {!isAuthenticated ? (
//             <>
//               <button
//                 onClick={() => {
//                   setIsOpen(false);
//                   navigate("/signin");
//                 }}
//                 className="bg-black text-white py-2 rounded hover:bg-gray-800 transition"
//               >
//                 Sign In
//               </button>
//               <button
//                 onClick={() => {
//                   setIsOpen(false);
//                   navigate("/signup");
//                 }}
//                 className="border border-black text-black py-2 rounded hover:bg-gray-100 transition"
//               >
//                 Sign Up
//               </button>
//             </>
//           ) : (
//             <button
//               onClick={handleLogout}
//               className="bg-red-500 text-white py-2 rounded-xl hover:bg-red-600 transition"
//             >
//               Logout
//             </button>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../Icons/Logo";
import { TwitterIcon } from "../Icons/TwitterIcon";
import { YouTubeIcon } from "../Icons/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";
import { X, Menu } from "lucide-react";

export function Sidebar() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    window.location.href = "/brainly-frontend/dashboard";
  };

  return (
    <>
      {/* Top Bar for Mobile */}
      <div className="md:hidden flex items-center justify-between p-4 border-b bg-white">
        <div className="flex items-center text-xl font-semibold">
          <Logo  />
          Brainly
        </div>
        <button onClick={() => setIsOpen(true)}>
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-full w-72 bg-white border-r p-6 z-50
          flex flex-col justify-between
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0
        `}
      >
        {/* Close Button for Mobile */}
        <div className="md:hidden flex justify-end mb-4">
          <button onClick={() => setIsOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* TOP: Logo + Name (only desktop) + Social Links */}
        <div>
          <div className="hidden md:flex text-2xl items-center pb-6">
            <div className="pr-2">
              <Logo />
            </div>
            Brainly
          </div>

          {/* Social Links — Always at the top */}
          <div className="pt-4 pl-2">
            <SidebarItem text="Twitter" icon={<TwitterIcon />} href="https://twitter.com" />
            <SidebarItem text="Youtube" icon={<YouTubeIcon />} href="https://youtube.com" />
          </div>
        </div>

        {/* Bottom: Auth Buttons */}
        <div className="flex flex-col gap-3 pr-6">
          {!isAuthenticated ? (
            <>
              <button
                onClick={() => {
                  setIsOpen(false);
                  navigate("/signin");
                }}
                className="bg-black text-white py-2 rounded hover:bg-gray-800 transition"
              >
                Sign In
              </button>
              <button
                onClick={() => {
                  setIsOpen(false);
                  navigate("/signup");
                }}
                className="border border-black text-black py-2 rounded hover:bg-gray-100 transition"
              >
                Sign Up
              </button>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white py-2 rounded-xl hover:bg-red-600 transition"
            >
              Logout
            </button>
          )}

          {/* 👇 Your name */}
          <p className="text-xs text-gray-500 text-center mt-4">Made by Kishan</p>
        </div>
      </div>
    </>
  );
}
