import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Header from "./components/main/Header";
import Home from "./components/main/Home";
import store from "./store/store";
import {Provider} from "react-redux";
import FoodDetail from "./components/food/FoodDetail";
import RecipeList from "./components/recipe/RecipeList";
import RecipeDetail from "./components/recipe/RecipeDetail";
import FoodFind from "./components/food/FoodFind";

function App() {
  return (
      //store안에 있는 useSelect를 가져옴
      <Provider store={store}>
        <Router>
          <Header/>
          <div className={"container"}>
            <Routes>
              <Route path={"/"} element={<Home/>}/>
              <Route path={"/food/food_detail/:fno"} element={<FoodDetail/>}/>
              <Route path={"/recipe/recipe_list"} element={<RecipeList/>}/>
              <Route path={"/recipe/recipe_detail/:no"} element={<RecipeDetail/>}/>
                <Route path={"/food/find"} element={<FoodFind/>}/>
            </Routes>
          </div>
        </Router>
      </Provider>
  );
}

export default App;