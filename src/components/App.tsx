import React, { useState } from 'react';

import PrimaryNavigation from './PrimaryNavigation';
import SecondaryNavigation from './SecondaryNavigation';

const App: React.FC = () => {

  const [page, setPrimaryNavigation] = useState('');
  const [wowClass, setWowClass] = useState('');
  const [wowSpec, setWowSpec] = useState('');
  // import React from 'react';

  return (
    <>
      <PrimaryNavigation page={page} setPage={setPrimaryNavigation} />
      {/* Add class/spec menu if at least a class was selected */}
      <SecondaryNavigation page={page} wowClass={wowClass} setWowClass={setWowClass} wowSpec={wowSpec} setWowSpec={setWowSpec} />
    </>
  );
}

export default App;
