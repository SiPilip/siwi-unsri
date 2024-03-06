export default function FormContainer({ children }) {
  return (
    <form
      className="space-y-5 mt-10 sm:mx-auto w-full sm:w-full sm:max-w-sm px-3"
      method="POST"
    >
      {children}
    </form>
  );
}
