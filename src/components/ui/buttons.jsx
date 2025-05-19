export function Button({ children, className = '', variant = 'default', ...props }) {
  const baseStyle = "px-4 py-2 rounded-md font-medium inline-flex items-center";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-400 text-gray-700 hover:bg-gray-100",
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
