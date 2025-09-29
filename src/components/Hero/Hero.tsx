import "./Hero.css";

function Hero() {
  return (
    <div className="p-0 pl-[1.75em] sm:pl-[3em] sm:pt-[7em] pt-[3.5em] m-0 hero w-full sm:h-[70vh] md:h-[50vh] h-[40vh] text-[#efefef]">
      <h1 className="font-extrabold text-3xl sm:text-6xl">
        LAPTOP & SOFTWARE <br /> SUPPORT
      </h1>
      <p className="font-normal text-sm sm:text-md mt-[1em]">
        Having software issues with your laptop? <br />
        Not feeling confident with computers?
      </p>
      <p className="font-bold text-sm sm:text-lg mt-[1em]">
        <br />
        Book a call to receive help!
        <br />
      </p>
    </div>
  );
}

export default Hero;
