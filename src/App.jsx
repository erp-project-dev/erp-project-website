import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import AboutMe from "./pages/about-me/AboutMe";
import ContactMe from "./pages/contact-me/ContactMe";
import MyMusic from "./pages/my-music/MyMusic";
import News from "./pages/news/News";

function App() {
  return (
    <div className="bg-gray-950 min-h-screen text-white flex flex-col">
      <Navbar />

      <main className="flex-grow text-white">
        <AboutMe />
        <MyMusic />
        <News />
        <ContactMe />
      </main>

      <Footer />
    </div>
  );
}

export default App;
