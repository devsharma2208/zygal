import "./App.css";
import ScrollableSections from "./Components/Avatar/Avatar";
import Carousel from "./Components/Crousal/Crousal";
import EmailPasswordForm from "./Components/EmailPassword/EmailPasswordValidation";

function App() {
  return (
    <div className="App m-5 flex flex-wrap gap-5 justify-between ">
      <Carousel />
      <EmailPasswordForm />
      <ScrollableSections/>
    </div>
  );
}

export default App;
