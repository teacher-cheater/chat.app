export function Button({ children, join, postData, getData }) {
  return (
    <button
      onClick={() => (join ? getData() : postData())}
      type="submit"
      className="main__button"
    >
      {children}
    </button>
  );
}
