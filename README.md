# Expert\*innen helfen Schüler\*innen - #WeVsVirus

## Running in dev mode

```sh
npm i
cd client && npm i && cd ..
npm run dev
```

## Branching and PRs

Create a new branch and prefix with the ticket number:
```sh
git checkout -b feature/25-test-abc
```

Also use the ticket number for commits on this branch:
```sh
git commit -m '#25 My commit for test abc'
```

Once the feature is complete use the GitHub UI to create a pull request into master.