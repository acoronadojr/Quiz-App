$(document).ready(function() {
    $("input[type=radio]").click(function() {
        // Disable other options
        $("input[type=radio]").attr("disabled", true);

        // Check if the selected answer is correct
        var selectedAnswer = $("input[type=radio]:checked").val();
        var correctAnswer = "Paris";

        if (selectedAnswer === correctAnswer) {
            $(".feedback").css("color", "green").text("Correct answer!");
        } else {
            $(".feedback").css("color", "red").text("Incorrect answer. The correct answer is Paris.");
        }
    });
});
