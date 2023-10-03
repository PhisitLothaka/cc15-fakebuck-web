import { useState } from "react";
import FormButton from "./FormButton";
import { useRef } from "react";

export default function PictureForm({ title, children }) {
  const [file, setFile] = useState(null);
  // if (file) {
  //   console.log(URL.createObjectURL(file));
  // }
  const inputEl = useRef(null);
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
      <div className="flex items-center justify-between">
        <h5 className="text-xl font-bold">{title}</h5>
        <div>
          {file && (
            <>
              <FormButton>Save</FormButton>
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
          <FormButton onClick={() => inputEl.current.click()}>Edit</FormButton>
        </div>
      </div>
      <div className="flex justify-center items-center">
        {children(file ? URL.createObjectURL(file) : undefined)}
      </div>
    </div>
  );
}
