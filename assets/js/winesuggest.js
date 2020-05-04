// Store individual links to search on wine.come for the various wine suggestions

const mylinks = [
  [
    "Steak",
    "https://www.wine.com/search/merlot/0",
    "https://www.wine.com/search/cabernet%20sauvignon/0",
    "https://www.wine.com/search/pinot%20noir/0",
  ],
  [
    "Fish",
    "https://www.wine.com/search/pinot%20grigio/0",
    "https://www.wine.com/search/gruener%20veltliner/0",
    "https://www.wine.com/search/pinot%20noir/0",
  ],
  [
    "Turkey",
    "https://www.wine.com/search/chenin%20blanc/0",
    "https://www.wine.com/search/cru%20beaujolais/0",
    "https://www.wine.com/search/pinot%20noir/0",
  ],
  [
    "Italian",
    "https://www.wine.com/search/chianti/0",
    "https://www.wine.com/search/trebbiano/0",
    "https://www.wine.com/search/verdicchio/0",
  ],
  [
    "Spanish",
    "https://www.wine.com/search/tempranillo/0",
    "https://www.wine.com/search/grenache/0",
    "https://www.wine.com/search/albarino/0",
  ],
  [
    "French",
    "https://www.wine.com/search/bordeaux/0",
    "https://www.wine.com/search/champagne/0",
    "https://www.wine.com/search/white%20burgundy/0",
  ],
  [
    "Brie",
    "https://www.wine.com/search/pinot%20noir/0",
    "https://www.wine.com/search/chablis/0",
    "https://www.wine.com/search/champagne/0",
  ],
  [
    "Blue cheese",
    "https://www.wine.com/search/lambrusco%20dolce/0",
    "https://www.wine.com/search/port/0",
    "https://www.wine.com/search/sauternes/0",
  ],
  [
    "Gruyere",
    "https://www.wine.com/search/chardonnay/0",
    "https://www.wine.com/search/pinot%20noir/0",
    "https://www.wine.com/search/sauvignon%20blanc/0",
  ],
];

