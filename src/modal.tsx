interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
  }
  
  const modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-black rounded-lg p-6 w-full max-w-md">
          <button
            className="absolute top-20 right-20 item-center justify-centre font-bold text-4xl text-red-700 hover:text-red-900 "
            onClick={onClose}
          >
            &times;
          </button>
          {children}
        </div>
      </div>
    );
  };
  
  export default modal;