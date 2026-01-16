$(function () {
    //loadFeedback();
    checkDataStatus();
    function checkDataStatus() {
        $.ajax({
            url: "/Feedback/Count",
            type: "GET",
            success: function (count) {
                if (count == 0) {
                    $("#statusText").text("No Student Feedback Available");
                    $("#btnShowData").text("Add Student Feedback");
                    $("#btnShowData").removeClass("d-none");
                   
                }
                else {
                    $("#statusText").text(count + " Student Feedback Available");
                    $("#btnShowData").text("Show Student Feedback");
                    $("#btnShowData").removeClass("d-none");
                }
            }
        });
    }
    //show table button
    $("#btnShowData").on("click",function () {
        $("#landingArea").hide();
        $("#Feedback-Container").removeClass("d-none");
        $("#btnOpenAddModal").removeClass("d-none");
        loadFeedback();
    })

  //ADD
    $("#btnModalSave").on("click",function () {

        let name = $("#addName").val();
        let message = $("#addMessage").val();

        if (name === "" || message === "") {
            alert("Name And Message Required");
            return;
        }

        $.ajax({
            url: "/Feedback/Add",
            type: "POST",
            data: {
                Student: name,
                Message: message
            },
            success: function (res) {
                $("#Feedback-Container").html(res);
                $("#addName").val("");
                $("#addMessage").val("");
                $("#addModal").modal("hide");
            }
        });
    });

  //Delete
    $(document).on("click", ".btnDelete", function () {

        let id = $(this).data("id");

        $.ajax({
            url: "/Feedback/Delete",
            type: "DELETE",
            data: { id: id },
            success: function (res) {
                $("#Feedback-Container").html(res);
            }
        });
    });
    //open add modal
    $("#btnOpenAddModal").on("click", function () {
        $("#addName").val("");
        $("#addMessage").val("");
        $("#addModal").modal("show");
    })

   //open modal Edit
    $(document).on("click", ".btnEdit", function () {

        let id = $(this).data("id");

        $.ajax({
            url: "/Feedback/GetById",
            type: "GET",
            data: { id: id },
            success: function (res) {

                $("#modalId").val(res.id);
                $("#modalName").val(res.name);
                $("#modalMessage").val(res.message);

                $("#editModal").modal("show");
            }
        });
    });

    //update from model
    $("#btnModalUpdate").on("click",function () {

        let id = $("#modalId").val();
        let name = $("#modalName").val();
        let message = $("#modalMessage").val();

        if (name === "" || message === "") {
            alert("All Fields are Required");
            return;
        }

        $.ajax({
            url: "/Feedback/Update",
            type: "POST",
            data: {
                Id: id,
                Name: name,
                Message: message
            },
            success: function (res) {
                $("#Feedback-Container").html(res);
                $("#editModal").modal("hide");
            }
        });
    });

    //Load List
    function loadFeedback() {

        $("#Feedback-Container").load("/Feedback/GetAll");
        //if ($("#Feedback-Container").find("table").length > 0) {

        //    // DATA PRESENT
        //    $("#landingArea").addClass("d-none");
        //    $("#Feedback-Container").removeClass("d-none");
        //    $("#topAddBar").removeClass("d-none");

        //} else {

        //    // NO DATA
        //    $("#landingArea").removeClass("d-none");
        //    $("#Feedback-Container").removeClass("d-none");
        //    $("#topAddBar").addClass("d-none");

        //}
    }
});
