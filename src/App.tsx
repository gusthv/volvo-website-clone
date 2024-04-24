import { Navbar, Home } from "./components";

const App = () => {
  return (
    <div>
      <section className="fixed z-30">
        <Navbar />
      </section>
      <Home />
    </div>
  );
};

export default App;
