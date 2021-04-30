import {Route, Switch} from 'react-router-dom'
import AboutRoute from './components/About'
import ContactRoute from './components/Contact'
import HomeRoute from './components/Home'
import NotFoundRoute from './components/NotFound'
import Header from './components/Header'
import './App.css'

const App = () => (
  <div className="mainContainer">
    <Header />
    <Switch>
      <Route exact path="/" component={HomeRoute} />
      <Route exact path="/about" component={AboutRoute} />
      <Route exact path="/contact" component={ContactRoute} />
      <Route component={NotFoundRoute} />
    </Switch>
  </div>
)

export default App
