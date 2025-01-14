import m from 'mithril';
import { Button, Card, TextField } from '../../../src/app/components';
import uploadFile from '../../../src/assets/img/upload-file.png';
import projectPlanning from '../../../src/assets/img/project-planning.png';
import addNewContacts from '../../../src/assets/img/add-new-contacts.png';
import responseMessage from '../../../src/assets/img/response-message.png';

import liOne from '../../../src/assets/img/li-one.png';
import liTwo from '../../../src/assets/img/li-two.png';
import liThree from '../../../src/assets/img/li-three.png';
import liFour from '../../../src/assets/img/li-four.png';
import liFive from '../../../src/assets/img/li-five.png';
class InitiateVideoCall {
  constructor(vnode) {
    this.step = 0;
    this.steps = [
      <>
        <h3>QVI AID Delegation Event</h3>
        <p class="p-tag">This module will take you through the steps for QVI AID Delegation. </p>
        <h3>Steps to Create QVI Delegated AID</h3>
        <p class="p-tag">
          <div class="flex flex-column">
            <div class="flex" style={{ alignItems: 'center', margin: '0 0 0 0' }}>
              <img src={liOne} style={{ margin: '1rem 10px 1rem 0' }} />
              <p class="p-tag-bold">Initiate a Video Call with all QVI Controllers.</p>
            </div>
            <div class="flex" style={{ alignItems: 'center', margin: '0 0 0 0' }}>
              <img src={liTwo} style={{ margin: '1rem 10px 1rem 0' }} />
              <p class="p-tag-bold">
                Use an OOBI protocol to share your QVI Delegated AID and service endpoints with the other Controllers.
              </p>
            </div>
            <div class="flex" style={{ alignItems: 'center', margin: '0 0 0 0' }}>
              <img src={liThree} style={{ margin: '1rem 10px 1rem 0' }} />
              <p class="p-tag-bold">Send a Challenge Message to the other Controllers.</p>
            </div>
            <div class="flex" style={{ alignItems: 'center', margin: '0 0 0 0' }}>
              <img src={liFour} style={{ margin: '1rem 10px 1rem 0' }} />
              <p class="p-tag-bold">QVI Controllers sign and return Challenge Message.</p>
            </div>
            <div class="flex" style={{ alignItems: 'center', margin: '0 0 0 0' }}>
              <img src={liFive} style={{ margin: '1rem 10px 1rem 0' }} />
              <p class="p-tag-bold">Each Controller must verify all signatures.</p>
            </div>
          </div>
        </p>
        <div class="flex flex-justify-end">
          <Button
            class="button--big button--no-transform"
            raised
            label="Continue"
            onclick={() => {
              this.step++;
            }}
          />
        </div>
      </>,
      <>
        <img src={addNewContacts} style={{ width: '50%' }} />
        <h3>
          Initiate a Video Call with all <u>QDAC</u>s
        </h3>
        <p class="p-tag" style={{ margin: '2rem 0 2rem 0' }}>
          In order to start the authentication process, you will need to initiate an real-time Out of Band Interaction
          (OOBI) session in which you and the other QDACs (QVI Root AID Controllers) are present, You will accept all
          their OOBI on a Video Call so that you can receive their identifying information.
          <br />
          <br />
        </p>
        <div class="flex flex-justify-between">
          <Button
            class="button--gray-dk button--big button--no-transform"
            raised
            label="Go Back"
            onclick={() => {
              this.step--;
            }}
          />
          <Button
            class="button--big button--no-transform"
            raised
            label="Continue"
            onclick={() => {
              this.step++;
            }}
          />
        </div>
      </>,
      <>
        <img src={projectPlanning} style={{ width: '50%', margin: '4rem 0 0 0' }} />
        <h3>Initiate Video Call</h3>
        <p class="p-tag" style={{ margin: '2rem 0 2rem 0' }}>
          Prior to Initiating the Video Call, make sure that you have all QDACs ready to attend, either in person or
          over Video Call.
          <br />
          <br />
        </p>
        <div class="flex flex-justify-between">
          <Button
            class="button--gray-dk button--big button--no-transform"
            raised
            label="Go Back"
            onclick={() => {
              this.step--;
            }}
          />
          <Button
            class="button--big button--no-transform"
            raised
            label="Get Started"
            onclick={() => {
              this.step++;
            }}
          />
        </div>
      </>,
      <>
        <img src={uploadFile} style={{ width: '50%', margin: '4rem 0 0 0' }} />
        <h3>
          Accept the <u>OOBIs</u>
        </h3>
        <p class="p-tag" style={{ margin: '2rem 0 2rem 0' }}>
          While on the Video Call, make sure to obtain each QVI Controller’s <strong>URL and OOBI</strong>. When you
          have both for each party, please press continue.
        </p>
        <div class="flex flex-justify-between">
          <Button
            class="button--gray-dk button--big button--no-transform"
            raised
            label="Go Back"
            onclick={() => {
              this.step--;
            }}
          />
          <Button
            class="button--big button--no-transform"
            raised
            label="Continue"
            onclick={() => {
              this.step++;
            }}
          />
        </div>
      </>,
      <>
        <h3>Accept AIDs</h3>
        <div class="flex flex-justify-between" style={{ alignItems: 'baseline' }}>
          <p class="p-tag" style={{ margin: '2rem 0 2.5rem 0' }}>
            Enter AIDs, URLs and Aliases you received on the Video Call from the Controllers below:
          </p>
        </div>
        <div style={{ height: '350px', overflowY: 'scroll' }}>
          <Card class="card--fluid" style={{ margin: '0 0 1.5rem 0', height: '200px' }}>
            <div class="flex flex-align-center flex-justify-between" style={{ flexDirection: 'column' }}>
              <div class="flex flex-align-center flex-justify-between">
                <h4>AID:</h4>
                <TextField style={{ backgroundColor: 'rgba(0, 0, 0, 0.04)', height: '2rem', width: '80%' }} />
              </div>
              <div class="flex flex-align-center flex-justify-between">
                <h4>URL:</h4>
                <TextField style={{ backgroundColor: 'rgba(0, 0, 0, 0.04)', height: '2rem', width: '80%' }} />
              </div>
              <div class="flex flex-align-center flex-justify-between">
                <h4>Alias:</h4>
                <TextField style={{ backgroundColor: 'rgba(0, 0, 0, 0.04)', height: '2rem', width: '80%' }} />
              </div>
            </div>
          </Card>
          <Card class="card--fluid" style={{ margin: '0 0 1.5rem 0', height: '200px' }}>
            <div class="flex flex-align-center flex-justify-between" style={{ flexDirection: 'column' }}>
              <div class="flex flex-align-center flex-justify-between">
                <h4>AID:</h4>
                <TextField style={{ backgroundColor: 'rgba(0, 0, 0, 0.04)', height: '2rem', width: '80%' }} />
              </div>
              <div class="flex flex-align-center flex-justify-between">
                <h4>URL:</h4>
                <TextField style={{ backgroundColor: 'rgba(0, 0, 0, 0.04)', height: '2rem', width: '80%' }} />
              </div>
              <div class="flex flex-align-center flex-justify-between">
                <h4>Alias:</h4>
                <TextField style={{ backgroundColor: 'rgba(0, 0, 0, 0.04)', height: '2rem', width: '80%' }} />
              </div>
            </div>
          </Card>
        </div>

        <div class="flex flex-justify-end">
          <Button
            class="button--big button--no-transform"
            raised
            label="Continue"
            onclick={() => {
              this.step++;
            }}
          />
        </div>
      </>,
      <>
        <img src={responseMessage} style={{ width: '50%', margin: '1.5rem 0 2rem 0' }} />
        <h3>Generate Challenge Message</h3>
        <p class="p-tag" style={{ margin: '2rem 0 2rem 0' }}>
          The Challenge Response Message generated will be sent to all the QVI Controllers in the order you provided.
          <br />
          <br />
        </p>

        <div class="flex flex-justify-between">
          <Button
            class="button--gray-dk button--big button--no-transform"
            raised
            label="Go Back"
            onclick={() => {
              this.step--;
            }}
          />
          <Button
            class="button--big button--no-transform"
            raised
            label="Generate"
            onclick={() => {
              this.step++;
            }}
          />
        </div>
      </>,
      <>
        <img src={responseMessage} style={{ width: '50%', margin: '1.5rem 0 2rem 0' }} />
        <h3>Copy Challenge Message</h3>
        <p class="p-tag" style={{ margin: '2rem 0 2rem 0' }}>
          Generate a message for each controller then direct message each QVI Controller in the video call.
          <br />
          <br />
          <strong style={{ color: 'black' }}>
            Important! Don’t use a challenge message from another session, it should be unique to this session taking
            place today with the QVI Controllers.
          </strong>
          <br />
          <br />
        </p>
        <TextField
          textarea
          style={{ height: '5rem', width: '100%', margin: '0 0 4rem 0', backgroundColor: 'rgba(0, 0, 0, 0.04)' }}
        />
        <div class="flex flex-justify-between">
          <Button
            class="button--gray-dk button--big button--no-transform"
            raised
            label="Go Back"
            onclick={() => {
              this.step--;
            }}
          />
          <Button
            class="button--big button--no-transform"
            raised
            label="Continue"
            onclick={() => {
              this.step++;
            }}
          />
        </div>
      </>,
      <>
        <img src={uploadFile} style={{ width: '60%', margin: '1.5rem 0 2rem 0' }} />
        <h3>Challenge Message in Progress</h3>
        <p class="p-tag" style={{ margin: '2rem 0 2rem 0' }}>
          You will be notified when the QDACs sign and return the Challenge Message, after which you may configure the
          multi-sig set as the QVI Genesis Controller.
          <br />
          <br />
        </p>

        <div class="flex flex-justify-between">
          <Button
            class="button--gray-dk button--big button--no-transform"
            raised
            label="Go Back"
            onclick={() => {
              this.step--;
            }}
          />
          <Button class="button--big button--no-transform" raised label="close" onclick={vnode.attrs.end} />
        </div>
      </>,
    ];
  }

  view() {
    return <>{this.steps[this.step]}</>;
  }
}

module.exports = InitiateVideoCall;
