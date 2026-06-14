# Env Demo App

This Angular application demonstrates environment-based configuration using three environments:

- Development
- Staging
- Production

Each environment has its own:

- API URL
- App Version
- Feature Flags

## Development

Run:

```bash
ng serve
```

Environment:

- Development
- API URL: http://localhost:3000/api

---

## Staging

Build:

```bash
ng build --configuration=staging
```

Environment:

- Staging
- API URL: https://staging-api.com/api

---

## Production

Build:

```bash
ng build --configuration=production
```

Environment:

- Production
- API URL: https://prod-api.com/api

---

## Feature Flags

- enableDarkMode
- enableAnalytics

The application uses an EnvironmentService to access environment values and determine whether features are enabled.