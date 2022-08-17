// @flow

import React from 'react';
import type { ComponentType } from 'react';

import { useLocation } from 'react-router';

import { CardsContainer, CardContent } from 'components/Card';
import HeadlineNumbers from "components/HeadlineNumbers";
import type { Props } from './Vaccinations.types';
import { getParams } from "common/utils";
import usePageLayout from "hooks/usePageLayout";
import URLs from "common/urls";
import Loading from "components/Loading";
import { DefaultParams } from "common/utils";


const Vaccinations: ComponentType<Props> = () => {

    const
        { search: query } = useLocation(),
        urlParams = getParams(query),
        layout = usePageLayout(URLs.pageLayouts.vaccinations,  null),
        params = urlParams.length ? urlParams : DefaultParams;

    if ( !layout ) return <Loading large={ true }/>;

    return <>
        <HeadlineNumbers params={ params } { ...layout }/>
        <CardsContainer>{
            layout?.cards.map(( cardProps, index ) =>
                <CardContent key={ `card-${ index }` } params={ params } { ...cardProps }/>
            ) ?? null
        }</CardsContainer>
    </>
};

export default Vaccinations;
