$(document).ready(function(){
	
	$('.myForm #formToValidate').validate({
		onfocusout: false,
        rules: {
            name: {
                minlength: 3,
                maxlength: 100,
                required: true
            },
            capital: {
            	minlength: 3,
                maxlength: 100,
                required: true
            }
        },
        highlight: function (element) {
            $(element).closest('.control-group').removeClass('success').addClass('error');
        },
        success: function (element) {
            element.text('').addClass('valid').closest('.control-group').removeClass('error').addClass('success');
        }
    });
	
	$('.nBtn, .table .eBtn').on('click', function(event){
		event.preventDefault();
		var href = $(this).attr('href');
		var text = $(this).text();
		if(text == 'Edit'){
			$('.myForm #exampleModalLabel').text("Edit");
			$.get(href, function(country, status){
				$('.myForm #id').val(country.id);
				$('.myForm #name').val(country.name);
				$('.myForm #capital').val(country.capital);
			})
			$('.myForm #exampleModal').modal();
		} else {
			$('.myForm #exampleModalLabel').text("Create");
			$('.myForm #idForm').hide();
			$('.myForm #name').val('');
			$('.myForm #capital').val('');
			$('.myForm #exampleModal').modal();
		}
		
		
	});
	
	$('.table .delBtn').on('click', function(event){
		event.preventDefault();
		var href = $(this).attr('href');
		$('#myModal #delRef').attr('href', href);
		$('#myModal').modal();
	});
	
})