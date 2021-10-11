/* *
 *
 *  Data Layer
 *
 *  (c) 2012-2021 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */

import type HighchartsComponent from '../../Extensions/DashboardPlugin/HighchartsComponent';
import type HTMLComponent from './HTMLComponent';

/* *
 *
 *  Declarations
 *
 * */

/**
 * Contains all possible types of the class registry.
 */
// export type ComponentType =
// ComponentTypeRegistry[keyof ComponentTypeRegistry];

export type ComponentTypes =
    HighchartsComponent.ComponentType |
    HTMLComponent.ComponentType;

/**
 * Describes the class registry as a record object with class name and their
 * class types (aka class constructor).
 */
export interface ComponentTypeRegistry {
    // nothing here yet
}

/* *
 *
 *  Export
 *
 * */

export default ComponentTypes;
