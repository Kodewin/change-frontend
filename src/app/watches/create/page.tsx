'use client';
import Wrapper from '@/app/Wrapper';
import Step1 from '@/components/watch_creation/step1';
import Step2 from '@/components/watch_creation/step2';
import Step3 from '@/components/watch_creation/step3';
import Step4 from '@/components/watch_creation/step4';
import Step5 from '@/components/watch_creation/step5';
import { WatchProvider } from '@/contexts/WatchCreationContext';
import React, { useState } from 'react';

const CreateWatch: React.FC = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep((prev) => Math.min(prev + 1, 5));
  };

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  return (
    <WatchProvider>
      <Wrapper>
        <div className='flex items-center justify-center'>
          <div className='w-full p-8'>
            {step === 1 && <Step1 onNext={nextStep} />}
            {step === 2 && <Step2 onNext={nextStep} onPrev={prevStep} />}
            {step === 3 && <Step3 onNext={nextStep} onPrev={prevStep} />}
            {step === 4 && <Step4 onNext={nextStep} onPrev={prevStep} />}
            {step === 5 && <Step5 onNext={nextStep} onPrev={prevStep} />}
          </div>
        </div>
      </Wrapper>
    </WatchProvider>
  );
};

export default CreateWatch;
