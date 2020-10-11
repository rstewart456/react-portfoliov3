import React, { useState, useEffect } from 'react';
import { Storage } from './Firebase'
// import Navbar from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/Nav'
// import { Link } from 'react-scroll'
import { Projects } from './components/Projects'
import { Home } from './components/Home'
import { About } from './components/About'
import { NavMenu } from './components/Nav'

//  const NavMenu = () => {
//   return (
//       <Navbar bg="dark" variant='dark' fixed='top' expand="lg">
//           <Navbar.Brand>Ronald's Portfolio</Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <span className='w-100'></span>
//           <Navbar.Collapse id="basic-navbar-nav">
//               <Nav CollapseOnSelect className="mr-auto">
//                   <li className='nav-item'>
//                       <Link
//                       to='home'
//                       activeClass='active'
//                       className='nav-link'
//                       spy={true}
//                       smooth={true}
//                       offset={-70}
//                       duration={500}
//                       >
//                           Home
//                       </Link>
//                       </li>
//                       <li>
//                       <Link
//                       to='projects'
//                       activeClass='active'
//                       className='nav-link'
//                       spy={true}
//                       smooth={true}
//                       offset={-55}
//                       duration={500}
//                       >
//                           Projects
//                       </Link>
//                       </li>
//                       <li>
//                       <Link
//                       to='about'
//                       activeClass='active'
//                       className='nav-link'
//                       spy={true}
//                       smooth={true}
//                       offset={-70}
//                       duration={500}
//                       >
//                           About
//                       </Link>
//                   </li>
//               </Nav>
//           </Navbar.Collapse>
//       </Navbar>
//   )
// }

function App() {
  const [project, setProject ] = useState([])

  const fetch = async () => {
    let unsub
    try {
      const unsubcribe = Storage.collection('projects').orderBy('createdAt').get()
      const fetch1 = (await unsubcribe).docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      setProject(fetch1.reverse())
      return () => unsub
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    fetch()
  }, [])
  
  return (
    <>
    <NavMenu />
    <div style={{ marginTop: '90px'}} >
    <Home />
    <Projects projects={project} />
    <About />
    </div>
    </>
  );
}

export default App;
