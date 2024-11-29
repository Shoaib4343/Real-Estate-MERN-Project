// import { create } from "zustand";
// import axios from "axios";

// export const useNotificationStore = create((set) => ({
//   number: 0,
//   fetch: async () => {
//     const res = await axios.get("http://localhost:8800/users/notification");
//     set({ number: res.data });
//   },
//   decrease: () => {
//     set((prev) => ({ number: prev.number - 1 }));
//   },
//   reset: () => {
//     set({ number: 0 });
//   },
// }));

import { create } from "zustand";
import axios from "axios";

export const useNotificationStore = create((set) => ({
  number: 0,
  fetch: async () => {
    const res = await axios.get("http://localhost:8800/users/notification");
    set({ number: res.data });  // Fetch the initial unread notifications count
  },
  increase: () => {
    set((state) => ({ number: state.number + 1 }));  // Increase count when a new message arrives
  },
  decrease: () => {
    set((state) => ({ number: Math.max(state.number - 1, 0) }));  // Decrease count when a message is read
  },
  reset: () => {
    set({ number: 0 });  // Reset notification count
  },
}));
