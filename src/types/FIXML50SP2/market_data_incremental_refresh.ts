import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { IMDIncGrp } from './set/md_inc_grp'
import { IRoutingGrp } from './set/routing_grp'

/*
****************************************************************
* MarketDataIncrementalRefresh can be found in Volume 3 of the *
*                                                              *
* specification                                                *
****************************************************************
*/
export interface IMarketDataIncrementalRefresh {
  MDBookType?: number// 1021
  MDFeedType?: string// 1022
  MDSubFeedType?: string// 1683
  TradeDate?: Date// 75
  MDReqID?: string// 262
  MarketID?: string// 1301
  MarketSegmentID?: string// 1300
  ApplQueueDepth?: number// 813
  ApplQueueResolution?: number// 814
  StandardHeader?: IStandardHeader
  ApplicationSequenceControl?: IApplicationSequenceControl
  MDIncGrp?: IMDIncGrp[]
  RoutingGrp?: IRoutingGrp[]
}
