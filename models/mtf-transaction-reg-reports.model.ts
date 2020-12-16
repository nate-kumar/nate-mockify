import { MtfMifidModel } from "./mtf-mifid.model";
import { MtfEmirTradeModel } from "./mtf-emir-trade.model";
import { MtfEmirPositionModel } from "./mtf-emir-position.model";
import { MtfEmirCollateralModel } from "./mtf-emir-collateral.model";

export interface MtfTransactionRegReportsModel {
  abideMifid: MtfMifidModel;
  abideEmirTrade: MtfEmirTradeModel;
  abideEmirPosition: MtfEmirPositionModel;
  abideEmirCollateral: MtfEmirCollateralModel;
}
