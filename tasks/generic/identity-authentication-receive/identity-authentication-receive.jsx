import m from 'mithril';
import { Button, TextField, Modal } from '../../../src/app/components';
import { KERI } from '../../../src/app/services';
import addNewContacts from '../../../src/assets/img/add-new-contacts.png';
import responseMessage from '../../../src/assets/img/response-message.png';
import uploadFile from '../../../src/assets/img/upload-file.png';
import wait from '../../../src/assets/img/wait.png';

class WaitModal {
  view(vnode) {
    return (
      <>
        <Modal
          isOpen={vnode.attrs.isOpen}
          backdropClose={false}
          onClose={vnode.attrs.onClose}
          style={{ width: '560px' }}
          header={<h3 class="font-weight--medium">Wait! Did you complete Identity Assurance?</h3>}
          content={
            <>
              <div class="flex flex-align-center flex-justify-center">
                <img style={{ width: '150px', margin: '2rem 5rem 0 0' }} src={wait} />
                <p
                  class="font-weight--light font-color--battleship"
                  style={{ lineHeight: '2', letterSpacing: '0.15px' }}
                >
                  Verification is a two-step process. Before authenticating, make sure that Identity Assurance is
                  completed.
                </p>
              </div>
            </>
          }
          footer={
            <>
              <div class="flex flex-justify-center" style={{ marginTop: '3rem' }}>
                <Button
                  raised
                  class="button--big button--extraPadding"
                  label="Identity Assurance is Done"
                  onclick={vnode.attrs.onClose}
                />
              </div>
            </>
          }
        />
      </>
    );
  }
}

class StepsToAuthenticate {
  constructor() {
    this.waitModalOpen = true;
  }

  view(vnode) {
    return (
      <>
        <WaitModal
          isOpen={this.waitModalOpen}
          onClose={() => {
            this.waitModalOpen = false;
          }}
        />
        <h3>Identity Authentication</h3>
        <p class="p-tag">
          This module will take you through the steps of how to authenticate an Identity. Below are the steps for how to
          complete the process:
        </p>
        <h3>Steps to Authenticate an Identity</h3>
        <ol class="styled-ol" style={{ margin: '2rem 0' }}>
          <li>Both parties Join a Video Call</li>
          <li>Use an OOBI protocol to accept an AID</li>
          <li>Send a Challenge Message</li>
          <li>Other party signs and returns Challenge Message</li>
          <li>Verify the signature of the other party</li>
        </ol>
        <div class="flex flex-justify-end">
          {/* <Button class="button--gray-dk button--big button--no-transform" raised label="Skip" /> */}
          <Button class="button--big button--no-transform" raised label="Continue" onclick={vnode.attrs.continue} />
        </div>
      </>
    );
  }
}

class JoinVideoCall {
  view(vnode) {
    return (
      <>
        <h3>Join a Video Call with the other party</h3>
        <p class="p-tag">
          In order to start the authentication process, you will need to complete an real-time OOBI session in which you
          and the other party are present, You will accept their OOBI on a Video Call so that you can receive their
          identifying information.
        </p>
        <div class="flex flex-justify-between">
          <Button class="button--gray-dk button--big button--no-transform" raised label="Go Back" />
          <Button class="button--big button--no-transform" raised label="Continue" onclick={vnode.attrs.continue} />
        </div>
      </>
    );
  }
}

class EnterOOBI {
  constructor() {}

  oninit() {
    KERI.listIdentifiers().then((identifiers) => {
      console.log(identifiers);
      KERI.getOOBI(identifiers[0].name, 'gar').then((oobi) => {
        console.log(oobi);
      });
    });
  }

  view(vnode) {
    return (
      <>
        <img src={addNewContacts} style={{ width: '40%', margin: '1.5rem 0 0 0' }} />
        <h3>
          Accept <u>OOBI</u>
        </h3>
        <p class="p-tag">
          While on the Video Call, make sure to obtain the other party's <b>URL and OOBI</b>. When you have both for
          each party, please press continue.
        </p>
        <label>AID:</label>
        <TextField outlined fluid style={{ margin: '0 0 2rem 0' }} />
        <label>URL:</label>
        <TextField outlined fluid style={{ margin: '0 0 4rem 0' }} />
        <div class="flex flex-justify-between">
          <Button class="button--gray-dk button--big button--no-transform" raised label="Go Back" />
          <Button class="button--big button--no-transform" raised label="Continue" onclick={vnode.attrs.continue} />
        </div>
      </>
    );
  }
}

class GenerateChallengeMessage {
  view(vnode) {
    return (
      <>
        <img src={responseMessage} style={{ width: '50%', margin: '1.5rem 0 2rem 0' }} />
        <h3>Generate Challenge Message</h3>
        <p class="p-tag">The Challenge Message generated will be sent to the other party for verification purposes.</p>
        <div class="flex flex-justify-between">
          <Button class="button--gray-dk button--big button--no-transform" raised label="Go Back" />
          <Button class="button--big button--no-transform" raised label="Continue" onclick={vnode.attrs.continue} />
        </div>
      </>
    );
  }
}

class CopyChallengeMessage {
  view(vnode) {
    return (
      <>
        <img src={responseMessage} style={{ width: '50%', margin: '1.5rem 0 2rem 0' }} />
        <h3>Copy Challenge Message</h3>
        <p class="p-tag">Copy the Challenge Message into the chat box while on the Video Call.</p>
        <TextField outlined textarea fluid style={{ margin: '0 0 4rem 0' }} />
        <div class="flex flex-justify-between">
          <Button class="button--gray-dk button--big button--no-transform" raised label="Go Back" />
          <Button class="button--big button--no-transform" raised label="Continue" onclick={vnode.attrs.continue} />
        </div>
      </>
    );
  }
}

class ChallengeMessageInProgress {
  view(vnode) {
    return (
      <>
        <img src={uploadFile} style={{ width: '60%', margin: '1.5rem 0 2rem 0' }} />
        <h3>Challenge Message in Progress</h3>
        <p class="p-tag">You will be notified when the other party signs and returns the Challenge Message.</p>
        <div class="flex flex-justify-between">
          <Button class="button--gray-dk button--big button--no-transform" raised label="Go Back" />
          <Button class="button--big button--no-transform" raised label="Close" onclick={vnode.attrs.end} />
        </div>
      </>
    );
  }
}

class IdentityAuthenticationReceive {
  constructor() {
    this.currentState = 'enter-oobi';
    // this.currentState = 'steps-to-authenticate';
  }

  view(vnode) {
    return (
      <>
        {this.currentState === 'steps-to-authenticate' && (
          <StepsToAuthenticate
            continue={() => {
              this.currentState = 'join-video-call';
            }}
          />
        )}
        {this.currentState === 'join-video-call' && (
          <JoinVideoCall
            continue={() => {
              this.currentState = 'enter-oobi';
            }}
          />
        )}
        {this.currentState === 'enter-oobi' && (
          <EnterOOBI
            continue={() => {
              this.currentState = 'generate-challenge-message';
            }}
          />
        )}
        {this.currentState === 'generate-challenge-message' && (
          <GenerateChallengeMessage
            continue={() => {
              this.currentState = 'copy-challenge-message';
            }}
          />
        )}
        {this.currentState === 'copy-challenge-message' && (
          <CopyChallengeMessage
            continue={() => {
              this.currentState = 'challenge-message-in-process';
            }}
          />
        )}
        {this.currentState === 'challenge-message-in-process' && <ChallengeMessageInProgress end={vnode.attrs.end} />}
      </>
    );
  }
}

module.exports = IdentityAuthenticationReceive;
