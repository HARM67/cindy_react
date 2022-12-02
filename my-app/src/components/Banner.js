function Banner(props) {
  return (
    <div className="Accueil">
      <div
        className="banner"
        style={{ backgroundImage: `url(${props.BannerImg})` }}
      >
        <div className="mask"></div>
        <div className="textBanner">{props.textBanner}</div>
      </div>
      {props.children}
    </div>
  );
}

export default Banner;
