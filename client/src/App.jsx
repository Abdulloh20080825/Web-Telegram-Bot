import "./App.css";
import Card from "./components/card/card";
import { getData } from "./constants/dataBase";
import Cart from "./components/cart/cart";

const courses = getData();

const App = () => {
  return (
    <>
      <h1 className="heading">Full Stack Kurslar</h1>
      <Cart />
      {/*  */}
      <div className="cards__container">
        {courses.map((item) => (
          <>
            <Card key={item.id} course={item} />
          </>
        ))}
      </div>
    </>
  );
};

export default App;
