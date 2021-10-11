import { Route,Switch } from 'react-router-dom'

import AllmeetupsPage from './pages/Allmeetups'
import NewMeetupPage from './pages/NewMeetup'
import Favoritespage from './pages/Favorites'
import MainNavigation from './components/layout/MainNavigation'

function App() {
//localhost:3000/

  return (
    <div>
     <MainNavigation /> 
     <Switch>
      <Route path = '/' exact>
        <AllmeetupsPage />
      </Route>
      <Route path = '/new-meetups'>
        <NewMeetupPage/>
      </Route>
      <Route path = '/favorites'>
        <Favoritespage />
      </Route>
     </Switch>
    </div>
  )
}

export default App
