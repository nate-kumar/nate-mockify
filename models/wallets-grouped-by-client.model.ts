import { WalletModel } from "./wallet.model";

export interface WalletsGroupedByClientModel {
  id: string;
  name: string;
  wallets: WalletModel[];
}
