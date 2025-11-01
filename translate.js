

function googleTranslateElementInit() {
    console.log("Initializing Google Translate");
  new google.translate.TranslateElement(
    {
      pageLanguage: "it",
      includedLanguages: "en,fr,es,de",
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      multilanguagePage: true,
      gaTrack: true,
    },
    "google_translate_element"
  );
}

function italian() {
  var iframe = document.getElementsByClassName("VIpgJd-ZVi9od-ORHb-OEVmcd")[0];
  if (!iframe) return;

  var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
  var restore_el = innerDoc.getElementsByTagName("button");

  for (var i = 0; i < restore_el.length; i++) {
    if (restore_el[i].id.indexOf("restore") >= 0) {
      restore_el[i].click();
      window.location = window.location.href.split("#")[0];
      document.cookie = "googtrans=";
      return;
    }
  }
}

