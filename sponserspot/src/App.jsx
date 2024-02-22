import { Routes , Route } from "react-router-dom"
import { Hero } from "./components/Hero"
import NavBar from "./components/Navbar"
import Start from "./view/start/Start"
import { RegisterPageForSponser } from "./view/sponser/auth/Register"
import LoginPageForSponser from "./view/sponser/auth/Login"
import { RegisterPageForOrganizer } from "./view/organizer/OrganizerRegister"
import LoginPageForOrganizer from "./view/organizer/organizerLogin"
import CreateEventPage from "./view/Event/CreateEvent"


function App() {
 

  return (
    <>
      
    <Routes>
      <Route path="/" element={<Start/>}/>
      <Route path="/sponser/register" element={<RegisterPageForSponser/>}/>
      <Route path="/sponser/login" element={<LoginPageForSponser/>}/>
      <Route path="/organizer/register" element={<RegisterPageForOrganizer/>}/>
      <Route path="/organizer/login" element={<LoginPageForOrganizer/>}/>
      <Route path="/organizer/create" element={<CreateEventPage/>}/>


    </Routes>
          </>
  )
}

export default App