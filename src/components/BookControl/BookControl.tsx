import "./BookControl.css";
function BookControl() {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center sm:justify-evenly py-4 pb-2 sm:px-[15%] lg:px-[30%]">
      <p className="font-medium">Book a call for support!</p>
      <button className="book-btn border-1 border-[#7584FE] p-2 px-5 text-[#efefef] rounded-full font-bold shadow-md my-3 sm:mb-7 outline-none cursor-pointer">
        BOOK A CALL
      </button>
    </div>
  );
}

export default BookControl;
