import Nav from "./Nav";

const Layout = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div>
    <Nav />
    <div className="container">
      <h1>{title}</h1>

      {children}
    </div>
  </div>
);

export default Layout;
