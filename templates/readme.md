# Project Name

### Platform Requirements

_Please, enter the current project requirements and keep it updated if something changes._

```text
Node Version:
NPM Version:
React Version:
Vue Version:
Next Version:
Nuxt Version:
```

### Third-party Dependencies

_Packages that were installed and need some attention during the environment setup and coding time. Eg:_

* [TypeScript](https://github.com/link-to-package)
* [Headless UI](https://github.com/link-to-package)
* Etc...

### Environment Setup

_Please, enter all the necessary steps to setup the project and start to development._

#### 1. Clone the repository

```shell
git clone git@github.com:elitedevsquad/example.git
```

#### 2. Install dependencies

```shell
npm install
```

#### 3. Copy the .env file

```shell
cp .env.example .env
```

_After copying the .env file, you'll need to change the .env to reflect your environment settings/credentials_

#### 4. Starting development 

```shell
npm run dev
```

### Running Tests

```shell
npm run test
```

### Other Settings

_This is the place to put other settings needed in this project._

### Branches Standard

_Please, pay attention to the Jira task before creating a new branch, you should find which of these prefixes fits
better with the Jira task and after the prefix put the Jira task ID._

1. Feature ![](https://team-devsquad.atlassian.net/secure/viewavatar?avatarId=10315&avatarType=issuetype)

```shell
git checkout -b feature/JIRA-123
```

2. Enhancement ![](https://team-devsquad.atlassian.net/secure/viewavatar?avatarId=10318&avatarType=issuetype)

```shell
git checkout -b enhancement/JIRA-123
```

3. Hotfix ![](https://team-devsquad.atlassian.net/secure/viewavatar?avatarId=10303&avatarType=issuetype) _(Bugs found in
   the production environment that needs to be fixed ASAP)_

```shell
git checkout -b hotfix/JIRA-123
```

4. Bugfix ![](https://team-devsquad.atlassian.net/secure/viewavatar?avatarId=10308&avatarType=issuetype) _(Bugs that
   could be fixed after in the current release or in the next, you'll use it, if the source branch was already merged or
   if the fix could isn't super urgent)_

```shell
git checkout -b bugfix/JIRA-123
```

5. Task _(You should use it for tasks like library upgrade)_

```shell
git checkout -b task/JIRA-123
```

6. Release _(You should use it to merge the approved branches)_

```shell
git checkout -b release/0.1.0
```