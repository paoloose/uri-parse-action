import core from '@actions/core';

try {
    const uri = core.getInput('uri');
    const url = new URL(uri);

    core.setOutput('uri', url.href);
    core.setOutput('decodedUri', decodeURI(url.href));
    core.setOutput('scheme', removeSufix(url.protocol, ':'));
    core.setOutput('username', url.username);
    core.setOutput('password', url.password);
    core.setOutput('host', url.hostname);
    core.setOutput('port', url.port);
    core.setOutput('path', url.pathname);
    core.setOutput('decodedPath', decodeURIComponent(url.pathname));
    core.setOutput('query', removePrefix(url.search, '?'));
    core.setOutput('fragment', removePrefix(url.hash, '#'));
} catch (error) {
    if (error instanceof Error) {
        core.setFailed(error.message);
    } else {
        core.setFailed((error as any).toString());
    }
}

function removePrefix(what: string, prefix: string) {
    if (what.startsWith(prefix)) {
        return what.substring(prefix.length);
    }
    return what;
}

function removeSufix(what: string, sufix: string) {
    if (what.endsWith(sufix)) {
        return what.substring(0, what.length - sufix.length);
    }
    return what;
}
