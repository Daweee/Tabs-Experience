const Title = ({ title }) => {
  return (
    <>
      <h2>{title}</h2>
      <div className="underline" />
    </>
  );
};

Title.defaultProps = { title: "Experience" };

export default Title;
