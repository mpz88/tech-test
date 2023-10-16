import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchResults from '../components/SearchResults'; 

describe('SearchResults', () => {
  it('renders the component and matches snapshot', () => {
    const { asFragment } = render(<SearchResults results={[" "]} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('displays the "Search Results" text', () => {
    render(<SearchResults results={[" "]} />);
    const searchResultsText = screen.getByText('Search Results');
    expect(searchResultsText).toBeInTheDocument();
  });

  it('displays an image with the alt text "space"', () => {
    render(<SearchResults results={[" "]}/>);
    const imageElement = screen.getByAltText('space');
    expect(imageElement).toBeInTheDocument();
  });
});
