

// import '../index.css';
// import { Button } from '../components/Button';
// import { PlusIcon } from '../Icons/PlusIcon';
// import { ShareIcon } from '../Icons/ShareIcon';
// import { Card } from '../components/Card';
// import { CreateContentModal } from '../components/CreateContentModal';
// import { useEffect, useState } from 'react';
// import { Sidebar } from '../components/Sidebar';
// import { useContent } from '../hooks/useContent';
// import axios from 'axios';
// import { BACKEND_URL } from '../config';
// import { useNavigate } from 'react-router-dom';

// export function Dashboard() {
//   const [modalOpen, setModalOpen] = useState(false);
//   const { contents, refresh } = useContent();
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     setIsAuthenticated(!!token);

//     if (token) {
//       refresh();
//     }
//   }, [modalOpen]);

//   return (
//     <div >
//       <Sidebar />
//       <div className='p-4 ml-72 min-h-screen bg-gray-100 border-2'>

//         {isAuthenticated ? (
//           <>
//             <CreateContentModal open={modalOpen} onClose={() => setModalOpen(false)} />

//             <div className='flex justify-end gap-4'>
//               <Button
//                 onClick={() => setModalOpen(true)}
//                 variant='primary'
//                 text="Add Content"
//                 startIcon={<PlusIcon />}
//               />

//               <Button
//                 onClick={async () => {
//                   const response = await axios.post(`${BACKEND_URL}/api/v1/brain/share`, {
//                     share: true
//                   }, {
//                     headers: {
//                       "Authorization": localStorage.getItem("token")
//                     }
//                   });
//                   const shareUrl = `http://localhost:5173/share/${response.data.hash}`;
//                   alert(shareUrl);
//                 }}
//                 variant='secondary'
//                 text="Share Brain"
//                 startIcon={<ShareIcon />}
//               />
//             </div>

//             <div className='flex gap-4 flex-wrap pt-6'>
//               {contents.map(({ type, link, title }) => (
//                 <Card
//                   key={link}
//                   type={type}
//                   link={link}
//                   title={title}
//                 />
//               ))}
//             </div>
//           </>
//         ) : (
//           <div className="flex flex-col items-center justify-center min-h-[60vh] p-6 text-center">
//             <img
//               src="https://cdni.iconscout.com/illustration/premium/thumb/empty-box-2130362-1800926.png"
//               alt="Empty State"
//               className="w-72 mb-6"
//             />

//             <h2 className="text-xl font-bold text-gray-700">Your dashboard is empty</h2>
//             <p className="text-gray-500 mb-4">Sign in to see your personalized content.</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
import '../index.css';
import { Button } from '../components/Button';
import { PlusIcon } from '../Icons/PlusIcon';
import { ShareIcon } from '../Icons/ShareIcon';
import { Card } from '../components/Card';
import { CreateContentModal } from '../components/CreateContentModal';
import { useEffect, useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { useContent } from '../hooks/useContent';
import axios from 'axios';
import { BACKEND_URL } from '../config';

export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const { contents, refresh } = useContent();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);

    if (token) {
      refresh();
    }
  }, [modalOpen]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
      <Sidebar />

      <div className="flex-1 p-4 md:ml-72">
        {isAuthenticated ? (
          <>
            <CreateContentModal open={modalOpen} onClose={() => setModalOpen(false)} />

            <div className="flex flex-col sm:flex-row justify-end gap-4">
              <Button
                onClick={() => setModalOpen(true)}
                variant='primary'
                text="Add Content"
                startIcon={<PlusIcon />}
              />

              <Button
                onClick={async () => {
                  const response = await axios.post(`${BACKEND_URL}/api/v1/brain/share`, {
                    share: true
                  }, {
                    headers: {
                      "Authorization": localStorage.getItem("token")
                    }
                  });
                  const shareUrl = `http://localhost:5173/share/${response.data.hash}`;
                  alert(shareUrl);
                }}
                variant='secondary'
                text="Share Brain"
                startIcon={<ShareIcon />}
              />
            </div>

            <div className="flex flex-wrap gap-4 pt-6 justify-center sm:justify-start">
              {contents.map(({ type, link, title }) => (
                <Card key={link} type={type} link={link} title={title} />
              ))}
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center min-h-[60vh] p-6 text-center">
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/empty-box-2130362-1800926.png"
              alt="Empty State"
              className="w-72 mb-6"
            />

            <h2 className="text-xl font-bold text-gray-700">Your dashboard is empty</h2>
            <p className="text-gray-500 mb-4">Sign in to see your personalized content.</p>
          </div>
        )}
      </div>
    </div>
  );
}
