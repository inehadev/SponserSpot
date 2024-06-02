import { Routes , Route } from "react-router-dom"
import Start from "./view/start/Start"
import { RegisterPageForSponser } from "./view/sponser/auth/Register"
import LoginPageForSponser from "./view/sponser/auth/Login"
import { RegisterPageForOrganizer } from "./view/organizer/OrganizerRegister"
import LoginPageForOrganizer from "./view/organizer/organizerLogin"
import CreateEventPage from "./view/Event/CreateEvent"
import { ViewEvents } from "./view/Event/ViewEvents"
import { EventDetail } from "./view/Event/EventDetal"
import { DashBOard } from "./view/organizer/DashBOard"
import { OrgEvents } from "./view/organizer/OrgEvents"
import { EventRes } from "./view/organizer/EventRes"
import SponsorDas from "./view/sponser/SponserHome/SponsorDas"
import SponserNav from "./view/sponser/SponserHome/SponserNav"
import { Organizersponsor } from "./view/sponser/Organizersponsor"
import AlllSponser from "./view/organizer/Sponsers/AlllSponser"


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
      <Route path="/sponser/events" element={<ViewEvents/>}/>
      <Route path="/sponser/events/:id" element={<EventDetail/>}/>
      <Route path="/organizer/events/:id" element={<EventRes/>}/>
      <Route path="/sponsor/dashboard" element={<DashBOard/>}/>
      <Route path="/organizer/events" element={<OrgEvents/>}/>
       <Route path="/organizer/dashboard" element={<SponsorDas/>}/> 
      <Route path="/sponser/nav" element={<SponserNav/>}/>
      <Route path="/organizer/sponsor" element={<Organizersponsor/>}/>
      <Route path="/sponsers" element={<AlllSponser/>}/>

    </Routes>
          </>

  )
}

export default App
