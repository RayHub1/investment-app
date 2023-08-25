import InvestmentForm from "./Components/InvestmentForm";
import logo from "./Components/images/logo.png";

function App() {
  return (
    <div className="flex items-center justify-center flex-col">
      <header className="flex flex-col items-center justify-center">
        <img src={logo} alt="ashow" className="w-1/3" />
        <h1 className="my-5  font-bold text-2xl">Investment Calculator</h1>
      </header>
      <InvestmentForm />
    </div>
  );
}

export default App;
