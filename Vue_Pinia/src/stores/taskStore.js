import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
  state: () => ({
    tasks: [
      { id: 1, title: "Title One", isFav: false },
      { id: 2, title: "Title Two", isFav: true },
    ],
  }),
  name: "taskStoreName",
});
