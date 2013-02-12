define(['config', 'garlic', 'jquery.multi-select', 'jquery.quicksearch'], function (config) {
  var $ = jQuery;

  // フォーム生成
  var FormModule = function(store){
    this.$elm = $('#forms');
    this.store = store;
  };
  FormModule.prototype.insertForm = function(keyword){
    var $form = $("<form>")
      .attr("id", this.store.id)
      .attr("target", this.store.id)
      .attr('action', this.store.searchUrl.replace("%s", keyword))
      .attr("accept-charset", this.store.searchEncode)
      .attr("method", this.store.searchMethod);
    $.each(this.store.params, function(key, value){
      $form.append($("<input>")
        .attr("type", "hidden")
        .attr("name", key)
        .attr("value", value));
    });
    $form.append($("<input>")
      .attr("type", "hidden")
      .attr("name", this.store.searchKey)
      .attr("value", keyword));
    this.$elm.append($form);
    return $form;
  };

  FormModule.prototype.removeForm = function(){
    this.$elm.remove("#"+this.store.id);
  };


  // ストア情報
  $.each(config.sources, function(i, source){
    var $option = $("<option>")
      .val(source.id)
      .text(source.name);
    $("#stores").append($option);
  });


  // ストア取得
  var getSelectedStore = function(){
    var result = [];
    $.each($("#stores").serializeArray(), function(i, store){
      var f = function(s){
        return function(){
          $.each(config.sources, function(i, source){
            if(s.value === source.id) result.push(source);
          });
        }
      };
      f(store)();
    });
    return result;
  };

  // multiselect + quicksearch
  $("#stores").multiSelect({
    selectableHeader:"<input type='text' id='search' autocomplete='off' placeholder=\"絞り込み...\">",
    afterDeselect: function(value){
      $("form#"+value[0]).remove();
    }
  });
  $('#search').quicksearch($('.ms-elem-selectable', '#ms-stores')).on('keydown', function (e) {
    if (e.keyCode == 40) {
      $(this).trigger('focusout');
      $('#stores').focus();
      return false;
    }
  });

  // garlic
  $('#store-form').garlic();

  // 検索実行
  $('#search_button').click(function () {
    var keyword = $("#keyword").val();
    if(keyword.length < 1) return;

    var stores = getSelectedStore();
    $.each(stores, function(i, store){
      var form = new FormModule(store);
      form.insertForm(keyword);
    });
    $.each(document.forms, function(i, form){
      var func = function(localForm){
        return function(){
          window.open("", localForm.target);
          localForm.submit();
        };
      };
      func(form)();
    });
  });
});