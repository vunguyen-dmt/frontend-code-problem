import React from 'react';
import {
  Input, Button, OverlayTrigger, Popover, SelectMenu, MenuItem, Icon, Alert,
} from '@edx/paragon';
import { CheckCircle, Info } from '@edx/paragon/icons';
import './IframeMaker.scss';
import Editor from '@monaco-editor/react';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import messages from '../../messages';

const IframeMaker = ({ intl }) => {
  const [iframeSrc, setIframeSrc] = React.useState('');
  const [theme, setTheme] = React.useState('vs-dark');
  const [language, setLanguage] = React.useState('cpp');
  const [version, setVersion] = React.useState('v1');
  const [errorMessage, setErrorMessage] = React.useState('');
  const [height, setHeight] = React.useState('300');

  const themeRef = React.useRef();
  const languageRef = React.useRef();
  const versionRef = React.useRef();
  const heightRef = React.useRef();

  themeRef.current = theme;
  languageRef.current = language;
  versionRef.current = version;
  heightRef.current = height;

  const editorRef = React.useRef(null);
  const monacoRef = React.useRef(null);
  const languageStyleExchange = {
    c: 'c',
    cpp: 'cpp',
    python3: 'python',
    java: 'java',
  };

  const updateIframeSrc = () => {
    setErrorMessage('');
    const { host } = window.location;
    const publicPath = window.location.host.endsWith('3000') ? '' : '/code';
    setTimeout(() => {
      const src = `https://${host}${publicPath}/editor/v1?language=${languageRef.current}&theme=${themeRef.current}&height=${heightRef.current}px&default_value=${encodeURIComponent(editorRef.current.getValue())}`;
      if (src.length > 8000) {
        setErrorMessage(intl.formatMessage(messages.codeTooLong));
      }
      setIframeSrc(src);
    }, 100);
  };

  const copy = () => {
    const textarea = document.createElement('textarea');
    textarea.textContent = iframeSrc;
    textarea.style.position = 'fixed';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      return document.execCommand('copy');
    } catch (ex) {
      return '';
    } finally {
      document.body.removeChild(textarea);
    }
  };

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;
    monacoRef.current = monaco;
    updateIframeSrc();
  };

  const selectTheme = (value) => {
    setTheme(value);
    updateIframeSrc();
  };

  const selectLanguage = (value) => {
    setLanguage(value);
    updateIframeSrc();
  };

  const handleOnChange = () => {
    updateIframeSrc();
  };

  const heightChange = (e) => {
    let { value } = e.target;
    if (!value) {
      value = '300';
    }
    setHeight(value);
    updateIframeSrc();
  };

  return (
    <div className="code-exchange-wrapper">
      <p className="text-center font-weight-bold">Iframe Maker</p>
      <div className="flex-wrapper">
        <div>
          <div className="font-weight-bold mb-1">{intl.formatMessage(messages.version)}</div>
          <SelectMenu>
            <MenuItem defaultSelected>v1</MenuItem>
            <MenuItem disabled>v2</MenuItem>
          </SelectMenu>
        </div>
        <div>
          <div className="font-weight-bold mb-1">{intl.formatMessage(messages.theme)}</div>
          <SelectMenu>
            <MenuItem onClick={() => selectTheme('vs')}>{intl.formatMessage(messages.light)}</MenuItem>
            <MenuItem onClick={() => selectTheme('vs-dark')} defaultSelected>{intl.formatMessage(messages.dark)}</MenuItem>
          </SelectMenu>
        </div>
        <div>
          <div className="font-weight-bold mb-1">{intl.formatMessage(messages.language)}</div>
          <SelectMenu>
            <MenuItem defaultSelected onClick={() => selectLanguage('cpp')}>C++</MenuItem>
            <MenuItem onClick={() => selectLanguage('c')}>C</MenuItem>
            <MenuItem onClick={() => selectLanguage('java')}>Java</MenuItem>
            <MenuItem onClick={() => selectLanguage('python3')}>Python 3</MenuItem>
          </SelectMenu>
        </div>
      </div>

      <div className="font-weight-bold mb-1">{intl.formatMessage(messages.codeWindowHeight)} (px)</div>
      <div className="height-wrapper">
        <Input onChange={(e) => heightChange(e)} type="number" defaultValue={height} />
      </div>
      <div className="font-weight-bold mt-3 mb-1">{intl.formatMessage(messages.enterYourDefaultCode)}</div>
      <div className="editor-wrapper">
        <Editor
          height={`${height}px`}
          language={languageStyleExchange[language]}
          theme={theme}
          onMount={handleEditorDidMount}
          onChange={handleOnChange}
        />
      </div>

      <div className="font-weight-bold mt-3 mb-1">Iframe src &nbsp;

        <OverlayTrigger
          trigger="click"
          key="top-success"
          placement="top"
          overlay={(
            <Popover id="popover-positioned-top" variant="success">
              <Popover.Title as="h3"><Icon src={CheckCircle} /> {intl.formatMessage(messages.copied)}</Popover.Title>
            </Popover>
        )}
        >
          <Button onClick={copy} variant="outline-primary" size="sm" className="mb-2 mb-sm-0">
            {intl.formatMessage(messages.copy)}
          </Button>
        </OverlayTrigger>
      </div>
      {errorMessage && (
      <Alert variant="danger" icon={Info}>
        <Alert.Heading>{intl.formatMessage(messages.error)}</Alert.Heading>
        <p>{errorMessage}</p>
      </Alert>
      )}
      <div>{iframeSrc}</div>
    </div>
  );
};

IframeMaker.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(IframeMaker);
