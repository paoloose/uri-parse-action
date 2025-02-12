# uri-parse-action

Parse a Uniform Resource Identifier string in your GitHub Actions

Uses the URL Web API to parse the URI string.

Follows the RFC 3986 naming convention. See <https://en.wikipedia.org/wiki/Uniform_Resource_Identifier#Syntax>.

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

Host component of the URI.

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
