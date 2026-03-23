const asyncHandler = (requestHandler) => {   // 1. Takes your async route handler as input
  return (req, res, next) => {                       // 2. Returns a new Express-compatible function
    Promise.resolve(requestHandler(req, res, next))  // 3. Wraps the handler in a Promise
      .catch((err) => next(err))             // 4. Catches any error and forwards to Express
  }
}

export {asyncHandler}