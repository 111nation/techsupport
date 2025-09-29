import Button from "../../components/Button/Button";
import "./Booking.css";

function Booking() {
  const onClick = () => {
    window.location.href = "https://calendar.app.google/KkC8Y2z9bET7u9x7A";
  };

  return (
    <div className="booking-card w-screen h-screen flex justify-center items-center">
      <div className="border-[rgba(32, 31, 31, 1)] p-0 shadow-xl overflow-hidden rounded-xl w-[90%] sm:w-[75%] max-w-[600px]">
        <div className="booking-header w-full px-10 py-5 text-[#EFEFEF]">
          <h3>Before we start!</h3>
          <p>
            <b>Duration:</b> 30min
          </p>
          <p>
            <b>Cost per session:</b> R50
          </p>
          <p>
            <a href="https://calendar.app.google/KkC8Y2z9bET7u9x7A">
              <u>Booking Link</u>
            </a>
          </p>
        </div>

        <div className="px-10 pb-7.5">
          <br />
          <p>
            Every session is <b>R50</b>. Send your proof of payment to &nbsp;
            <a
              className="link"
              href="mailto:tafara.k@outlook.com"
              target="_blank"
            >
              tafara.k@outlook.com
            </a>
            &nbsp; or &nbsp;
            <a
              className="link"
              href="https://wa.me/27744572802"
              target="_blank"
            >
              +27 74 457 2802
            </a>
            . <br /> <br />
            If your problem has not been solved or you are unsatisfied you may
            qualify for a refund. Additional resources may be provided to you if
            your problem hasn't been solved. <br /> <br />
            <i className="m-0 text-md">
              *Select a time slot for your call
            </i>{" "}
            <br />
            <Button className="mt-3 " onClick={onClick} />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Booking;
