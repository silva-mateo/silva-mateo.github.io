const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-8 py-32"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <h2
        className="text-4xl font-bold"
        style={{
          color: "var(--text-primary)",
          fontFamily: "var(--font-display)",
        }}
      >
        About
      </h2>
    </section>
  );
};

export default About;
