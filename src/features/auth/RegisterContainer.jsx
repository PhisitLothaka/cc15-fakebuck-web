import { useState } from "react";
import Modal from "../../components/Modal";
import RegisterForm from "./RegisterForm";

export default function RegisterContainer() {
  const [isOpen, setIdOpen] = useState(false);
  return (
    <div className="flex justify-center">
      <button
        className="bg-green-600 text-white rounded-md px-4 py-4 font-bold"
        onClick={() => setIdOpen(true)}
      >
        Create new account
      </button>
      <Modal title="Sign Up" open={isOpen} onClose={() => setIdOpen(false)}>
        <RegisterForm />
      </Modal>
    </div>
  );
}
