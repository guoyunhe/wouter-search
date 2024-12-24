import { render, screen } from '@testing-library/react';
import { WouterSearch } from '.';

describe('WouterSearch', () => {
  it('render', async () => {
    render(<WouterSearch>foobar</WouterSearch>);
    await screen.findByText('foobar');
  });
});
