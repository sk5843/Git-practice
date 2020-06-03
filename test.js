import * as React from 'react';
import { Shape } from './Shape';

export function App() {
  const [log, setLog] = React.useState({});

  React.useEffect(() => {
    window.addEventListener('mousemove', (e) => {
      setLog({ name: e.currentTarget.dataset.name });
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
      </div>
    </div>
  );
}
