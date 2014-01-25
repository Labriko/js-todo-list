function saveData() {
	var t = $('ol').html();
	localStorage.setItem('key', t)
};

$(document).ready(function() {
	var data = localStorage.getItem('key');
	//console.log($(data));
	$('ol').html(data);
	$('#add').click(function() {
		var toAdd = $('input[name=message]').val();
		$('ol').append("<li><span class='unacted'>"+toAdd+"</span><button type='button' class='pure-button pure-button-primary edit' hidden><i class='icon-edit icon-small'></i></button><button class='pure-button pure-button-primary remove' hidden><i class='icon-trash icon-small'></i></button></li>");
		saveData();
	});
	$(document).on('click', '.unacted', function() {
		$(this).toggleClass('acted');
		saveData();
	});
	$(document).on('click', '#doneAll', function() {
		$('span').addClass('acted');
		saveData();
	});
	$(document).on('click', '#removeDone', function() {
		$('.acted').parent().remove();
		saveData();
	});
	$(document).on('mouseenter', 'span', function() {
		$(this).parent().find('.remove, .edit').show();
	});
	$(document).on('mouseleave', 'li', function() {
		$(this).find('.remove, .edit').hide();
	});
	$(document).on('click', '.remove', function() {
		$(this).parent().remove();
		saveData();
	});
	$(document).on('click', '.edit', function() {
		var a = $(this).parent().find('span');
		a.attr('contentEditable', 'true')
		a.focus();
	});
	$(document).on('focusout', 'span', function() {
		$(this).removeAttr('contentEditable');
		saveData();
	});
});