import React from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { BrowserRouter, Redirect, Switch } from "react-router-dom";
import { Route, Routes } from "react-router";
import logo from "./logo.svg";
import Home from "./containers/home";
import Explorer from "./containers/explorer";
import "./App.scss";

function App() {
  const routes = [
    { path: "/", primaryRouteComponent: Explorer },
    /*  { path: "/*", primaryRouteComponent: <Explorer /> }, */
  ];
  const queryClient = new QueryClient();
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Explorer renderPath="C:\Users\ravin\Desktop\MotoG5sPlus" />
      </QueryClientProvider>
    </div>
  );
}

export default App;
