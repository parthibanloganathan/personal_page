(function(doc){
    var js, id = 'onenamejs', ref = doc.getElementsByTagName('script')[0];
    if (doc.getElementById(id)) {return;}
    js = doc.createElement('script'); js.id = id;
    js.src = 'https://s3.amazonaws.com/onename/onename-cards.js';
    doc.head.appendChild(js);
    var link, cssId = 'onenamecss';
    if (doc.getElementById(cssId)) {return;}
    link = document.createElement('link');
    link.id = cssId; link.rel = 'stylesheet'; link.type = 'text/css';
    link.href = 'https://s3.amazonaws.com/onename/onename-cards.css';
    doc.head.appendChild(link);
}(document));
