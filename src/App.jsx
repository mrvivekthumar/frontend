import './App.css'
import Navbar from './components/common/Navbar'
import Signup from './pages/Signup'
import Home from "./pages/Home"
import { Route, Routes } from 'react-router-dom'
import OpenRoute from './components/core/Auth/OpenRoute'
import Login from "./pages/Login"
import ForgotPassword from "./pages/ForgotPassword";
import UpdatePassword from "./pages/UpdatePassword";
import VerifyEmail from "./pages/VerifyEmail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Scroll_To_Top_Button from "./utils/Scroll_To_Top_Button"
import Dashboard from './pages/Dashboard'
import PrivateRoute from "../src/components/core/Auth/PrivateRoute"
import MyProfile from './components/core/Dashboard/MyProfile'
import Settings from './components/core/Dashboard/Settings'
import Cart from './components/core/Dashboard/Cart'
import EnrolledArtImages from './components/core/Dashboard/EnrolledArtImages'
import { useSelector } from 'react-redux'
import { ACCOUNT_TYPE } from "./utils/constants";
import Catalog from './pages/Catalog'
import ArtImageDetails from './pages/ArtImageDetails'
import Artist from './components/core/Dashboard/ArtistDashboard/Artist'
import MyArtImages from './components/core/Dashboard/MyArtImages'
import AddArtImage from './components/core/Dashboard/AddArtImage'
import EditArtImage from './components/core/Dashboard/EditArtImage'


function App() {

  const { user } = useSelector((state) => state.profile)

  return (
    <div className='w-screen min-h-screen bg-background flex flex-col font-inter relative'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="catalog/:catalogName" element={<Catalog />} />
        <Route path="artImages/:artImageId" element={<ArtImageDetails />} />

        <Route
          path="signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />
        <Route
          path="login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />

        <Route
          path="forgot-password"
          element={
            <OpenRoute>
              <ForgotPassword />
            </OpenRoute>
          }
        />

        <Route
          path="verify-email"
          element={
            <OpenRoute>
              <VerifyEmail />
            </OpenRoute>
          }
        />

        <Route
          path="update-password/:id"
          element={
            <OpenRoute>
              <UpdatePassword />
            </OpenRoute>
          }
        />

        <Route
          path="/about"
          element={
            <About />
          }
        />
        <Route path="/contact" element={<Contact />} />

        <Route
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route path="dashboard/my-profile" element={<MyProfile />} />

          <Route path="dashboard/Settings" element={<Settings />} />

          {
            user?.accountType === ACCOUNT_TYPE.BUYER && (
              <>
                <Route path="dashboard/cart" element={<Cart />} />
                <Route path="dashboard/enrolled-artImages" element={<EnrolledArtImages />} />
              </>
            )
          }

          {
            user?.accountType === ACCOUNT_TYPE.ARTIST && (
              <>
                <Route path="dashboard/artist" element={<Artist />} />
                <Route path="dashboard/add-images" element={<AddArtImage />} />
                <Route path="dashboard/my-images" element={<MyArtImages />} />
                <Route path="dashboard/edit-artImage/:artImageId" element={<EditArtImage />} />

              </>
            )
          }


        </Route>


        {/* <Route element={
          <PrivateRoute>
            <ViewArtImage />
          </PrivateRoute>
        }>

          {
            user?.accountType === ACCOUNT_TYPE.STUDENT && (
              <>
                <Route
                  path="view-artImage/:artImageId/section/:sectionId/sub-section/:subSectionId"
                  element={<VideoDetails />}
                />
              </>
            )
          }

        </Route> */}



        <Route path="*" element={<Error />} />


      </Routes>
      <Scroll_To_Top_Button />
    </div>
  )
}

export default App
