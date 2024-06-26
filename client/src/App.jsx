import "./App.css";
import { getData } from "./constants/dataBase";

const courses = getData();

const App = () => {
  return (
    <>
      <h1>Full Stack Kurslar</h1>
      {/*  */}
      <div className="cards__container">
        {courses.map((item) => (
          <>
            <h1>{item.title}</h1>
          </>
        ))}
      </div>
    </>
  );
};

export default App;
