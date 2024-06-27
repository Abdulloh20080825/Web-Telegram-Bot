import "./button.css";

const Button = (props) => {
  const { type, title } = props;

  return (
    <button
      className={`btn ${
        (type === "add" && "add") ||
        (type === "remove" && "remove") ||
        (type === "checkout" && "checkout")
      }`}
    >
      {title}
    </button>
  );
};

export default Button;
