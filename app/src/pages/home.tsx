import { useState, useEffect } from "react";
import { listStudents } from "../service/home";
import { useNavigate } from "react-router-dom";
import { ModalCreateStudent } from "../component/modalCreateStudent";
import { ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/outline';

interface Student {
  id: string;
  name: string;
  phone: string;
}

export function HomePage() {
  const [students, setStudents] = useState<Student[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const token_key = localStorage.getItem('token_key')?.valueOf;

  const openModal = () => {
      setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const fetchStudents = async () => {
      const response = await listStudents();
      if (response && response.data) {
        setStudents(response.data);
      }
    };
    fetchStudents();
  }, []);

  async function isLoggedIn() {
    if (token_key == undefined) {
      return navigate('/');
    }
  }
  
  useEffect(() => {
    isLoggedIn();
  })

  const logOut = async () => {
    localStorage.removeItem('token_key')
    return navigate('/');
  }

  return (
    <>
      <ModalCreateStudent
        isOpen={isOpen}
        title="Create Student"
        onClose={closeModal}
      />
      <div className="h-svh flex items-center justify-center">
        <div className="min-h-48 w-2/3">
          <div className="flex justify-between">
            <button
              className="mb-3 flex w-50 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none"
              onClick={openModal}
            >
              Create Student
            </button>
            <button
              type="button"
              onClick={logOut}
              className="relative rounded-md text-gray-500 hover:text-zinc-900 focus:outline-none"
            >
              <span className="sr-only">LogOut</span>
              <ArrowRightStartOnRectangleIcon aria-hidden="true" className="h-10 w-10 mb-3" />
            </button>
          </div>
          <div className=" rounded-lg border border-gray-200">
            <div className="overflow-x-auto max-h-96 rounded-t-lg">
              <table className="min-w-full divide-y-2 items-center text-center divide-gray-200 bg-white text-sm">
                <thead className="ltr:text-left rtl:text-right">
                  <tr>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      ID
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      Name
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      Phone
                    </th>
                  </tr>
                </thead>
                {students && students.length > 0 && (
                  <tbody className="divide-y divide-gray-200">
                    {students.map((student, index) => (
                      <tr key={index}>
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                          {student.id}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                          {student.name}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                          {student.phone}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                )}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}