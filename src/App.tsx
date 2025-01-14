import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { About } from "./components/about";
import { Products } from "./components/products";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <div className="w-full min-h-screen bg-background">
        <Header />
        <main className="w-full">
          <Hero />
          <About />
          <Products />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;