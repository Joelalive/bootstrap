$(document).ready(function(){

    $(".pop").on("click",function(){
      var title = $(this).closest("div.card").find(".card-title").text();
      var img = $(this).closest("div.card").find('img').attr("src");
      var price = $(this).find("span").text();
      $("#pdt_qty").val(1);
      $(".product-total").val('');
      $(".product-title").text(title);
      $(".product-img").attr("src",img);
      $(".product-price").text(price);
      $("#total").hide();
      $("#single").show();
      $('#myModal').modal('toggle');
    });

    $("#pdt_qty").on("change",function(){
      var price = $(this).closest(".modal-body").find("span.product-price").text();
      var qty = $(this).val();
      var total = price * qty;
      $("#single").hide();
      $("#total").show();
      $(".product-total").text(total);
    });

  });