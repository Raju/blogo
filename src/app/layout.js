import PropTypes from "prop-types";
import { Inter } from "next/font/google";

import "@public/styles/global.scss";
import "@public/styles/reset.scss";

const inter = Inter({ subsets: ["latin"] });

// const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
};

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

// export { metadata };

export default RootLayout;
