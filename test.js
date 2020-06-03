import * as React from 'react';
import { Shape } from './Shape';

export function App() {
  const [log, setLog] = React.useState({});

  React.useEffect(() => {
    window.addEventListener('mousemove', (e) => {
      //Getting the x/y coordinates of the mouse on hover (relative to the bottom-left of div)
      var bounds = e.target.getBoundingClientRect();
      var x = e.target.getAttribute('data-name') ? e.clientX - bounds.left : '';
      var y = e.target.getAttribute('data-name')
        ? e.clientY - bounds.bottom
        : '';

      //Updating state to store logging values
      setLog({ name: e.getAttribute('data-vla'), x, y });
    });
  }, []);

  return (
    <div>
      <Shape name="head" x={345} y={50} width={100} height={144} />
      <Shape name="body" x={250} y={150} width={250} height={344} />
      <Shape name="arm" x={145} y={200} width={100} height={344} />

      <div
        style={{
          position: 'fixed',
          right: 0,
          top: 0,
          padding: '2rem',
          backgroundColor: 'bisque',
        }}
      >
        Name: {log.name}
        <br />
        x: {log.x}
        <br />
        y: {log.y}
      </div>
    </div>
  );
}
