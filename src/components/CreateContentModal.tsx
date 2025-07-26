
// import { useRef, useState } from "react"
// import { CrossIcon } from "../Icons/CrossIcon"
// import { Button } from "./Button"
// import { Input } from "./Input"
// import axios from "axios";
// import { BACKEND_URL } from "../config";

// enum ContentType {
//     Youtube = "youtube",
//     Twitter = "twitter"
// }


// export function CreateContentModal({ open, onClose }) {
//     const titleRef = useRef<HTMLInputElement>(null);
//     const linkRef = useRef<HTMLInputElement>(null);
//     const [type, setType] = useState(ContentType.Youtube);

//     async function  addContent() {
//         const title = titleRef.current?.value;
//         const link = linkRef.current?.value;
//         await axios.post(`${BACKEND_URL}/api/v1/content`,{
//             link,
//             type,
//             title
//         },{
//             headers:{
//                 "Authorization":localStorage.getItem("token")
//             }
//         })
//         onClose();
//     }
//     return <div>
//         {open && <div>
//             <div className="w-screen h-screen bg-gray-900 fixed top-0 left-0 opacity-80 flex justify-center">


//             </div>
//             <div className="w-screen h-screen  fixed top-0 left-0  flex justify-center">
//                 <div className="flex flex-col justify-center ">
//                     <span className="bg-white opacity-100 p-4 rounded fixed  ">
//                         <div className="flex justify-end">
//                             <div onClick={onClose} className="cursor-pointer">
//                                 <CrossIcon />
//                             </div>

//                         </div>
//                         <div>
//                             <Input reference={titleRef} placeholder={"Title"} />
//                             <Input reference={linkRef} placeholder={"Link"} />
//                         </div>
//                         <div>
//                             <h1>Type</h1>
//                             <div className="flex gap-1 justify-center pb-2">
//                                 <Button text="Youtube" variant={type === ContentType.Youtube ? "primary" : "secondary"} onClick={() => {
//                                     setType(ContentType.Youtube);
//                                 }} ></Button>
//                                 <Button text="Twitter" variant={type === ContentType.Twitter ? "primary" : "secondary"} onClick={() => {
//                                     setType(ContentType.Twitter);
//                                 }}></Button>
//                             </div>
//                         </div>
//                         <div className="flex justify-center">
//                             <Button onClick={addContent} variant="primary" text="Submit" />
//                         </div>

//                     </span>
//                 </div>

//             </div>

//         </div>}
//     </div>

// }

import { useRef, useState } from "react";
// @ts-ignore
import { CrossIcon } from "../Icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";
import axios from "axios";
import { BACKEND_URL } from "../config";

enum ContentType {
  Youtube = "youtube",
  Twitter = "twitter",
}

 export const CreateContentModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const [type, setType] = useState(ContentType.Youtube);

  async function addContent() {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;
    await axios.post(
      `${BACKEND_URL}/api/v1/content`,
      {
        link,
        type,
        title,
      },
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    onClose();
  }

  return (
    <div>
      {open && (
        <div>
          {/* Overlay */}
          <div className="w-screen h-screen bg-gray-900 fixed top-0 left-0 opacity-80 z-40" />

          {/* Modal Container */}
          <div className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md md:max-w-xl p-6 relative">
              {/* Close Button */}
              <div className="absolute top-4 right-4 cursor-pointer" onClick={onClose}>
                <CrossIcon />
              </div>

              {/* Type Selection */}
              <div className="mb-4">
                <h2 className="text-center text-lg font-semibold mb-2">Select Content Type</h2>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-2">
                  <Button
                    text="YouTube"
                    variant={type === ContentType.Youtube ? "primary" : "secondary"}
                    onClick={() => setType(ContentType.Youtube)}
                  />
                  <Button
                    text="Twitter"
                    variant={type === ContentType.Twitter ? "primary" : "secondary"}
                    onClick={() => setType(ContentType.Twitter)}
                  />
                </div>
              </div>

              {/* Inputs */}
              <div className="space-y-3">
                <Input reference={titleRef} placeholder="Title" />
                <Input reference={linkRef} placeholder="Link" />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center mt-6">
                <Button onClick={addContent} variant="primary" text="Submit" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
