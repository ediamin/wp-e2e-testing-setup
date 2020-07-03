# WP E2E Testing Setup

A sample plugin that contains env and e2e setup using Gutenberg packages

### Test files
Add all your e2e test cases in `tests/e2e/specs` directory with format `*.test.js`. There is an example test file hello.test.js

### Installation
Clone the repo and then run
```
npm install
```

### Start env
Make sure Docker is running and then run
```
npm run env:start
```

### Stop env
Stop Docker containers
```
npm run env:stop
```

### Run e2e testing
Make sure to run env:start first
```
npm run test:e2e
```

### Lint your e2e test files
```
npm run lint:e2e
```
