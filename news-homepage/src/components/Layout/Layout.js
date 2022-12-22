import Header from "./Header";

import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
};

export default Layout;
