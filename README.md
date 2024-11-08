# Bloglist CI/CD

Exercises 11.20 and 11.21 of Full Stack Open CI/CD.

## Project Structure

`frontend/` and `backend/` contain the front-end and back-end respectively. Each contains its own `package.json`, file and may be run separately if needed.

## NPM Scripts

- `"start-dev-backend"` - Runs the backend in development mode.
- `"start-dev-frontend"` - Runs the frontend in development mode.
- `"start-prod"` - Runs the entire app in production mode.
- `"build"` - Compiles a front-end build and moves it into the `backend/` folder.
- `"install"` - Installs dependencies for frontend and backend.
- `"eslint"` - Lints the frontend and backend code.
- `"test"` - Runs tests.


## Running App

If running for the first time:

```bash
npm run install
```

### Running in Development Mode

```bash
npm run build
# Run next two commands in separate terminals
npm run start-dev-backend
npm run start-dev-frontend
```

### Running in Production Mode

```bash
npm run build
npm run start-prod
```

## Actions

Actions can be found in the `.github/workflows` directory of the repo:
- `test.yml` - Outputs "hello world".
- `deploymentPipeline.yml` - Full deployment pipeline for app (build, lint, test, deploy).
- `pr_tests.yml` - Tests to be run upon opening a PR.
- `scheduleHealthCheck.yml` - Periodic health check of deployed app.
