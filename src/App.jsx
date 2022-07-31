<<<<<<< HEAD
import { Navbar, Welcome, Footer, Services, Transactions } from "@/components"

=======
import { Navbar, Welcome, Footer, Services, Transactions } from "src/components"
>>>>>>> d9e26cc33e164a057c3ab48b4b39546e2af1ce2a

const App = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
      <Welcome />
    </div>
    <Services />
    <Transactions />
    <Footer />
  </div>
);

export default App;
