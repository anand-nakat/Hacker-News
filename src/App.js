import { AppProvider } from "./context";
import NavigationButtons from "./NavigationButtons";
import SearchForm from "./SearchForm";
import News from "./News";
function App() {
  return (
    <AppProvider>
      <SearchForm />
      <NavigationButtons />
      <News />
    </AppProvider>
  );
}

export default App;
