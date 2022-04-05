export default function PostTitle({ children }) {
  return (
    <h1
      className="font-raleway text-6xl md:text-7xl lg:text-8xl tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left"
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
}
