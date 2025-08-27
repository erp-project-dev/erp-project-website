import { youtubePlaylistUrl, spotifyPlaylistUrl } from "../../config.json";

function MyMusic() {
  return (
    <section id="music" className="bg-gray-400 text-gray-900">
      <div className="mx-auto px-6 max-w-6xl py-24">
        <div className="flex items-center justify-center mb-16">
          <div className="flex-grow h-[1px] bg-gray-300"></div>
          <h2 className="px-6 text-4xl font-bold text-center uppercase tracking-wide">
            Mi música
          </h2>
          <div className="flex-grow h-[1px] bg-gray-300"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Spotify */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-center md:text-left">
              Escúchame en Spotify
            </h3>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <iframe
                src={spotifyPlaylistUrl}
                width="100%"
                height="352"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="rounded-xl"
              ></iframe>
            </div>
          </div>

          {/* YouTube */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-center md:text-left">
              Mira mis videos
            </h3>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <iframe
                width="100%"
                height="352"
                src={youtubePlaylistUrl}
                title="YouTube playlist"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="rounded-xl"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyMusic;
