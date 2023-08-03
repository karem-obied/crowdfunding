let bookmark = $(".bookmark");
bookmark.click(() => {
  bookmark.toggleClass("checked");
});

let close = $(".moda .close");
close.click(() => {
  $(".moda").addClass("d-none");
  $("body").removeClass("mod");
});
let backProject = $(".backproject");
backProject.click(() => {
  $(".moda").removeClass("d-none");
  $("body").addClass("mod");
});
let box = document.querySelectorAll(".moda .box");
box.forEach((e) => {
  e.onclick = () => {
    box.forEach((event) => {
      event.children[0].className = "";
      if (event.children[1].children.length === 3)
        event.children[1].children[2].style.cssText =
          "display:none  !important";
    });
    e.children[0].className = "active";
    if (e.children[1].children.length === 3) {
      e.children[1].children[2].style.cssText = "display:flex  !important";
    }
  };
});
let request = $(".request");
let success = $(".success");
request.click(() => {
  success.removeClass("d-none");
  $("body").addClass("mod");
});
$(".gotit").click(() => {
  success.addClass("d-none");
  $("body").removeClass("mod");
  $(".moda").addClass("d-none");
});
