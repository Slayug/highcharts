/* *
 *
 *  (c) 2010-2021 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */

/* *
 *
 *  Imports
 *
 * */

import type { AlignValue } from './AlignObject';
import type ColorString from '../Color/ColorString';
import ColorType from '../Color/ColorType';

/* *
 *
 *  Declarations
 *
 * */

export type CursorValue = (
    'alias'|'all-scroll'|'auto'|'cell'|'col-resize'|'context-menu'|
    'copy'|'crosshair'|'default'|'e-resize'|'ew-resize'|'grab'|
    'grabbing'|'help'|'move'|'n-resize'|'ne-resize'|'nesw-resize'|
    'no-drop'|'none'|'not-allowed'|'ns-resize'|'nw-resize'|
    'nwse-resize'|'pointer'|'progress'|'row-resize'|'s-resize'|
    'se-resize'|'sw-resize'|'text'|'vertical-text'|'w-resize'|'wait'|
    'zoom-in'|'zoom-out'
);

export interface CSSObject {
    // [key: string]: (boolean|number|string|undefined);
    'align-items'?: string;
    '-ms-touch-action'?: string;
    backgroundColor?: ColorString;
    borderRadius?: number|string;
    border?: string|0;
    'border-radius'?: string;
    bottom?: string;
    boxShadow?: string;
    clip?: string;
    color?: ('contrast'|ColorString);
    cursor?: CursorValue;
    direction?: string;
    display?: string;
    fill?: ColorType;
    filter?: string;
    flip?: string;
    'flex-direction'?: string;
    font?: string;
    fontFamily?: string;
    fontSize?: (number|string);
    fontStyle?: string;
    fontWeight?: string;
    height?: string|0;
    'justify-content'?: AlignValue;
    left?: string|0;
    lineHeight?: string|0;
    lineWidth?: (number|string); // @todo: Check this. It's not CSS...
    listStyle?: string;
    margin?: string|0;
    marginLeft?: string|0;
    marginTop?: string|0;
    'max-height'?: string;
    'max-width'?: string;
    MozBoxShadow?: string;
    opacity?: number;
    overflow?: string;
    overflowX?: string;
    overflowY?: string;
    padding?: number|string;
    pointerEvents?: string;
    'pointer-events'?: string;
    position?: 'absolute'|'fixed'|'relative';
    right?: string;
    rotation?: number;
    stroke?: ColorString;
    strokeWidth?: (number|string);
    'text-align'?: AlignValue;
    textAlign?: AlignValue;
    textDecoration?: string;
    textOverflow?: string;
    textOutline?: string;
    textTransform?: string;
    top?: string|0;
    'touch-action'?: string;
    transform?: string;
    transformOrigin?: string;
    userSelect?: string;
    visibility?: 'hidden'|'inherit'|'visible';
    whiteSpace?: string;
    'white-space'?: string;
    width?: string|0;
    WebkitBoxShadow?: string;
    WebkitOverflowScrolling?: string;
    '-webkit-tap-highlight-color'?: string;
    zIndex?: number;
    'z-index'?: number;
}

/* *
 *
 *  Export
 *
 * */

export default CSSObject;
