interface Step {
  label: string;
  description?: string;
}

interface CheckoutStepperProps {
  steps: Step[];
  currentStep: number;
}

function CheckoutStepper({ steps, currentStep }: CheckoutStepperProps) {
  return (
    <nav aria-label="Checkout progress" className="mb-8">
      <ol className="flex items-center justify-center gap-2 sm:gap-4">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isActive = stepNumber === currentStep;
          const isCompleted = stepNumber < currentStep;
          const isUpcoming = stepNumber > currentStep;

          return (
            <li key={index} className="flex items-center">
              <div className="flex items-center gap-2 sm:gap-3">
                {/* Step Circle */}
                <div
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold transition sm:h-10 sm:w-10 ${
                    isCompleted
                      ? 'bg-[#8b542f] text-white'
                      : isActive
                        ? 'bg-[#8b542f] text-white ring-4 ring-[#f3e4d3]'
                        : 'border-2 border-slate-300 text-slate-400'
                  }`}
                >
                  {isCompleted ? (
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    stepNumber
                  )}
                </div>

                {/* Step Label */}
                <div className="hidden text-left sm:block">
                  <p
                    className={`text-sm font-semibold ${
                      isUpcoming ? 'text-slate-400' : 'text-slate-900'
                    }`}
                  >
                    {step.label}
                  </p>
                  {step.description && (
                    <p className="text-xs text-slate-500">{step.description}</p>
                  )}
                </div>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div
                  className={`mx-2 h-px w-8 transition sm:mx-4 sm:w-12 ${
                    stepNumber < currentStep ? 'bg-[#8b542f]' : 'bg-slate-300'
                  }`}
                  aria-hidden="true"
                />
              )}
            </li>
          );
        })}
      </ol>

      {/* Mobile Step Labels */}
      <div className="mt-4 text-center sm:hidden">
        <p className="text-sm font-semibold text-slate-900">
          {steps[currentStep - 1]?.label}
        </p>
        {steps[currentStep - 1]?.description && (
          <p className="text-xs text-slate-500">
            {steps[currentStep - 1].description}
          </p>
        )}
      </div>
    </nav>
  );
}

export default CheckoutStepper;
