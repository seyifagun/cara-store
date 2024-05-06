import "@styles/globals.scss";
import Provider from "@components/Provider";
import 'aos/dist/aos.css';
import Footer from"@components/Footer"
import Navbar from"@components/Navbar"
import "@styles/FooterNew.scss"

export const metadata = {
  title: "Cara",
  description: "Immense yourself in the beauty of Africa Art",
  author: "Oluwaseyi Fagun",
};

const layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          {/* <Navbar /> */}
            <main>
              {children}
            </main>
            <Footer />
        </Provider>
      </body>
    </html>
  );
};

export default layout;
