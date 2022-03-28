// Context is designed to share data that can be considered “global” for a
//tree of React components, such as the current authenticated user, theme,
//or preferred language.
//DOCUMENTATION : https://reactjs.org/docs/context.html

import React from 'react';

const RecallContext = React.createContext();

export default RecallContext;