import "./App.css";
import Header from "./components/Header";
import Survey from "./components/Survey";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Survey />
    </div>
  );
}
