$(document).ready(function () {
  // Xử lý click vào now-playing để chuyển sang trang now_playing.html
  $(".now-playing a").click(function (e) {
    e.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ <a>
    window.location.href = "now-playing.html";
  });

  // Xử lý click vào coming-soon (không cần chuyển, vì đã ở trang này)
  $(".coming-soon a").click(function (e) {
    e.preventDefault(); // Ngăn chặn hành vi mặc định, nhưng không chuyển trang
  });

  // Xử lý click vào now-playing (không cần chuyển, vì đã ở trang này)
  $(".now-playing a").click(function (e) {
    e.preventDefault(); // Ngăn chặn hành vi mặc định, nhưng không chuyển trang
  });

  // Xử lý click vào coming-soon để chuyển sang trang coming_soon.html
  $(".coming-soon a").click(function (e) {
    e.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ <a>
    window.location.href = "coming-soon.html";
  });

  $(".inner-d button").click(function () {
    const movieTitle = $(this).closest(".col-3").find("h4").text();
    alert(`Bạn đã chọn đặt vé cho phim: "${movieTitle}"`);
    window.location.href = "detail.html"; // Chuyển sang trang chi tiết sau khi nhấn OK
  });
});
