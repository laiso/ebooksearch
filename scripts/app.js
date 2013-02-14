define(['store', 'config', 'jquery.multi-select', 'jquery.quicksearch'], function (storejs, config) {
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
      .attr('action', this.store.searchUrl.replace("%s", encodeURIComponent(keyword)))
      .attr("accept-charset", this.store.searchEncode)
      .attr("method", this.store.searchMethod)
      .css("display", "none");
    $.each(this.store.params, function(key, value){
      $form.append($("<input>")
        .attr("type", "hidden")
        .attr("name", key)
        .attr("value", value));
    });
    if(this.store.searchKey){
      $form.append($("<input>")
        .attr("type", "hidden")
        .attr("name", this.store.searchKey)
        .attr("value", keyword));
    }
    this.$elm.append($form);
    return $form;
  };

  FormModule.prototype.removeForm = function(){
    this.$elm.remove("#"+this.store.id);
  };

  // フォーム初期化
  var cleanup = function(){
    $.each(document.forms, function(i, form){
      $(form).remove();
    });
  };

  // ストア取得
  var getSelectedStore = function(){
    var result = [];
    var saveItems = [];
    $.each($("#stores").serializeArray(), function(i, store){
      var f = function(s){
        return function(){
          $.each(config.sources, function(i, source){
            if(s.value === source.id){
              result.push(source);
              saveItems.push(s.value);
            }
          });
        }
      };
      f(store)();
    });

    storejs.set('selectedStore', saveItems);

    cleanup();

    return result;
  };


  // ストア情報
  var storeString = storejs.get('selectedStore') || [];
  var recentSelected = (storeString.indexOf(",") > -1)? storeString.split(","): storeString;
  $.each(config.sources, function(i, source){
    var $option = $("<option>")
      .val(source.id)
      .text(source.name);
    if($.inArray(source.id, recentSelected) > -1) $option.attr("selected", true);

    $("#stores").append($option);
  });

  // multiselect + quicksearch
  $("#stores").multiSelect({
    selectableHeader:"<input type='text' id='search' autocomplete='off' placeholder=\"絞り込み...\">",
    selectionHeader: "<label class=\"selectionLabel\">選択中(再度クリックして解除)</label>",
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