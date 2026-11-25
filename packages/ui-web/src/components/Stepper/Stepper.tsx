import type { HTMLAttributes, ReactNode } from "react";
import { Step, type StepState } from "../Step/Step";
import {
  StepperConnector,
  type StepperConnectorState,
} from "../StepperConnector/StepperConnector";

export interface StepperItem {
  disabled?: boolean;
  id: string;
  title: ReactNode;
}

export interface StepperProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  currentStep?: number;
  showTitles?: boolean;
  steps?: readonly StepperItem[];
}

const defaultSteps: readonly StepperItem[] = [
  { id: "step-1", title: "Lorem Ipsum" },
  { id: "step-2", title: "Lorem Ipsum" },
  { id: "step-3", title: "Lorem Ipsum" },
  { id: "step-4", title: "Lorem Ipsum" },
];

function resolveStepState(index: number, currentStep: number, disabled: boolean): StepState {
  if (disabled) return "disabled";
  if (index < currentStep) return "completed";
  if (index === currentStep) return "active";
  return "default";
}

function resolveConnectorState(stepState: StepState): StepperConnectorState {
  if (stepState === "completed" || stepState === "completed-active") return "completed";
  if (stepState === "disabled") return "disabled";
  return "default";
}

export function Stepper({
  className,
  currentStep = 1,
  showTitles = true,
  steps = defaultSteps,
  ...props
}: StepperProps) {
  const classes = ["ads-stepper", className].filter(Boolean).join(" ");
  const resolvedCurrentStep = Math.min(Math.max(currentStep, 0), Math.max(steps.length - 1, 0));

  return (
    <div {...props} className={classes} role="list">
      {steps.map((step, index) => {
        const state = resolveStepState(index, resolvedCurrentStep, step.disabled ?? false);
        return (
          <span className="ads-stepper-segment" key={step.id}>
            <Step
              device="desktop"
              number={index + 1}
              showTitle={showTitles}
              state={state}
              title={step.title}
            />
            {index < steps.length - 1 ? (
              <span className="ads-stepper-connector-wrap">
                <StepperConnector state={resolveConnectorState(state)} />
              </span>
            ) : null}
          </span>
        );
      })}
    </div>
  );
}
