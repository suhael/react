import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Nav from "./common/Nav";
import PageNotFound from "./error/PageNotFound";
import PeopleList from "./person/PeopleList";
import CoursesPage from "./courses/CoursesPage";
import CreatePerson from "./person/CreatePerson";

function App() {
  return (
      <div className="container-fluid">
        <Nav />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/addperson" component={CreatePerson} />
          <Route path="/people" component={PeopleList} />
          <Route path="/courses" component={CoursesPage} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
  );
}

export default App;
