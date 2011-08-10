function normalizeSerializedArray(ary) {
  var obj = {};
  $.each(ary, function(i, e) {
    obj[e.name] = e.value;
  });
  return obj;
}

function saveForm(form_sel) {
  var settings = normalizeSerializedArray($(form_sel).serializeArray());
  console.log("saving", settings);
  localStorage["settings"] = JSON.stringify(settings);
}

function restoreForm(form_sel) {
  var raw_settings = localStorage["settings"];

  if (raw_settings == undefined) {
    return false;
  }

  var settings = JSON.parse(raw_settings);
  var form = $(form_sel);

  $.each(settings, function(name, value) {
    form.find("[name='" + name + "']").val(value);
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
