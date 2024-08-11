interface ModalCreateStudentProps {
  isOpen: boolean;
  title: string;
  onClose: () => void;
}

export function ModalCreateStudent({
  isOpen,
  title,
  onClose,
}: ModalCreateStudentProps) {
  if (!isOpen) {
    return null;
  }
  return (
    <div>
      <div
        tabIndex={-1}
        className="fixed inset-0  flex items-center justify-center z-50"
      >
        <div className="rounded-xl py-5 px-6 shadow-shape space-y-5">
          <div>
            <h2>{title}</h2>
            <button onClick={onClose}>Fechar Modal</button>
            <div className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="First Name"
                className="border border-gray-300 p-2"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border border-gray-300 p-2"
              />
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
