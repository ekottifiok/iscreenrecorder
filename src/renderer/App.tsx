import {
  FluentProvider,
  Tab,
  TabList,
  Theme,
  webDarkTheme,
  webLightTheme,
} from '@fluentui/react-components';
import { FC, useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router';
import pages from './Pages';

// eslint-disable-next-line react/function-component-definition
const App: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // const getTheme = (): Theme => (window.elect.themeShouldUseDarkColors() ? webDarkTheme : webLightTheme);
  const getTheme = (): Theme =>
    window.electron.ipcRenderer.sendSync('themeShouldUseDarkColors')
      ? webDarkTheme
      : webLightTheme;

  const [theme, setTheme] = useState<Theme>(getTheme);
  const [path, setPath] = useState<string>(pages[0].urlPath);

  const selectTab = (selectedPath: unknown) =>
    typeof selectedPath === 'string'
      ? navigate({ pathname: selectedPath })
      : null;

  useEffect(() => setPath(location.pathname), [location]);

  useEffect(() => {
    window.electron.ipcRenderer.sendMessage('reactAppStarted');
    window.electron.ipcRenderer.on('onNativeThemeChanged', () =>
      setTheme(getTheme())
    );
  }, []);

  return (
    <FluentProvider theme={theme} style={{ height: '100vh' }}>
      <div
        style={{
          display: 'flex',
          height: '100%',
          flexDirection: 'row',
          gap: 10,
        }}
      >
        <div style={{ width: 250, padding: 10 }}>
          <TabList
            appearance="subtle"
            selectedValue={path}
            onTabSelect={(_, { value }) => selectTab(value)}
            vertical
          >
            {pages.map(({ label, urlPath }: any) => (
              <Tab key={`${label}`} value={urlPath}>
                {label}
              </Tab>
            ))}
          </TabList>
        </div>
        <div
          style={{
            height: '100%',
            width: '100%',
            padding: 10,
            boxSizing: 'border-box',
            overflowY: 'auto',
          }}
        >
          <Routes>
            {pages.map(({ urlPath, element, label }: any) => (
              <Route key={`${label}`} path={urlPath} element={element} />
            ))}
          </Routes>
        </div>
      </div>
    </FluentProvider>
  );
};

export default App;
