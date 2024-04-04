export default function FormRow({ label, error, children, required, warn }) {
  return (
    <div>
      {/* {label && <label htmlFor={children.props.id}>{label}</label>}
      {children}
      {error && <span>{error}</span>} */}

      <div>
        <label htmlFor={children.props.id}>
          <span className="font-medium flex gap-1">
            {label}
            {required && <p className="text-red-600">*</p>}
          </span>
          {warn && <p className="text-red-600 text-sm font-normal">{warn}</p>}
        </label>
        <div className="flex flex-nowrap gap-3 items-center mt-1">
          {children}
          {error && <span className="text-red-400 text-sm">{error}</span>}
        </div>
      </div>
    </div>
  );
}
