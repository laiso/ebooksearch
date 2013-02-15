define(['ebookstore'], function (EbookStore) {
  var config = {};

  config.sources = [
    new EbookStore({
      id: "kindle-store",
      name: "Amazon Kindle ストア",
      searchUrl: "http://www.amazon.co.jp/s/",
      searchKey: "field-keywords",
      params: {url: "search-alias=digital-text", tag: "rer-22"}
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
      id: "edokusho",
      name: "e読書.jp",
      searchUrl: "http://edokusho.jp/",
      searchKey: "q",
      params: {e: "on"}
    }),
    new EbookStore({
      id: "densyo-search",
      name: "電子書籍サーチ",
      searchUrl: "http://www.densyo-search.info/result.php",
      searchKey: "key",
      params: {search: "1"}
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
      id: "garapagos-store",
      name: "GALAPAGOS STORE",
      searchUrl: "http://galapagosstore.com/web/book/search/result",
      searchKey: "sw"
    }),
    new EbookStore({
      id: "bookplace",
      name: "BookPlace：ToshibaPlaces",
      searchUrl: "http://toshibabookplace.booklive.jp/search/keyword",
      searchKey: "keyword"
    }),
    new EbookStore({
      id: "bookpass",
      name: "ブックパス～auの電子書籍ストア～",
      searchUrl: "http://www.bookpass.auone.jp/title/",
      searchMethod: "POST",
      searchKey: "kwd",
      params:{android:1, biblio:1}
    }),
    new EbookStore({
      id: "7net",
      name: "セブンネット / セブンイレブン",
      searchUrl: "http://www.7netshopping.jp/dgbooks/search_result/",
      searchKey: "kword_in",
      params:{ctgySelectl: "dgbooks"}
    }),
    new EbookStore({
      id: "ocn",
      name: "OCN コンテンツナビ",
      searchUrl: "http://payon-search.ocn.ne.jp/search.php",
      searchKey: "MT",
      searchEncode: "SHIFT_JIS",
      params:{IE:"Shift-JIS", channel:"05"}
    }),
    new EbookStore({
      id: "honto",
      name: "honto ネットストア",
      searchUrl: "http://honto.jp/netstore/search_022_10%s.html"
    }),
    new EbookStore({
      id: "bookwalker",
      name: "BOOK☆WALKER",
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
      id: "niconico-seiga",
      name: "ニコニコ静画",
      searchUrl: "http://seiga.nicovideo.jp/search/%s",
      params: {target: "book"}
    }),
    new EbookStore({
      id: "tsutaya-ebooks",
      name: "TSUTAYA.com eBOOKs",
      searchUrl: "http://tsutaya.com/ebooks/pc/lists/search",
      searchKey: "keyword"
    }),
    new EbookStore({
      id: "j-comi",
      name: "Jコミ",
      searchUrl: "http://www.j-comi.jp/title",
      searchKey: "query"
    }),
    new EbookStore({
      id: "manga-zenkan",
      name: "漫画全巻ドットコム",
      searchUrl: "http://www.mangazenkan.com/products/list.php",
      searchKey: "name"
    }),
    new EbookStore({
      id: "renta",
      name: "電子貸本Renta!",
      searchUrl: "http://renta.papy.co.jp/renta/sc/frm/list",
      searchEncode: "EUC-JP",
      searchKey: "word"
    }),
    new EbookStore({
      id: "digital-ehon",
      name: "Digital e-hon（デジタルイーホン）",
      searchUrl: "http://www.de-hon.ne.jp/digital/bin/qfind_detail.asp",
      searchEncode: "SHIFT_JIS",
      searchKey: "keyword"
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
      id: "booklog-puboo",
      name: "ブクログのパブー",
      searchUrl: "http://p.booklog.jp/books",
      searchKey: "w"
    }),
    new EbookStore({
      id: "booklog-it",
      name: "ブクログ IT系技術書",
      searchUrl: "http://booklog.jp/opds",
      searchKey: "keyword"
    }),
    new EbookStore({
      id: "gihyo",
      name: "Gihyo Digital Publishing",
      searchUrl: "https://gihyo.jp/dp/ebook",
      searchKey: "query"
    }),
    new EbookStore({
      id: "appstore",
      name: "Apple iTunes AppStore",
      searchUrl: "https://search.itunes.apple.com/WebObjects/MZSearch.woa/wa/search",
      searchKey: "term"
    })
  ];

  return config;
});