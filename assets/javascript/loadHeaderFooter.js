// loadHeaderFooter.js

// Hàm để chèn nội dung file vào một phần tử HTML
function loadComponent(url, placeholderId) {
  fetch(url)
    .then((response) => {
      if (!response.ok)
        throw new Error(`Could not load ${url}: ${response.statusText}`);
      return response.text();
    })
    .then((data) => {
      document.getElementById(placeholderId).innerHTML = data;
    })
    .catch((error) => console.error(error));
}

// Chèn header
loadComponent("header.html", "header-placeholder");

// Chèn footer
loadComponent("footer.html", "footer-placeholder");
