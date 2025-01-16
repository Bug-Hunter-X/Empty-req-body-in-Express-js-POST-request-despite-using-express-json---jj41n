# Empty req.body in Express.js POST Request

This repository demonstrates a common issue in Express.js applications where the `req.body` is empty despite using `express.json()`.  The bug and solution are provided.

## Bug
The `bug.js` file shows an Express.js application that attempts to parse JSON data from a POST request.  However, `req.body` remains empty.

## Solution
The `bugSolution.js` file provides a corrected version where the `express.json()` middleware is placed correctly before the route handler that expects JSON data.  The correct placement ensures that the request body is parsed before the route handler attempts to access it.  Additional checks, such as verifying the `Content-Type` header are shown as an added precaution.