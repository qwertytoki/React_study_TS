import Nav from "./Nav";

const Layout = ({
  title,
  footer,
  children,
}: {
  title: string;
  footer: string;
  children: React.ReactNode;
}) => (
  <div>
    <Nav />
    <div className="container">
      <h1>{title}</h1>

      {children}
      <hr />
      <h4>{footer}</h4>
    </div>
  </div>
);

export default Layout;
