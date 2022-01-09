import React from 'react';
import logo from './logo.svg';
import './App.css';

import {motion} from "framer-motion";
import Collapsible from "./Collapsible";

// function App() {
//
//   const items = ['First', 'Second', 'Third']
//
//   const pVariants = {
//     hiddenLeft: {
//       x: -1450,
//       opacity: 0,
//     },
//     hiddenRight: {
//       x: 1250,
//       opacity: 0,
//     },
//     visible: {
//       x:0,
//       opacity: 1,
//       transition: {
//         duration: 0.5,
//         delay: 0.5
//       }
//     },
//   }
//
//   const listVariants = {
//     visible: (ind: number) => {
//       return {
//         y: 0,
//         opacity: 1,
//         transition: {
//           delay: 1.5 + (ind * 0.5)
//         }
//       }
//     },
//     hidden: {
//       y: 100,
//       opacity: 0,
//     }
//   }
//
//   return (
//     <div className="App">
//       <header className="App-header">
//         <motion.img
//           src={logo}
//           className="App-logo"
//           alt="logo"
//           animate={{rotate: 360}}
//           transition={{
//             // delay: 1.5,
//             duration: 2,
//             repeat: Infinity,
//             // repeatDelay: 1,
//             repeatType: 'reverse',
//             // type: 'keyframes',
//             // ease:'circIn',
//           }}
//         />
//         <motion.p
//           variants={pVariants}
//           initial={'hiddenLeft'}
//           animate={'visible'}
//           // initial={pVariants.hiddenLeft}
//           // animate={pVariants.visible}
//         >
//           Edit <code>src/App.tsx</code> and save to reload.
//         </motion.p>
//         <motion.a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//           variants={pVariants}
//           initial={'hiddenRight'}
//           animate={'visible'}
//           // initial={pVariants.hiddenRight}
//           // animate={pVariants.visible}
//           whileHover={{
//             scale: 1.3,
//             color: 'white'
//           }}
//         >
//           Learn React
//         </motion.a>
//         <div style={{textAlign: "start", marginTop: '50px'}} >
//           {
//             items.map((element, ind)=>(
//                 <motion.li
//                   key={ind}
//                   variants={listVariants}
//                   initial={'hidden'}
//                   animate={'visible'}
//                   custom={ind}
//                   // initial={listVariants.hidden}
//                   // animate={listVariants.visible(ind)}
//                 >
//                   {element}
//                 </motion.li>
//               )
//             )
//           }
//         </div>
//
//       </header>
//     </div>
//   );
// }


function App() {

  return (
    <div className="App">
      <header className="App-header">
         <Collapsible
          title={'Click on me'}
         >
           Lorem ipsum dolor sit amet, consectetur adipisicing elit.
           At beatae eos, impedit in laudantium minima modi nemo officiis quasi reiciendis.
           Deleniti eligendi esse omnis quae quam, sit tempore ut voluptas!
         </Collapsible>
      </header >
    </div>
  );
}
export default App;
