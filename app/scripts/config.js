define(['ebookstore'], function (EbookStore) {
  var config = {};

  config.sources = [
    new EbookStore({
      id: "kindle-store",
      name: "Kindle ストア",
      searchUrl: "http://www.amazon.co.jp/s/",
      searchKey: "field-keywords",
      params: {url: "search-alias=digital-text"}
    }),
    new EbookStore({
      id: "bookweb",
      name: "紀伊國屋書店BookWeb / Kinoppy",
      searchUrl: "http://bookweb.kinokuniya.co.jp/guest/cgi-bin/search.cgi",
      searchKey: "KEYWORD",
      searchMethod: "POST",
      searchEncode: "SHIFT_JIS",
      params: {skey: "8"}
    }),
    new EbookStore({
      id: "google-play",
      name: "Google Play Books",
      searchUrl: "https://play.google.com/store/search",
      searchKey: "q",
      params: {c: "books"}
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
      params: {target: "book"}
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
      searchUrl: "http://honto.jp/netstore/search_022_10%s.html"
    }),
    new EbookStore({
      id: "bookwalker",
      name: "電子書籍-BOOK☆WALKER",
      searchUrl: "http://bookwalker.jp/pc/search/",
      searchKey: "word"
    }),
    new EbookStore({
      id: "ebook-japan",
      name: "eBookJapan",
      searchUrl: "http://www.ebookjapan.jp/ebj/search.asp",
      searchEncode: "SHIFT_JIS",
      searchKey: "q"
    }),
    new EbookStore({
      id: "binb-store",
      name: "BinB store",
      searchUrl: "http://binb-store.com/index.php",
      searchKey: "keyword",
      params: {main_page: "addon", module: "voyager_store_asp/keyword_product_list"}
    }),
    new EbookStore({
      id: "magastore",
      name: "MAGASTORE マガストア",
      searchUrl: "http://www.magastore.jp/search/",
      searchKey: "q"
    }),
    new EbookStore({
      id: "fujisan",
      name: "雑誌のFujisan.co.jp",
      searchUrl: "http://www.fujisan.co.jp/zasshi_search/",
      searchKey: "qk"
    }),
    new EbookStore({
      id: "booklog-it",
      name: "ブクログ IT系技術書",
      searchUrl: "http://booklog.jp/opds",
      searchKey: "keyword"
    }),
    new EbookStore({
      id: "appstore",
      name: "iTunes AppStore",
      searchUrl: "https://search.itunes.apple.com/WebObjects/MZSearch.woa/wa/search",
      searchKey: "term"
    })
  ];

  return config;
});