import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { IRequestingPartyGrp } from './set/requesting_party_grp'
import { IPartyEntitlementUpdateGrp } from './set/party_entitlement_update_grp'

/*
*************************************************************
* PartyEntitlementsUpdateReport can be found in Volume 3 of *
* the                                                       *
*                                                           *
* specification                                             *
*************************************************************
*/
export interface IPartyEntitlementsUpdateReport {
  EntitlementReportID: string// 1771
  EntitlementRequestID?: string// 1770
  TotNoParties?: number// 1512
  LastFragment?: boolean// 893
  TransactTime?: Date// 60
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardHeader?: IStandardHeader
  ApplicationSequenceControl?: IApplicationSequenceControl
  RequestingPartyGrp?: IRequestingPartyGrp[]
  PartyEntitlementUpdateGrp?: IPartyEntitlementUpdateGrp[]
}
