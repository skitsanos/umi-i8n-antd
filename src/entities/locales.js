import intl from 'react-intl-universal';

const localesData = localStorage.getItem('locales') !== null
    ? JSON.parse(localStorage.getItem('locales'))
    : {};

const initLocalesData = () =>
{
    intl.init({
        escapeHtml: false,
        currentLocale: 'en-US',
        locales: localesData
    }).then(r =>
    {
    });

    return localesData;
};

export const locales = {
    initialState: {locales: initLocalesData(), currentLocale: 'en-US'},

    changeLocale: s => locale =>
    {
        const {setState} = s;

        intl.init({
            escapeHtml: false,
            currentLocale: locale,
            locales: localesData
        }).then(r =>
        {
            console.log('switched to ', locale);
            const {setState} = s;

            setState({
                locales: localesData,
                currentLocale: locale
            });
        });
    }
};