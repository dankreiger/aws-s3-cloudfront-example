# AWS S3/Cloudfront example for client app

https://puppymiami.net/


### AWS Lamda function for redirecting client routes

```js
exports.handler = async (event, x, cb) => {
  const request = event.Records[0].cf.request;

  console.log(`Before: ${request.uri}`);

  if (/about|contact/.test(request.uri)) {
    request.uri = '/index.html';
  }

  console.log(`After: ${request.uri}`);

  cb(null, request)
};
```