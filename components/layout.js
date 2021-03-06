import Alert from "../components/alert";
import Footer from "../components/footer";
import Meta from "../components/meta";
import Header from "../components/header";

export default function Layout({ preview, children }) {
  // <Alert preview={preview} />
  return (
    <>
      <Header />
      <Meta />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
