export default function FormButton({ label, disabled = false, handleClick }) {
  if (!disabled)
    return (
      <button
        className="bg-unsri font-medium rounded-md py-2 px-5 w-max"
        onClick={handleClick}
      >
        {label}
      </button>
    );
  if (disabled) return null;
}
