import './main.styles.scss'

const Main = () => {
  return (
    <div className="info-container">
      <h1>Fun facts about React</h1>
      <ul className="info-list">
        <li className="list">Was first released in 2013</li>
        <li className="list">Was originally created by Jordan Walke</li>
        <li className="list">Has well over 100K stars on Github</li>
        <li className="list">Is maintained by Facebook</li>
        <li className="list">
          Powered thousands of enterprise apps, including mobile apps
        </li>
      </ul>
    </div>
  );
};

export default Main;
