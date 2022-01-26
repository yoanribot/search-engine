export type GlobalState =  {
  results: SearchResult,
  isLoading: boolean,
  searchTerm: string,
  search: (query: string) => void,
  setSearchTerm: (query: string) => void,
};

export type SearchResult = {
  results: {
    link: string,
    title: string,
    additional_links: {
      href: string,
    }[],
  }[],
  image_results: {
    image: { src: string },
    link: { href: string, title: string },
  }[],
  entries: {
    id: string,
    links: {
      href: string,
    }[],
    source: { href: string },
    title: string,
  }[],
};