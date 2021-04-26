import img1 from "url:../images/img1.jpg";
import img2 from "url:../images/img2.jpg";
import img3 from "url:../images/img3.jpg";
import img4 from "url:../images/img4.jpg";
import img5 from "url:../images/img5.jpg";
import img6 from "url:../images/img6.jpg";
import img7 from "url:../images/img7.jpg";
import img8 from "url:../images/img8.jpg";
import img9 from "url:../images/img9.jpg";
import img10 from "url:../images/img10.jpg";
import img11 from "url:../images/img11.jpg";
import img12 from "url:../images/img12.jpg";
import img13 from "url:../images/img13.jpg";
import img14 from "url:../images/img14.jpg";
import img15 from "url:../images/img15.jpg";
import img16 from "url:../images/img16.jpg";

+(function () {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
})();

+(function () {
  var tileSize,
    i,
    blank,
    blankTile,
    par = $("#cover"),
    bTileIndex,
    neighbourTiles = [],
    nLen,
    ind,
    imgUrls = [
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
      img7,
      img8,
      img9,
      img10,
      img11,
      img12,
      img13,
      img14,
      img15,
      img16,
    ];

  function moveImage() {
    var blankTileIndex,
      clickedTileIndex,
      id = $(this).attr("id");

    blankTileIndex = $(".img").index(blankTile);
    clickedTileIndex = $(".img").index(this);

    if (blankTileIndex == clickedTileIndex + 1 && blankTileIndex % 4 != 0) {
      $("#" + id).before(blankTile);
    } else if (
      blankTileIndex == clickedTileIndex - 1 &&
      clickedTileIndex % 4 != 0
    ) {
      $("#" + id).after(blankTile);
    } else if (
      blankTileIndex + 4 == clickedTileIndex ||
      blankTileIndex == clickedTileIndex + 4
    ) {
      var prev1 = $("#" + id).prev(),
        prev2 = blankTile.prev();

      if (prev1.length == 0) par.prepend(blankTile);
      else $(prev1).after(blankTile);

      if (prev2.length == 0) par.prepend($("#" + id));
      else $(prev2).after($("#" + id));
    }
  }

  function startApp() {
    par.html("");

    for (i = 1; i <= 16; i++) {
      par.append(
        '<div class="img" id="img-' +
          i +
          '"><img src="' +
          imgUrls[i - 1] +
          '"></div>'
      );
      $("#img-" + i).on("click", moveImage);
    }

    blank = Math.floor(Math.random() * 16 + 1);
    $("#img-" + blank)
      .html("")
      .addClass("blank");

    blankTile = $(".blank");
    blankTile.off("click");

    tileSize = $(".img").outerWidth();
  }

  function shuffle() {
    for (i = 0; i < 153; i++) {
      neighbourTiles = [];
      bTileIndex = $(".img").index(blankTile);

      if (bTileIndex + 1 < 16 && (bTileIndex + 1) % 4 != 0)
        neighbourTiles.push(bTileIndex + 1);

      if (bTileIndex - 1 > -1 && bTileIndex % 4 != 0)
        neighbourTiles.push(bTileIndex - 1);

      if (bTileIndex + 4 < 16) neighbourTiles.push(bTileIndex + 4);

      if (bTileIndex - 4 > -1) neighbourTiles.push(bTileIndex - 4);

      nLen = neighbourTiles.length;

      ind = Math.floor(Math.random() * nLen);

      $("#cover .img:eq(" + neighbourTiles[ind] + ")").trigger("click");
    }
  }

  $("#shuffleBtn").on("click", shuffle);
  $("#restartBtn").on("click", startApp);

  startApp();
})();
