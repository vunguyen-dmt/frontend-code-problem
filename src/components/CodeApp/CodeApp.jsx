import React from 'react';
import Editor from '@monaco-editor/react';
import {
  Button, Spinner, ModalDialog, ActionRow, useToggle, Form, Alert,
} from '@edx/paragon';
import './CodeApp.scss';
import { PlayArrow } from '@edx/paragon/icons';
import { getAuthenticatedUser } from '@edx/frontend-platform/auth';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { sendCode, submitFeedback } from '../../services/codeService';
import messages from '../../messages';

const ErrorMessage = ({ message, intl }) => {
  const [isOpen, open, close] = useToggle(false);
  const [submitStatus, setSubmitStatus] = React.useState('unsubmit'); // unsubmit, submitting, submitted, failedToSubmit.
  const defaultFeedbackMessage = intl.formatMessage(messages.reportDefaultFeedBack);
  const [feedbackMessage, setFeedbackMessage] = React.useState(defaultFeedbackMessage);
  const handleMessageChanged = (e) => {
    setFeedbackMessage(e.target.value);
  };

  const submitReport = () => {
    setSubmitStatus('submitting');
    const user = getAuthenticatedUser();
    const request = {
      name: user.name,
      email: user.email,
      contactType: 'technical_bug_report',
      message: feedbackMessage,
      attachments: [],
    };
    submitFeedback(request).then(result => {
      setSubmitStatus('submitted');
    }).catch(error => {
      setSubmitStatus('failedToSubmit');
    });
  };

  const handleOpenModal = () => {
    if (submitStatus !== 'submitting') {
      setSubmitStatus('unsubmit');
      setFeedbackMessage(defaultFeedbackMessage);
    }
    open();
  };

  return (
    <div>
      <Alert variant="danger">
        {message}<br />
        {intl.formatMessage(messages.ifTheErrorPersist)} , <a className="modal-trigger-link" onClick={handleOpenModal}>{intl.formatMessage(messages.clickHere)}</a> {intl.formatMessage(messages.toReport)}.
      </Alert>
      <ModalDialog
        title="My dialog"
        isOpen={isOpen}
        onClose={close}
        size="md"
        variant="default"
        hasCloseButton
        isFullscreenOnMobile
      >
        <ModalDialog.Header>
          <ModalDialog.Title>
            {intl.formatMessage(messages.feedback)}
          </ModalDialog.Title>
        </ModalDialog.Header>
        <ModalDialog.Body>
          {
            submitStatus !== 'submitted' && (
              <>
                {submitStatus === 'failedToSubmit' && (
                <Alert variant="danger">
                  {intl.formatMessage(messages.reportFailedToSubmit)}
                </Alert>
                )}
                <Form.Group>
                  <Form.Control
                    autoResize
                    as="textarea"
                    value={feedbackMessage}
                    disabled={submitStatus === 'submitting'}
                    onChange={handleMessageChanged}
                    floatingLabel={intl.formatMessage(messages.message)}
                  />
                </Form.Group>
              </>
            )
          }
          {
          submitStatus === 'submitted' && (
          <Alert variant="success">
            {intl.formatMessage(messages.thankForSubmittingTheReport)}
          </Alert>
          )
        }
        </ModalDialog.Body>
        <ModalDialog.Footer>
          <ActionRow>
            {
              submitStatus !== 'submitted' && (
                <>
                  <ModalDialog.CloseButton variant="tertiary">
                    {intl.formatMessage(messages.cancel)}
                  </ModalDialog.CloseButton>
                  <Button variant="primary" onClick={submitReport}>
                    {intl.formatMessage(messages.submitReport)}&nbsp;
                    {submitStatus === 'submitting' && <Spinner animation="border" variants="light" size="sm" />}
                  </Button>
                </>
              )
            }
            {
              submitStatus === 'submitted' && (
                <ModalDialog.CloseButton variant="tertiary">
                  Ok
                </ModalDialog.CloseButton>
              )
            }
          </ActionRow>
        </ModalDialog.Footer>
      </ModalDialog>
    </div>
  );
};

const CodeApp = ({ intl }) => {
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
        setErrorMessage(intl.formatMessage(messages.someThingWentWrongPleaseTryAgainLater));
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
      {errorMessage && <ErrorMessage message={errorMessage} intl={intl} />}
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
