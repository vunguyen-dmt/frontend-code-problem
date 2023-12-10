import React from 'react';
import Editor from '@monaco-editor/react';
import { Button, Spinner } from '@edx/paragon';
import './CodeApp.scss';
import { PlayArrow } from '@edx/paragon/icons';
import { getAuthenticatedUser } from '@edx/frontend-platform/auth';
import { sendCode } from '../../services/codeService';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import messages from '../../messages';

const ErrorMessage = (message) => <p>{message}</p>;

const CodeApp = ({ intl }) => {
  const user = getAuthenticatedUser();
  if (!user) {
    return ErrorMessage('unathenticated');
  }

  const supportedLanguages = ['c', 'cpp', 'python3', 'java'];
  const languageHandlerExchange = {
    c: 'c',
    cpp: 'cpp',
    python3: 'python3',
    java: 'java',
  };

  const languageStyleExchange = {
    c: 'c',
    cpp: 'cpp',
    python3: 'python',
    java: 'java',
  };

  const supportedThemes = ['vs', 'vs-dark'];
  const editorRef = React.useRef(null);
  const monacoRef = React.useRef(null);
  const [running, setRunning] = React.useState(false);
  const [consoleOutput, setConsoleOutput] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');

  const { search } = window.location;
  const params = new URLSearchParams(search);
  let height = '300px';
  let theme = 'vs';
  let language = '';
  let defaultValue = '';

  const inputHeight = params.get('height');
  if (inputHeight) {
    height = inputHeight;
  }

  const inputTheme = params.get('theme');
  if (inputTheme) {
    theme = inputTheme;
  }

  const inputDefaultValue = params.get('default_value');
  if (inputDefaultValue) {
    defaultValue = inputDefaultValue;
  }

  const inputLanguage = params.get('language');
  if (!inputLanguage || !supportedLanguages.includes(inputLanguage.toLocaleLowerCase())) {
    return ErrorMessage('unsuported language');
  }

  language = inputLanguage;

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;
    monacoRef.current = monaco;
  };

  const runCode = () => {
    if (!running) {
      setErrorMessage('');
      const request = {
        code: editorRef.current.getValue(),
        handler: languageHandlerExchange[language],
      };
      setConsoleOutput(intl.formatMessage(messages.processing));
      sendCode(request).then(result => {
        setConsoleOutput(result.data.error + result.data.output);
        setRunning(false);
      }).catch(error => {
        setRunning(false);
        setConsoleOutput('');
        console.log(error);
        setErrorMessage(intl.formatMessage(messages.somethingWentWrong));
      });
    }
    setRunning(!running);
  };

  return (
    <div className={`code-app-wrapper ${theme}`}>
      <div className="tool-btns">
        <Button className="run-btn" onClick={runCode} variant="primary" size="sm" iconAfter={running ? '' : PlayArrow}>
          {running ? intl.formatMessage(messages.stop) : intl.formatMessage(messages.run)}
          {running && <Spinner animation="border" variants="light" size="sm" />}
        </Button>
      </div>
      <Editor
        height={height}
        defaultValue={defaultValue}
        language={languageStyleExchange[language]}
        theme={theme}
        onMount={handleEditorDidMount}
      />
      <div className="output-title">{intl.formatMessage(messages.output)}</div>
      {errorMessage && (
      <div className="alert alert-danger" role="alert">
        {errorMessage}
      </div>
      )}
      <div className="output">
        <div>{consoleOutput}</div>
      </div>
    </div>
  );
};

CodeApp.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(CodeApp);