$(document).ready(function () {
  $("#foodSelect").change(function () {
    // check which food option is selected


    // Send the GET request to the API

    $.ajax({
      url:
        "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/wine/pairing?maxPrice=50&food=" +
        $("#foodSelect option:selected").text().toLowerCase(),
      headers: {
        "x-rapidapi-host":
          "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        "x-rapidapi-key": "556f1a08acmsh72d41478bea3e6ap19227ajsn0bf8a497994a",
      },
      
      type: "GET",
      success: function (result) {
        $("#suggestion-modal").modal("show"); // open/show modal
        $("#suggestion-modal").on("shown.bs.modal", function () {
          //  Store option selected by user in selection variable
          let selection = $("#foodSelect option:selected").text();

          let i;
          // compare selection and then iterate through mylinks array to pull the links(URL)
          for (let i = 0; i < mylinks.length; i++) {
            if (selection === "Steak") {
              //  the code will now target specific ID's, empty the contents of the target ID
                                               //  and then add html including specific URL using 'else if' 
              $("#suggestion-modal")
                .find("#link-wine-one")
                .empty()
                .html(
                  '<a href="' +
                    mylinks[0][1] +
                    '" target="_blank" class="shop-border font-montserrat light-text uppercase">Shop</a>'
                );
              $("#suggestion-modal")
                .find("#link-wine-two")
                .empty()
                .html(
                  '<a href="' +
                    mylinks[0][2] +
                    '" target="_blank" class="shop-border font-montserrat light-text uppercase">Shop</a>'
                );
              $("#suggestion-modal")
                .find("#link-wine-three")
                .empty()
                .html(
                  '<a href="' +
                    mylinks[0][3] +
                    '" target="_blank" class="shop-border font-montserrat light-text uppercase">Shop</a>'
                );
            } else if (selection === "Fish") {
              $("#suggestion-modal")
                .find("#link-wine-one")
                .empty()
                .html(
                  '<a href="' +
                    mylinks[1][1] +
                    '" target="_blank" class="shop-border font-montserrat light-text uppercase">Shop</a>'
                );
              $("#suggestion-modal")
                .find("#link-wine-two")
                .empty()
                .html(
                  '<a href="' +
                    mylinks[1][2] +
                    '" target="_blank" class="shop-border font-montserrat light-text uppercase">Shop</a>'
                );
              $("#suggestion-modal")
                .find("#link-wine-three")
                .empty()
                .html(
                  '<a href="' +
                    mylinks[1][3] +
                    '" target="_blank" class="shop-border font-montserrat light-text uppercase">Shop</a>'
                );
            } else if (selection === "Turkey") {
              $("#suggestion-modal")
                .find("#link-wine-one")
                .empty()
                .html(
                  '<a href="' +
                    mylinks[2][1] +
                    '" target="_blank" class="shop-border font-montserrat light-text uppercase">Shop</a>'
                );
              $("#suggestion-modal")
                .find("#link-wine-two")
                .empty()
                .html(
                  '<a href="' +
                    mylinks[2][2] +
                    '" target="_blank" class="shop-border font-montserrat light-text uppercase">Shop</a>'
                );
              $("#suggestion-modal")
                .find("#link-wine-three")
                .empty()
                .html(
                  '<a href="' +
                    mylinks[2][3] +
                    '" target="_blank" class="shop-border font-montserrat light-text uppercase">Shop</a>'
                );
            } else if (selection === "Italian") {
              $("#suggestion-modal")
                .find("#link-wine-one")
                .empty()
                .html(
                  '<a href="' +
                    mylinks[3][1] +
                    '" target="_blank" class="shop-border font-montserrat light-text uppercase">Shop</a>'
                );
              $("#suggestion-modal")
                .find("#link-wine-two")
                .empty()
                .html(
                  '<a href="' +
                    mylinks[3][2] +
                    '" target="_blank" class="shop-border font-montserrat light-text uppercase">Shop</a>'
                );
              $("#suggestion-modal")
                .find("#link-wine-three")
                .empty()
                .html(
                  '<a href="' +
                    mylinks[3][3] +
                    '" target="_blank" class="shop-border font-montserrat light-text uppercase">Shop</a>'
                );
            } else if (selection === "Spanish") {
              $("#suggestion-modal")
                .find("#link-wine-one")
                .empty()
                .html(
                  '<a href="' +
                    mylinks[4][1] +
                    '" target="_blank" class="shop-border font-montserrat light-text uppercase">Shop</a>'
                );
              $("#suggestion-modal")
                .find("#link-wine-two")
                .empty()
                .html(
                  '<a href="' +
                    mylinks[4][2] +
                    '" target="_blank" class="shop-border font-montserrat light-text uppercase">Shop</a>'
                );
              $("#suggestion-modal")
                .find("#link-wine-three")
                .empty()
                .html(
                  '<a href="' +
                    mylinks[4][3] +
                    '" target="_blank" class="shop-border font-montserrat light-text uppercase">Shop</a>'
                );
            } else if (selection === "French") {
              $("#suggestion-modal")
                .find("#link-wine-one")
                .empty()
                .html(
                  '<a href="' +
                    mylinks[5][1] +
                    '" target="_blank" class="shop-border font-montserrat light-text uppercase">Shop</a>'
                );
              $("#suggestion-modal")
                .find("#link-wine-two")
                .empty()
                .html(
                  '<a href="' +
                    mylinks[5][2] +
                    '" target="_blank" class="shop-border font-montserrat light-text uppercase">Shop</a>'
                );
              $("#suggestion-modal")
                .find("#link-wine-three")
                .empty()
                .html(
                  '<a href="' +
                    mylinks[5][3] +
                    '" target="_blank" class="shop-border font-montserrat light-text uppercase">Shop</a>'
                );
            } else if (selection === "Brie") {
              $("#suggestion-modal")
                .find("#link-wine-one")
                .empty()
                .html(
                  '<a href="' +
                    mylinks[6][1] +
                    '" target="_blank" class="shop-border font-montserrat light-text uppercase">Shop</a>'
                );
              $("#suggestion-modal")
                .find("#link-wine-two")
                .empty()
                .html(
                  '<a href="' +
                    mylinks[6][2] +
                    '" target="_blank" class="shop-border font-montserrat light-text uppercase">Shop</a>'
                );
              $("#suggestion-modal")
                .find("#link-wine-three")
                .empty()
                .html(
                  '<a href="' +
                    mylinks[6][3] +
                    '" target="_blank" class="shop-border font-montserrat light-text uppercase">Shop</a>'
                );
            } else if (selection === "Blue Cheese") {
              $("#suggestion-modal")
                .find("#link-wine-one")
                .empty()
                .html(
                  '<a href="' +
                    mylinks[7][1] +
                    '" target="_blank" class="shop-border font-montserrat light-text uppercase">Shop</a>'
                );
              $("#suggestion-modal")
                .find("#link-wine-two")
                .empty()
                .html(
                  '<a href="' +
                    mylinks[7][2] +
                    '" target="_blank" class="shop-border font-montserrat light-text uppercase">Shop</a>'
                );
              $("#suggestion-modal")
                .find("#link-wine-three")
                .empty()
                .html(
                  '<a href="' +
                    mylinks[7][3] +
                    '" target="_blank" class="shop-border font-montserrat light-text uppercase">Shop</a>'
                );
            } else if (selection === "Gruyere") {
              $("#suggestion-modal")
                .find("#link-wine-one")
                .empty()
                .html(
                  '<a href="' +
                    mylinks[8][1] +
                    '" target="_blank" class="shop-border font-montserrat light-text uppercase">Shop</a>'
                );
              $("#suggestion-modal")
                .find("#link-wine-two")
                .empty()
                .html(
                  '<a href="' +
                    mylinks[8][2] +
                    '" target="_blank" class="shop-border font-montserrat light-text uppercase">Shop</a>'
                );
              $("#suggestion-modal")
                .find("#link-wine-three")
                .empty()
                .html(
                  '<a href="' +
                    mylinks[8][3] +
                    '" target="_blank" class="shop-border font-montserrat light-text uppercase">Shop</a>'
                );
            }
          }
          // after adding the relevant links, target specific information returned from API
          // and pass into the relevant ID'd elements html

          $(this).find("#wine-one").empty().html(result["pairedWines"][0]);
          $(this).find("#wine-two").empty().html(result["pairedWines"][1]);
          $(this).find("#wine-three").empty().html(result["pairedWines"][2]);
          $(this).find("#wine-text").empty().html(result["pairingText"]);
        });
      },
      error: function (request, status, error) {
        alert(request.responseText);
      },
    });
  });
});


