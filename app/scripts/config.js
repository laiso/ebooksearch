define(['ebookstore'], function (EbookStore) {
  var config = {};

  config.sources = [
    new EbookStore({
      id: "kindle-store",
      name: "Kindle ストア",
      searchUrl: "http://www.amazon.co.jp/s/",
      searchKey: "field-keywords",
      params: [{name: "url", value: "search-alias=digital-text"}]
    }),
    new EbookStore({
      id: "bookweb",
      name: "紀伊國屋書店BookWeb / Kinoppy",
      searchUrl: "http://bookweb.kinokuniya.co.jp/guest/cgi-bin/search.cgi",
      searchKey: "KEYWORD",
      searchMethod: "POST",
      searchEncode: "SHIFT_JIS",
      params: [{name: "skey", value: "8"}]
    }),
    new EbookStore({
      id: "google-play",
      name: "Google Play Books",
      searchUrl: "https://play.google.com/store/search",
      searchKey: "q",
      params: [{name: "c", value: "books"}]
    }),
    new EbookStore({
      id: "honjp",
      name: "hon.jp",
      searchUrl: "http://hon.jp/search/3.0/%s/null/"
    }),
    new EbookStore({
      id: "reader-store",
      name: "Sony Reader Store",
      searchUrl: "http://search.ebookstore.sony.jp/ja_all/search.x",
      searchKey: "q"
    }),
    new EbookStore({
      id: "kobo-store",
      name: "koboイーブックストア",
      searchUrl: "http://rakuten.kobobooks.com/search/search.html",
      searchKey: "q"
    }),
    new EbookStore({
      id: "niconico-seiga",
      name: "ニコニコ静画",
      searchUrl: "http://seiga.nicovideo.jp/search/%s",
      params: [{name: "target", value: "book"}]
    }),
    new EbookStore({
      id: "garapagos-store",
      name: "GALAPAGOS STORE",
      searchUrl: "http://galapagosstore.com/web/book/search/result",
      searchKey: "sw"
    }),
    new EbookStore({
      id: "manga-zenkan",
      name: "漫画全巻ドットコム",
      searchUrl: "http://www.mangazenkan.com/products/list.php",
      searchKey: "name"
    }),
    new EbookStore({
      id: "honto",
      name: "honto ネットストア",
      searchUrl: "http://honto.jp/netstore/search_022_10%s.html",
    }),
    new EbookStore({
      id: "booklog-it",
      name: "ブクログ IT系技術書",
      searchUrl: "http://booklog.jp/opds",
      searchKey: "keyword"
    })
  ];

  return config;
});