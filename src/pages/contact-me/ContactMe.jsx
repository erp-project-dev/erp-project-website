import {
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaSpotify,
  FaEnvelope,
} from "react-icons/fa";

function ContactMe() {
  const iconClasses =
    "w-12 h-12 flex items-center justify-center rounded-full text-white text-2xl transition-transform transform hover:scale-110";

  return (
    <section id="contact">
      <div className="mx-auto px-6 max-w-6xl py-24 text-center">
        <div className="flex items-center justify-center mb-12">
          <div className="flex-grow h-px bg-gray-600"></div>
          <h2 className="px-6 text-3xl md:text-4xl font-bold text-gray-100 uppercase">
            Sígueme en
          </h2>
          <div className="flex-grow h-px bg-gray-600"></div>
        </div>

        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://www.instagram.com/erpprojectofficial"
            target="_blank"
            rel="noopener noreferrer"
            className={`${iconClasses} bg-pink-500`}
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.tiktok.com/@erpprojectofficial"
            target="_blank"
            rel="noopener noreferrer"
            className={`${iconClasses} bg-black`}
          >
            <FaTiktok />
          </a>

          <a
            href="https://www.youtube.com/c/erpproject?sub_confirmation=1"
            target="_blank"
            rel="noopener noreferrer"
            className={`${iconClasses} bg-red-600`}
          >
            <FaYoutube />
          </a>

          <a
            href="https://open.spotify.com/intl-es/artist/6xR1HRj6SzReee9R2EkOUo?si=5fa9cbe535da4ee6"
            target="_blank"
            rel="noopener noreferrer"
            className={`${iconClasses} bg-green-500`}
          >
            <FaSpotify />
          </a>

          <a
            href="mailto:erodriguezp105@gmail.com"
            className={`${iconClasses} bg-cyan-500`}
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
