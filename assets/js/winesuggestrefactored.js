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

        $("#error-modal").on("shown.bs.modal"), function() {
            
            $(this).getAll("#error-text").empty().html(errormessage);
        }
    } else {
        alert('Not working');
    }
  });
});

