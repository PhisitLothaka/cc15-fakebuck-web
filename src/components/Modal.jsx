export default function Modal({
  title,
  children,
  maxWidth = 27,
  open,
  onClose,
}) {
  return (
    <>
      {open && (
        <>
          <div
            className="fixed inset-0 bg-white opacity-70 z-20"
            onClick={onClose}
          ></div>
          <div className="fixed inset-0 z-30">
            <div className="flex justify-center items-center min-h-full p-4">
              <div
                className="bg-white rounded-lg w-full  shadow-2xl border"
                style={{ maxWidth: `${maxWidth}rem` }}
              >
                <div className="flex justify-between p-4 text-xl border-b ">
                  <div className="invisible">x</div>
                  <div className="font-bold">{title}</div>
                  <div
                    className="text-gray-500 cursor-pointer"
                    onClick={onClose}
                  >
                    X
                  </div>
                </div>
                <div className="p-4">{children}</div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
