
//$(document).ready(function () {
//    loadFeedback();
//    $("#btnSave").click(function () {
//        let id = $("#hdid").val();
//        let name = $("#txtName").val();
//        let message = $("#txtMessage").val();
//        if (name === "" || message == "") {
//            alert("Name And Message Required");
//            return;
//        }
//        let url = id == 0 || id == ""
//            ? "/Feedback/Add"
//            : "/Feedback/Update";

//        $.ajax({
//            url: url,
//            type: "POST",
//            data: {
//                Id: id,
//                Name: name,
//                Message: message
//            },
//            success: function (res) {
//                $("#Feedback-Container").html(res);
//                $("#hdid").val(0);
//                $("#txtName").val("");
//                $("#txtMessage").val("");
//                $("#btnSave").text("Save");
//            }
//        });
//    });
//    $(document).on("click", ".btnDelete", function () {
//        let id = $(this).data("id");
//        $.ajax({
//            url: "/Feedback/Delete",
//            type: "DELETE",
//            data: {
//                id: id
//            },
//            success: function (res) {
//                $("#Feedback-Container").html(res);
//            }
//        });
//    });
//    //$(document).on("click", ".btnEdit", function () {
//    //    let id = $(this).data("id");
//    //    $.ajax({
//    //        url: "/Feedback/GetById",
//    //        type: "GET",
//    //        data: { id: id },
//    //        success: function (res) {
//    //            $("#hdid").val(res.id);
//    //            $("#txtName").val(res.name);
//    //            $("#txtMessage").val(res.message);
//    //            $("#btnSave").text("Update")
//    //        }
//    //    })
//    //})
//    $(document).on("click", ".btnEdit", function () {
//        let id = $(this).data("id");
//        $.ajax({
//            url: "/Feedback/GetById",
//            type: "GET",
//            data: { id: id },
//            success: function (res) {
//                $("#modalId").val(res.id);
//                $("#modalName").val(res.name);
//                $("#modalMessage").val(res.message);
//                $("#editModal").modal("show");
//            }
//        })
//    })
//    $("#btnModalUpdate").click(function () {
//        let id = $("#modalId").val();
//        let name = $("#modalName").val();
//        let message = $("#modalMessage").val();
//        if (name === "" || message === "") {
//            alert("All Fields are Required");
//            return;
//        }
//        $.ajax({
//            url: "/Feedback/Update",
//            type: "POST",
//            data: {
//                Id: id,
//                Name: name,
//                Message:message
//            },
//            success: function (res) {
//                $("#Feedback-Container").html(res);
//                $("#editModal").modal("hide");
//            }
//        })
//    })

//    function loadFeedback() {
//        $("#Feedback-Container").load("/Feedback/GetAll");

//    }

//});
$(document).ready(function () {

    loadFeedback();

  //ADD
    $("#btnSave").click(function () {

        let name = $("#txtName").val();
        let message = $("#txtMessage").val();

        if (name === "" || message === "") {
            alert("Name And Message Required");
            return;
        }

        $.ajax({
            url: "/Feedback/Add",
            type: "POST",
            data: {
                Name: name,
                Message: message
            },
            success: function (res) {
                $("#Feedback-Container").html(res);
                $("#txtName").val("");
                $("#txtMessage").val("");
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
    $("#btnModalUpdate").click(function () {

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
    }
});
