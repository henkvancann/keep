import m from 'mithril';
import addNewContacts from '../../src/assets/img/add-new-contacts.png';
import loanApproved from '../../src/assets/img/loan-approved.png';
import declineRequest from '../../src/assets/img/decline-request.png';
import createIdentifier from '../../src/assets/img/create-identifier.png';
import createYourPasscode from '../../src/assets/img/create-your-passcode.png';
import verifyCredentials from '../../src/assets/img/verify-credentials.png';
import CreateYourGleifAid from './grac-create-your-gleif-aid/grac-create-your-gleif-aid';
import GracIntroToYourRole from './grac-intro-to-your-role/grac-intro-to-your-role';
import JoinVideoCall from './join-video-call/join-video-call';
import InitiateVideoCall from './initiate-video-call/inititate-video-call';
const tasks = {
  'create-passcode': [
    {
      imgSrc: addNewContacts,
      label: 'TODO : grac passcode',
      component: {
        view: () => {
          return <h3>Tasks are different for QAR vs GAR</h3>;
        },
      },
    },
  ],
  'create-identifier': [
    {
      imgSrc: createIdentifier,
      label: 'Create Your Gleif Aid',
      component: {
        view: (vnode) => {
          return <CreateYourGleifAid end={vnode.attrs.end} />;
        },
      },
    },
  ],
  'intro-to-role': [
    {
      imgSrc: createIdentifier,
      label: 'Intro to Your Role',
      component: {
        view: (vnode) => {
          return <GracIntroToYourRole end={vnode.attrs.end} />;
        },
      },
    },
  ],
  'oobi': [
    {
      imgSrc: addNewContacts,
      label: 'Initiate Video Call with GLEIF Controllers',
      component: {
        view: (vnode) => {
          return <InitiateVideoCall end={vnode.attrs.end} />;
        },
      },
    },
    {
      imgSrc: addNewContacts,
      label: 'Join Video Call with GLEIF Genesis Controllers',
      component: {
        view: (vnode) => {
          return <JoinVideoCall end={vnode.attrs.end} />;
        },
      },
    },
  ],
};

module.exports = tasks;