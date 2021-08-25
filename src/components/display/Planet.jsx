import { Planet } from 'react-planet';

export function ChordPlanet() {
  <Planet
    centerContent={
      <div style={{
        height: 100, 
        width: 100,
        borderRadius: '50%',
        backgroundColor: 'red',
      }}
      />
    }
    open
    autoClose
  >

    <div style={{
      height: 70,
      width: 70,
      borderRadius: '50%',
      backgroundColor: 'blue',
    }}
    />
    <div style={{
      height: 70,
      width: 70,
      borderRadius: '50%',
      backgroundColor: 'blue',
    }}
    />
  </Planet>;
    
  return (
    <Planet />
    
  );
}
