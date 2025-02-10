# uri-parse-action

Parse a Uniform Resource Identifier string in your GitHub Actions

## Inputs

### `uri`

**Required** The URI string to parse.

## Outputs

### `scheme`

Scheme component of the URI. Does not include the colon (:).

### `authority`

Authority component of the URI.

### `userinfo`

User Information component of the URI.

### `host`

Host component of the URI.

### `port`

Port component of the URI.

### `path`

Path component of the URI. It is either empty or begin with a slash (/).

### `query`

Query component of the URI. Does not include the question mark (?).

### `fragment`

Fragment component of the URI. Does not include the hash (#).
