import m from 'mithril';
import mq from 'mithril-query';
import Spinner from './spinner.jsx';

describe('Spinner component', () => {
  it('Should create', () => {
    let out = mq(m(Spinner));
    expect(out).toBeTruthy();
  });
});
