import { useRef, useState } from "react";

import FormButton from "./FormButton";

export default function PictureForm({ title, children, initialSrc, onSave }) {
  const inputEl = useRef(null);
  const [file, setFile] = useState(null);

  return (
    <div>
      <input
        type="file"
        className="hidden"
        ref={inputEl}
        onChange={(e) => {
          if (e.target.files[0]) {
            setFile(e.target.files[0]);
          }
        }}
      />
      <div className="flex justify-between items-center">
        <h5 className="text-xl font-semibold">{title}</h5>
        <div>
          {file && (
            <>
              <FormButton
                onClick={() => {
                  onSave(file);
                }}
              >
                Save
              </FormButton>
              <FormButton
                onClick={() => {
                  inputEl.current.value = "";
                  setFile(null);
                }}
              >
                Cancel
              </FormButton>
            </>
          )}
          <FormButton
            onClick={() => {
              inputEl.current.click();
            }}
          >
            Edit
          </FormButton>
        </div>
      </div>
      <div className="flex justify-center">
        {children(file ? URL.createObjectURL(file) : initialSrc, () => {
          inputEl.current.click();
        })}
      </div>
    </div>
  );
}
