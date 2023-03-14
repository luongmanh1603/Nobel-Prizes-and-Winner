$(document).ready(function() {
    $('.pncchnb').click(function() {
        $(this).parent().toggleClass('active');
        $(this).parent().children('.pnctlnb').slideToggle();
    });
});

$(document).ready(function() {
    $('.pncchnb1').click(function() {
        $(this).parent().toggleClass('active');
        $(this).parent().children('.pnctlnb1').slideToggle();
    });
});

$(document).ready(function() {
    $('.pncchnb2').click(function() {
        $(this).parent().toggleClass('active');
        $(this).parent().children('.pnctlnb2').slideToggle();
    });
});

$(document).ready(function() {
    $('.pncchnb3').click(function() {
        $(this).parent().children('.pnctlnb3').slideToggle();
    });
});
$(document).ready(function() {
    $('.pncchnb4').click(function() {
        $(this).parent().children('.pnctlnb4').slideToggle();
    });
});

const searchInput = document.getElementById('search-input');

searchInput.addEventListener('keyup', function() {
  const searchTerm = searchInput.value.toLowerCase(); // lấy giá trị từ input và chuyển về chữ thường
  const headings = document.querySelectorAll('.product,image'); // lấy tất cả các heading
  
  headings.forEach(function(heading) {
    const headingText = heading.textContent.toLowerCase(); // lấy nội dung của heading và chuyển về chữ thường
    if (headingText.includes(searchTerm)) { // kiểm tra nếu heading chứa từ khóa tìm kiếm
      heading.style.display = 'block'; // hiển thị heading nếu phù hợp
    } else {
      heading.style.display = 'none'; // ẩn heading nếu không phù hợp
    }
  });
});
/* js search */
$(document).ready(function() {
    $('.iconsearch').click(function() {
        $('.cansearch').slideToggle();
    });
});