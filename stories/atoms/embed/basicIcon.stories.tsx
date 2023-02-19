import React, { useState, useEffect } from 'react';
import { Source } from '@storybook/addon-docs/blocks';

import BasicIcon from '../../../components/atoms/embed/basicIcon';

import './icons_story.scss';

export default {
    title: 'Icons/Icons',
    component: BasicIcon,
    parameters: {
        controls: { hideNoControlsWarning: true },
        previewTabs: {
            'storybook/docs/panel': {
                hidden: true,
            },
        },
        knobs: {
            disabled: true,
        },
    },
    argTypes: {
        name: {
            control: false,
        },
        size: {
            control: false,
        },
        color: {
            control: false,
        },
        boxColor: {
            control: false,
        },
        className: {
            control: false,
        },
    },
};

const icons = [
    'arrow-right',
];

const TemplateAll = () => {
    const [nameIcon, setNameIcon] = useState('ico-archive');

    const onClickIcon = (e: React.MouseEvent<HTMLLIElement>) => {
        setNameIcon((e.target as HTMLLIElement).getAttribute('data-name')!);
    };

    const displayIcon = icons.map((icon) => (
        <li
            key={icon}
            data-name={`ico-${icon}`}
            className="listIcons--elt"
            onClick={onClickIcon}
        >
            <BasicIcon name={`ico-${icon}`} size="large" />
            <p>{icon}</p>
        </li>
    ));

    return (
        <>
            <Source language="jsx" code={`<BasicIcon name="${nameIcon}" />`} />
            <ul className="listIcons">{displayIcon}</ul>
        </>
    );
};

export const All = TemplateAll.bind({});
