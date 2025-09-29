import Button from "../Button/Button";
import "./BookControl.css";
function BookControl() {
  const onClick = () => {
    window.location.href = "/booking";
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-center items-center sm:justify-evenly py-4 pb-2 sm:px-[15%] lg:px-[30%]">
        <p className="font-medium m-0 text-lg sm:text-xl">
          Book a call for support!
        </p>
        <Button className="my-3 sm:mb-5 sm:text-2xl" onClick={onClick} />
      </div>
    </>
  );
}

export default BookControl;
