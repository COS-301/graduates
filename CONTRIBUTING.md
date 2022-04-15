# Contributing to the University of Pretoria's Graduates Portal

The following is a set of guidelines for contributing to the University of Pretoria's Graduates Portal and its packages.
Feel free to add or propose changes to this document in a pull request.

## Table of contents

**[Code of conduct](https://github.com/COS-301/graduates/blob/develop/CODE_OF_CONDUCT.md)**

**[What should I know before I get started?](https://github.com/COS-301/graduates/blob/develop/CONTRIBUTING.md#what-should-i-know-before-i-get-started)**

**[How do I contribute?](https://github.com/COS-301/graduates/blob/develop/CONTRIBUTING.md#how-do-i-contribute)**

**[Style guides](https://github.com/COS-301/graduates/blob/develop/CONTRIBUTING.md#style-guides)**

**[Have a question?](https://github.com/COS-301/graduates/blob/develop/CONTRIBUTING.md#have-a-question)**

**[Additional notes](https://github.com/COS-301/graduates/blob/develop/CONTRIBUTING.md#additional-notes)**

**...**

## What should I know before I get started?
**...**

There are **[resources](https://github.com/COS-301/graduates/wiki/Requirements#more-technical-requirements)** and information to get you started,
depending on what your role is you should use these resources accordingly.

## How do I contribute?
**Fork the Repo**:
- Click the Fork button on the top right of the page.
- Or using the [GitHub CLI](https://cli.github.com/): `gh repo fork COS-301/graduates`

**Create a feature branch**:
- On your fork, you should create a new branch where your changes will be made.
- To create a new branch, run `git checkout -b feature/{what_you_are_doing}`. This can be something like `feature/add-api-endpoints-for-foo` and should not be generic to all your PRs. A branch name like `feature/authorization` or `feature/accessStatus` is not a good name, since it is too generic and does not convey what change is actually made in the branch.
- Make your changes in this branch, keeping commits small.
- Ensure your commits follow the Gitmoji convention. Refer to the [list of Gitmoji](https://gitmoji.dev/) for guidance.

**Create a pull request**:
- On your fork, you should create a new pull request.
- Make sure the base repository is set to COS-301/graduates and the base branch to develop.
- Make sure the head repository is set to your fork and the head branch to the feature branch you created.
- Ensure your PR only includes the commits that are related to the feature being implemented.
- Ensure your PR contains the necessary metadata:
    - Title: Using gitmoji. Example: `✨(api): add api endpoints for feature foo`
    - Labels: Labels are necessary and are checked automatically. Ensure the priority, role, scope, status, and type of the PR are set correctly.
    - Assignees: Assign yourself and a member of the CI/CD team.
    - Reviewers: Assign your DevOps member and your Project Manager. Additionally assign Arné.
    - Project: Set the PR to be a part of your project.
    - Issue: Link your PR to an issue which is fixed by the PR.
    - Sprint: Assign the PR to the current sprint.

**To have a successful merge:**
- PRs need to pass all CI/CD tests as well as lint and build checks.
- PRs need to be reviewed and approved by members of the team such as DevOps or the Project Owner (Arné).
- When a reviewer requests changes, you should make the changes if you agree with the suggestions, and then request a review again.
- If you don't agree with the reviewer, you can discuss the changes with the reviewer in the PR.

## Style guides
**...**

### Git Commit Messages
The use of Gitmojis is encouraged for use in commit messages
- Use the present tense ("Add feature" not "Added feature")
- Consider starting the commit message with an applicable emoji:
    - 🎨 `:art:` When improving the format/structure of the code
    - ⚡ ️`:zap:` When improving performance
    - 🔥 `:fire:` When removing code or files
    - 🚑 `:ambulance:` Critical hotfix
    - 🩹 `:adhesive_bandage:` Simple fix for a non-critical issue
    - 🚨 `:rotating_light:` When fixing compiler/ linter warnings
    - 🐛 `:bug:` When fixing a bug
    - 👽️ `:alien:` Update code due to external API changes
    - ✨ `:sparkles:` When introducing new features
    - 📝 `:memo:` When writing docs
    - 💚 `:green_heart:` When fixing the CI build
    - ✅ `:white_check_mark:` When adding tests
    - 🔒 `:lock:` When dealing with security
    - ⬆️  `:arrow_up:` When upgrading dependencies
    - ⬇ ️`:arrow_down:` When downgrading dependencies
    - 🔀 `:twisted_rightwards_arrows:` When merging branches
    - ⏪ `:rewind:` When reverting changes
    - 🤡 `:clown_face:` Mock things
    - ✏️ `:pencil:` When fixing typos
    - 👷 `:construction_worker:` When adding or updating CI build system

A full list of applicable emojis can be found **[here](https://gitmoji.dev/)**.

## Documentation styleguide

**...**

## Have a question?

Refer to the relevant **[discussion board](https://github.com/COS-301/graduates/discussions)** or the **[FAQ](https://github.com/COS-301/graduates/wiki/FAQ)** section.

## Additional notes

**...**
