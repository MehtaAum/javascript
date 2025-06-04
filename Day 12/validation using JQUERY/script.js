$(document).ready(function(){
    $("#form").validate({
        rules:{
           name:{required:true , minlength : 3, maxlength: 20 },
           email:{required:true , email:true},
           number:{required:true , minlength:10 },
           pass:{required:true , minlength:8 },
        },
        messages:{
           name:{
            required: "enter your name correctly",
            minlength: "minlength is 3 ",
           },
           email:{
            required: "enter your email correctly",
           },
           number:{
            required: "enter your number correctly",
            minlength: "minlength is 10 number",
           },
           pass:{
            required: "enter your password here",
            minlength: "minlength is 8",
           }
        }
    })
});