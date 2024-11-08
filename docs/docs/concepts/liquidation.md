# Liquidation

The health factor is a critical metric within the Aave Protocol that measures the safety of a borrow position. It is calculated as:

`Health Factor = (Total Collateral Value * Weighted Average Liquidation Threshold) / Total Borrow Value`

The health factor measures a borrow position’s stability. A health factor below 1 risks liquidation. The liquidation threshold, set by Const Protocol for each asset, determines the maximum percentage of value that can be borrowed against the asset.

A health factor above 1 represents a position that is above the liquidation threshold. Regular monitoring is essential, as the health factor fluctuates based on both the value of collateral and borrowed assets. To improve the health factor, users can either supply more collateral or repay part of the borrowing. The health factor is directly tied to collateral value. If the value rises, the health factor improves; if it falls, the health factor declines, increasing the risk of liquidation.

However, there is no universally "safe" health factor. The health factor depends on the volatility and correlation of the assets. Lower health factors may be acceptable, for example, with correlated assets, such as stablecoins or assets closely tied to ETH.

Liquidation happens when a borrower's health factor drops below 1, meaning their collateral is insufficient to cover the borrowed amount. This can occur when the value of collateral decreases or the borrowing amount is increased. When a liquidation occurs, up to 50% of the borrower's debt is repaid by a liquidator. A liquidation fee is also levied against the borrower's collateral. Liquidations are permissionless, meaning any participant within the network can initiate the liquidation of an eligible borrowing.

Liquidations are highly competitive, requiring a deep understanding of the protocol and technical proficiency. Liquidators closely monitor borrowing on chain, react swiftly to market changes, and prioritise liquidation transactions to be the first to execute the liquidation.
