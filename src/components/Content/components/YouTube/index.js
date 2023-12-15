function YouTube() {
  return (
    <section className="section">
      <h3 className="title">Mis videos</h3>

      <iframe
        title="ERP Project YouTube video player"
        width="100%"
        height="352"
        src="https://www.youtube.com/embed/videoseries?si=N0qCCZIeFhInsx-n&amp;list=PLH2F_69GF7BeW1Y6ivgt4izTUUmnSNdvj"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </section>
  );
}

export default YouTube;
