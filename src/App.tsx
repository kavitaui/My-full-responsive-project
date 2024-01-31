import $ from 'jquery';
import React, { memo } from 'react';
import Routes from 'Routes';
window.jQuery = $;
const App: React.FC = () => <Routes />

export default memo(App)
