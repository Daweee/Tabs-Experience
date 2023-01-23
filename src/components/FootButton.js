const FootButton = ({ buttonName }) => {
  return (
    <button type="button" className="btn">
      {buttonName}
    </button>
  );
};

FootButton.defaultProps = {
  buttonName: "more info",
};

export default FootButton;
