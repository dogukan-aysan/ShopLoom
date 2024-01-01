function LoaderButton() {
  return (
    <button
      className="btn btn-danger button button--loader"
      type="button"
      disabled
    >
      <span
        className="spinner-border spinner-border-lg"
        aria-hidden="true"
      ></span>
      <span role="status">Loading...</span>
    </button>
  );
}

export default LoaderButton;
