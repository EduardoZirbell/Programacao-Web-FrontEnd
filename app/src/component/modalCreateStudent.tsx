import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react';
import { Input } from './input';
import { createStudent } from '../service/home';

interface ModalCreateStudentProps {
  isOpen: boolean;
  title: string;
  onClose: () => void;
}

export function ModalCreateStudent({
  isOpen,
  title,
  onClose
}: ModalCreateStudentProps) {
  if (!isOpen) {
    return null;
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [name, setName] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [phone, setPhone] = useState("");

  const handleSubmit = async () => {
    const created = await createStudent(name, phone);
    if(created){
      onClose()
      window.location.reload();
    }
  };

  const inputs = [
    {
      type: "text",
      label: "Name",
      placeholder: "",
      value: name,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
      },
    },
    {
      type: "text",
      label: "Phone",
      placeholder: "",
      value: phone,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value);
      },
    },
  ];

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:px-6 flex justify-between">
              <DialogTitle as="h1" className="text-xl font-semibold leading-6 text-gray-900">
                {title}
              </DialogTitle>

              <button
                type="button"
                onClick={() => onClose()}
                className="relative rounded-md text-gray-400 hover:text-zinc-800 focus:outline-none focus:ring-2 focus:ring-black"
              >
                <span className="absolute -inset-2.5" />
                <span className="sr-only">Close panel</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="py-5 sm:mx-auto sm:w-full sm:max-w-sm">
                  {inputs.map((input, index) => (
                    <Input key={index} {...input} />
                  ))}
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-3.5 mt-5 text-xl font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline"
                  >
                    Create
                  </button>
                </div>

              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
