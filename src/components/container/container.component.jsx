import Header from "../header/header.component";
import Main from "../main-content/main.component";
import Footer from "../foooter/footer.component";
import './container.styles.scss'

const Container = () => {
  return (
    <div className="overall-container">
      <div className="container">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
};

export default Container