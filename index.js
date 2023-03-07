const Button = (props) => {
  const { name, btnName } = props;

  return <button className={`btn ${name}`}>{btnName}</button>;
};

const element = (
  <div className="bg-container">
    <h1 className="main-heading">Social Buttons </h1>
    <div className="button-container">
      <Button name="like" btnName="Like" />
      <Button name="comment" btnName="Comment" />
      <Button name="share" btnName="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
