import { ILegFinancingContractualDefinitionsGrp } from './leg_financing_contractual_definitions_grp'
import { ILegFinancingTermSupplementGrp } from './leg_financing_term_supplement_grp'
import { ILegFinancingContractualMatrixGrp } from './leg_financing_contractual_matrix_grp'

export interface ILegFinancingDetails {
  LegAgreementDesc?: string// 2497
  LegAgreementID?: string// 2498
  LegAgreementVersion?: string// 2499
  LegAgreementDate?: Date// 2496
  LegAgreementCurrency?: string// 2495
  LegMasterConfirmationDesc?: string// 2511
  LegMasterConfirmationDate?: Date// 2510
  LegMasterConfirmationAnnexDesc?: string// 2512
  LegMasterConfirmationAnnexDate?: Date// 2509
  LegBrokerConfirmationDesc?: string// 2500
  LegCreditSupportAgreementDesc?: string// 2502
  LegCreditSupportAgreementDate?: Date// 2501
  LegCreditSupportAgreementID?: string// 2503
  LegGoverningLaw?: string// 2507
  LegDocumentationText?: string// 2505
  EncodedLegDocumentationTextLen?: number// 2494
  EncodedLegDocumentationText?: Buffer// 2493
  LegTerminationType?: number// 2514
  LegStartDate?: Date// 2513
  LegEndDate?: Date// 2506
  LegDeliveryType?: number// 2504
  LegMarginRatio?: number// 2508
  LegFinancingContractualDefinitionsGrp?: ILegFinancingContractualDefinitionsGrp[]
  LegFinancingTermSupplementGrp?: ILegFinancingTermSupplementGrp[]
  LegFinancingContractualMatrixGrp?: ILegFinancingContractualMatrixGrp[]
}
