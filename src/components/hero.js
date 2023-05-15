function Hero(props) {
  return (
    <div
      style={{
        minHeight: "120vh",
        backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.50), rgba(0, 0, 0, 0.50)), url(${props.image})`,
        backgroundSize: "cover",
        zIndex: "-1",
        paddingTop: "1px",
        marginTop: "-1px",
      }}
    >
      {props.children}
    </div>
  );
}

export default Hero;
