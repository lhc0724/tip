import React from 'react';
import { useSelector } from 'react-redux';
import { IntlProvider } from 'react-intl';
import logo from './logo.svg';
import './App.css';
import ko from './lang/ko.json';
import en from './lang/en.json';
import { RootState } from './store/config';
import useLocale from './hooks/useLocale';

function App() {
  const locale = useLocale();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {locale({ id: 'test' })}
        </a>
      </header>
    </div>
  );
}

const Root = () => {
  const config = useSelector((state: RootState) => state.config);
  const message = { en, ko }[config.locale];

  return (
    <>
      <IntlProvider locale={config.locale} messages={message}>
        <App />
      </IntlProvider>
    </>
  );
};

export default Root;
