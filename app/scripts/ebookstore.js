define([], function(){
  var EbookStore = function(opts){
    this.id = opts.id;
    this.name = opts.name;
    this.searchUrl = opts.searchUrl;
    this.searchKey = opts.searchKey;
    this.searchMethod = opts.searchMethod || "GET";
    this.searchEncode = opts.searchEncode || "UTF-8";
    this.params = opts.params;
  };
  return EbookStore;
});