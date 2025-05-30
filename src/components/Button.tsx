interface ButtonProps {
  onClick: () => void;
}

const Button = ({ onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold text-lg transition-all duration-300 shadow-md"
    >
      Launch Token 🚀
    </button>
  );
};

export default Button;
