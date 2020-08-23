# AWS S3/Cloudfront example for client app

https://puppymiami.net/

### AWS Lamda functions

#### redirecting client routes

Cloudfront event (viewer request)

```js
exports.handler = async (event, x, cb) => {
  const request = event.Records[0].cf.request;

  console.log(`Before: ${request.uri}`);

  if (request.uri === '/') {
    request.uri = '/index.html';
  }

  if (/about|contact/.test(request.uri)) {
    request.uri = '/index.html';
  }

  console.log(`After: ${request.uri}`);
  
  cb(null, request);
};
```

### applying security headers

Cloudfront event (viewer response)

```js

exports.handler = (event, context, callback) => {
  const response = event.Records[0].cf.response;

  response.headers['strict-transport-security'] = [{
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains'
  }];

  response.headers['content-security-policy'] = [{
    key: 'Content-Security-Policy',
    value: "default-src 'self' 'unsafe-inline'"
  }];

  response.headers['x-xss-protection'] = [{
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  }];

  response.headers['x-content-type-options'] = [{
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  }];

  response.headers['x-frame-options'] = [{
    key: 'X-Frame-Options',
    value: 'DENY'
  }];

  callback(null, response);
};
```

#### redirect example

Cloudfront event (origin request)

```js
exports.handler = async (event, ctx, cb) => {
    const request = event.Records[0].cf.request;

    const response = {
        status: '302',
        statusDescription: 'found',
        headers: {
            location: [{
                key: 'Location',
                value: 'https://bit.ly/very-secret'
            }]
        }
    }

    if (request.uri === '/secret') {
        return cb(null, response);
    }

    cb(null, request);
};
```


#### Origin response

Cloudfront event (origin response)

```js
exports.handler = async (event, ctx, cb) => {
    const request = event.Records[0].cf.request;

    const response = {
        status: '302',
        statusDescription: 'found',
        headers: {
            location: [{
                key: 'Location',
                value: 'https://www.youtube.com/watch?v=I-CFzwb7J0M'
            }]
        }
    }

    if (request.uri === '/secret') {
        return cb(null, response);
    }

    cb(null, request);
};
```
