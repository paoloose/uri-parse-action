# uri-parse-action

Parse a Uniform Resource Identifier string in your GitHub Actions

Uses the URL Web API to parse the URI string.

Follows the RFC 3986 naming convention. See <https://en.wikipedia.org/wiki/Uniform_Resource_Identifier#Syntax>.

## Example

Parsing a database url (e.g. `postgres://user:pass@server:5432/db`) from a GitHub secret

```yaml
jobs:
  example:
    runs-on: ubuntu-latest
    steps:
      - name: Parse database URL
        id: database-url
        uses: paoloose/uri-parse-action@v1.0.0beta.5
        with:
          uri: ${{ secrets.DATABASE_URL }}

      - name: Print database URL components
        shell: bash
        run: |
          echo DB_SCHEMA: ${{ steps.database-url.outputs.scheme }}
          echo DB_USER: ${{ steps.database-url.outputs.username }}
          echo DB_PASSWORD: ${{ steps.database-url.outputs.password }}
          echo DB_HOST: ${{ steps.database-url.outputs.host }}
          echo DB_HOSTNAME: ${{ steps.database-url.outputs.hostname }}
          echo DB_PORT: ${{ steps.database-url.outputs.username }}
          echo DB_NAME: ${{ steps.database-url.outputs.path }}
```

## Inputs

### `uri`

**Required** The URI string to parse.

## Outputs

### `decodedUri`

The decoded URI string. Equivalent to JavaScript decodeURI(uri)

### `scheme`

Scheme component of the URI. Does not include the colon (:).

### `authority`

Authority component of the URI.

### `username`

Username component of the URI.

### `password`

Password component of the URI.

### `host`

Host component of the URI. Includes the port if specified.

### `hostname`

Hostname component of the URI. Does not include the port.

### `port`

Port component of the URI.

### `path`

Path component of the URI. Does not include the leading slash (/).

### `decodedPath`

Decoded Path component of the URI. Equivalent to JavaScript decodeURIComponent(path).
Does not include the leading slash (/).

### `query`

Query component of the URI. Does not include the question mark (?).

### `fragment`

Fragment component of the URI. Does not include the hash (#).
