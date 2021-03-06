/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';

export interface ClusterInfo {
	name: string;
	displayName: string;
	user: string;
}

export enum TargetClusterType {
	ExistingKubernetesCluster,
	NewLocalCluster,
	NewAksCluster
}
