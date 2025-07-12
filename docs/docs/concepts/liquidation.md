# Liquidation

The health factor is a critical metric within the Const Protocol that measures the safety of a borrow position. It is calculated as:

`Health Factor = (Total Collateral Value × Weighted Average Liquidation Threshold) / Total Borrow Value`

The health factor reflects the stability of a borrow position. A health factor below 1 indicates risk of liquidation. The liquidation threshold, set by the Const Protocol for each asset, determines the maximum percentage of an asset's value that can be borrowed.

A health factor above 1 means the position is above the liquidation threshold. Since the health factor fluctuates with collateral and borrow values, users should monitor it regularly. To improve their health factor, users can either supply more collateral or repay part of their borrow. If collateral value rises, the health factor improves; if it falls, the health factor drops which raises liquidation risk.

There is no universal “safe” health factor. Its reliability depends on the volatility and correlation of assets. Lower health factors may still be acceptable for more stable or correlated assets—such as stablecoins or assets closely tied to ETH.

Liquidation occurs when a borrower’s health factor falls below 1, meaning their collateral is no longer sufficient to cover the borrowed amount. This can result from a decrease in collateral value or an increase in the borrowed amount. When liquidation is triggered, up to 50% of the borrower’s debt may be repaid by a liquidator. A liquidation fee is also applied to the borrower’s collateral.

Liquidations are permissionless, any participant in the network can trigger a liquidation of an eligible position.

Liquidations are highly competitive and require deep knowledge of the protocol and technical skills. Liquidators actively monitor borrow positions on-chain, respond quickly to market changes, and prioritize liquidation transactions to be the first to act.
