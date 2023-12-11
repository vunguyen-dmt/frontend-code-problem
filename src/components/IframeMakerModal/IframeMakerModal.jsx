import React from 'react';
import {
  Input, Button, OverlayTrigger, Popover, SelectMenu, MenuItem, Icon, Alert, ModalDialog,
  useToggle, ActionRow,
} from '@edx/paragon';
import { Info } from '@edx/paragon/icons';
import './IframeMakerModal.scss';
import Editor from '@monaco-editor/react';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import messages from '../../messages';

const IframeMakerModal = ({ tinymceEditorRef, intl }) => {
  const [isOpen, open, close] = useToggle(false);
  const [embedCode, setEmbedCode] = React.useState('');
  const [theme, setTheme] = React.useState('vs-dark');
  const [language, setLanguage] = React.useState('cpp');
  const [version, setVersion] = React.useState('v1');
  const [errorMessage, setErrorMessage] = React.useState('');
  const [height, setHeight] = React.useState('300');

  const embedCodeRef = React.useRef();
  const themeRef = React.useRef();
  const languageRef = React.useRef();
  const versionRef = React.useRef();
  const heightRef = React.useRef();

  embedCodeRef.current = embedCode;
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

  const updateEmbedCode = () => {
    setErrorMessage('');
    const { host } = window.location;
    const publicPath = window.location.host.endsWith('3000') ? '' : '/code';
    const iframeHeight = Number(heightRef.current) + 294;
    const editorValue = editorRef && editorRef.current ? editorRef.current.getValue() : '';
    const src = `https://${host}${publicPath}/editor/v1?language=${languageRef.current}&theme=${themeRef.current}&height=${heightRef.current}px&default_value=${encodeURIComponent(editorValue)}`;
    if (src.length > 8000) {
      setErrorMessage(intl.formatMessage(messages.codeTooLong));
    }

    const iframeEmbedCode = `<iframe
    frameBorder="0"
    width="100%"
    height="${iframeHeight}"
    src="${src}" 
    />`;

    setEmbedCode(iframeEmbedCode);
  };

  React.useEffect(() => {
    updateEmbedCode();
  }, [theme, language, version, height]);

  const copy = () => {
    const textarea = document.createElement('textarea');
    textarea.textContent = embedCodeRef.current;
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
  };

  const selectTheme = (value) => {
    setTheme(value);
  };

  const selectLanguage = (value) => {
    setLanguage(value);
  };

  const handleOnChange = () => {
    updateEmbedCode();
  };

  const heightChange = (e) => {
    let { value } = e.target;
    if (!value) {
      value = '300';
    }
    setHeight(value);
  };

  const handleSaveClicked = () => {
    tinymceEditorRef.insertContent(embedCode);
    close();
  }

  return (
    <div>
      <ModalDialog
        title="Insert code IDE"
        isOpen={isOpen}
        onClose={close}
        size="xl"
        variant="dark"
        hasCloseButton={false}
        isFullscreenOnMobile={false}
      >
        <ModalDialog.Header>
          <ModalDialog.Title>
            Insert code IDE
          </ModalDialog.Title>
        </ModalDialog.Header>

        <ModalDialog.Body>
          <div className="code-exchange-wrapper">
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
            {errorMessage && (
            <Alert variant="danger" icon={Info}>
              <Alert.Heading>{intl.formatMessage(messages.error)}</Alert.Heading>
              <p>{errorMessage}</p>
            </Alert>
            )}
          </div>
        </ModalDialog.Body>

        <ModalDialog.Footer>
          <ActionRow>
            <ModalDialog.CloseButton variant="tertiary" onClick={close}>
              {intl.formatMessage(messages.cancel)}
            </ModalDialog.CloseButton>
            <Button variant="primary" onClick={handleSaveClicked}>
              {intl.formatMessage(messages.save)}
            </Button>
          </ActionRow>
        </ModalDialog.Footer>
      </ModalDialog>
    </div>
  );
};

IframeMakerModal.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(IframeMakerModal);
