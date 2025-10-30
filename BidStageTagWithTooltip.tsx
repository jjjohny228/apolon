import { useMemo, useCallback } from "react";
import theme from "theme";

import type { TreeShape } from "api";
import type { Bid, TinyBid, TBidStage } from "api/Bid";

import { TooltipSingleChild } from "components";
import { slashDateTime, getUserFullName } from "components/utils";
import { StageItem, getColorText } from "./BidStageDropdown";

type Props = {
  bid: Bid | TinyBid;
  defaultValue?: TBidStage | null;
};

export const BidStageTagWithTooltip = ({ bid, defaultValue }: Props) => {
  const { stage_updated_by, stage_updated_at, stage: bidStage } = bid;

  const stage = defaultValue || bidStage;

  const textColor = useCallback((stage: TBidStage | TreeShape | null) => {
    return getColorText(stage);
  }, []);

  const tooltip = useMemo(() => {
    const tooltipText =
      stage_updated_by && stage?.name
        ? `${getUserFullName(stage_updated_by)} marked opportunity as ${
            stage.name
          }`
        : "";

    return tooltipText ? (
      <>
        {tooltipText} <br /> {slashDateTime(stage_updated_at)}{" "}
      </>
    ) : (
      <>Click to select bid stage</>
    );
  }, [stage?.name, stage_updated_at, stage_updated_by]);

  return (
    <TooltipSingleChild tooltip={tooltip} placement="top" expand>
      <StageItem color={stage ? stage.color : ""} textColor={textColor(stage)}>
        {stage ? (
          stage.name
        ) : (
          <span style={{ color: theme.colors.midGrey }}>Select Bid Stage</span>
        )}
      </StageItem>
    </TooltipSingleChild>
  );
};
