let resultObj = {};
let question = "";
let response = "";
let responseCounter = 0;

const getSurveyResult = () => {
    $("div.survey-container li").each(function(index) {
        question = $(this).text();

        response = $(this)
            .parent()
            .parent()
            .children("div.col-7")
            .children("div")
            .children("div")
            .children("input:checked")
            .val();

        resultObj[question] = response;
    });

    console.log(resultObj);
};

$("div.survey-container.mobile :radio").change(function() {
    $(this).parent().parent().parent().parent().next()[0].scrollIntoView({
        behavior: "smooth",
    });
});

$("div.survey-container.desktop :radio").change(function() {
    responseCounter++;

    if (responseCounter >= 10) {
        $("a.btn").removeClass("disabled");
    }
});