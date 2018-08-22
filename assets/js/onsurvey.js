function isBlank(val) {
    if (val == null) return true;
    for (var i = 0; i < val.length; i++) {
        if ((val.charAt(i) != ' ') && (val.charAt(i) != "\t") && (val.charAt(i) != "\n") && (val.charAt(i) != "\r")) return false;
    }
    return true;
}

function isDigit(val) {
    if (val.length > 1) return false;
    var string = "1234567890";
    if (string.indexOf(val) != -1) return true;
    return false;
}

function isChar(val) {
    if (val.length > 1) return false;
    var string = "abcdefghijklmnopqrstuvwxyz";
    if (string.indexOf(val) != -1) return true;
    return false;
}

function isPosNumeric(val) {
    return ((parseFloat(val, 10) == (val * 1)) && (val > 0));
}

function isPosInteger(val) {
    if (isBlank(val)) return false;
    for (var i = 0; i < val.length; i++) {
        if (!isDigit(val.charAt(i))) return false;
    }
    return true;
}

function selectField(obj) {
    if (eval(obj)) {
        obj.focus();
        obj.select();
    }
    return;
}

function validatePostal(qobj) {
    var re_postal = /^[A-Za-z][0-9][A-Za-z][0-9][A-Za-z][0-9]$/;
    var strpostal = qobj.value.replace(' ', '')
    qobj.value = strpostal;
    if (!re_postal.test(strpostal)) {
        return false;
    }
    return true;
}

function validateEmail(qobj) {
    //	var re_mail = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z])+$/; 
    var re_mail = /^([^\"\(\),:;<>@\[\\\]`\|])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z])+$/;
    var strmail = qobj.value.replace(' ', '')
    qobj.value = strmail;
    if (!re_mail.test(strmail)) {
        return false;
    }
    return true;
}

function clickSubmit(b) {
    document.ANS.B.value = b;
    setTimeout('document.ANS.submit();', 500);
}

function show_error(msg) {
    var template = '<button type="button" class="close" role="button" title="Dismiss alert">&times;</button>';
    template += '<h4><i class="icon fa fa-ban"></i> Oops!</h4><p>' + msg.replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</p>';
    $('#error-message').html(template);
    $('#error-message').show();
    $('.alert button.close').click(function () { $(this).closest('.alert').hide(); });
    
}



function hide_error() {
    $('#error-message').hide();
}