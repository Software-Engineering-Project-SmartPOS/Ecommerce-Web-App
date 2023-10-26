self.addEventListener("fetch", function (event) {
  // Intercept and modify the request here
  const newRequest = new Request(event.request, {
    headers: { Authorization: localStorage.getItem("jwtToken") },
    mode: "cors",
  });

  // Use event.respondWith to respond with the modified request
  event.respondWith(fetch(newRequest));
});
