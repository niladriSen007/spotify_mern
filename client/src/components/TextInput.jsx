const TextInput = ({ valueProp, onChangeProp,labelProp }) => {
  return (
    <div className="mb-4">
      <label
        htmlFor="password"
        className="block py-1 text-sm font-medium text-white md:text-xl"
      >
        {labelProp}
      </label>
      <input
        type={valueProp}
        id="password"
        className="mt-1 p-2 pl-4 w-full border border-gray-300 rounded-full"
        value={valueProp}
        onChange={onChangeProp}
        required
        placeholder="Enter your password"
      />
    </div>
  );
};

export default TextInput;
