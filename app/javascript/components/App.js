import React from "react"
import { Route, Switch } from 'react-router-dom'
import Supplements from '../components/Supplements/Supplements'
import Supplement from '../components/Supplement/Supplement'


const App = () => (
          <Switch>
            <Route exact path='/'component={Supplements} />
            <Route exact path='/suppplements/:slug'component={Supplement} />
          </Switch>
        )

export default App