import { useState } from 'react';
import { Button, MantineProvider } from '@mantine/core';

// core styles are required for all packages
import '@mantine/core/styles.css';
// other css files are required only if
// you are using components from the corresponding package
// import '@mantine/dates/styles.css';
// import '@mantine/dropzone/styles.css';
// import '@mantine/code-highlight/styles.css';
// ...

function App() {
  const [count, setCount] = useState(0);

  return (
    <MantineProvider>
      <Button
        variant="filled"
        type="button"
        onClick={() => setCount((count) => count + 1)}
      >
        Count is {count}
      </Button>
    </MantineProvider>
  );
}

export default App;
