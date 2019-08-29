export default {
  production:
    process.env.NODE_ENV === "production" &&
    process.env.VUE_APP_PREVIEW !== "true",
  // vue-ls options
  storageOptions: {
    namespace: "pro__",
    name: "ls",
    storage: "local"
  }
};
