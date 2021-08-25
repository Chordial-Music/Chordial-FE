import React from 'react';
import Chords from '../../data/data.js';
import { useNodes } from '../state/ChordialProvider.jsx';

const DisplayChordNodes = () => {
  const { nodes, setNodes } = useNodes();
  console.log(nodes);
  return <h1>Hello</h1>;
  // const chordNode = Chords[nodes].chords;
  
  // const nodeList = chordNode.map((element, index) => {
  //   console.log('nodeList', nodeList);
  //   return (
  //     <li
  //       style={{ listStyle: 'none' }}
  //       key={index}>
  //       {element}
  //     </li>
  //   );
  // });

  // return (
  //   <ul>
  //     {nodeList}
  //   </ul>
  // );
};


export default DisplayChordNodes;
