import { create } from 'zustand';

const useStore = create((set) => ({
  id: null, // Initial state
  setId: (newId) => set({ id: newId }), // Function to update the ID
}));

export default useStore;
