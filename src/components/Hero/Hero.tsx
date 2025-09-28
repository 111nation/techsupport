import Button from "../Button/Button";
import "./Hero.css";

function Hero() {
  return (
    <div className="p-0 pl-[1.75em] sm:pt-[5em] pt-[3.5em] m-0 hero w-screen sm:h-[60vh] md:h-[60vh] h-[40vh] text-[#efefef]">
      <h1 className="font-extrabold text-3xl sm:text-4xl">
        LAPTOP & SOFTWARE <br /> SUPPORT
      </h1>
      <p className="font-normal text-sm mt-[1em]">
        Having software issues with your laptop? <br />
        Not feeling confident with computers?
      </p>
      <p className="font-bold text-sm mt-[1em]">
        <br />
        Book a call to receive help!
        <br />
      </p>
    </div>
  );
}

export default Hero;
