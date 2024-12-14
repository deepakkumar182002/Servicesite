// import { useState } from 'react';

const Dialog = ({ isOpen, setIsOpen, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-1/3">
        <div className="p-4">
          <h2 className="text-lg font-semibold">Confirm Action</h2>
          <p>Are you sure you want to continue?</p>
        </div>
        <div className="p-4 flex justify-end space-x-2">
          <button
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded"
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded"
            onClick={onConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
