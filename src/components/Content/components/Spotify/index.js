function Spotify() {
  return (
    <section className="section">
      <h3 className="title">Mi música</h3>

      <iframe
        title="ERP Project Spotify"
        src="https://open.spotify.com/embed/artist/6xR1HRj6SzReee9R2EkOUo?utm_source=generator"
        width="100%"
        height="352"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </section>
  );
}

export default Spotify;
