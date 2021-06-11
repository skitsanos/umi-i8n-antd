import {useLocales} from '@/entities';
import {Button, Card, Divider, Space} from 'antd';
import React from 'react';
import intl from 'react-intl-universal';

export default ({children}) =>
{
    const [{locales, currentLocale}, {changeLocale}] = useLocales();
    console.log(currentLocale, locales)

    return <>
        <Card>
            {children}
        </Card>

        <Card>
            {intl.getHTML('FOOTER')}

            <Divider dashed={true}/>
            <Space>
                <Button onClick={() =>
                {
                    console.log('Switching to English');
                    changeLocale('en-US');
                }}>English</Button>

                <Button onClick={() =>
                {
                    console.log('Switching to Russian');
                    changeLocale('ru');
                }}>Russian</Button>
            </Space>
        </Card>
    </>;
}