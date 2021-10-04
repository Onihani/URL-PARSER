// fetch with time out to deal with cors errors
async function fetchWithTimeout(url, options = {}) {
  const { timeout = 5000, ...restOfOptions } = options; // default timeout 5 seconds

  return Promise.race([
    fetch(url, restOfOptions),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error('timeout')), timeout)
    )
  ]);
}

export default fetchWithTimeout;