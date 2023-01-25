$(function(){
    $(document).on("click","#login", function() {
        $('.modal-body').load("../pages/login_modal.html")
        $('.modal').modal('show')
        $('.modal-footer').html(
            '<button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>'+
            '<button type="button" class="btn btn-outline-primary">Login</button>'
        )
    })

    $(document).on("click", "#signUpBtn", function() {
        $(".signUp-body").removeAttr("hidden");
        $(".login-body").attr("hidden");
    })
})