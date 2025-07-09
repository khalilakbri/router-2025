import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Home';
// import Contact from './Contact';
import Layout from './Layout';
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Setting from "./Setting";
import ProtectedRoute from "./ProtectedRoute";
import Login from "./Login";
import NotFound from "./NotFound";
import { lazy, Suspense } from "react";

const LazyContact = lazy(()=>import("./Contact"));

function App() {

  return (
    <>
      <BrowserRouter>
          <Layout>
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/contact/:id" element={
                  
                  <Suspense fallback={<h1>Loading...</h1>} >
                    <LazyContact />
                  </Suspense>
        
                } />

                <Route path="/login" element={<Login />} />

                <Route path="*" element={<NotFound />}/>

                <Route element={<ProtectedRoute />}>
                    <Route path="dashboard" element={<Dashboard />}>
                        <Route path="profile" element={<Profile />}/>
                        <Route path="setting" element={<Setting />} />
                    </Route>
                </Route>

            </Routes>
          </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
