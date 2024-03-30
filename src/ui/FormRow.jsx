export default function FormRow({ label, error, children, required }) {
  return (
    <div>
      {/* {label && <label htmlFor={children.props.id}>{label}</label>}
      {children}
      {error && <span>{error}</span>} */}

      <div>
        <label htmlFor={children.props.id} className="font-medium flex gap-1">
          {label}
          {required && <p className="text-red-600">*</p>}
        </label>
        <div className="flex flex-nowrap gap-10 items-center mt-1">
          {children}
          {error && <span className="text-red-400">{error}</span>}
        </div>
      </div>
    </div>
  );
}
