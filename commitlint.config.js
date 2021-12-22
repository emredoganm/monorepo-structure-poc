const { utils } = require("@commitlint/config-lerna-scopes");

module.exports = {
  extends: [
    "@commitlint/config-conventional",
    "@commitlint/config-lerna-scopes",
  ],
  rules: {
    "scope-enum": async (ctx) => [
      2,
      "always",
      [...(await utils.getPackages(ctx)), "release"],
    ],
  },
};
