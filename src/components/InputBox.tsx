interface Props {
  name?: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  type?: string;
  className?: string;
}

const InputBox = (props: Props) => {
  return (
    <div className="w-full">
      <input
        name={props.name}
        type={props.type || "text"}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
        className={`w-full h-12 px-4 rounded-md bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all ${props.className}`}
      />
    </div>
  );
};

export default InputBox;
