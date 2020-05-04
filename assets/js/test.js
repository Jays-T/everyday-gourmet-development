//  This bit of code was breaking the winesuggest.js API function
//  Storing here to work on debugging later

let checkSelection = $("#foodSelect option:selected").text();

    if (checkSelection === "Choose...") {
        $("#suggestion-modal").modal("show");
        $("#suggestion-modal").on("shown.bs.modal", function (){
                                       // If no food option is selected print error message to modal
             $(this).find("#suggestion-buttons").empty();
             $(this).find("#wine-text").empty().html('<span class="fancy-text">Oops!</span><br /> Did you forget to choose a food?');
        });
    } else {};