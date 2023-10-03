import { PenIcon } from "../../icons";
import ActionButton from "./ActionButton";
import Modal from "../../components/Modal";
import { useState } from "react";
import EditProfileForm from "./EditProfileForm";

export default function AuthUserAction() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <ActionButton onClick={() => setIsOpen(true)}>
        <PenIcon />
        <samp className="font-semibold">Edit Profile</samp>
      </ActionButton>
      <Modal
        open={isOpen}
        title="Edit Profile"
        onClose={() => setIsOpen(false)}
        maxWith={44}
      >
        <EditProfileForm />
      </Modal>
    </div>
  );
}
