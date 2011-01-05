function saveForm(form_sel) {
  var settings = JSON.stringify($(form_sel).serializeArray());
  localStorage["settings"] = settings;
}

function restoreForm(form_sel) {
  var raw_settings = localStorage["settings"];

  if (raw_settings == undefined) {
    return false;
  }

  var settings = JSON.parse(raw_settings);
  var form = $(form_sel);

  $.each(settings, function(i, setting) {
    form.find("[name='" + setting.name + "']").val(setting.value);
  });
}

function notification(box_sel, message) {
  var box = $(box_sel);
  box.text(message);
  box.fadeIn('slow', function() {
    setTimeout(function() {
      box.fadeOut('slow');
    }, 3000);
  });
}
