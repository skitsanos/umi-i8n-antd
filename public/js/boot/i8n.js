console.log('Booting');
(async () =>
{
    const body = await fetch('/api/locales').then(res => res.json());
    localStorage.setItem('locales', JSON.stringify(body));
})();