export default function Container({ children, type }) {
  return (
    <div className="site__container" data-container={type}>
      {children}
    </div>
  );
}
