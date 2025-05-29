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
    <div className="w-full max-w-md mx-auto">
      <input 
        name={props.name}
        type={props.type || "text"}
        placeholder={props.placeholder} 
        onChange={props.onChange}
        value={props.value}
        className={`w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${props.className}`}
      />
    </div>
  )
}

export default InputBox;