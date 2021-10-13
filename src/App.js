import { Route,Switch } from 'react-router-dom'

import AllmeetupsPage from './pages/Allmeetups'
import NewMeetupPage from './pages/NewMeetup'
import Favoritespage from './pages/Favorites'
import Layout from './components/layout/Layout'

function App() {
//localhost:3000/

  return (
    <Layout>
     <Switch>
      <Route path = '/' exact>
        <AllmeetupsPage />
      </Route>
      <Route path = '/new-meetups'>
        <NewMeetupPage />
      </Route>
      <Route path = '/favorites'>
        <Favoritespage />
      </Route>
     </Switch>
    </Layout>
  )
}

export default App
