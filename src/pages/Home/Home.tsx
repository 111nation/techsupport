import BookControl from "../../components/BookControl/BookControl";
import Hero from "../../components/Hero/Hero";
import Profile from "../../components/Profile/Profile";
import Services from "../../components/Services/Services";

function Home() {
  return (
    <>
      <Hero />
      <BookControl />
      <Services />
      <Profile />
    </>
  );
}

export default Home;
