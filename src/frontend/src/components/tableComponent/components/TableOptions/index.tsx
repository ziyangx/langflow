import { cn } from "../../../../utils/utils";
import ShadTooltip from "../../../shadTooltipComponent";
import { Button } from "../../../ui/button";
import IconComponent from "../../../genericIconComponent";

export default function TableOptions({
  resetGrid,
  duplicateRow,
  deleteRow,
  hasSelection,
  stateChange,
}: {
  resetGrid: () => void;
  duplicateRow?: () => void;
  deleteRow?: () => void;
  hasSelection: boolean;
  stateChange: boolean;
}): JSX.Element {
  return (
    <div className={cn("absolute bottom-4 left-6")}>
      <div className="flex items-center gap-2">
        <div>
          <ShadTooltip content="Reset Columns">
            <Button
              variant="none"
              size="none"
              onClick={() => {
                resetGrid();
              }}
              disabled={!stateChange}
            >
              <IconComponent
                name="RotateCcw"
                className={cn("h-5 w-5 text-primary transition-all")}
              />
            </Button>
          </ShadTooltip>
        </div>
        {duplicateRow && (
          <div>
            <ShadTooltip
              content={
                !hasSelection ? (
                  <span>Select items to duplicate</span>
                ) : (
                  <span>Duplicate selected items</span>
                )
              }
            >
              <Button
                variant="none"
                size="none"
                onClick={duplicateRow}
                disabled={!hasSelection}
              >
                <IconComponent
                  name="Copy"
                  className={cn("h-5 w-5 text-primary transition-all")}
                />
              </Button>
            </ShadTooltip>
          </div>
        )}
        {deleteRow && (
          <div>
            <ShadTooltip
              content={
                !hasSelection ? (
                  <span>Select items to delete</span>
                ) : (
                  <span>Delete selected items</span>
                )
              }
            >
              <Button
                variant="none"
                size="none"
                onClick={deleteRow}
                disabled={!hasSelection}
              >
                <IconComponent
                  name="Trash2"
                  className={cn(
                    "h-5 w-5 text-primary transition-all",
                    !hasSelection ? "" : "hover:text-destructive",
                  )}
                />
              </Button>
            </ShadTooltip>
          </div>
        )}{" "}
      </div>
    </div>
  );
}
