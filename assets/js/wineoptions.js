// Store individual links to search on wine.come for the various wine suggestions
const myLinks = [
    {
        foodType: 'Steak',
        links: [
            "https://www.wine.com/search/merlot/0",
            "https://www.wine.com/search/cabernet%20sauvignon/0",
            "https://www.wine.com/search/pinot%20noir/0",
        ]
    },
    {
        foodType: 'Fish',
        links: [
            "https://www.wine.com/search/pinot%20grigio/0",
            "https://www.wine.com/search/gruener%20veltliner/0",
            "https://www.wine.com/search/pinot%20noir/0",
        ]
    },
    {
        foodType: 'Turkey',
        links: [
            "https://www.wine.com/search/chenin%20blanc/0",
            "https://www.wine.com/search/cru%20beaujolais/0",
            "https://www.wine.com/search/pinot%20noir/0",
        ]
    },
    {
        foodType: 'Italian',
        links: [
            "https://www.wine.com/search/chianti/0",
            "https://www.wine.com/search/trebbiano/0",
            "https://www.wine.com/search/verdicchio/0",
        ]
    },
    {
        foodType: 'Spanish',
        links: [
            "https://www.wine.com/search/tempranillo/0",
            "https://www.wine.com/search/grenache/0",
            "https://www.wine.com/search/albarino/0",
        ]
    },
    {
        foodType: 'French',
        links: [
            "https://www.wine.com/search/bordeaux/0",
            "https://www.wine.com/search/champagne/0",
            "https://www.wine.com/search/white%20burgundy/0",
        ]
    },
    {
        foodType: 'Brie',
        links: [
            "https://www.wine.com/search/pinot%20noir/0",
            "https://www.wine.com/search/chablis/0",
            "https://www.wine.com/search/champagne/0",
        ]
    },
    {
        foodType: 'Blue cheese',
        links: [
            "https://www.wine.com/search/lambrusco%20dolce/0",
            "https://www.wine.com/search/port/0",
            "https://www.wine.com/search/sauternes/0",
        ]
    },
    {
        foodType: 'Gruyere',
        links: [
            "https://www.wine.com/search/chardonnay/0",
            "https://www.wine.com/search/pinot%20noir/0",
            "https://www.wine.com/search/sauvignon%20blanc/0",
        ]
    },
];


$(document).ready(function () {
    $("#foodSelect").change(function () {
        // check which food option is selected
        var errormessage = "Oops! Did you forget to select a cuisine?";
        let selection = $("#foodSelect option:selected").text();

        if (selection === "Choose...") {
            $("#error-modal").modal("show"); // open/show modal
            $("#error-modal").on("shown.bs.modal", function () {
                $(this).find("#error-text").empty().html(errormessage);
            });
        } else {
            $.ajax({
                url:
                    "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/wine/pairing?maxPrice=50&food=" +
                    $("#foodSelect option:selected").text().toLowerCase(),
                headers: {
                "x-rapidapi-host":
                "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                // This api key is here unprotected because the API used is freemium,
                // In any other case I would store sensitive information such as an API key in an environment variable
                "x-rapidapi-key": "556f1a08acmsh72d41478bea3e6ap19227ajsn0bf8a497994a",
            },
                type: "GET",
                success: function(result) {
                    $("#suggestion-modal").modal("show"); // open/show modal
                    $("#suggestion-modal").on("shown.bs.modal", function(){
                        const filteredLinks = myLinks.filter(link => link.foodType === selection);
                        // Populate SHOP links
                        $(this).find("#link-wine-one").empty().html(`<a href="${filteredLinks[0].links[0]}
                        " target="_blank" class="shop-border font-montserrat light-text uppercase">Shop</a>`);
                        $(this).find("#link-wine-two").empty().html(`<a href="${filteredLinks[0].links[1]}
                        " target="_blank" class="shop-border font-montserrat light-text uppercase">Shop</a>`);
                        $(this).find("#link-wine-three").empty().html(`<a href="${filteredLinks[0].links[2]}
                        " target="_blank" class="shop-border font-montserrat light-text uppercase">Shop</a>`);
                        // Populate Modal with api result
                        $(this).find("#wine-one").empty().html(`${result.pairedWines[0]}`);
                        $(this).find("#wine-two").empty().html(`${result.pairedWines[1]}`);
                        $(this).find("#wine-three").empty().html(`${result.pairedWines[2]}`);
                        $(this).find("#wine-text").empty().html(`${result.pairingText}`);
                    });
                }
            });
        }
    });
});
