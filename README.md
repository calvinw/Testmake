# TestMake

This is a code bundle for TestMake. The original project is available at https://www.figma.com/design/182Of32ZvilUQJFZMLqm2c/TestMake.

## Running the code

Run `npm i` to install the dependencies.

Run `npm run dev` to start the development server.

## Cloud Environment Configuration

The cloud environment is configured with the following settings:

**Environment Name:** Nineball

**Network Access:** Custom access with restricted domains
- Allowed domains:
  - example.com
  - anthropic.com

**Environment Variables:** See `.env` file for configuration
- `API_KEY`: Application API key
- `DATABASE_URL`: Database connection string

**Configuration Files:**
- `cloud-environment.json`: Cloud environment settings including network access rules
- `.env`: Environment variables (not committed to version control)

For security, ensure `.env` is never committed to the repository.
