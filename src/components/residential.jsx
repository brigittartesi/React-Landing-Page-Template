export const Residential = (props) => {
  return (
    <div id="residential">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Residential</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
