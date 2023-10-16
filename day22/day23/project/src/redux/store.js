import { configureStore } from "@reduxjs/toolkit";
import dashReducer from "./reducer";

// Function to load state from localStorage for a specific slice
const loadState = (sliceName) => {
  try {
    const serializedState = localStorage.getItem(`reduxState_${sliceName}`);
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (err) {
    return undefined;
  }
};

// Create your Redux store
const storeConfig = {
  reducer: {
    email: dashReducer,
    userdata: dashReducer,
    // Add other slices if needed
  },
};

// Set preloaded state for each slice
Object.keys(storeConfig.reducer).forEach((sliceName) => {
  storeConfig.preloadedState = {
    ...storeConfig.preloadedState,
    [sliceName]: loadState(sliceName),
  };
});

const store = configureStore(storeConfig);

// Function to save the state to localStorage for a specific slice
const saveState = (sliceName, state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(`reduxState_${sliceName}`, serializedState);
  } catch (err) {
    // Handle potential errors, e.g., storage quota exceeded
  }
};

// Subscribe to changes for all slices and save their states
store.subscribe(() => {
  Object.keys(storeConfig.reducer).forEach((sliceName) => {
    const sliceState = store.getState()[sliceName];
    saveState(sliceName, sliceState);
  });
});

export default store;
