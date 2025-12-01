import { create, type StateCreator } from 'zustand';

interface IInitalState {
  query: string;
}

interface IActions {
  setQuery: (value: string) => void;
  reset: () => void;
}

interface ISearchState extends IInitalState, IActions {}

const initialState: IInitalState = {
  query: '',
};

const searchStore: StateCreator<ISearchState> = set => ({
  ...initialState,
  setQuery: value => set({ query: value }),
  reset: () => set({ query: '' }),
});

const useSearchStore = create<ISearchState>()(searchStore);

export const useSearchQuery = () => useSearchStore(state => state.query);
export const setSearchQuery = useSearchStore.getState().setQuery;
export const resetSearchQuery = useSearchStore.getState().reset;
