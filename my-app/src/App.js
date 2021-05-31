import { Route } from 'react-router-dom'
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { useSelector, shallowEqual } from 'react-redux'
import { Switch } from 'react-router-dom'
import Contacts from '../src/views/Contacts/WholeContacts/Contacts'
import LoginLogout from './views/Authorization/Login&Register/LoginRegister'
import { currenUser } from '../src/redux/auth/auth-operations'
import Task from './client/Tasks/components/Task'
import authSelectors from './redux/auth/auth-selectors'
import AppBar from './client/Header/UserMenu/AppBar'
import MainPage from './views/Main/MainPage/MainPage'
import AwardPage from './views/Awards/MainAwardPage/MainAwardPage'
function App() {
  const authorized = useSelector(authSelectors.isAuthorized, shallowEqual)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(currenUser())
  },[])
  return (
    <>
      <AppBar />
      <Switch>
        {!authorized && <Route exact path="/auth" component={LoginLogout} />}
        <Route exact path="/" component={MainPage}/>
        <Route exact path="/awards" component={AwardPage}/>
        <Route exact path="/contacts" component={Contacts} />
        <Route exact path="/planning" component={Task}/>
      </Switch>
      </>
    
  );
}

export default App;
